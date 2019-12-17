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
let povilasValandos = 160;
let tomasValandos = 100;
let antanasValandos = 80;

let imonesPajamos = 20000;
let imonesIslaidos = 3400;

function getDarbuotojoAtlyginimas(valandos, ikainis) {
    let atlyginimas = valandos * ikainis;
    return atlyginimas;
}
console.log( getDarbuotojoAtlyginimas(160, 10) );  // test
console.log( getDarbuotojoAtlyginimas(80, 10) );  // test
console.log( getDarbuotojoAtlyginimas(100, 10) );  // test

function getImonesPelnas(pajamos, kastai) {
    let pelnas = pajamos -  kastai - getDarbuotojoAtlyginimas(160, 10) - getDarbuotojoAtlyginimas(100, 10) - getDarbuotojoAtlyginimas(80, 10);
    return pelnas;
}
console.log( "pelnas: " + getImonesPelnas(imonesPajamos, imonesIslaidos) );  // test
//
