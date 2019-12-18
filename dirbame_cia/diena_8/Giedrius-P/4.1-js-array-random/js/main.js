// apsilimui

var masyvas = [];
var min = 10;
var max = 100;
// 0 UZDUOTIS - pasikartoti:
// skaicius, kurie yra lyginiai i pakeisti i zodi "lyginis"


// 1 UZDUOTIS:
// kursime nauja masyva uzpildyta, atsitiktiniais skaiciais nuo 10 - 100.
// masyvo ilgis 60
function MasyvoUzpildymas(){
for (i=0; i < 60; i++){
  masyvas[i] = Math.floor(Math.random() * (max - min)) + min;
}
console.log(masyvas);
}
MasyvoUzpildymas();
// 2 UZDUOTIS:
// burtu keliu masyvo narius, su 10 % tikimybe paversti negiamais  ( padauginti is  -1)
// pvz:
function neigiamas(){
for (i=0; i < 60; i++){
  var a = Math.random();
  if ( a <= 0.1){
        masyvas[i] = masyvas[i]* (-1);
    }
}
console.log(masyvas);
}
neigiamas();

// var a = Math.random(); // nuo 0 iki 1 (1- neiskaitant)
// if ( a <= 0.1) {
//     console.log( "laimejai" );
// }

// 3 UZDUOTIS:
// visus skaicius paversti teigiamas (is masyvo parts)
function teigiamas(){
  for (i=0; i <60; i++){
    if (masyvas[i] < 0)
    masyvas[i] = masyvas[i]* (-1);
  }
  console.log(masyvas);
}

teigiamas();
// 4 UZDUOTIS:
// surasti geriausia darbuotoja
function maximum(){
  let max = -9999;
  for (i=0; i < 60; i++){
    if(max < masyvas[i]){
      max = masyvas[i];
    }
  }
  console.log(max);
}
maximum();

function minimum(){
  let min = 9999;
  for (i=0; i < 60; i++){
    if(min > masyvas[i]){
      min = masyvas[i];
    }
  }
  console.log(min);
}
minimum();

function lyginiai(){
  for (i=0; i < 60; i++){
    if(Number.isInteger(masyvas[i]/2)){
      console.log("lyginis");
    } else { console.log(masyvas[i]);}
  }
}

lyginiai();
// 5 UZDUOTIS:
//surasti blogiausia darbuotoja
