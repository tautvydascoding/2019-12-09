// test
console.log("labas");
// alert("issokanti zinute");
document.write("labas ekrane");

// ================= ========= ======== ========
 ieskomiZmones = [2, 16, 17, 18, 19, 25];

var names = ["Enriqueta", "Sybil", "Piper", "Anh", "Carmelo", "Regan", "Synthia", "Newton", "Norbert", "Krystyna", "Fidelia", "Christoper", "Lewis", "Jeromy", "Joy", "Lorri", "Owen", "Rosenda", "Devora", "Treva", "Leanora", "Meghann", "Jacqueline", "Bunny", "Tenisha", "Rico", "Clementina", "Samella", "Rico", "Sandi", "Efrain", "Tena", "Vivan", "Hiedi", "Naida", "Evette", "Shane", "Freida", "Marielle", "Wynona", "Cheree", "Gaston", "Aja", "Timika", "Jude", "Griselda", "Luise", "Rico", "Minh", "Warren"];

var lastNames = ["Mcdowell", "Gates", "Mccall", "Cisneros", "Hancock", "Gaines", "Juarez", "Nolan", "Barajas", "Ware", "Orr", "Bell", "Donovan", "Rojas", "Stevenson", "Long", "Hays", "Gibson", "Meyer", "Sims", "Mcintosh", "Craig", "Haney", "Cunningham", "Hunt", "Montgomery", "Spears", "Cooke", "Gregory", "Mcknight", "Fernandez", "Hendrix", "Patton", "Bond", "Skinner", "Randolph", "Montes", "Guerra", "Bowen", "Potts", "Dyer", "Riley", "Rodgers", "Schroeder", "Ferguson", "Garrett", "Rush", "Moon", "Whitney", "Mcdaniel"];
// uzduotis:----------------------------
// 3) rasti pavarde masyve esancio  zmogaus vardu "Freida" (pirmojo)
// 4) rasti visu zmoniu vardu "Rico" pavardes
// 5) Turime masyva su zmoniu nr.  ieskomiZmones = [2, 16, 17, 18, 19, 25];
// A) atspausdinti visus numerius
// B) isvesti ju pavardes ir vardus
let i = 0;
function getLastName(name) {
  let nameFound = false;
  for ( i = 0; i < names.length; i++) {
    if (names[i] == name) {
      nameFound = true;
      console.log(name + " pavarde yra " + lastNames[i]);
    }
  }
  if (nameFound == false) {
    console.log("toks asmuo nerastas");
  }
}
// getLastName("Warren");

// ------------------------------
// function findPeople() {
//   let a = ieskomiZmones[0];
//   let b = ieskomiZmones[1];
//   let c = ieskomiZmones[2];
//   let d = ieskomiZmones[3];
//   let e = ieskomiZmones[4];
//   let f = ieskomiZmones[5];
//
//   for ( i = 0; i < names.length; i++) {
//     if (i === a) {
//       console.log(names[i]+" "+lastNames[i]);
//     } else if (i === b) {
//       console.log(names[i]+" "+lastNames[i]);
//     } else if (i === c) {
//       console.log(names[i]+" "+lastNames[i]);
//     } else if (i === d) {
//       console.log(names[i]+" "+lastNames[i]);
//     } else if (i === e) {
//       console.log(names[i]+" "+lastNames[i]);
//     } else if (i === f) {
//       console.log(names[i]+" "+lastNames[i]);
//     }
//   }
// }
// findPeople();
let q = 0;
for ( i = 0; i < names.length; i++) {
  for ( q = 0; q < ieskomiZmones.length; q++) {
    if (ieskomiZmones[q] === i) {
      console.log(names[i]+" "+lastNames[i]);
    }
  }
}
// --------------------------------------------------
// apsilimui

var masyvas = [3,1,6,7,3,8,1];
var min = 10;
var max = 100;
// 0 UZDUOTIS - pasikartoti:
// skaicius, kurie yra lyginiai i pakeisti i zodi "lyginis"

for ( i = 1; i < masyvas.length; i+=2) {
  masyvas[i] += " lyginis";
}
console.log(masyvas);
// 1 UZDUOTIS:
// kursime nauja masyva uzpildyta, atsitiktiniais skaiciais nuo 10 - 100.
// masyvo ilgis 60
let masyvas2 = [];
for ( i = 0; i < 60; i++) {
  masyvas2[i] = Math.floor(Math.random() * (max - min + 1) + min);
}
console.log(masyvas2);

