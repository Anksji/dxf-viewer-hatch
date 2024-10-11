import { Pattern, RegisterPattern } from "../../Pattern";

RegisterPattern(
  Pattern.ParsePatFile(`
*LATTICE-01
;By John Hyslop,    Tile2Hatch tool © CVH 2020
;Developed in mm as metric QCAD3 pattern
180,2.162738626,10.16,0,25.4,4.325477252,-21.074522748
270,15.24,2.162738626,25.4,25.4,4.325477252,-21.074522748
270,10.16,2.162738626,25.4,25.4,4.325477252,-21.074522748
135,12.7,6.80694346,17.960512212,17.960512212,8.334040482,-27.586983942
225,18.59305654,12.7,17.960512212,17.960512212,8.334040482,-27.586983942
45,2.162738626,15.24,17.960512212,17.960512212,11.309835394,-24.61118903
180,2.162738626,15.24,0,25.4,4.325477252,-21.074522748
315,12.7,18.59305654,17.960512212,17.960512212,8.334040482,-27.586983942
45,6.80694346,12.7,17.960512212,17.960512212,8.334040482,-27.586983942
315,15.24,23.237261374,17.960512212,17.960512212,11.309835394,-24.61118903
45,15.24,2.162738626,17.960512212,17.960512212,11.309835394,-24.61118903
315,2.162738626,10.16,17.960512212,17.960512212,11.309835394,-24.61118903
`),
);
