import { Pattern, RegisterPattern } from "../../Pattern";

RegisterPattern(
  Pattern.ParsePatFile(`
*AR-CONC-01,AR-CONC-01
;Optimize to replace existing AR-CONC Pattern
;By John Hyslop,    Using AutoCAD Lisp Tool
;Developed in inch as imperial QCAD3 pattern
243.434949,0.3,0.8,8.9442719,4.472136,0.2236068,-22.137073
90,0.3,0.6,0,10,0.2,-9.8
0,0.2,0.6,0,10,0.1,-9.9
315,0.1,0.1,7.0710678,7.0710678,0.1414214,-14.0007143
206.565051,0.3,0.2,13.4164079,4.472136,0.2236068,-22.137073
63.434949,0.2,0,8.9442719,4.472136,0.2236068,-22.137073
45,2,0.4,7.0710678,7.0710678,0.2828427,-13.8592929
161.565051,2.3,0.3,9.486833,3.1622777,0.3162278,-31.3065488
288.434949,2.2,0.6,22.1359436,3.1622777,0.3162278,-31.3065488
315,2.3,0.9,7.0710678,7.0710678,0.1414214,-14.0007143
206.565051,2.5,1,13.4164079,4.472136,0.2236068,-22.137073
63.434949,2.4,0.8,8.9442719,4.472136,0.2236068,-22.137073
270,4.1,0.6,0,10,0.2,-9.8
45,3.9,0.4,7.0710678,7.0710678,0.2828427,-13.8592929
180,4.1,0.4,0,10,0.2,-9.8
333.434949,3.9,0.2,8.9442719,4.472136,0.2236068,-22.137073
225,4,0.3,7.0710678,7.0710678,0.1414214,-14.0007143
116.565051,4.1,0.1,13.4164079,4.472136,0.2236068,-22.137073
198.434949,6.3,0.8,22.1359436,3.1622777,0.3162278,-31.3065488
63.434949,6.2,0.6,8.9442719,4.472136,0.2236068,-22.137073
333.434949,6,0.7,8.9442719,4.472136,0.2236068,-22.137073
26.565051,5.7,0,13.4164079,4.472136,0.2236068,-22.137073
251.565051,5.8,0.3,9.486833,3.1622777,0.3162278,-31.3065488
116.565051,5.9,0.1,13.4164079,4.472136,0.2236068,-22.137073
45,6.7,0.1,7.0710678,7.0710678,0.2828427,-13.8592929
161.565051,7,0,9.486833,3.1622777,0.3162278,-31.3065488
288.434949,6.9,0.3,22.1359436,3.1622777,0.3162278,-31.3065488
315,3,2.8,7.0710678,7.0710678,0.1414214,-14.0007143
206.565051,3.2,2.9,13.4164079,4.472136,0.2236068,-22.137073
63.434949,3.1,2.7,8.9442719,4.472136,0.2236068,-22.137073
45,1.1,0.8,7.0710678,7.0710678,0.2828427,-13.8592929
180,1.3,0.8,0,10,0.2,-9.8
270,1.3,1,0,10,0.2,-9.8
225,1.8,2.4,7.0710678,7.0710678,0.1414214,-14.0007143
270,1.8,2.6,0,10,0.2,-9.8
71.565051,1.7,2.3,9.486833,3.1622777,0.3162278,-31.3065488
198.434949,1,2.1,22.1359436,3.1622777,0.3162278,-31.3065488
63.434949,0.9,1.9,8.9442719,4.472136,0.2236068,-22.137073
333.434949,0.7,2,8.9442719,4.472136,0.2236068,-22.137073
0,3.5,2.2,0,10,0.2,-9.8
225,3.7,2.4,7.0710678,7.0710678,0.2828427,-13.8592929
90,3.7,2.2,0,10,0.2,-9.8
315,4.5,1.7,7.0710678,7.0710678,0.1414214,-14.0007143
206.565051,4.7,1.8,13.4164079,4.472136,0.2236068,-22.137073
63.434949,4.6,1.6,8.9442719,4.472136,0.2236068,-22.137073
315,5.5,2.1,7.0710678,7.0710678,0.1414214,-14.0007143
270,5.5,2.3,0,10,0.2,-9.8
108.434949,5.6,2,22.1359436,3.1622777,0.3162278,-31.3065488
206.565051,6.9,2.7,13.4164079,4.472136,0.2236068,-22.137073
63.434949,6.8,2.5,8.9442719,4.472136,0.2236068,-22.137073
315,6.7,2.6,7.0710678,7.0710678,0.1414214,-14.0007143
333.434949,7.3,1.9,8.9442719,4.472136,0.2236068,-22.137073
225,7.4,2,7.0710678,7.0710678,0.1414214,-14.0007143
116.565051,7.5,1.8,13.4164079,4.472136,0.2236068,-22.137073
26.565051,8.2,1.5,13.4164079,4.472136,0.2236068,-22.137073
153.434949,8.4,1.4,8.9442719,4.472136,0.2236068,-22.137073
270,8.4,1.6,0,10,0.2,-9.8
180,9.3,1.7,0,10,0.1,-9.9
270,9.3,1.8,0,10,0.1,-9.9
45,9.2,1.7,7.0710678,7.0710678,0.1414214,-14.0007143
153.434949,9.3,2.4,8.9442719,4.472136,0.2236068,-22.137073
270,9.3,2.7,0,10,0.3,-9.7
45,9.1,2.5,7.0710678,7.0710678,0.2828427,-13.8592929
206.565051,9.1,3.5,13.4164079,4.472136,0.2236068,-22.137073
63.434949,9,3.3,8.9442719,4.472136,0.2236068,-22.137073
315,8.9,3.4,7.0710678,7.0710678,0.1414214,-14.0007143
180,6.5,2.9,0,10,0.2,-9.8
270,6.5,3.2,0,10,0.3,-9.7
56.309932,6.3,2.9,22.1880078,2.773501,0.3605551,-35.6949576
198.434949,5.4,3.8,22.1359436,3.1622777,0.3162278,-31.3065488
71.565051,5.3,3.5,9.486833,3.1622777,0.3162278,-31.3065488
315,5.1,3.7,7.0710678,7.0710678,0.2828427,-13.8592929
180,3.8,3.3,0,10,0.3,-9.7
270,3.8,3.6,0,10,0.3,-9.7
45,3.5,3.3,7.0710678,7.0710678,0.4242641,-13.7178716
225,3.3,4.3,7.0710678,7.0710678,0.2828427,-13.8592929
90,3.3,4.1,0,10,0.2,-9.8
0,3.1,4.1,0,10,0.2,-9.8
206.565051,1.6,3.9,13.4164079,4.472136,0.2236068,-22.137073
63.434949,1.5,3.7,8.9442719,4.472136,0.2236068,-22.137073
315,1.4,3.8,7.0710678,7.0710678,0.1414214,-14.0007143
108.434949,1,3.7,22.1359436,3.1622777,0.3162278,-31.3065488
341.565051,0.7,3.8,9.486833,3.1622777,0.3162278,-31.3065488
225,0.9,4,7.0710678,7.0710678,0.2828427,-13.8592929
270,1.5,4.5,0,10,0.2,-9.8
45,1.3,4.3,7.0710678,7.0710678,0.2828427,-13.8592929
180,1.5,4.3,0,10,0.2,-9.8
315,3.6,4.7,7.0710678,7.0710678,0.1414214,-14.0007143
206.565051,3.8,4.8,13.4164079,4.472136,0.2236068,-22.137073
63.434949,3.7,4.6,8.9442719,4.472136,0.2236068,-22.137073
0,5.1,4,0,10,0.1,-9.9
225,5.2,4.1,7.0710678,7.0710678,0.1414214,-14.0007143
90,5.2,4,0,10,0.1,-9.9
0,6.9,3.8,0,10,0.2,-9.8
243.434949,7,4,8.9442719,4.472136,0.2236068,-22.137073
116.565051,7.1,3.8,13.4164079,4.472136,0.2236068,-22.137073
26.565051,7.3,4.5,13.4164079,4.472136,0.2236068,-22.137073
116.565051,7.4,4.3,13.4164079,4.472136,0.2236068,-22.137073
251.565051,7.5,4.6,9.486833,3.1622777,0.3162278,-31.3065488
63.434949,8.8,3.6,8.9442719,4.472136,0.2236068,-22.137073
180,9,3.6,0,10,0.2,-9.8
296.565051,8.9,3.8,13.4164079,4.472136,0.2236068,-22.137073
180,9,5.4,0,10,0.3,-9.7
270,9,5.7,0,10,0.3,-9.7
45,8.7,5.4,7.0710678,7.0710678,0.4242641,-13.7178716
180,8.6,5.6,0,10,0.2,-9.8
270,8.6,5.8,0,10,0.2,-9.8
45,8.4,5.6,7.0710678,7.0710678,0.2828427,-13.8592929
243.434949,8.2,6.5,8.9442719,4.472136,0.2236068,-22.137073
26.565051,8,6.4,13.4164079,4.472136,0.2236068,-22.137073
135,8.1,6.3,7.0710678,7.0710678,0.1414214,-14.0007143
243.434949,6.7,6,8.9442719,4.472136,0.2236068,-22.137073
116.565051,6.8,5.8,13.4164079,4.472136,0.2236068,-22.137073
0,6.6,5.8,0,10,0.2,-9.8
225,6.2,6.1,7.0710678,7.0710678,0.2828427,-13.8592929
108.434949,6.3,5.8,22.1359436,3.1622777,0.3162278,-31.3065488
341.565051,6,5.9,9.486833,3.1622777,0.3162278,-31.3065488
135,5.9,5.4,7.0710678,7.0710678,0.1414214,-14.0007143
243.434949,6,5.6,8.9442719,4.472136,0.2236068,-22.137073
26.565051,5.8,5.5,13.4164079,4.472136,0.2236068,-22.137073
180,4.8,6,0,10,0.1,-9.9
270,4.8,6.1,0,10,0.1,-9.9
45,4.7,6,7.0710678,7.0710678,0.1414214,-14.0007143
206.565051,4.4,6.7,13.4164079,4.472136,0.2236068,-22.137073
63.434949,4.3,6.5,8.9442719,4.472136,0.2236068,-22.137073
315,4.2,6.6,7.0710678,7.0710678,0.1414214,-14.0007143
225,3.4,6.5,7.0710678,7.0710678,0.2828427,-13.8592929
90,3.4,6.2,0,10,0.3,-9.7
333.434949,3.2,6.3,8.9442719,4.472136,0.2236068,-22.137073
180,3,6.1,0,10,0.2,-9.8
270,3,6.3,0,10,0.2,-9.8
45,2.8,6.1,7.0710678,7.0710678,0.2828427,-13.8592929
135,2.1,5.6,7.0710678,7.0710678,0.1414214,-14.0007143
243.434949,2.2,5.8,8.9442719,4.472136,0.2236068,-22.137073
26.565051,2,5.7,13.4164079,4.472136,0.2236068,-22.137073
180,1.1,6.3,0,10,0.2,-9.8
270,1.1,6.5,0,10,0.2,-9.8
45,0.9,6.3,7.0710678,7.0710678,0.2828427,-13.8592929
270,0.6,7,0,10,0.3,-9.7
45,0.4,6.8,7.0710678,7.0710678,0.2828427,-13.8592929
153.434949,0.6,6.7,8.9442719,4.472136,0.2236068,-22.137073
243.434949,8.2,7.8,8.9442719,4.472136,0.2236068,-22.137073
90,8.2,7.6,0,10,0.2,-9.8
0,8.1,7.6,0,10,0.1,-9.9
135,8.7,8.2,7.0710678,7.0710678,0.1414214,-14.0007143
243.434949,8.8,8.4,8.9442719,4.472136,0.2236068,-22.137073
26.565051,8.6,8.3,13.4164079,4.472136,0.2236068,-22.137073
180,8.6,8.4,0,10,0.2,-9.8
251.565051,8.7,8.7,9.486833,3.1622777,0.3162278,-31.3065488
45,8.4,8.4,7.0710678,7.0710678,0.4242641,-13.7178716
153.434949,7.2,9.2,8.9442719,4.472136,0.2236068,-22.137073
135,6.5,7.3,7.0710678,7.0710678,0.1414214,-14.0007143
243.434949,6.6,7.5,8.9442719,4.472136,0.2236068,-22.137073
26.565051,6.4,7.4,13.4164079,4.472136,0.2236068,-22.137073
135,6.3,7.7,7.0710678,7.0710678,0.1414214,-14.0007143
251.565051,6.4,8,9.486833,3.1622777,0.3162278,-31.3065488
45,6.2,7.8,7.0710678,7.0710678,0.2828427,-13.8592929
26.565051,2.6,7.6,13.4164079,4.472136,0.2236068,-22.137073
153.434949,2.8,7.5,8.9442719,4.472136,0.2236068,-22.137073
270,2.8,7.7,0,10,0.2,-9.8
90,4.5,7.9,0,10,0.2,-9.8
0,4.3,7.9,0,10,0.2,-9.8
225,4.5,8.1,7.0710678,7.0710678,0.2828427,-13.8592929
63.434949,4.9,8.3,8.9442719,4.472136,0.2236068,-22.137073
315,4.8,8.4,7.0710678,7.0710678,0.1414214,-14.0007143
206.565051,5,8.5,13.4164079,4.472136,0.2236068,-22.137073
153.434949,5.8,8.8,8.9442719,4.472136,0.2236068,-22.137073
270,5.8,9.1,0,10,0.3,-9.7
45,5.6,8.9,7.0710678,7.0710678,0.2828427,-13.8592929
0,2.8,9.3,0,10,0.3,-9.7
135,2.6,8,7.0710678,7.0710678,0.1414214,-14.0007143
270,2.6,8.2,0,10,0.2,-9.8
45,2.5,8.1,7.0710678,7.0710678,0.1414214,-14.0007143
116.565051,0.8,8.2,13.4164079,4.472136,0.2236068,-22.137073
333.434949,0.6,8.3,8.9442719,4.472136,0.2236068,-22.137073
225,0.7,8.4,7.0710678,7.0710678,0.1414214,-14.0007143
135,1.2,8.6,7.0710678,7.0710678,0.1414214,-14.0007143
243.434949,1.3,8.8,8.9442719,4.472136,0.2236068,-22.137073
26.565051,1.1,8.7,13.4164079,4.472136,0.2236068,-22.137073
0,8.74875,8.58939,0,10,0,-10
0,8.12326,9.16255,0,10,0,-10
0,8.22334,7.41455,0,10,0,-10
0,7.2264,8.32807,0,10,0,-10
0,6.60091,8.90123,0,10,0,-10
0,8.74106,5.28385,0,10,0,-10
0,8.11556,5.85701,0,10,0,-10
0,6.70099,7.15323,0,10,0,-10
0,5.70405,8.06676,0,10,0,-10
0,5.07855,8.63992,0,10,0,-10
0,8.21564,4.10901,0,10,0,-10
0,7.2187,5.02254,0,10,0,-10
0,6.59321,5.5957,0,10,0,-10
0,5.17863,6.89192,0,10,0,-10
0,4.18169,7.80544,0,10,0,-10
0,3.5562,8.3786,0,10,0,-10
0,8.73336,1.97832,0,10,0,-10
0,8.10787,2.55148,0,10,0,-10
0,6.69329,3.8477,0,10,0,-10
0,5.69635,4.76122,0,10,0,-10
0,5.07086,5.33438,0,10,0,-10
0,3.65628,6.6306,0,10,0,-10
0,2.65934,7.54413,0,10,0,-10
0,2.03385,8.11729,0,10,0,-10
0,8.20795,0.80348,0,10,0,-10
0,7.21101,1.717,0,10,0,-10
0,6.58551,2.29016,0,10,0,-10
0,5.17094,3.58638,0,10,0,-10
0,4.174,4.49991,0,10,0,-10
0,3.5485,5.07307,0,10,0,-10
0,2.13393,6.36929,0,10,0,-10
0,1.13699,7.28282,0,10,0,-10
0,0.51149,7.85597,0,10,0,-10
0,6.68559,0.54216,0,10,0,-10
0,5.68865,1.45569,0,10,0,-10
0,5.06316,2.02885,0,10,0,-10
0,3.53626,3.22649,0,10,0,-10
0,2.65164,4.23859,0,10,0,-10
0,2.02615,4.81175,0,10,0,-10
0,0.61157,6.10797,0,10,0,-10
0,5.16324,0.28085,0,10,0,-10
0,4.1663,1.19437,0,10,0,-10
0,3.54081,1.76753,0,10,0,-10
0,2.12623,3.06375,0,10,0,-10
0,1.12929,3.97728,0,10,0,-10
0,0.5038,4.55044,0,10,0,-10
0,3.64089,0.01953,0,10,0,-10
0,2.64395,0.93306,0,10,0,-10
0,2.01845,1.50622,0,10,0,-10
0,0.60388,2.80244,0,10,0,-10
0,1.12159,0.67174,0,10,0,-10
0,0.4961,1.2449,0,10,0,-10
0,9.15644,8.35141,0,10,0,-10
0,8.31335,8.05964,0,10,0,-10
0,7.76295,8.41028,0,10,0,-10
0,8.6371,7.02451,0,10,0,-10
0,6.91985,8.11852,0,10,0,-10
0,6.36945,8.46916,0,10,0,-10
0,7.2436,7.08339,0,10,0,-10
0,5.52636,8.17739,0,10,0,-10
0,4.97596,8.52804,0,10,0,-10
0,8.67916,5.33996,0,10,0,-10
0,8.12876,5.69061,0,10,0,-10
0,5.85011,7.14227,0,10,0,-10
0,4.13287,8.23627,0,10,0,-10
0,3.58247,8.58691,0,10,0,-10
0,9.00291,4.30484,0,10,0,-10
0,7.28566,5.39884,0,10,0,-10
0,6.73527,5.74948,0,10,0,-10
0,4.45662,7.20114,0,10,0,-10
0,2.73937,8.29515,0,10,0,-10
0,2.18897,8.64579,0,10,0,-10
0,7.60942,4.36371,0,10,0,-10
0,5.89217,5.45772,0,10,0,-10
0,5.34177,5.80836,0,10,0,-10
0,3.06312,7.26002,0,10,0,-10
0,1.34588,8.35403,0,10,0,-10
0,0.79548,8.70467,0,10,0,-10
0,9.04497,2.62029,0,10,0,-10
0,8.49457,2.97093,0,10,0,-10
0,6.21592,4.42259,0,10,0,-10
0,4.49868,5.5166,0,10,0,-10
0,3.94828,5.86724,0,10,0,-10
0,1.66963,7.3189,0,10,0,-10
0,9.36872,1.58516,0,10,0,-10
0,7.65148,2.67917,0,10,0,-10
0,7.10108,3.02981,0,10,0,-10
0,4.82243,4.48147,0,10,0,-10
0,3.10518,5.57547,0,10,0,-10
0,2.55479,5.92612,0,10,0,-10
0,0.27613,7.37778,0,10,0,-10
0,7.97523,1.64404,0,10,0,-10
0,6.25798,2.73804,0,10,0,-10
0,5.70758,3.08869,0,10,0,-10
0,3.42893,4.54035,0,10,0,-10
0,1.71169,5.63435,0,10,0,-10
0,1.16129,5.98499,0,10,0,-10
0,8.86038,0.25125,0,10,0,-10
0,6.58173,1.70292,0,10,0,-10
0,4.86449,2.79692,0,10,0,-10
0,4.31409,3.14756,0,10,0,-10
0,2.03544,4.59922,0,10,0,-10
0,0.3182,5.69323,0,10,0,-10
0,7.46689,0.31013,0,10,0,-10
0,5.18824,1.76179,0,10,0,-10
0,3.471,2.8558,0,10,0,-10
0,2.9206,3.20644,0,10,0,-10
0,0.64195,4.6581,0,10,0,-10
0,6.6238,0.01837,0,10,0,-10
0,6.0734,0.36901,0,10,0,-10
0,3.79475,1.82067,0,10,0,-10
0,2.0775,2.91468,0,10,0,-10
0,1.5271,3.26532,0,10,0,-10
0,5.2303,0.07724,0,10,0,-10
0,4.6799,0.42789,0,10,0,-10
0,2.40125,1.87955,0,10,0,-10
0,0.68401,2.97355,0,10,0,-10
0,0.13361,3.3242,0,10,0,-10
0,3.83681,0.13612,0,10,0,-10
0,3.28641,0.48676,0,10,0,-10
0,1.00776,1.93842,0,10,0,-10
0,2.44331,0.195,0,10,0,-10
0,1.89292,0.54564,0,10,0,-10
0,1.04982,0.25388,0,10,0,-10
0,0.49942,0.60452,0,10,0,-10
0,6.42555,9.30607,0,10,0,-10
0,4.77695,9.08903,0,10,0,-10
0,3.7883,8.95887,0,10,0,-10
0,3.13481,8.87284,0,10,0,-10
0,1.48621,8.6558,0,10,0,-10
0,0.49757,8.52564,0,10,0,-10
0,9.02957,8.70973,0,10,0,-10
0,7.38097,8.49269,0,10,0,-10
0,6.39232,8.36253,0,10,0,-10
0,5.73883,8.2765,0,10,0,-10
0,4.09023,8.05946,0,10,0,-10
0,3.10158,7.9293,0,10,0,-10
0,2.4481,7.84327,0,10,0,-10
0,0.79949,7.62622,0,10,0,-10
0,8.99634,7.76619,0,10,0,-10
0,8.34285,7.68016,0,10,0,-10
0,6.69425,7.46312,0,10,0,-10
0,5.7056,7.33296,0,10,0,-10
0,5.05211,7.24692,0,10,0,-10
0,3.40351,7.02988,0,10,0,-10
0,2.41487,6.89972,0,10,0,-10
0,1.76138,6.81369,0,10,0,-10
0,0.11277,6.59665,0,10,0,-10
0,9.29827,6.86677,0,10,0,-10
0,8.30962,6.73662,0,10,0,-10
0,7.65613,6.65058,0,10,0,-10
0,6.00753,6.43354,0,10,0,-10
0,5.01888,6.30338,0,10,0,-10
0,4.3654,6.21735,0,10,0,-10
0,2.71679,6.00031,0,10,0,-10
0,1.72815,5.87015,0,10,0,-10
0,1.07466,5.78412,0,10,0,-10
0,8.61155,5.8372,0,10,0,-10
0,7.6229,5.70704,0,10,0,-10
0,6.96941,5.62101,0,10,0,-10
0,5.32081,5.40397,0,10,0,-10
0,4.33217,5.27381,0,10,0,-10
0,3.67868,5.18777,0,10,0,-10
0,2.03007,4.97073,0,10,0,-10
0,1.04143,4.84057,0,10,0,-10
0,0.38794,4.75454,0,10,0,-10
0,7.92483,4.80762,0,10,0,-10
0,6.93618,4.67747,0,10,0,-10
0,6.2827,4.59143,0,10,0,-10
0,4.63409,4.37439,0,10,0,-10
0,3.64545,4.24423,0,10,0,-10
0,2.99196,4.1582,0,10,0,-10
0,1.34336,3.94116,0,10,0,-10
0,0.35471,3.811,0,10,0,-10
0,8.88671,3.99509,0,10,0,-10
0,7.23811,3.77805,0,10,0,-10
0,6.24947,3.64789,0,10,0,-10
0,5.59598,3.56186,0,10,0,-10
0,3.94737,3.34482,0,10,0,-10
0,2.95873,3.21466,0,10,0,-10
0,2.30524,3.12862,0,10,0,-10
0,0.65664,2.91158,0,10,0,-10
0,8.85348,3.05155,0,10,0,-10
0,8.19999,2.96552,0,10,0,-10
0,6.55139,2.74847,0,10,0,-10
0,5.56275,2.61832,0,10,0,-10
0,4.90926,2.53228,0,10,0,-10
0,3.26065,2.31524,0,10,0,-10
0,2.27201,2.18508,0,10,0,-10
0,1.61852,2.09905,0,10,0,-10
0,9.15541,2.15213,0,10,0,-10
0,8.16676,2.02197,0,10,0,-10
0,7.51328,1.93594,0,10,0,-10
0,5.86467,1.7189,0,10,0,-10
0,4.87603,1.58874,0,10,0,-10
0,4.22254,1.50271,0,10,0,-10
0,2.57394,1.28567,0,10,0,-10
0,1.58529,1.15551,0,10,0,-10
0,0.9318,1.06947,0,10,0,-10
0,8.46869,1.12256,0,10,0,-10
0,7.48005,0.9924,0,10,0,-10
0,6.82656,0.90637,0,10,0,-10
0,5.17795,0.68932,0,10,0,-10
0,4.18931,0.55917,0,10,0,-10
0,3.53582,0.47313,0,10,0,-10
0,1.88722,0.25609,0,10,0,-10
0,0.89857,0.12593,0,10,0,-10
0,0.24508,0.0399,0,10,0,-10
0,7.78197,0.09298,0,10,0,-10
0,1.25458,8.906,0,10,0,-10
0,2.59486,9.0898,0,10,0,-10
0,1.22284,8.03701,0,10,0,-10
0,3.91339,9.25692,0,10,0,-10
0,2.56312,8.22081,0,10,0,-10
0,1.19109,7.16803,0,10,0,-10
0,3.88165,8.38793,0,10,0,-10
0,2.53137,7.35183,0,10,0,-10
0,1.15935,6.29904,0,10,0,-10
0,5.23746,8.58365,0,10,0,-10
0,3.84991,7.51894,0,10,0,-10
0,2.49963,6.48284,0,10,0,-10
0,1.12761,5.43005,0,10,0,-10
0,6.57774,8.76745,0,10,0,-10
0,5.20572,7.71466,0,10,0,-10
0,3.81816,6.64995,0,10,0,-10
0,2.46789,5.61385,0,10,0,-10
0,1.09587,4.56106,0,10,0,-10
0,7.89627,8.93456,0,10,0,-10
0,6.546,7.89846,0,10,0,-10
0,5.17398,6.84567,0,10,0,-10
0,3.78642,5.78096,0,10,0,-10
0,2.43615,4.74486,0,10,0,-10
0,1.06413,3.69207,0,10,0,-10
0,9.25208,9.13028,0,10,0,-10
0,7.86453,8.06557,0,10,0,-10
0,6.51425,7.02947,0,10,0,-10
0,5.14223,5.97668,0,10,0,-10
0,3.75468,4.91198,0,10,0,-10
0,2.4044,3.87587,0,10,0,-10
0,1.03238,2.82308,0,10,0,-10
0,9.22034,8.26129,0,10,0,-10
0,7.83279,7.19659,0,10,0,-10
0,6.48251,6.16048,0,10,0,-10
0,5.11049,5.10769,0,10,0,-10
0,3.72294,4.04299,0,10,0,-10
0,2.37266,3.00688,0,10,0,-10
0,1.00064,1.9541,0,10,0,-10
0,9.1886,7.3923,0,10,0,-10
0,7.80105,6.3276,0,10,0,-10
0,6.45077,5.29149,0,10,0,-10
0,5.07875,4.23871,0,10,0,-10
0,3.6912,3.174,0,10,0,-10
0,2.34092,2.1379,0,10,0,-10
0,0.9689,1.08511,0,10,0,-10
0,9.15686,6.52332,0,10,0,-10
0,7.7693,5.45861,0,10,0,-10
0,6.41903,4.42251,0,10,0,-10
0,5.04701,3.36972,0,10,0,-10
0,2.30918,1.26891,0,10,0,-10
0,0.93716,0.21612,0,10,0,-10
0,9.12511,5.65433,0,10,0,-10
0,7.73756,4.58962,0,10,0,-10
0,6.38729,3.55352,0,10,0,-10
0,5.01527,2.50073,0,10,0,-10
0,3.62771,1.43602,0,10,0,-10
0,2.27744,0.39992,0,10,0,-10
0,9.09337,4.78534,0,10,0,-10
0,7.70582,3.72063,0,10,0,-10
0,6.35554,2.68453,0,10,0,-10
0,4.98352,1.63174,0,10,0,-10
0,3.59597,0.56703,0,10,0,-10
0,9.06163,3.91635,0,10,0,-10
0,7.67408,2.85164,0,10,0,-10
0,6.3238,1.81554,0,10,0,-10
0,4.95178,0.76275,0,10,0,-10
0,9.02989,3.04736,0,10,0,-10
0,7.64234,1.98266,0,10,0,-10
0,6.29206,0.94655,0,10,0,-10
0,8.99815,2.17837,0,10,0,-10
0,7.61059,1.11367,0,10,0,-10
0,6.26032,0.07756,0,10,0,-10
0,8.9664,1.30939,0,10,0,-10
0,7.57885,0.24468,0,10,0,-10
0,8.93466,0.4404,0,10,0,-10
206.565051,10,0.6,13.4164079,4.472136,0.2236068,-22.137073
63.434949,9.9,0.4,8.9442719,4.472136,0.2236068,-22.137073
315,9.8,0.5,7.0710678,7.0710678,0.1414214,-14.0007143
206.565051,9.7,5.4,13.4164079,4.472136,0.2236068,-22.137073
63.434949,9.6,5.2,8.9442719,4.472136,0.2236068,-22.137073
315,9.5,5.3,7.0710678,7.0710678,0.1414214,-14.0007143
153.434949,10,7.2,8.9442719,4.472136,0.2236068,-22.137073
288.434949,9.9,7.5,22.1359436,3.1622777,0.3162278,-31.3065488
63.434949,9.8,7.3,8.9442719,4.472136,0.2236068,-22.137073
135,9.7,9.3,7.0710678,7.0710678,0.1414214,-14.0007143
270,9.7,9.5,0,10,0.2,-9.8
45,9.6,9.4,7.0710678,7.0710678,0.1414214,-14.0007143
0,7.7,9.6,0,10,0.2,-9.8
270,7.2,9.4,0,10,0.2,-9.8
26.565051,7,9.3,13.4164079,4.472136,0.2236068,-22.137073
0,9.50621,9.4965,0,10,0,-10
0,9.74569,7.67586,0,10,0,-10
0,9.63792,6.11833,0,10,0,-10
0,9.738,4.37033,0,10,0,-10
0,9.63022,2.81279,0,10,0,-10
0,9.7303,1.06479,0,10,0,-10
0,9.70684,8.00076,0,10,0,-10
0,9.52225,5.63173,0,10,0,-10
0,9.88807,2.91205,0,10,0,-10
0,8.06768,9.52227,0,10,0,-10
0,7.07904,9.39211,0,10,0,-10
0,9.68306,8.79577,0,10,0,-10
0,9.98498,7.89635,0,10,0,-10
0,9.57343,5.02467,0,10,0,-10
0,9.5402,4.08112,0,10,0,-10
0,9.84213,3.18171,0,10,0,-10
0,9.43058,0.31003,0,10,0,-10
243.434949,7.8,9.8,8.9442719,4.472136,0.2236068,-22.137073
116.565051,7.9,9.6,13.4164079,4.472136,0.2236068,-22.137073
180,6,9.7,0,10,0.2,-9.8
270,6,9.9,0,10,0.2,-9.8
45,5.8,9.7,7.0710678,7.0710678,0.2828427,-13.8592929
296.565051,4.1,10,13.4164079,4.472136,0.2236068,-22.137073
63.434949,4,9.8,8.9442719,4.472136,0.2236068,-22.137073
180,4.2,9.8,0,10,0.2,-9.8
135,3.4,9.4,7.0710678,7.0710678,0.1414214,-14.0007143
243.434949,3.5,9.6,8.9442719,4.472136,0.2236068,-22.137073
26.565051,3.3,9.5,13.4164079,4.472136,0.2236068,-22.137073
116.565051,3.1,9.3,13.4164079,4.472136,0.2236068,-22.137073
225,3,9.5,7.0710678,7.0710678,0.2828427,-13.8592929
45,0,9.7,7.0710678,7.0710678,0.2828427,-13.8592929
161.565051,0.3,9.6,9.486833,3.1622777,0.3162278,-31.3065488
288.434949,0.2,9.9,22.1359436,3.1622777,0.3162278,-31.3065488
0,3.66398,9.93614,0,10,0,-10
0,2.14162,9.67482,0,10,0,-10
0,0.61927,9.41351,0,10,0,-10
0,6.87779,9.80307,0,10,0,-10
0,5.4843,9.86194,0,10,0,-10
0,2.69731,9.9797,0,10,0,-10
0,4.47502,9.98845,0,10,0,-10
0,3.82153,9.90242,0,10,0,-10
0,2.17293,9.68537,0,10,0,-10
0,1.18429,9.55522,0,10,0,-10
0,0.5308,9.46918,0,10,0,-10
0,1.28632,9.77499,0,10,0,-10
0,2.6266,9.95879,0,10,0,-10
0,5.2692,9.45264,0,10,0,-10
0,6.60948,9.63644,0,10,0,-10
0,7.92801,9.80355,0,10,0,-10
0,9.66478,9.68531,0,10,0,-10
0,8.27128,9.74419,0,10,0,-10
0,9.71629,9.73931,0,10,0,-10
0,9.28383,9.99927,0,10,0,-10
`),
  false,
);
