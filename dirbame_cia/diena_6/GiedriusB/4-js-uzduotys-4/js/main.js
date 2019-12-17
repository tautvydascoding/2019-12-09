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
function apskritPlotas (){
let ivedimoLaukasVardas = document.querySelector('#vardas').value;
let result = Math.PI * (ivedimoLaukasVardas * ivedimoLaukasVardas);
document.querySelector("p").innerHTML += result;
}
//
//
//  // UZDUOTIS 2
// sukurti ivedimo 2 laukus, naudojantis pvz 3,
// kur reikes ivesti staciakampio auksti ir ploti.
// Kai paspaudziamas mygtukas - paskaiciuojamas staciakampio plotas:
// Plotas  = x * y;
function staciakampPlotas() {
  let aukstis = document.querySelector("#aukstis").value;
  let plotis = document.querySelector("#plotis").value;
  let result = aukstis * plotis;
  document.querySelector("p1").innerHTML = "Staciakampio plotas: " + result;
}
