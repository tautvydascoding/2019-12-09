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
let valPovilas = 160;
let valAntanas = 80;
let valTomas = 100;
let a = 0;

function getDarbuotojoAtlyginimas(valandos){
  let valikainis = 10;
  let atlyginimas =valandos * valikainis;
  return atlyginimas;
}
let visas = getDarbuotojoAtlyginimas(valPovilas) + getDarbuotojoAtlyginimas(valAntanas) +getDarbuotojoAtlyginimas(valTomas);

function getImonesPelnas(x){
  let imonesPajamos = 20000;
  let islaidos = 3400;
  let pelnas = imonesPajamos - islaidos - x;
  return pelnas;
}

console.log(getImonesPelnas(visas));
