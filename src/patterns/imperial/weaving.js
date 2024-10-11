import { Pattern, RegisterPattern } from "../../Pattern";

RegisterPattern(
  Pattern.ParsePatFile(`
*WEAVING,WEAVING
;By John Hyslop,    Using AutoCAD Lisp Tool
;Developed in inch as imperial QCAD3 pattern
90,0.9,0.2,0,1,0.05,-0.95
75.963757,0.88,0.12,0.9701425,0.24253563,0.08246211,-4.04064351
66.801409,0.85,0.05,5.38356375,0.13130643,0.07615773,-7.53961537
54.462322,0.8,-0.02,3.6036768,0.11624764,0.08602325,-8.51630201
56.309932,0.76,-0.08,2.21880078,0.2773501,0.07211103,-3.53344025
90,0.79,0.22,0,1,0.07,-0.93
80.537678,0.78,0.16,0.98639392,0.16439899,0.06082763,-6.0219349
63.434949,0.75,0.1,0.89442719,0.4472136,0.06708204,-2.16898594
56.309932,0.71,0.04,2.21880078,0.2773501,0.07211103,-3.53344025
56.309932,0.67,-0.02,2.21880078,0.2773501,0.07211103,-3.53344025
333.434949,0.86,0.27,0.89442719,0.4472136,0.06708204,-2.16898594
344.054604,0.79,0.29,4.12081692,0.13736056,0.0728011,-7.20730879
0,0.71,0.29,0,1,0.08,-0.92
9.462322,0.65,0.28,5.09636861,0.16439899,0.06082763,-6.0219349
26.565051,0.59,0.25,1.34164079,0.4472136,0.06708204,-2.16898594
38.659808,0.54,0.21,1.40556386,0.15617376,0.06403124,-6.339093
36.869898,0.46,0.15,1.4,0.2,0.1,-4.9
20.556045,0.38,0.12,5.38389277,0.11704115,0.08544004,-8.45856371
330.255119,0.91,0.37,2.23262522,0.12403473,0.08062258,-7.98163517
344.054604,0.84,0.39,4.12081692,0.13736056,0.0728011,-7.20730879
352.874984,0.76,0.4,0.99227788,0.12403473,0.08062258,-7.98163517
0,0.69,0.4,0,1,0.07,-0.93
14.036243,0.61,0.38,3.15296313,0.24253563,0.08246211,-4.04064351
26.565051,0.53,0.34,1.34164079,0.4472136,0.08944272,-2.14662526
33.690068,0.47,0.3,1.38675049,0.2773501,0.07211103,-3.53344025
35.537678,0.4,0.25,4.99864847,0.11624764,0.08602325,-8.51630201
0,0.2,0.1,0,1,0.05,-0.95
348.690068,0.15,0.11,0.98058068,0.19611614,0.0509902,-5.04802932
341.565051,0.12,0.12,0.9486833,0.31622777,0.03162278,-3.13065488
336.801409,0.05,0.15,5.38356375,0.13130643,0.07615773,-7.53961537
326.309932,-0.01,0.19,2.21880078,0.2773501,0.07211103,-3.53344025
324.462322,-0.08,0.24,3.6036768,0.11624764,0.08602325,-8.51630201
0,0.22,0.21,0,1,0.07,-0.93
350.537678,0.16,0.22,0.98639392,0.16439899,0.06082763,-6.0219349
333.434949,0.1,0.25,0.89442719,0.4472136,0.06708204,-2.16898594
326.309932,0.04,0.29,2.21880078,0.2773501,0.07211103,-3.53344025
326.309932,-0.02,0.33,2.21880078,0.2773501,0.07211103,-3.53344025
60.255119,0.63,0.91,2.23262522,0.12403473,0.08062258,-7.98163517
180,0.79,0.79,0,1,0.08,-0.92
164.054604,0.86,0.77,4.12081692,0.13736056,0.0728011,-7.20730879
153.434949,0.92,0.74,0.89442719,0.4472136,0.06708204,-2.16898594
330.255119,0.91,0.87,2.23262522,0.12403473,0.08062258,-7.98163517
345.963757,0.83,0.89,0.9701425,0.24253563,0.08246211,-4.04064351
352.874984,0.75,0.9,0.99227788,0.12403473,0.08062258,-7.98163517
60.255119,0.72,0.85,2.23262522,0.12403473,0.08062258,-7.98163517
80.537678,0.71,0.79,0.98639392,0.16439899,0.06082763,-6.0219349
90,0.71,0.71,0,1,0.08,-0.92
104.036243,0.73,0.63,3.15296313,0.24253563,0.08246211,-4.04064351
116.565051,0.76,0.57,1.34164079,0.4472136,0.06708204,-2.16898594
129.805571,0.81,0.51,1.40840568,0.12803688,0.0781025,-7.73214718
123.690068,0.85,0.45,1.38675049,0.2773501,0.07211103,-3.53344025
113.198591,0.88,0.38,2.23220936,0.13130643,0.07615773,-7.53961537
309.805571,0.71,0.46,1.40840568,0.12803688,0.0781025,-7.73214718
305.537678,0.66,0.53,4.99864847,0.11624764,0.08602325,-8.51630201
299.744881,0.62,0.6,5.82963253,0.12403473,0.08062258,-7.98163517
285.945396,0.6,0.67,3.15929297,0.13736056,0.0728011,-7.20730879
270,0.6,0.76,0,1,0.09,-0.91
74.054604,0.61,0.84,4.12081692,0.13736056,0.0728011,-7.20730879
82.874984,0.6,0.76,0.99227788,0.12403473,0.08062258,-7.98163517
39.805571,0.54,0.71,1.40840568,0.12803688,0.0781025,-7.73214718
35.537678,0.47,0.66,4.99864847,0.11624764,0.08602325,-8.51630201
33.690068,0.41,0.62,1.38675049,0.2773501,0.07211103,-3.53344025
15.945396,0.34,0.6,3.15929297,0.13736056,0.0728011,-7.20730879
6.340192,0.25,0.59,8.0615014,0.11043153,0.09055385,-8.96483129
350.537678,0.19,0.6,0.98639392,0.16439899,0.06082763,-6.0219349
344.054604,0.12,0.62,4.12081692,0.13736056,0.0728011,-7.20730879
23.198591,0.55,0.85,2.23220936,0.13130643,0.07615773,-7.53961537
29.744881,0.48,0.81,5.82963253,0.12403473,0.08062258,-7.98163517
39.805571,0.42,0.76,1.40840568,0.12803688,0.0781025,-7.73214718
29.744881,0.35,0.72,5.82963253,0.12403473,0.08062258,-7.98163517
7.125016,0.27,0.71,7.06997987,0.12403473,0.08062258,-7.98163517
0,0.21,0.71,0,1,0.06,-0.94
344.054604,0.14,0.73,4.12081692,0.13736056,0.0728011,-7.20730879
333.434949,0.1,0.75,0.89442719,0.4472136,0.04472136,-2.19134662
234.462322,0.31,-0.01,3.6036768,0.11624764,0.08602325,-8.51630201
240.255119,0.35,0.06,2.23262522,0.12403473,0.08062258,-7.98163517
243.434949,0.39,0.14,0.89442719,0.4472136,0.08944272,-2.14662526
262.874984,0.4,0.22,0.99227788,0.12403473,0.08062258,-7.98163517
270,0.4,0.3,0,1,0.08,-0.92
282.528808,0.38,0.39,4.1216787,0.10846523,0.09219544,-9.12734901
293.198591,0.35,0.46,2.23220936,0.13130643,0.07615773,-7.53961537
309.805571,0.3,0.52,1.40840568,0.12803688,0.0781025,-7.73214718
305.537678,0.25,0.59,4.99864847,0.11624764,0.08602325,-8.51630201
270,0.21,0.78,0,1,0.07,-0.93
254.054604,0.23,0.85,4.12081692,0.13736056,0.0728011,-7.20730879
246.801409,0.26,0.92,5.38356375,0.13130643,0.07615773,-7.53961537
236.309932,0.21,0.04,2.21880078,0.2773501,0.07211103,-3.53344025
234.462322,0.26,0.11,3.6036768,0.11624764,0.08602325,-8.51630201
249.443955,0.29,0.19,3.16011097,0.11704115,0.08544004,-8.45856371
270,0.29,0.27,0,1,0.08,-0.92
278.130102,0.28,0.34,6.08111832,0.14142136,0.07071068,-7.00035713
296.565051,0.24,0.42,1.34164079,0.4472136,0.08944272,-2.14662526
309.805571,0.19,0.48,1.40840568,0.12803688,0.0781025,-7.73214718
303.690068,0.15,0.54,1.38675049,0.2773501,0.07211103,-3.53344025
290.556045,0.12,0.62,5.38389277,0.11704115,0.08544004,-8.45856371
341.565051,0.06,0.64,0.9486833,0.31622777,0.06324555,-3.09903211
324.462322,-0.01,0.69,3.6036768,0.11624764,0.08602325,-8.51630201
324.462322,-0.08,0.74,3.6036768,0.11624764,0.08602325,-8.51630201
146.309932,0.04,0.79,2.21880078,0.2773501,0.07211103,-3.53344025
146.309932,0.1,0.75,2.21880078,0.2773501,0.07211103,-3.53344025
262.874984,0.11,0.83,0.99227788,0.12403473,0.08062258,-7.98163517
255.963757,0.13,0.91,0.9701425,0.24253563,0.08246211,-4.04064351
240.255119,0.17,0.98,2.23262522,0.12403473,0.08062258,-7.98163517
`),
  false,
);
