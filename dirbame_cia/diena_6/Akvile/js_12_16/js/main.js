// UZDUOTIS - f-jos return

let valandinisIkainis = 10;
let valandosPovilas = 160;
let valandosAntanas = 80;
let valandosTomas   = 100;
let imonesPajamos = 20000;
let kitosImonesIslaidos = 3400;

function getDarbuotojoAtlyginimas(darbuotojas) {
  return valandinisIkainis * darbuotojas;
}

getDarbuotojoAtlyginimas(valandosPovilas);
getDarbuotojoAtlyginimas(valandosAntanas);
getDarbuotojoAtlyginimas(valandosTomas);

console.log(getDarbuotojoAtlyginimas(valandosTomas));
console.log(getDarbuotojoAtlyginimas(valandosPovilas));
console.log(getDarbuotojoAtlyginimas(valandosAntanas));

 // UZDUOTIS:
 // 1) sukurti  f-ja: getDarbuotojoAtlyginimas
 // 1.2) paleisti tiek kartu kiek turime darbuotoju
 // 2) sukurti  f-ja: getImonesPelnas
 // 2.2) isvesti apskaiciuota pelna i console ar ekrana
function getImonesPelnas() {

  return imonesPajamos - kitosImonesIslaidos - getDarbuotojoAtlyginimas(valandosPovilas)- getDarbuotojoAtlyginimas(valandosAntanas) - getDarbuotojoAtlyginimas(valandosTomas);
}

console.log(getImonesPelnas());
