// test
console.log("labas");
// alert("issokanti zinute");
document.write("labas ekrane");
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
// 2. i masyvo pradzia ideti elmenta "ziebtuvelis"
keliautojas.unshift("ziebtuvelis");
// 3. istrinti 3-cia elmenta
delete keliautojas[3];
console.log("po pakeitimu keliautojas:", keliautojas);

// --------GERESNI UZDAVINIAI-------:
// 4. sukurti masyva (50 ilgumo) naudojant FOR ir uzpildyti visa skaiciais "0"
// (kiekvienas stalcius turi but lygus "0");
let masyvas1 = [];
for (var i = 0; i < 50; i++) {
    masyvas1[i] = 0;
}
console.log("masyvas1:", masyvas1);
// 5.1  sukurti masyva naudojant WHILE (50 ilgumo) ir uzpildyti visa skaiciumi 1;
let masyvas2 = [];
i = 0;
while ( i < 50) {
    // console.log("ciklas" + i); // test

    masyvas2[i] = 1;
    // nebutina apsauga
    if (i == 10000) {
        console.log("if 10000");
        break;
    }
    i++; // !!! nepamirsti didinti i, kad kazkada ciklas pasibaigtu
}
console.log("masyvas2:", masyvas2);

// 5.2: kas antra ^ masyvo elementa pakeisti i "3"
// [1, 3, 1, 3, 1, 3, 1, 3, 1, 3, ....
for (var i = 1; i < masyvas2.length; i+=2) {
    masyvas2[i] = 3;
}
console.log("masyvas2  kas 2 bus 3:", masyvas2);

// 5.3: kas 5-ta ^ masyvo elementa pakeisti i "9"
// [1, 3, 1, 3, 9, 3, 1, 3, 1, 9, ....
for (var i = 1; i < masyvas2.length; i++) { 
    if ( i % 5 == 0) {
        masyvas2[i] = 9;
    }
}
console.log("masyvas2 kas 5 bus 9:", masyvas2);

//=============bootstrap---sm-md-lg-xl (30-60m)==========
