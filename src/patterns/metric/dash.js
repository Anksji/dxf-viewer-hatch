import { Pattern, RegisterPattern } from "../../Pattern";

RegisterPattern(
  Pattern.ParsePatFile(`
*DASH,DASH
0, 0,0, 3.175,3.175, 3.175,-3.175
`),
);
