//TEST
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


let atlyginimas = 890;
let psd = 9 / 100;
let vsd = 24 / 100;

let rankospsd = atlyginimas * psd;
let rankosvsd = (atlyginimas / 2) * vsd;
let irankas = atlyginimas - rankospsd - rankosvsd;
console.log("Atlyginimas i rankas: ", irankas);
