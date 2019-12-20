// apsilimui

var masyvas = [];
var min = 10;
var max = 100;
// 0 UZDUOTIS - pasikartoti:
// skaicius, kurie yra lyginiai i pakeisti i zodi "lyginis"


// 1 UZDUOTIS:
// kursime nauja masyva uzpildyta, atsitiktiniais skaiciais nuo 10 - 100.
// masyvo ilgis 60
let arr = [];
arr.length = 50;
for(let i = 0; i < arr.length; i++){
arr[i] = Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(arr);
console.log("------2------");
// 2 UZDUOTIS:
// burtu keliu masyvo narius, su 10 % tikimybe paversti negiamais  ( padauginti is  -1)
// pvz:
for(let i = 0; i < arr.length; i++){
var a = Math.random() * 100; // nuo 0 iki 1 (1- neiskaitant)
if ( a <= 10) {
console.log(arr[i] *= -1);
  }
}
console.log("-----3------")
// 3 UZDUOTIS:
// visus skaicius paversti teigiamas (is masyvo parts)
for(let i = 0; i < arr.length; i++){
  if(arr[i] < 0){
  arr[i] *= -1;
//  return arr
  }
}
console.log(arr)
console.log("-----4------")
// 4 UZDUOTIS:
// surasti geriausia darbuotoja
let didziausias = 0;
for(let i = 0; i < arr.length; i++){
  if(arr[i] >= didziausias){
    didziausias = arr[i];
  }
}
console.log("didziausias skaicius", didziausias);
console.log("-----5------");
// 5 UZDUOTIS:
// surasti blogiausia darbuotoja
let maziausias = 100;
for(let i = 0; i < arr.length; i++){
  if(arr[i] < maziausias){
    maziausias = arr[i];
  }
}
console.log("maziausias skaicius", maziausias);
