# DXF viewer with Hatch Support and Block Detection [![npm](https://img.shields.io/npm/v/dxf-viewer-hatch)](https://www.npmjs.com/package/dxf-viewer-hatch)

This package is a fork of the original [dxf-viewer](https://www.npmjs.com/package/dxf-viewer) with added support for hatches and a block detection system.

_If you just need to view your DXF, [click here](https://vagran.github.io/dxf-viewer-example/)._

This package provides an enhanced DXF 2D viewer component written in JavaScript. It renders drawings using WebGL (via [three.js](https://threejs.org) library). It was carefully crafted with performance in mind, intended for drawing huge real-world files without performance problems.

## New Features

- **Hatch Support**: This fork adds support for rendering hatch patterns in DXF files.
- **Block Detection System**: Users can now click on elements in the drawing to get information about the associated block.

## Install

```bash
npm install dxf-viewer-hatch
```

## Features

- File fetching, parsing and preparation for rendering is separated in such a way that it can be easily off-loaded to web-worker using provided helpers. So the most heavy-weight processing part does not affect UI responsiveness.
- Geometry batching - minimal number of rendering batches is created during file processing, thus minimizing total required number of draw calls.
- Instanced rendering - features which are rendered multiple times with different transforms (e.g. DXF block instances) are rendered by a single draw call using instanced rendering WebGL feature.
- Multiple fonts support. List of fonts can be specified for text rendering. Raw TTF files are supported. Fonts are lazy-loaded, once a character encountered which glyph is not yet available through already loaded fonts, next font is fetched and checked for the necessary glyph.
- Layers - layers are taken into account when creating rendering batches so that they can be easily hidden/shown.
- Hatch support - rendering of hatch patterns in DXF files.
- Block detection - ability to click on elements and get information about associated blocks.

## Usage

```bash
import DxfViewer from 'dxf-viewer-hatch';

// Initialize viewer
const options = {
    autoResize: true,
    colorCorrection: true,
    sceneOptions: {
      wireframeMesh: true,
    },
  };
 dxfViewerRef.current = new DxfViewer(
      canvasContainerRef.current,
      options,
    );

// Load and render DXF file
 await dxfViewerRef.current.Load({
        url: fileUrl,
        fonts,
        progressCbk: handleProgress,
        workerFactory: createWorker,
      });
```

## Contributing

Contributions to this fork are welcome. Please refer to the contribution guidelines for details on how to make pull requests (PRs). The project also requires various example files for testing purposes. If you encounter any issues with DXF rendering, it would be greatly appreciated if you could provide an example file that demonstrates the problem by attaching it to a created issue.
License
This project is licensed under the terms of the Mozilla Public License 2.0.
Acknowledgements
This package is a fork of the original dxf-viewer by Artyom Lebedev. We are grateful for their work which made this enhanced version possible.
