// ====================Scope====================
//   UZDUOTIS  A
// sukurti funkcija "printDuomenys()" ,
// funkcijoje sukurti kintamaji: var vardas = "Tomas"
// kuri  atspausdina i konsole  kintamaji "vardas"
// iskviesti f-ja
function printDuomenys() {
  var vardas = "Tomas";
  console.log(vardas);
}

printDuomenys();

//   UZDUOTIS  B
//  dabar, pabandykite po f-ja (uz jos ribu) i konsole atspausdinti kintamaji "vardas"
//  console.log( vardas) ;
// console.log(vardas);
// NOTE: gaunate kalida ar ne?

//================local && global=========
 var x = "x -viesas ";
 function testLocalVar() {

    z = "z -viesas";
    console.log("x", x);
    console.log("y", y);
    console.log("z", z);
}
   testLocalVar();
   console.log("x", x);
   console.log("z", z);
   console.log("y", y);
var y = "y -vietinis ";
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


 var xx = 10;

 function isvesti( xx ) {
     xx = 20;
     console.log( "1. xx:", xx);
     console.log( "2. this.xx:",   this.xx);
 }
 console.log( "3. xx:", xx);
 isvesti(20);


 //======================
 var vardas = "Jonas";
 function myName ( vardas ) {
     console.log( " vardas" + vardas);
     console.log("this.vardas - f-jos viduje: ",  this.vardas);
 }
 myName("PETRAS");
//======================TEKSTO ISVEDIMAS===============


//  1.1 UZDUOTIS
//  sukurti funkcija "printAntraste(x)" ,
//  kuri atspausdina i DOM-a (ekrana) "x" reiksme
//  iskviesti f-ja 3 kartus, kad atspausdintu 3 skirtingas antrastes:  "BMW pinga, nes daugeja", "Greik pageres orai", "Vasaros vis salteja"
let antraste001 = "BMW pinga, nes daugeja";
let antraste002 = "Greik pageres orai";
let antraste003 = "Vasaros vis salteja";

function printAntraste(x) {
  document.querySelector("main").innerHTML += "<p>" + x + "</p>";
}

printAntraste(antraste001);
printAntraste(antraste002);
printAntraste(antraste003);

//  1.2 UZDUOTIS
//  sukurti funkcija "printStraipsnis(x)"
//  kuri atspausdina i DOM-a (ekrana) "<p>" + x + "</p>" (paduota teksta tarp "p")
function printStraipsnis(x) {
  document.querySelector("body").innerHTML += "<p>" + x + "</p>";
}


//  1.3 UZDUOTIS
//  iskviesti f-jaS 3 kartus, kad atspausdintu 3 skirtingas antrastes IR 3 straipnsnius:  "Lorem1 ....",   "Lorem2 ....",   "Lorem3 ....",


//=======================================
// TRY  CATCH:   https://www.tutorialspoint.com/javascript/javascript_error_handling.htm



// pvz:

console.log(   "Labas"  );


   // var perkamuPrekiuKiekis = "";
   // var perkamuPrekiuKiekis = "Tomas";
   // var perkamuPrekiuKiekis = 1;

   var perkamuPrekiuKiekis = 20;
   
   try {
        if(perkamuPrekiuKiekis == "") throw "empty";
        if(isNaN(perkamuPrekiuKiekis)) throw "not a number";

        // paverciam i skaiciu
        perkamuPrekiuKiekis = Number(perkamuPrekiuKiekis);
        if(perkamuPrekiuKiekis < 0) throw "too low";
        if(perkamuPrekiuKiekis > 100) throw "too high";
   }
   catch ( klaida ) {
       console.log("Klaida: " + klaida );
   }
   finally {
       console.log("nesvarbu kas  - as visada suveiksiu");
   }

//