// UZDUOTIS - f-jos return
// failo virusje sukurti kintamuosius:
// valandinisIkainis = 10
// valandos Povilas = 160
// valandos Antanas = 80
// valandos Tomas   = 100
// imones pajamos = 20000
// kitos imones islaidos = 3400
//  UZDUOTIS:
//  1) sukurti  f-ja: getDarbuotojoAtlyginimas
//  1.2) paleisti tiek kartu kiek turime darbuotoju
//  2) sukurti  f-ja: getImonesPelnas
//  2.2) isvesti apskaiciuota pelna i console ar ekrana
let valandinisIkainis = 10;
let povilas = 160;
let antanas = 80;
let tomas = 100;
let pajamos = 20000;
let islaidos = 3400;
function getDarbuotojoAtlyginimas(darbuotojas){
  return valandinisIkainis * darbuotojas
}
console.log(getDarbuotojoAtlyginimas(povilas))
console.log(getDarbuotojoAtlyginimas(antanas))
console.log(getDarbuotojoAtlyginimas(tomas))
////////////////////////////////////////////////////////
function getImonesPelnas(){
  return pajamos - islaidos
}
document.write(getImonesPelnas())
console.log(getImonesPelnas())
