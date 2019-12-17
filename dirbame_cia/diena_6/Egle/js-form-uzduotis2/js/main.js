// test
console.log("labas");
// alert("issokanti zinute");
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
//


// let ivedimoLaukas = document.querySelector('#spindulys');
//
// console.log("surastas elementas: ", ivedimoLaukas);
//
// let laukoPradineReiskme = ivedimoLaukas.value;
//
// console.log("pirma reiksme: ",laukoPradineReiskme);
//
//
// let ivestasSpindulys = document.querySelector('p');
//
// ivestasSpindulys.innerHTML= "ivedete: " + ivedimoLaukas.value;



function plotas(){
  console.log('suveike');
  let ivedimoLaukas = document.querySelector('#spindulys');
  let ivestasSkaicius = parseFloat(ivedimoLaukas.value);
  console.log(ivedimoLaukas); //patikrinimas
  document.querySelector('p').innerHTML = "ivedete: " + ivedimoLaukas.value;
  let plotoSkaiciavimas = Math.PI * ivestasSkaicius * ivestasSkaicius;
  console.log(plotoSkaiciavimas);
  let apskritimoPlotas = document.querySelector('span');
  apskritimoPlotas.innerHTML = "apskritimo plotas yra: " + plotoSkaiciavimas;

}




// apskritimoPlotas.innerHTML = "apskritimo plotas yra: " + plotas();
