// test
console.log("labas");
// alert("issokanti zinute");
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

//1.

let valandinisIkainis= 10;
let valandosPovilas = 160;
let valandosAntanas = 80;
let valandosTomas = 100;
let imonesPajamos = 20000;
let kitosIslaidos = 3400;

function getDarbuotojoAtlyginimas(x){
    let alga = x * valandinisIkainis;
    console.log("alga: ", alga);
}
 getDarbuotojoAtlyginimas(valandosPovilas);
 getDarbuotojoAtlyginimas(valandosAntanas);
 getDarbuotojoAtlyginimas(valandosTomas);



//2.

function getImonesPelnas(){
  var algos = (valandosPovilas + valandosAntanas + valandosTomas) * valandinisIkainis;
  var pelnas = imonesPajamos - (kitosIslaidos + algos);
  return pelnas;
  console.log("pelnas: ", pelnas);
  document.querySelector('body').innerHTML=("imones pelnas: " + pelnas);
}

getImonesPelnas();
