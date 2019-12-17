// test
console.log("labas");
// alert("issokanti zinute")


//
//  // UZDUOTIS 2
// sukurti ivedimo 2 laukus, naudojantis pvz 3,
// kur reikes ivesti staciakampio auksti ir ploti.
// Kai paspaudziamas mygtukas - paskaiciuojamas staciakampio plotas:
// Plotas  = x * y;




function plotas(){
let ivedimoLaukasPlotis = document.querySelector('#plotis');
console.log(ivedimoLaukasPlotis); // tikrina ar neveikia
let ivedimoLaukasAukstis = document.querySelector('#aukstis');
console.log(ivedimoLaukasAukstis); // tikrina ar neveikia
 let ivestasPlotis = parseFloat(ivedimoLaukasPlotis.value);
 let ivestasAukstis = parseFloat(ivedimoLaukasAukstis.value);

document.querySelector('p'). innerHTML = "plotis " + ivedimoLaukasPlotis.value + "<br>" + "auktis: " + ivedimoLaukasAukstis.value;
let plotoSkaiciavimas = ivestasPlotis * ivestasAukstis;
console.log(plotoSkaiciavimas);

let apskaiciuotasPlotas = document.querySelector('h3');
apskaiciuotasPlotas.innerHTML = " Plotas: " + plotoSkaiciavimas;


}
