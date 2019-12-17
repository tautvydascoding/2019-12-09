// test
console.log("labas");
// alert("issokanti zinute");


// UZDUOTIS
// sukaiciuoti kokia jusu atlyginima i rankas, jeigu:
// atlyginimas ant popieriaus 890
// o mokesciai:
// PSD 9%
// VSD 24% nuo puses atlyginimo
// sukikurti 4-5 kintamuosius
// ir apskaiciuoti atlyginima i rankas


let atlyginimasAntPopieriaus = 890;
const psd = atlyginimasAntPopieriaus * 9 / 100;
const vsd = (atlyginimasAntPopieriaus / 2) * 24 / 100;
let mokesciai = psd + vsd;
// console.log(psd);
// console.log(vsd);

let atlyginimas = atlyginimasAntPopieriaus - mokesciai;
console.log("I rankas gauna: ", atlyginimas, "EUR");
