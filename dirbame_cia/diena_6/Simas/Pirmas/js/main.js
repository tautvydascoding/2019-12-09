// test
console.log("labas");
// alert("issokanti zinute");
document.write("labas ekrane");


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
let Povilas = 160;
let Antanas = 80;
let Tomas = 100;
let imonesPajamos = 20000;
let imonesIslaidos = 3400;

function getDarbuotojoAtlyginimas(valandos) {
  atlyginimas = valandos * valandinisIkainis;
  return  atlyginimas;
}
console.log("Povilo atlyginimas", getDarbuotojoAtlyginimas(Povilas));
console.log("Antano atlyginimas", getDarbuotojoAtlyginimas(Antanas));
console.log("Tomo atlyginimas", getDarbuotojoAtlyginimas(Tomas));


function getImonesPelnas() {
  pelnas = imonesPajamos - imonesIslaidos - (getDarbuotojoAtlyginimas(Povilas) + getDarbuotojoAtlyginimas(Antanas) + getDarbuotojoAtlyginimas(Tomas));
  return pelnas;
}
console.log("imones pelnas", getImonesPelnas());
