// test
console.log("labas");
// alert("issokanti zinute");
document.write("labas ekrane");

// UZDUOTIS
// sukaiciuoti kokia jusu atlyginima i rankas, jeigu:
// atlyginimas ant popieriaus 890
// o mokesciai:
// PSD 9%
// VSD 24% nuo puses atlyginimo
// sukikurti 4-5 kintamuosius
// ir apskaiciuoti atlyginima i rankas


let atlyginimasAntPopieriaus = 890;
const psd = 0.09;
vsd = 0.24;
let mokesciai = (atlyginimasAntPopieriaus)

function algosApskaiciavimas (atlyginimasAntPopieriaus, psd, vsd ){

var psd1 = atlyginimasAntPopieriaus * psd;
var vsd1 = atlyginimasAntPopieriaus/2 * vsd;
var algaIrankas = (atlyginimasAntPopieriaus - psd1 - vsd1);



console.log(algaIrankas);

document.write(algaIrankas);



}
algosApskaiciavimas(atlyginimasAntPopieriaus,psd,vsd);
//
