// ====================Scope====================
//   UZDUOTIS  A
// sukurti funkcija "printDuomenys()" ,
// funkcijoje sukurti kintamaji: var vardas = "Tomas"
// kuri  atspausdina i konsole  kintamaji "vardas"
// iskviesti f-ja
  function printDuomenys(){
    let vardas = "Tomas";
    console.log(vardas);
  }
  printDuomenys();

//   UZDUOTIS  B
//  dabar, pabandykite po f-ja (uz jos ribu) i konsole atspausdinti kintamaji "vardas"
//  console.log(vardas);
// NOTE: gaunate klaida ar ne?
//console.log(vardas); // gaunam klaida!

//================local && global=========
// var x = "x -viesas ";
// function testLocalVar() {
//    var y = "y -vietinis ";
//    z = "z -viesas";
//    console.log("x", x);
//    console.log("y", y);
//    console.log("z", z);
// }
// testLocalVar();
// console.log("x", x);
// console.log("z", z);
// console.log("y", y);

//------
 // UZDUOTIS
 // A) sukurti kintamaji var katinas = "juodas"
 // B) sukurti f-ja
 // C) sukurti f-jos viduje kintamaji var katinas = "baltas"
 // D) atspauzdinti abu f-jos viduje
 // E) atspauzdinti  uz f-jos
 // let katinas = "juodas";
 // function koksKatinas() {
 //   let katinas = "baltas";
 //   console.log(katinas);
 // }
 // koksKatinas();
 // console.log(katinas);
 var katinas = "juodas";

 function test2() {
     var katinas = "baltas";
    console.log("1 katinas:", katinas);
    console.log("2 this.katinas - f-jos viduje: ",  this.katinas);
 }
 test2();

 console.log("3 katinas:", katinas);

//==========================

 var xx = 10;

 function isvesti( xx ) {
     xx = 20;
     console.log( "1. xx: ", xx);
     console.log( "2. this.xx: ",   this.xx);
 }
 console.log( "3. xx: ", xx);


 //======================
 var vardas = "Jonas";
 function myName ( vardas ) {
     console.log( " vardas " + vardas);
     console.log("this.vardas - f-jos viduje: ",  this.vardas);
 }
 myName("PETRAS");
//======================TEKSTO ISVEDIMAS===============


//  1.1 UZDUOTIS
//  sukurti funkcija "printAntraste(x)" ,
//  kuri atspausdina i DOM-a (ekrana) "x" reiksme
//  iskviesti f-ja 3 kartus, kad atspausdintu 3 skirtingas antrastes:  "BMW pinga, nes daugeja", "Greik pageres orai", "Vasaros vis salteja"
  function printAntraste(x){
    document.querySelector("body").innerHTML +="<h1>" + x + "</h1><br>";
  }
  printAntraste("BMW pinga, nes daugeja");
  printAntraste("Greik pageres orai");
  printAntraste("Vasaros vis salteja");
//  1.2 UZDUOTIS
//  sukurti funkcija "printStraipsnis(x)"
//  kuri atspausdina i DOM-a (ekrana) "<p>" + x + "</p>" (paduota teksta tarp "p")
function printStraipsnis(x){
  document.querySelector("body").innerHTML += "<p>" + x + "</p>"
}
printStraipsnis("Tekstas tekstas tekstas tekstas tekstas tekstas tekstas tekstas ")
//  1.3 UZDUOTIS
//  iskviesti f-jaS 3 kartus, kad atspausdintu 3 skirtingas antrastes IR 3 straipnsnius:  "Lorem1 ....",   "Lorem2 ....",   "Lorem3 ....",
printAntraste("BMW pinga, nes daugeja");
printStraipsnis("Lorem1");
printAntraste("Greik pageres orai");
printStraipsnis("Lorem2");
printAntraste("Vasaros vis salteja");
printStraipsnis("Lorem3");

//=======================================
