import { Pattern, RegisterPattern } from "../../Pattern";

RegisterPattern(
  Pattern.ParsePatFile(`
*XMASTREE-02,XMASTREE-02
;By John Hyslop
;Developed in inch as imperial QCAD3 pattern
180,0.04,0.26,0,1,0.04,-0.96
90,0.04,0.13,0,1,0.13,-0.87
180,0.33,0.13,0,1,0.29,-0.71
49.763642,0.22,0,7.81002892,0.05872202,0.17029386,-16.8590925
180,0.28,1,0,1,0.06,-0.94
51.340192,0.16,0.85,4.99756038,0.15617376,0.19209373,-6.21103051
180,0.22,0.85,0,1,0.06,-0.94
52.431408,0.12,0.72,4.99962824,0.06097108,0.16401219,-16.23720727
180,0.17,0.72,0,1,0.05,-0.95
53.130102,0.08,0.6,3.6,0.2,0.15,-4.85
180,0.13,0.6,0,1,0.05,-0.95
53.972627,0.05,0.49,8.60201108,0.07352146,0.13601471,-13.4654558
180,0.1,0.49,0,1,0.05,-0.95
54.462322,0,0.35,3.6036768,0.11624764,0.17204651,-8.43027876
0,0.96,0.26,0,1,0.04,-0.96
90,0.96,0.13,0,1,0.13,-0.87
0,0.67,0.13,0,1,0.29,-0.71
130.236358,0.78,0,9.21935745,0.05872202,0.17029386,-16.8590925
0,0.72,1,0,1,0.06,-0.94
128.659808,0.84,0.85,1.40556386,0.15617376,0.19209373,-6.21103051
0,0.78,0.85,0,1,0.06,-0.94
127.568592,0.88,0.72,11.40159123,0.06097108,0.16401219,-16.23720727
0,0.83,0.72,0,1,0.05,-0.95
126.869898,0.92,0.6,1.4,0.2,0.15,-4.85
0,0.87,0.6,0,1,0.05,-0.95
126.027373,0.95,0.49,4.99945943,0.07352146,0.13601471,-13.4654558
0,0.9,0.49,0,1,0.05,-0.95
125.537678,1,0.35,4.99864847,0.11624764,0.17204651,-8.43027876
0,0.46,0.09,0,1,0.04,-0.96
270,0.46,0.22,0,1,0.13,-0.87
0,0.17,0.22,0,1,0.29,-0.71
229.763642,0.28,0.35,7.81002892,0.05872202,0.17029386,-16.8590925
0,0.22,0.35,0,1,0.06,-0.94
231.340192,0.34,0.5,4.99756038,0.15617376,0.19209373,-6.21103051
0,0.28,0.5,0,1,0.06,-0.94
232.431408,0.38,0.63,4.99962824,0.06097108,0.16401219,-16.23720727
0,0.33,0.63,0,1,0.05,-0.95
233.130102,0.42,0.75,3.6,0.2,0.15,-4.85
0,0.37,0.75,0,1,0.05,-0.95
233.972627,0.45,0.86,8.60201108,0.07352146,0.13601471,-13.4654558
0,0.4,0.86,0,1,0.05,-0.95
234.462322,0.5,1,3.6036768,0.11624764,0.17204651,-8.43027876
180,0.54,0.09,0,1,0.04,-0.96
270,0.54,0.22,0,1,0.13,-0.87
180,0.83,0.22,0,1,0.29,-0.71
310.236358,0.72,0.35,9.21935745,0.05872202,0.17029386,-16.8590925
180,0.78,0.35,0,1,0.06,-0.94
308.659808,0.66,0.5,1.40556386,0.15617376,0.19209373,-6.21103051
180,0.72,0.5,0,1,0.06,-0.94
307.568592,0.62,0.63,11.40159123,0.06097108,0.16401219,-16.23720727
180,0.67,0.63,0,1,0.05,-0.95
306.869898,0.58,0.75,1.4,0.2,0.15,-4.85
180,0.63,0.75,0,1,0.05,-0.95
306.027373,0.55,0.86,4.99945943,0.07352146,0.13601471,-13.4654558
180,0.6,0.86,0,1,0.05,-0.95
305.537678,0.5,1,4.99864847,0.11624764,0.17204651,-8.43027876
`),
  false,
);
