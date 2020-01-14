// test
console.log("labas");
// alert("issokanti zinute");
// apsilimui

var masyvas = [];
var min = 10;
var max = 100;
// 0 UZDUOTIS - pasikartoti:
// skaicius, kurie yra lyginiai i pakeisti i zodi "lyginis"

for (var i = 0; i < 100; i++) {
  masyvas[i] = 0;
}

for (var i = 0; i < masyvas.length; i+=2) {
  masyvas[i] = "lyginis";
}
console.log(masyvas);

// 1 UZDUOTIS:
// kursime nauja masyva uzpildyta, atsitiktiniais skaiciais nuo 10 - 100.
// masyvo ilgis 60
let antrasMasyvas = [];

for (var i = 0; i < 60; i++) {
  antrasMasyvas[i] = Math.floor(Math.random() * 90) + 10;
}
console.log(antrasMasyvas);


// 2 UZDUOTIS:
// burtu keliu masyvo narius, su 10 % tikimybe paversti negiamais  ( padauginti is  -1)
// pvz:
// var a = Math.random(); // nuo 0 iki 1 (1- neiskaitant)
// if ( a <= 0.1) {
//     console.log( "laimejai" );
// }



// 3 UZDUOTIS:
// visus skaicius paversti teigiamas (is masyvo parts)
// 4 UZDUOTIS:
// surasti geriausia darbuotoja
// 5 UZDUOTIS:
//surasti blogiausia darbuotoja
