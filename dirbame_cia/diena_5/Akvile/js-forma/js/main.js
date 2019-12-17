// ==============patarimai==========
// reiksme  - kintamasis  / variable
// "reiksme" - tekstas/ reiksme/ value
// reiksme() - f-jos paleidimas
// =============================



//============== =========
// UZDUOTIS 1
// sukurti ivedimo lauka, naudojantis pvz 3,
// kur reikes ivesti apskritimo spinduli ,,R".
// Kai paspaudziamas mygtukas - paskaiciuojamas apskritimo plotas: Plotas = pi * R*R
// pi = Math.PI;
//
function plotas() {

  var r = document.querySelector("input[name='spindulys']").value;

  var apskritimoPlotas = Math.PI * r * r;

  document.getElementById("apskritimas").innerHTML = "Apskritimo plotas yra: " + apskritimoPlotas;

  console.log(r);
  console.log(apskritimoPlotas);

}
//
//  // UZDUOTIS 2
// sukurti ivedimo 2 laukus, naudojantis pvz 3,
// kur reikes ivesti staciakampio auksti ir ploti.
// Kai paspaudziamas mygtukas - paskaiciuojamas staciakampio plotas:
// Plotas  = x * y;


function staciakampioPlotas() {
  let ilgis = document.querySelector("input[name='ilgis']").value;
  let plotis = document.querySelector("input[name='plotis']").value;
  let staciakampioPlotas = ilgis * plotis;
  document.querySelector("#staciakampis").innerHTML = "Stačiakampio plotas yra: " + staciakampioPlotas;
}
