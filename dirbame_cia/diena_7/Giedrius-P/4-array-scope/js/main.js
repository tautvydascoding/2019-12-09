// ====================Scope====================
//   UZDUOTIS  A
// sukurti funkcija "printDuomenys()" ,
// funkcijoje sukurti kintamaji: var vardas = "Tomas"
// kuri  atspausdina i konsole  kintamaji "vardas"
// iskviesti f-ja


//   UZDUOTIS  B
//  dabar, pabandykite po f-ja (uz jos ribu) i konsole atspausdinti kintamaji "vardas"
//  console.log( vardas) ;
// NOTE: gaunate kalida ar ne?


//================local && global=========
var x = "x -viesas ";
function testLocalVar() {
   var y = "y -vietinis ";
   z = "z -viesas";
   console.log("x", x);
   console.log("y", y);
   console.log("z", z);
}
testLocalVar();
console.log("x", x);
console.log("z", z);
// console.log("y", y);

//------
 // UZDUOTIS
 // A) sukurti kintamaji var katinas = "juodas"
 // B) sukurti f-ja
 // C) sukurti f-jos viduje kintamaji var katinas = "baltas"
 // D) atspauzdinti abu f-jos viduje
 // E) atspauzdinti  uz f-jos

 var katinas = "juodas";

 function test2() {
     var katinas = "baltas";
    console.log("1 katinas:", katinas);
    console.log("2 this.katinas - f-jos viduje: ",  this.katinas);
 }
 test2();

 console.log("3 katinas:", katinas);

//==========================

 // var xx = 10;
 //
 // function isvesti( xx ) {
 //     xx = 20;
 //     console.log( "1. xx:", xx);
 //     console.log( "2. this.xx:",   this.xx);
 // }
 // console.log( "3. xx:", xx);


 //======================
 // var vardas = "Jonas";
 // function myName ( vardas ) {
 //     console.log( " vardas" + vardas);
 //     console.log("this.vardas - f-jos viduje: ",  this.vardas);
 // }
 // myName("PETRAS");
//======================TEKSTO ISVEDIMAS===============


//  1.1 UZDUOTIS
//  sukurti funkcija "printAntraste(x)" ,
//  kuri atspausdina i DOM-a (ekrana) "x" reiksme
//  iskviesti f-ja 3 kartus, kad atspausdintu 3 skirtingas antrastes:  "BMW pinga, nes daugeja", "Greik pageres orai", "Vasaros vis salteja"
var x = "BMW pinga, nes daugeja";
function printAntraste(x){
  document.querySelector('div').innerHTML += "<h1>" + x + "</h1>";
  document.querySelector('div').innerHTML += "<h1>" + this.x + "</h1>";
  x = "greit pageres orai";
  document.querySelector('div').innerHTML += "<h1>" + x + "</h1>";

}



//  1.2 UZDUOTIS
//  sukurti funkcija "printStraipsnis(x)"
//  kuri atspausdina i DOM-a (ekrana) "<p>" + x + "</p>" (paduota teksta tarp "p")
var straipsnis = "dsajcdsaockpodsakcpoadskcpoadskpocdsacoad cpoadkcpoaskd cpodsacpo kdsapock a"
function printStraipsnis(straipsnis){
  document.querySelector('h1').innerHTML += "<p>" + straipsnis + "</p>";
  document.querySelector('h1').innerHTML += "<p>" + this.straipsnis + "</p>";
  straipsnis = "greit pageres oraigreit pageres oraigreit pageres oraigreit pageres oraigreit pageres oraigreit pageres orai";
  document.querySelector('h1').innerHTML += "<p>" + straipsnis + "</p>";
}

//printStraipsnis("vasaros vis saltejavasaros vis saltejavasaros vis saltejavasaros vis saltejavasaros vis saltejavasaros vis saltejavasaros vis saltejavasaros vis salteja");
//  1.3 UZDUOTIS
//  iskviesti f-jaS 3 kartus, kad atspausdintu 3 skirtingas antrastes IR 3 straipnsnius:  "Lorem1 ....",   "Lorem2 ....",   "Lorem3 ....",

function printstrapsnisantraste(x,y){
  document.querySelector('article').innerHTML += "<h1>" + x + "</h1>";
  document.querySelector('article').innerHTML += "<p>" + y + "</p>";
  x = "Greik pageres orai";
  straipsnis = "vasaros vis saltejavasaros vis saltejavasaros vis saltejavasaros vis saltejavasaros vis salte";
}

printstrapsnisantraste("greit pageres orai", "greit pageres oraigreit pageres oraigreit pageres oraigreit pageres oraigre");
printstrapsnisantraste(x,straipsnis);
printstrapsnisantraste(this.x, this.straipsnis);
//=======================================
