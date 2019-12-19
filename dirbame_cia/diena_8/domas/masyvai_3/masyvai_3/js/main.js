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

console.log(names.lenght);
console.log(names.join("*"));

console.log(names.shift());
console.log(names);
console.log(names.pop())
console.log(names);
// =========================================================
// SAVARANKISKA UZDUOTIS  Array
keliautojas = ["Tomas", "Pietkus", 25, "VDU - inzinerija"];

// 1. i masyvo gala ideti elmenta "butelis vandens"
// 2. i masyvo pradzia ideti elmenta "ziebtuvelis"
// 3. istrinti 3-cia elmenta

keliautojas.push("butelis vandens");
console.log(keliautojas);
keliautojas.unshift("ziebtubelis");
console.log(keliautojas);


// --------GERESNI UZDAVINIAI-------:
// 4. sukurti masyva (50 ilgumo) naudojant FOR ir uzpildyti visa skaiciais "0" (kiekvienas stalcius turi but lygus "0");
let masyvas1 = [];

for (var i = 0; i < 50; i++) {
  masyvas1[i] = 0;
}
console.log("masyvas:", masyvas1);


// 5.1  sukurti masyva naudojant WHILE (50 ilgumo) ir uzpildyti visa skaiciumi 1;
let masyvas2 = [];
let i1 = 0;
while ( i1 < 51 ){
//console.log("ciklas" + i1);
  masyvas2[i1] = 1;

  if (i1 > 51){
    break;
  }

i1++;

}

console.log(masyvas2);



// 5.2: kas antra ^ masyvo elementa pakeisti i "3"
// [1, 3, 1, 3, 1, 3, 1, 3, 1, 3, ....
//let masyvas2 = [];
let i2 = 0;

while ( i2 < 51){
//i2 += 2;
//console.log("ciklas: " + i2);
masyvas2 [i2] = 3;
i2 += 2;
}

console.log(masyvas2);



// 5.3: kas 5-ta ^ masyvo elementa pakeisti i "9"
// [1, 3, 1, 3, 9, 3, 1, 3, 1, 9, ....

let i3 = 0;

while ( i3 < 51){

  if(i3%5 == 0){

masyvas2 [i3] = 9;
}
i3++;


}
console.log(masyvas2);// galima atlikti su moduline dalyba









//=============bootstrap---sm-md-lg-xl (30-60m)==========
