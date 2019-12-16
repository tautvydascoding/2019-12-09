
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
let atlyginimasIrankas;

let psdSuma = atlyginimasAntPopieriaus/100*psd;
let vsdSuma = atlyginimasAntPopieriaus/2/100*vsd;

atlyginimasIrankas = atlyginimasAntPopieriaus - psdSuma - vsdSuma;

console.log(atlyginimasIrankas);
