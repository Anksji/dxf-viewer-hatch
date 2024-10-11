import { Matrix3, Vector2 } from "three";

/** Flatten a block if its total vertices count in all instances is less than this value. */
const BLOCK_FLATTENING_VERTICES_THRESHOLD = 1024;

export class Block {
  /** @param data {{}} Raw DXF entity. */
  constructor(data) {
    this.data = data;
    /* Number of times referenced from top-level entities (INSERT). */
    this.useCount = 0;
    /* Number of times referenced by other block. */
    this.nestedUseCount = 0;
    /* Total number of vertices in this block. Used for flattening decision. */
    this.verticesCount = 0;
    /* Offset {x, y} to apply for all vertices. Used to move origin near vertices location to
     * minimize precision loss.
     */
    this.offset = null;
    /* Definition batches. Used for root blocks flattening. */
    this.batches = [];
    this.flatten = false;
    /** Bounds in block coordinates (with offset applied). */
    this.bounds = null;
  }

  /** @param batch {Batch} */
  PushBatch(batch) {
    this.batches.push(batch);
  }
  /** Set block flattening flag based on usage statistics.
   * @return {Boolean} New flatten flag state.
   */
  SetFlatten() {
    if (!this.HasGeometry()) {
      return false;
    }
    /* Flatten if a block is used once (pure optimization if shares its layer with other
     * geometry) or if total instanced vertices number is less than a threshold (trade some
     * space for draw calls number).
     */
    this.flatten =
      this.useCount === 1 ||
      this.useCount * this.verticesCount <= BLOCK_FLATTENING_VERTICES_THRESHOLD;
    return this.flatten;
  }

  /** @return {Boolean} True if has something to draw. */
  HasGeometry() {
    /* Offset is set on first geometry vertex encountered. */
    return this.offset !== null;
  }

  /** @param {{}} entity May be either INSERT or DIMENSION. */
  RegisterInsert(entity) {
    this.useCount++;
  }

  RegisterNestedUse(usedByBlock) {
    this.nestedUseCount++;
  }

  /** @return {BlockContext} Context for block definition. */
  DefinitionContext() {
    return new BlockContext(this, BlockContext.Type.DEFINITION);
  }

  InstantiationContext() {
    return new BlockContext(this, BlockContext.Type.INSTANTIATION);
  }

  UpdateBounds(v) {
    if (this.bounds === null) {
      this.bounds = { minX: v.x, maxX: v.x, minY: v.y, maxY: v.y };
    } else {
      if (v.x < this.bounds.minX) {
        this.bounds.minX = v.x;
      } else if (v.x > this.bounds.maxX) {
        this.bounds.maxX = v.x;
      }
      if (v.y < this.bounds.minY) {
        this.bounds.minY = v.y;
      } else if (v.y > this.bounds.maxY) {
        this.bounds.maxY = v.y;
      }
    }
  }
}

export class BlockContext {
  constructor(block, type) {
    this.block = block;
    this.type = type;
    this.origin = this.block.data.position;
    /* Transform to apply for block definition entities not including block offset. */
    this.transform = new Matrix3();
  }

  /** @return {string} Block name */
  get name() {
    return this.block.data.name;
  }

  /**
   * @param v {{x,y}}
   * @return {{x,y}}
   */
  TransformVertex(v) {
    const result = new Vector2(v.x, v.y).applyMatrix3(this.transform);
    if (
      this.type !== BlockContext.Type.DEFINITION &&
      this.type !== BlockContext.Type.NESTED_DEFINITION
    ) {
      throw new Error("Unexpected transform type");
    }
    this.block.verticesCount++;
    if (this.block.offset === null) {
      /* This is the first vertex. Take it as a block origin. So the result is always zero
       * vector for the first vertex.
       */
      this.block.offset = result;
      const v = new Vector2();
      this.block.UpdateBounds(v);
      return v;
    }
    result.sub(this.block.offset);
    this.block.UpdateBounds(result);
    return result;
  }

  /**
   * Get transform for block instance.
   * @param entity Raw DXF INSERT entity.
   * @return {Matrix3} Transform matrix for block instance to apply to the block definition.
   */
  GetInsertionTransform(entity) {
    const mInsert = new Matrix3().translate(-this.origin.x, -this.origin.y);
    const yScale = entity.yScale || 1;
    const xScale = entity.xScale || 1;
    const rotation = (-(entity.rotation || 0) * Math.PI) / 180;
    let x = entity.position.x;
    const y = entity.position.y;
    mInsert.scale(xScale, yScale);
    mInsert.rotate(rotation);
    mInsert.translate(x, y);
    if (entity.extrusionDirection && entity.extrusionDirection.z < 0) {
      mInsert.scale(-1, 1);
    }
    if (this.type !== BlockContext.Type.INSTANTIATION) {
      return mInsert;
    }
    const mOffset = new Matrix3().translate(
      this.block.offset.x,
      this.block.offset.y,
    );
    return mInsert.multiply(mOffset);
  }

  /**
   * Create context for nested block.
   * @param block {Block} Nested block.
   * @param entity Raw DXF INSERT entity.
   * @return {BlockContext} Context to use for nested block entities.
   */
  NestedBlockContext(block, entity) {
    block.RegisterNestedUse(this.block);
    const nestedCtx = new BlockContext(
      block,
      BlockContext.Type.NESTED_DEFINITION,
    );
    const nestedTransform = nestedCtx.GetInsertionTransform(entity);
    const ctx = new BlockContext(
      this.block,
      BlockContext.Type.NESTED_DEFINITION,
    );
    ctx.transform = new Matrix3().multiplyMatrices(
      this.transform,
      nestedTransform,
    );
    return ctx;
  }
}
