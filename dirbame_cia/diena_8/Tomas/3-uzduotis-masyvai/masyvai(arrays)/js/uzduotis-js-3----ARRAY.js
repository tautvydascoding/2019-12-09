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

// =========================================================
// SAVARANKISKA UZDUOTIS  Array
keliautojas = ["Tomas", "Pietkus", 25, "VDU - inzinerija"];

// 1. i masyvo gala ideti elmenta "butelis vandens"

keliautojas.push("butelis vandens");
console.log(keliautojas);

// 2. i masyvo pradzia ideti elmenta "ziebtuvelis"

keliautojas.unshift("ziebtuvelis");
console.log(keliautojas);

// 3. istrinti 3-cia elmenta

delete keliautojas[4];
console.log(keliautojas);


// --------GERESNI UZDAVINIAI-------:
// 4. sukurti masyva (50 ilgumo) naudojant FOR ir uzpildyti visa skaiciais
// "0" (kiekvienas stalcius turi but lygus "0");

let masyvas = [];
console.log(masyvas);

for ( i = 0; i < 50; i++) {
masyvas[i] = 0;
}
console.log(masyvas);

// 5.1  sukurti masyva naudojant WHILE (50 ilgumo) ir uzpildyti visa skaiciumi 1;

let masyvas2 = [];
i = 0;

while ( i < 50 ) {
  masyvas2[i] = 1;
  i++;
}

console.log(masyvas2);

// 5.2: kas antra ^ masyvo elementa pakeisti i "3"
// [1, 3, 1, 3, 1, 3, 1, 3, 1, 3, ....

for ( i = 1; i < 50; i+=2) {
masyvas2[i] = 3;
}
console.log(masyvas2);


// 5.3: kas 5-ta ^ masyvo elementa pakeisti i "9"
// [1, 3, 1, 3, 9, 3, 1, 3, 1, 9, ....

for ( i = 5; i < 50; i+=5) {
masyvas2[i] = 9;
}
console.log(masyvas2);


//=============bootstrap---sm-md-lg-xl (30-60m)==========
