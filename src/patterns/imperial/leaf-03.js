import { Pattern, RegisterPattern } from "../../Pattern";

RegisterPattern(
  Pattern.ParsePatFile(`
*LEAF-03,LEAF-03
;By John Hyslop,    Using AutoCAD Lisp Tool
;Developed in inch as imperial QCAD3 pattern
344.054604,0.86,0.38,4.12081692,0.13736056,0.0728011,-7.20730879
338.198591,0.81,0.4,3.15682075,0.18569534,0.05385165,-5.33131316
326.309932,0.75,0.44,2.21880078,0.2773501,0.07211103,-3.53344025
320.194429,0.69,0.49,6.401844,0.12803688,0.0781025,-7.73214718
308.659808,0.65,0.54,1.40556386,0.15617376,0.06403124,-6.339093
300.963757,0.62,0.59,3.60147029,0.17149859,0.05830952,-5.77264238
293.198591,0.59,0.66,2.23220936,0.13130643,0.07615773,-7.53961537
281.309932,0.58,0.71,4.11843884,0.19611614,0.0509902,-5.04802932
276.340192,0.57,0.8,8.0615014,0.11043153,0.09055385,-8.96483129
270,0.57,0.85,0,1,0.05,-0.95
257.471192,0.59,0.94,5.09786576,0.10846523,0.09219544,-9.12734901
164.054604,0.66,0.92,4.12081692,0.13736056,0.0728011,-7.20730879
158.198591,0.71,0.9,3.15682075,0.18569534,0.05385165,-5.33131316
146.309932,0.77,0.86,2.21880078,0.2773501,0.07211103,-3.53344025
140.194429,0.83,0.81,6.401844,0.12803688,0.0781025,-7.73214718
125.537678,0.88,0.74,4.99864847,0.11624764,0.08602325,-8.51630201
116.565051,0.92,0.66,1.34164079,0.4472136,0.08944272,-2.14662526
105.945396,0.94,0.59,3.15929297,0.13736056,0.0728011,-7.20730879
97.125016,0.95,0.51,7.06997987,0.12403473,0.08062258,-7.98163517
90,0.95,0.45,0,1,0.06,-0.94
77.471192,0.93,0.36,5.09786576,0.10846523,0.09219544,-9.12734901
195.945396,0.14,0.38,3.15929297,0.13736056,0.0728011,-7.20730879
201.801409,0.19,0.4,2.22834406,0.18569534,0.05385165,-5.33131316
213.690068,0.25,0.44,1.38675049,0.2773501,0.07211103,-3.53344025
219.805571,0.31,0.49,1.40840568,0.12803688,0.0781025,-7.73214718
231.340192,0.35,0.54,4.99756038,0.15617376,0.06403124,-6.339093
239.036243,0.38,0.59,2.22948161,0.17149859,0.05830952,-5.77264238
246.801409,0.41,0.66,5.38356375,0.13130643,0.07615773,-7.53961537
258.690068,0.42,0.71,0.98058068,0.19611614,0.0509902,-5.04802932
263.659808,0.43,0.8,0.99388373,0.11043153,0.09055385,-8.96483129
270,0.43,0.85,0,1,0.05,-0.95
282.528808,0.41,0.94,4.1216787,0.10846523,0.09219544,-9.12734901
15.945396,0.34,0.92,3.15929297,0.13736056,0.0728011,-7.20730879
21.801409,0.29,0.9,2.22834406,0.18569534,0.05385165,-5.33131316
33.690068,0.23,0.86,1.38675049,0.2773501,0.07211103,-3.53344025
39.805571,0.17,0.81,1.40840568,0.12803688,0.0781025,-7.73214718
54.462322,0.12,0.74,3.6036768,0.11624764,0.08602325,-8.51630201
63.434949,0.08,0.66,0.89442719,0.4472136,0.08944272,-2.14662526
74.054604,0.06,0.59,4.12081692,0.13736056,0.0728011,-7.20730879
82.874984,0.05,0.51,0.99227788,0.12403473,0.08062258,-7.98163517
90,0.05,0.45,0,1,0.06,-0.94
102.528808,0.07,0.36,4.1216787,0.10846523,0.09219544,-9.12734901
128.659808,0.21,0.15,1.40556386,0.15617376,0.06403124,-6.339093
146.309932,0.27,0.11,2.21880078,0.2773501,0.07211103,-3.53344025
153.434949,0.33,0.08,0.89442719,0.4472136,0.06708204,-2.16898594
164.054604,0.4,0.06,4.12081692,0.13736056,0.0728011,-7.20730879
171.869898,0.47,0.05,0.98994949,0.14142136,0.07071068,-7.00035713
180,0.53,0.05,0,1,0.06,-0.94
188.130102,0.6,0.06,6.08111832,0.14142136,0.07071068,-7.00035713
195.945396,0.67,0.08,3.15929297,0.13736056,0.0728011,-7.20730879
206.565051,0.73,0.11,1.34164079,0.4472136,0.06708204,-2.16898594
218.659808,0.78,0.15,1.40556386,0.15617376,0.06403124,-6.339093
225,0.83,0.2,0.70710678,0.70710678,0.07071068,-1.34350288
315,0.78,0.25,0.70710678,0.70710678,0.07071068,-1.34350288
321.340192,0.73,0.29,4.99756038,0.15617376,0.06403124,-6.339093
336.801409,0.66,0.32,5.38356375,0.13130643,0.07615773,-7.53961537
341.565051,0.6,0.34,0.9486833,0.31622777,0.06324555,-3.09903211
351.869898,0.53,0.35,0.98994949,0.14142136,0.07071068,-7.00035713
0,0.47,0.35,0,1,0.06,-0.94
8.130102,0.4,0.34,6.08111832,0.14142136,0.07071068,-7.00035713
18.434949,0.34,0.32,2.21359436,0.31622777,0.06324555,-3.09903211
23.198591,0.27,0.29,2.23220936,0.13130643,0.07615773,-7.53961537
38.659808,0.22,0.25,1.40556386,0.15617376,0.06403124,-6.339093
45,0.17,0.2,0.70710678,0.70710678,0.07071068,-1.34350288
`),
  false,
);
