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
//function apskritimoplotas(){
function apskritimoplotas(){
  let spindulys = document.querySelector('#r').value;
  console.log("Apskritimo spindulys: ", spindulys);
  let plotas = Math.PI * (spindulys*spindulys);
  document.querySelector('#plotas').innerHTML += plotas;
}
//
//  // UZDUOTIS 2
// sukurti ivedimo 2 laukus, naudojantis pvz 3,
// kur reikes ivesti staciakampio auksti ir ploti.
// Kai paspaudziamas mygtukas - paskaiciuojamas staciakampio plotas:
// Plotas  = x * y;

function staciakampioplotas(){
  let x = document.querySelector('#x');
  let y = document.querySelector('#y');
  let xreiksme = x.value;
  let yreiksme = y.value;
  let plotas = xreiksme * yreiksme;
  document.querySelector('#staciakampis').innerHTML += plotas;
}
