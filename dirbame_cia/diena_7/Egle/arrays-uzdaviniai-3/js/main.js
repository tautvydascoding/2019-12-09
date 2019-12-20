// test
console.log("labas");
// alert("issokanti zinute");
// ========js best practice & common mistakes (~2h)


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

console.log(names.length);

console.log(names.join("-"));

names.shift();
console.log(names);

names.pop();
console.log(names);



// =========================================================
// SAVARANKISKA UZDUOTIS  Array
keliautojas = ["Tomas", "Pietkus", 25, "VDU - inzinerija"];

// 1. i masyvo gala ideti elmenta "butelis vandens"

keliautojas.push("Butelis Vandens");
console.log(keliautojas);

// 2. i masyvo pradzia ideti elmenta "ziebtuvelis"

keliautojas.unshift("Ziebtuvelis");
console.log(keliautojas);

// 3. istrinti 3-cia elmenta

delete keliautojas[3];
console.log(keliautojas);

// --------GERESNI UZDAVINIAI-------:
// 4. sukurti masyva (50 ilgumo) naudojant FOR ir uzpildyti visa skaiciais "0" (kiekvienas stalcius turi but lygus "0");

let masyvas = [];

for (var i = 0; i < 50; i++) {
  masyvas[i] = 0; // kad spausdintu 0 x 50, nurodyti, kad lygi masyvui priklausanti "i"
}

// spausdinti iskelus is ciklo, kad spausdintu tik viena karta:
console.log(masyvas);



// 5.1  sukurti masyva naudojant WHILE (50 ilgumo) ir uzpildyti visa skaiciumi 1;

let masyvas2 = [];
let j = 0;
while (j < 50) {
  masyvas2[j] = 1;
  j++;
}
console.log(masyvas2);
// 5.2: kas antra ^ masyvo elementa pakeisti i "3"
// [1, 3, 1, 3, 1, 3, 1, 3, 1, 3, ....

for (var i = 0, x = 0; i < masyvas2.length; i+=2) {
  masyvas2[i] = 3;
}
console.log(masyvas2);


// 5.3: kas 5-ta ^ masyvo elementa pakeisti i "9"
// [1, 3, 1, 3, 9, 3, 1, 3, 1, 9, ....

for (var i = 0, x = 0; i < masyvas2.length; i+=5) {
  masyvas2[i] = 9;
}
console.log(masyvas2);

//=============bootstrap---sm-md-lg-xl (30-60m)==========
