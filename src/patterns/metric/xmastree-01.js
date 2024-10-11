import { Pattern, RegisterPattern } from "../../Pattern";

RegisterPattern(
  Pattern.ParsePatFile(`
*XMASTREE-01,XMASTREE-01
;By John Hyslop
;Developed in mm as metric QCAD3 pattern
180,1.016,24.13,0,25.4,1.016,-24.384
90,1.016,20.828,0,25.4,3.302,-22.098
180,8.382,20.828,0,25.4,7.366,-18.034
49.763642,5.588,17.526,198.374734568,1.491539308,4.325464044,-428.2209495
180,7.112,17.526,0,25.4,1.524,-23.876
51.340192,4.064,13.716,126.938033652,3.966813504,4.879180742,-157.760174954
180,5.588,13.716,0,25.4,1.524,-23.876
52.431408,3.048,10.414,126.990557296,1.548665432,4.165909626,-412.425064658
180,4.318,10.414,0,25.4,1.27,-24.13
53.130102,2.032,7.366,91.44,5.08,3.81,-123.19
180,3.302,7.366,0,25.4,1.27,-24.13
53.972627,1.27,4.572,218.491081432,1.867445084,3.454773634,-342.02257732
180,2.54,4.572,0,25.4,1.27,-24.13
54.462322,0,1.016,91.53339072,2.952690056,4.369981354,-214.129080504
0,24.384,24.13,0,25.4,1.016,-24.384
90,24.384,20.828,0,25.4,3.302,-22.098
0,17.018,20.828,0,25.4,7.366,-18.034
130.236358,19.812,17.526,234.17167923,1.491539308,4.325464044,-428.2209495
0,18.288,17.526,0,25.4,1.524,-23.876
128.659808,21.336,13.716,35.701322044,3.966813504,4.879180742,-157.760174954
0,19.812,13.716,0,25.4,1.524,-23.876
127.568592,22.352,10.414,289.600417242,1.548665432,4.165909626,-412.425064658
0,21.082,10.414,0,25.4,1.27,-24.13
126.869898,23.368,7.366,35.56,5.08,3.81,-123.19
0,22.098,7.366,0,25.4,1.27,-24.13
126.027373,24.13,4.572,126.986269522,1.867445084,3.454773634,-342.02257732
0,22.86,4.572,0,25.4,1.27,-24.13
125.537678,25.4,1.016,126.965671138,2.952690056,4.369981354,-214.129080504
0,11.684,1.016,0,25.4,1.016,-24.384
270,11.684,4.318,0,25.4,3.302,-22.098
0,4.318,4.318,0,25.4,7.366,-18.034
229.763642,7.112,7.62,198.374734568,1.491539308,4.325464044,-428.2209495
0,5.588,7.62,0,25.4,1.524,-23.876
231.340192,8.636,11.43,126.938033652,3.966813504,4.879180742,-157.760174954
0,7.112,11.43,0,25.4,1.524,-23.876
232.431408,9.652,14.732,126.990557296,1.548665432,4.165909626,-412.425064658
0,8.382,14.732,0,25.4,1.27,-24.13
233.130102,10.668,17.78,91.44,5.08,3.81,-123.19
0,9.398,17.78,0,25.4,1.27,-24.13
233.972627,11.43,20.574,218.491081432,1.867445084,3.454773634,-342.02257732
0,10.16,20.574,0,25.4,1.27,-24.13
234.462322,12.7,24.13,91.53339072,2.952690056,4.369981354,-214.129080504
180,13.716,1.016,0,25.4,1.016,-24.384
270,13.716,4.318,0,25.4,3.302,-22.098
180,21.082,4.318,0,25.4,7.366,-18.034
310.236358,18.288,7.62,234.17167923,1.491539308,4.325464044,-428.2209495
180,19.812,7.62,0,25.4,1.524,-23.876
308.659808,16.764,11.43,35.701322044,3.966813504,4.879180742,-157.760174954
180,18.288,11.43,0,25.4,1.524,-23.876
307.568592,15.748,14.732,289.600417242,1.548665432,4.165909626,-412.425064658
180,17.018,14.732,0,25.4,1.27,-24.13
306.869898,14.732,17.78,35.56,5.08,3.81,-123.19
180,16.002,17.78,0,25.4,1.27,-24.13
306.027373,13.97,20.574,126.986269522,1.867445084,3.454773634,-342.02257732
180,15.24,20.574,0,25.4,1.27,-24.13
305.537678,12.7,24.13,126.965671138,2.952690056,4.369981354,-214.129080504
`),
);
