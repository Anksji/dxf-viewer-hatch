import { Pattern, RegisterPattern } from "../../Pattern";

RegisterPattern(
  Pattern.ParsePatFile(`
*AR-BRELM,AR-BRELM
0, 0,0, 0,135.484, 193.675,-9.525
0, 0,57.15, 0,135.484, 193.675,-9.525
0, 50.8,67.7418, 0,135.484, 92.075,-9.525
0, 50.8,124.892, 0,135.484, 92.075,-9.525
90, 0,0, 0,203.2, 57.15,-78.3336
90, -9.525,0, 0,203.2, 57.15,-78.3336
90, 50.8,67.7418, 0,101.6, 57.15,-78.3336
90, 41.275,67.7418, 0,101.6, 57.15,-78.3336
`),
);
