
console.log("labas");

// UZDUOTIS
// sukaiciuoti kokia jusu atlyginima i rankas, jeigu:
// atlyginimas ant popieriaus 890
// o mokesciai:
// PSD 9%
// VSD 24% nuo puses atlyginimo
// sukikurti 4-5 kintamuosius
// ir apskaiciuoti atlyginima i rankas


let atlyginimasPopierius = 890;
const psd = 9;
const vsd = 24;
let iRankas = 0;
let z = 0;

z = (atlyginimasPopierius/2) * (vsd/100) + (atlyginimasPopierius) 
* (psd/100);

iRankas = atlyginimasPopierius - z;

console.log("i rankas gausiu",iRankas);
