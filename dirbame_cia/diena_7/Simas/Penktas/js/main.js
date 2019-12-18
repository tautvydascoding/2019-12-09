// test
console.log("labas");
// alert("issokanti zinute");
// document.write("labas ekrane");
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
// var x = "x -viesas ";
// function testLocalVar() {
//    var y = "y -vietinis ";
//    z = "z -viesas";
//    // console.log("x", x);
//    // console.log("y", y);
//    // console.log("z", z);
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

 // var katinas = "juodas";
 //
 // function test2() {
 //     var katinas = "baltas";
 //    console.log("1 katinas:", katinas);
 //    console.log("2 this.katinas - f-jos viduje: ",  this.katinas);
 // }
 // test2();
 // //
 // console.log("3 katinas:", katinas);

//==========================

 // var xx = 10;
 //
 // function isvesti( xx ) {
 //     xx = 20;
 //     console.log( "1. xx:", xx);
 //     console.log( "2. this.xx:",   this.xx);
 // }
 // isvesti();
 // console.log( "3. xx:", xx);


 //======================
 // var vardas = "Jonas";
 // function myName ( vardas ) {
 //     console.log( " vardas" + vardas);
     // console.log("this.vardas - f-jos viduje: ",  this.vardas);
 // }
 // myName("PETRAS");
//======================TEKSTO ISVEDIMAS===============


//  1.1 UZDUOTIS
//  sukurti funkcija "printAntraste(x)" ,
//  kuri atspausdina i DOM-a (ekrana) "x" reiksme
//  iskviesti f-ja 3 kartus, kad atspausdintu 3 skirtingas antrastes:  "BMW pinga, nes daugeja", "Greik pageres orai", "Vasaros vis salteja"
let x = "BMW pinga nes daugeja <br>";
function printAntraste() {
    document.write(x);
    x = "vasaros vis salteja <br>";
    document.write(x);
    x = "oras greit pageres <br>";
    document.write(x);
}
printAntraste();





//  1.2 UZDUOTIS
//  sukurti funkcija "printStraipsnis(x)"
//  kuri atspausdina i DOM-a (ekrana) "<p>" + x + "</p>" (paduota teksta tarp "p")

function printStraipsnis(x) {
  document.write("<p>"+x+"<p>");
}
printStraipsnis("kazkas");

//  1.3 UZDUOTIS
//  iskviesti f-jaS 3 kartus, kad atspausdintu 3 skirtingas antrastes IR 3 straipnsnius:  "Lorem1 ....",   "Lorem2 ....",   "Lorem3 ....",
function printStraipsnis(x) {
  document.write("<p>"+x+"<p>");
}
printStraipsnis("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
printStraipsnis("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
printStraipsnis("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");

//=======================================
