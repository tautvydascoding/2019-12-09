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
const psd = 9;
const vsd = 24;
let mokesciai = (atlyginimasAntPopieriaus / 2) * (vsd/100)
                + (atlyginimasAntPopieriaus ) * (psd/100);

 let iRankas =  atlyginimasAntPopieriaus - mokesciai;

console.log("uzdirbant: ", atlyginimasAntPopieriaus );
console.log("i rankas gausiu: ", iRankas );
