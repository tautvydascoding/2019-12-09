// UZDUOTIS
// sukaiciuoti kokia jusu atlyginimas i rankas, jeigu:
// atlyginimas ant popieriaus 890
// o mokesciai:
// PSD 9%
// VSD 24% nuo puses atlyginimo
// sukikurti 4-5 kintamuosius
// ir apskaiciuoti atlyginima i rankas

//kintamieji

let atlyginimasAntPopieriaus = 890;

const psd = 9;
const vsd = 24;
let mokesciaiPSD = (atlyginimasAntPopieriaus * psd / 100);
let mokesciaiVSD = ((atlyginimasAntPopieriaus / 2) * vsd / 100);
let bendrimokesciai = (mokesciaiPSD + mokesciaiVSD);
let atlyginimasirankas = (atlyginimasAntPopieriaus - bendrimokesciai);


console.log("uzdirbant" ,atlyginimasAntPopieriaus );
console.log("i rankas" ,atlyginimasAntPopieriaus );
console.log("mokesciaiPSD" ,mokesciaiPSD );
console.log("mokesciaiVSD" ,mokesciaiVSD );
console.log("bendrimokesciai" ,bendrimokesciai );
console.log("atlyginimasirankas" ,atlyginimasirankas );
