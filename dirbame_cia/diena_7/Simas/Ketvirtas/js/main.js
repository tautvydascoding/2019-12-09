// test
console.log("labas");
// alert("issokanti zinute");
// document.write("labas ekrane");
// -------- --Array / Masyvai  Methods (~2h)----------
names = ["Tomas", "Pietkus", 25, "VDU - inzinerija"];

console.log(names);
// UZDUOTIS; panaudoti masyvu Methods:

// .length
// .join()
// .shift()
// .pop()
// ...
// pvz    names.shift();


// SAVARANKISKA UZDUOTIS  Array
keliautojas = ["Tomas", "Pietkus", 25, "VDU - inzinerija"];

// 1. i masyvo gala ideti elmenta "butelis vandens"
// 2. i masyvo pradzia ideti elmenta "ziebtuvelis"
// 3. istrinti 3-cia elmenta
keliautojas.push("butelis vandens");
console.log(keliautojas);
keliautojas.unshift("ziebtuvelis");
console.log(keliautojas);
delete keliautojas[3];
console.log(keliautojas);


// --------GERESNI UZDAVINIAI-------:
// 4. sukurti masyva (50 ilgumo) naudojant FOR ir uzpildyti visa skaiciais "0" (kiekvienas stalcius turi but lygus "0");

// let i =0;
// let masyvas = [];
// for ( i = 0; i < 50; i++) {
//   masyvas[i] = 0;
// }
// console.log(masyvas);


// 5.1  sukurti masyva naudojant WHILE (50 ilgumo) ir uzpildyti visa skaiciumi 1;
// 5.2: kas antra ^ masyvo elementa pakeisti i "3"
// [1, 3, 1, 3, 1, 3, 1, 3, 1, 3, ....
// 5.3: kas 5-ta ^ masyvo elementa pakeisti i "9"
// [1, 3, 1, 3, 9, 3, 1, 3, 1, 9, ....

let i = 0;
let masyvas = [];
while (i<50) {
  masyvas[i] = 1;
  i++;
}
console.log(masyvas);
for ( i = 1; i < 50; i +=2) {
  masyvas[i] = 3;
}
console.log(masyvas);
for ( i = 4; i < 50; i +=5) {
  masyvas[i] = 9;
}
console.log(masyvas);
