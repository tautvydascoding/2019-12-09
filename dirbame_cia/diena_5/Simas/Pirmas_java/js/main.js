// test
console.log("labas");
// alert("issokanti zinute");
document.write("labas again");


// UZDUOTIS
// sukaiciuoti kokia jusu atlyginima i rankas, jeigu:
// atlyginimas ant popieriaus 890
// o mokesciai:
// PSD 9%
// VSD 24% nuo puses atlyginimo
// sukikurti 4-5 kintamuosius
// ir apskaiciuoti atlyginima i rankas


let AntPopieriaus = 890;
const psd = 9;
const vsd = 24;
let iRankas;

iRankas = AntPopieriaus - ((AntPopieriaus / 2) * (vsd / 100)+(AntPopieriaus * (psd / 100)))


console.log("i rankas:", iRankas);
