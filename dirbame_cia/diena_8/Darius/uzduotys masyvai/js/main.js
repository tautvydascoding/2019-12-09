// ========js best practice & common mistakes (~2h)

// -------- --Array / Masyvai  TEORIJA (~2h)--------------------


// UZDUOTIS
// 1.1 sukurti tuscia masyva "prekiautojai"
// 1.2 uzpildyti masyva prekiaujanciomis imonemis pvz: senukai, ...
// 1.3 isvesti i console/ekrana "prekiautojai" masyva

// 2 pervadinti pirma stalciu pvz + "ir KO"
// 3 sukeisti antro ir trecio stalciu reiksmes vietomis.
// !negalima rasyti rankomis String (nes duomenys kinta, ir jus nezinote koki duomenys bus po savaites)

// 3.1  padaryti 3) uzdaviniui f-ja sukeistiMasyvo2elementus(x, y)

// function sukeistiMasyvo2elementus(x, y)
// {	var prekiautojai = ["senukai ", "maxima ", "iki ", "depo "]; // empty array
//
//   let a = prekiautojai[x];
//   prekiautojai[x]=prekiautojai[y];
//   prekiautojai[y]= a;
//
// document.querySelector('p').innerHTML = prekiautojai + " ";}
//
// sukeistiMasyvo2elementus(1, 3);


// UZDUOTIS:
// sukurti vienos masinos duomenu masyva:
//  pavadinimas, pravaziuota rida, kaina
// 1. isvesti masyvo duomenis
// 2. padidinti kaina: 100
// 3. padidinti rida: -50000
// 4. i masyva ideti papildomus duomenis: savininko vardas "Tomas"
// 4.1 atspausdinti visus pakeistus masyvo duomenis
// 5. i masyva ideti papildomus duomenis: masinos metai "2004"

// sunkesne:
// html elementus: article, h2, ... susikurti su javascript/ innerHTML
// 6. atspausdinti masyvo duomenis i ekrana:
// <article>
//      <h2> pavadinimas </h2>
//      <div> savininko vardas: ...</div>
//      <span> masinos metai: ...  Rida: ...</span>
//      i mygtuka ideti: masinos kaina ....
// </article>

//=============bootstrap---sm-md-lg-xl (30-60m)==========

// var masinos = ["BMW", 265000, 5999];
// var kaina;
// var rida;
//
// masinos[2] += 100;
// masinos[1] +=-50000;
// masinos[3] = "Tomas";
// masinos[4] = 2004;
//
//
// document.querySelector('p').innerHTML = "Marke: " + masinos[0] + " / Rida: " + masinos[1] + " / Kaina: " + masinos[2]+ " / Pirkejas: " + masinos[3] + " / Metai: " + masinos[4];

// ========js best practice & common mistakes (~2h)


// -------- --Array / Masyvai  Methods (~2h)----------
// names = ["Tomas", "Pietkus", 25, "VDU - inzinerija"];
//
// console.log(names);
// UZDUOTIS; panaudoti masyvu Methods:

// .length
// .join()
// .shift()
// .pop()
// ...
// pvz    names.shift();

// =========================================================
// SAVARANKISKA UZDUOTIS  Array
// keliautojas = ["Tomas", "Pietkus", 25, "VDU - inzinerija"];
//
// // keliautojas.push("butelis vandens");
// // keliautojas.unshift("ziebtuvelis");
// //var y = keliautojas;
// //document.querySelector('h6').innerHTML =  y;
// //var x = keliautojas.join();
// keliautojas.splice(1, 1);
// var x = keliautojas;
// document.querySelector('p').innerHTML =  keliautojas;
// document.querySelector('h6').innerHTML =  x;
// 1. i masyvo gala ideti elmenta "butelis vandens"
// 2. i masyvo pradzia ideti elmenta "ziebtuvelis"
// 3. istrinti 3-cia elmenta

// --------GERESNI UZDAVINIAI-------:
// // 4. sukurti masyva (50 ilgumo) naudojant FOR ir uzpildyti visa skaiciais "0" (kiekvienas stalcius turi but lygus "0");
// var x = [];
// var y = 0;
// for (i = 0; i < 50; i++) {
//   x.push(y);
//   document.querySelector('p').innerHTML = x;
// }

// 5.1  sukurti masyva naudojant WHILE (50 ilgumo) ir uzpildyti visa skaiciumi 1;
// 5.2: kas antra ^ masyvo elementa pakeisti i "3"
// [1, 3, 1, 3, 1, 3, 1, 3, 1, 3, ....
// 5.3: kas 5-ta ^ masyvo elementa pakeisti i "9"
// [1, 3, 1, 3, 9, 3, 1, 3, 1, 9, ....

// var masyvas = [];
// var y = 1;
// i = 0;
// x = 0;
// while (i < 50) {
//
//
//   if (i % 2 == true) {
//     y = 3;
//     } else {
//     y = 1;
//   }
//
//   if (((i % 4 ) == 0) && (i != 0))
//   {
//     console.log(i);
//     masyvas.splice(i,1,9);
//   }
// masyvas.push(y);
// console.log(masyvas);
//
// document.querySelector('p').innerHTML = masyvas;
// i++;
// }


// ====================Scope====================
//   UZDUOTIS  A
// sukurti funkcija "printDuomenys()" ,
// funkcijoje sukurti kintamaji: var vardas = "Tomas"
// kuri  atspausdina i konsole  kintamaji "vardas"
// iskviesti f-ja

// function printDuomenys()
// {
//   let vardas = "Tomas";
//   document.querySelector("p").innerHTML = vardas;
// }
//
// printDuomenys();
// console.log(vardas); // klaida

//   UZDUOTIS  B
//  dabar, pabandykite po f-ja (uz jos ribu) i konsole atspausdinti kintamaji "vardas"
//  console.log( vardas) ;
// NOTE: gaunate kalida ar ne?


// //================local && global=========
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
// var katinas = "juodas";
// function skacai(){
//   var katinas = "baltas";
// }
// skacai();
// console.log(katinas);

//------------------------------------------------

// var katinas = "juodas";
//
// function test2() {
//     var katinas = "baltas";
//    console.log("1 katinas:", katinas);
//    console.log("2 this.katinas - f-jos viduje: ",  this.katinas);
// }
// test2();
//
// console.log("3 katinas:", katinas);

//==========================

// var xx = 10;
//
// function isvesti( xx ) {
//     xx = 20;
//     console.log( "1. xx:", xx);
//     console.log( "2. this.xx:",  this.xx);
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


function printAntraste(x) {
  document.querySelector("h6").innerHTML += x;
  console.log(x);
}
function printStraipsnis(x) {
  document.querySelector("p").innerHTML += "<p>" + x + "</p>";
console.log(x);
}

printAntraste("BMW pinga, nes daugeja");
printStraipsnis("Lorem ipsum dolor sit amet, consectetur adipisicing elit,");

printAntraste("Greik pageres orai");
printStraipsnis("Lorem ipsum dolor sit amet, consectetur adipisicing elit, ");

printAntraste("Vasaros vis salteja");
printStraipsnis("Lorem ipsum dolor sit amet, consectetur adipisicing elit, ");





//  1.2 UZDUOTIS
//  sukurti funkcija "printStraipsnis(x)"
//  kuri atspausdina i DOM-a (ekrana) "<p>" + x + "</p>" (paduota teksta tarp "p")

//  1.3 UZDUOTIS
//  iskviesti f-jaS 3 kartus, kad atspausdintu 3 skirtingas antrastes IR 3 straipnsnius:  "Lorem1 ....",   "Lorem2 ....",   "Lorem3 ....",


//=======================================
