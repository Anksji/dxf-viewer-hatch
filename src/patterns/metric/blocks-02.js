import { Pattern, RegisterPattern } from "../../Pattern";

RegisterPattern(
  Pattern.ParsePatFile(`
*BLOCKS-02
;By John Hyslop,    Tile2Hatch tool © CVH 2020
;Developed in mm as metric QCAD3 pattern
180,8.128,4.572,0,25.4,12.446,-12.954
270,8.128,13.97,25.4,25.4,9.398,-16.002
0,9.398,24.384,0,25.4,10.668,-14.732
0,4.318,24.892,0,25.4,4.318,-21.082
90,20.828,0,25.4,25.4,3.81,-21.59
180,23.368,0,0,25.4,2.54,-22.86
180,8.128,13.97,0,25.4,12.446,-12.954
270,21.082,13.97,25.4,25.4,9.398,-16.002
180,3.302,20.32,0,25.4,4.572,-20.828
90,3.556,14.986,25.4,25.4,4.318,-21.082
270,3.302,3.81,25.4,25.4,8.89,-16.51
180,18.034,14.986,0,25.4,14.478,-10.922
270,23.368,3.81,25.4,25.4,3.81,-21.59
0,20.828,3.81,0,25.4,2.54,-22.86
270,18.034,19.304,25.4,25.4,4.318,-21.082
0,3.556,19.304,0,25.4,14.478,-10.922
180,2.032,14.986,0,25.4,8.128,-17.272
270,2.032,19.304,25.4,25.4,4.318,-21.082
180,3.302,3.81,0,25.4,4.572,-20.828
270,24.13,3.81,25.4,25.4,8.89,-16.51
90,4.572,20.32,25.4,25.4,3.302,-22.098
180,23.114,20.32,0,25.4,18.542,-6.858
180,2.032,19.304,0,25.4,8.128,-17.272
270,19.304,19.304,25.4,25.4,4.318,-21.082
270,8.636,3.81,25.4,25.4,4.318,-21.082
0,4.318,3.81,0,25.4,4.318,-21.082
270,23.114,23.622,25.4,25.4,3.302,-22.098
0,4.572,23.622,0,25.4,18.542,-6.858
0,9.398,13.97,0,25.4,10.668,-14.732
270,9.398,13.97,25.4,25.4,14.986,-10.414
270,4.318,3.81,25.4,25.4,4.318,-21.082
270,20.066,13.97,25.4,25.4,14.986,-10.414
`),
);