// 2 UZDUOTIS:
// burtu keliu masyvo narius, su 10 % tikimybe paversti negiamais  ( padauginti is  -1)
// pvz:
// var a = Math.random(); // nuo 0 iki 1 (1- neiskaitant)
// if ( a <= 0.1) {
//     console.log( "laimejai" );
// }

for ( i = 0; i < masyvas2.length; i++) {
  let a = Math.random();
  if (a <= 0.1) {
    masyvas2[i] = masyvas2[i] * (-1);
  }
}
console.log(masyvas2);
// 3 UZDUOTIS:
// visus skaicius paversti teigiamas (is masyvo parts)
for ( i = 0; i < masyvas2.length; i++) {
  if (masyvas2[i] <= 0) {
    masyvas2[i] = masyvas2[i] * (-1);
  }
}
console.log(masyvas2);
// 4 UZDUOTIS:
// surasti geriausia darbuotoja
// 5 UZDUOTIS:
//surasti blogiausia darbuotoja




// sukurti f-ja getData(masyvas, x), kuri grazina is masyvo "masyvas" "x" stalciaus duomenis
//

function getData(masyvas2, x) {
  for ( i = 0; i < masyvas2.length; i++) {
    if (x === i) {
       console.log(masyvas2[i]);
    }
  }
}
getData(masyvas2, 2);


//  sukurti f-ja rikiuojaDid(masyvas), kuri grazina surikiuota masyva dedejimo tvarka
let r = 0;
function rikiuojaDid(masyvas3) {
  for ( r = 0; r < masyvas3.length; r++) {
    for ( i = 0; i < masyvas3.length; i++) {
      if (masyvas3[i] > masyvas3[i+1]) {
        let d = masyvas3[i];
        masyvas3[i] = masyvas3[i+1];
        masyvas3[i+1] = d;
      }
    }
  }
  console.log(masyvas3);
}
rikiuojaDid(masyvas2);
//  sukurti f-ja rikiuojaMaz(masyvas), kuri grazina surikiuota masyva mazejimo tvarka

function rikiuojaMaz(masyvas3) {
  for ( r = 0; r < masyvas3.length; r++) {
    for ( i = 0; i < masyvas3.length; i++) {
      if (masyvas3[i] < masyvas3[i+1]) {
        let d = masyvas3[i];
        masyvas3[i] = masyvas3[i+1];
        masyvas3[i+1] = d;
      }
    }
  }
  console.log(masyvas3);
}
rikiuojaMaz(masyvas2);

// 2) susikurti funkcija, kuri spausdina paduota skaiciu, kai paduodama reiksme (jeigu niekas nepaduodama: spausdina "-1")

function spausdina(m) {
  if (m == null || m == undefined) {
    console.log("-1");
  } else  {
    console.log(m);
  }
}
spausdina();

// sukurti f-ja rastiKiekElementaiPasiakrtoja(masyvas), to find the most frequent item of an array


var mf = 1;
var m = 0;
var item;
for ( i = 0; i < masyvas2.length; i++){
    for ( q = 0; q < masyvas2.length; q++){
        if (masyvas2[i] == masyvas2[q]){
         m++;
        } if (mf < m){
          mf = m;
          item = masyvas2[i];
        }
    }
    m = 0;
}
console.log(item + " ( " + mf + " times ) ") ;




// ——————————— Object ————————————————
// Uzduotis
// 1:  susiskurti darbuotojo "worker" obj., kuris saugo varda, pavarde, amziu, pagamintu detaliu skaiciu
// 2. sukurti “workers”  masyva. Masyvas, kuriame saugomi objektai. Kiekvienas obj saugo visa informacija apie konkretu darbuotoja:
    //    A) paleisti cikla ir uzpildyti "workers" masyva darbuotoju duomenimis (amzius ir pagamintu detaliu skaicius - burtu keliu)
   //	HINT: // !!!!! var naudojame, kad RAM'e / atmintyje sukurtu nauja kintamaji
// 3. sukurti f-ja, kuri i konsole atspausdiname masyva (pilna objektu)

// let worker = {vardas:"", pavarde:"", amzius:"" ,pagamintuDetaliuSkaicius:"" };
let workers = [];
for ( i = 0; i < names.length; i++) {
  let worker = {vardas: names[i],
    pavarde: lastNames[i],
    amzius: Math.round(Math.random() * (65 - 18 + 1) + 18),
    pagamintuDetaliuSkaicius: Math.round(Math.random() * 1000) };
  workers[i] = worker;
}
console.log(workers);
