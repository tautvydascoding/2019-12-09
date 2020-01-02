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
// sukeistiMasyvo2elementus(1, 2);


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
// 4. sukurti masyva (50 ilgumo) naudojant FOR ir uzpildyti visa skaiciais "0" (kiekvienas stalcius turi but lygus "0");
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
//
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
//    katinas = "baltas";
//   let suo = "baltas";
// }
// skacai();
// console.log(katinas);
// console.log(suo);

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

//  1.2 UZDUOTIS
//  sukurti funkcija "printStraipsnis(x)"
//  kuri atspausdina i DOM-a (ekrana) "<p>" + x + "</p>" (paduota teksta tarp "p")

//  1.3 UZDUOTIS
//  iskviesti f-jaS 3 kartus, kad atspausdintu 3 skirtingas antrastes IR 3 straipnsnius:  "Lorem1 ....",   "Lorem2 ....",   "Lorem3 ....",


//=======================================
//
// function printAntraste(x) {
//   document.querySelector("h6").innerHTML += x;
//   console.log(x);
// }
// function printStraipsnis(x) {
//   document.querySelector("p").innerHTML += "<p>" + x + "</p>";
// console.log(x);
// }
//
// printAntraste("BMW pinga, nes daugeja");
// printStraipsnis("Lorem ipsum dolor sit amet, consectetur adipisicing elit,");
//
// printAntraste("Greik pageres orai");
// printStraipsnis("Lorem ipsum dolor sit amet, consectetur adipisicing elit, ");
//
// printAntraste("Vasaros vis salteja");
// printStraipsnis("Lorem ipsum dolor sit amet, consectetur adipisicing elit, ");




// UZDUOTIS 1:
// SUKURTI DVI F-JAS:
// viena pasisveikina "sveikinuosi()"
// kita atsisveikina "atsisveikinu()"

// UZDUOTIS 1.1
// patobulinti f-ja, kuri sveikinasi, kad ji papildoma argumenta "callback"  / "iskviestiPabaigusDarbus"

// UZDUOTIS 1.2
// iskviesti pasisveikinimo f-ja, ir jai padduoti atsisveikino f-ja

// function sveikinuosi(funkcijosPavadinimas)
// { console.log("labutaitis");
// funkcijosPavadinimas();
// if (funkcijosPavadinimas!= null || funkcijosPavadinimas != undefined) {
//
// }
// }
// let atsisveikinu = function () // arba  function atsisveikinu();
// {
//   console.log("ate");
// };
//
//
// sveikinuosi(atsisveikinu)
//
// sveikinuosi (function() {console.log("anonimine!!!");}); // anonimine funkcija
// (function() {console.log("anonimine pati save iskviecia!!!"); })();
//function atsisveikinu(){



// console.log("labas");
//
// =================taisyklingas Array copy  =================
// var array = ['a', 'b', 'c'];  // Becomes arr1 = ['a', 'b', 'c']
// //var kopijaNEGERAI =  array; // !!! Blogi  - sukurs susietaja kopija ir redaguojant keisis abu masyvai
// var kopija1 = array.slice(0);   // Becomes arr2a = ['a', 'b', 'c'] - deep copy
// var kopija2 = array.concat(  );   // Becomes arr2b = ['a', 'b', 'c'] - deep copy

// ================= ========= ======== ========
// ieskomiZmones = [2, 16, 17, 18, 19, 25];
//
// var lastNames = ["Mcdowell", "Gates", "Mccall", "Cisneros", "Hancock", "Gaines", "Juarez", "Nolan", "Barajas", "Ware", "Orr", "Bell", "Donovan", "Rojas", "Stevenson", "Long", "Hays", "Gibson", "Meyer", "Sims", "Mcintosh", "Craig", "Haney", "Cunningham", "Hunt", "Montgomery", "Spears", "Cooke", "Gregory", "Mcknight", "Fernandez", "Hendrix", "Patton", "Bond", "Skinner", "Randolph", "Montes", "Guerra", "Bowen", "Potts", "Dyer", "Riley", "Rodgers", "Schroeder", "Ferguson", "Garrett", "Rush", "Moon", "Whitney", "Mcdaniel"];

// 1A) surasti vardu masyve, kelintas zmogus yra "Rico" (surasti pirmaji; sunkes- surasti visus riko)

// 1B) papildyti ^: jeigu tokio vardo neranda, isvesti VIENĄ pranesima "Nepavyko rasti...Bandykite kita zodi"

// function Paieska() {
//   let names = ["Enriqueta", "Sybil", "Piper", "Anh", "Carmelo", "Regan", "Synthia", "Newton", "Norbert", "Krystyna", "Fidelia", "Christoper", "Lewis", "Jeromy", "Joy", "Lorri", "Owen", "Rosenda", "Devora", "Treva", "Leanora", "Meghann", "Jacqueline", "Bunny", "Tenisha", "Rico", "Clementina", "Samella", "Rico", "Sandi", "Efrain", "Tena", "Vivan", "Hiedi", "Naida", "Evette", "Shane", "Freida", "Marielle", "Wynona", "Cheree", "Gaston", "Aja", "Timika", "Jude", "Griselda", "Luise", "Rico", "Minh", "Warren"];
//
//   let x = 0;
//   let VarduNrMasyvas = [x];
//   for (i = 0; i < names.length; i++) {
//     if (names[i] === "Rico") {
//       x = i;
//       VarduNrMasyvas.push(x);
//
//       document.querySelector("p").innerHTML = "Vardo Rico numeriai yra: " + VarduNrMasyvas;
//     }
//   }
//   if (x == 0) {
//     document.querySelector("p").innerHTML = "Vardo Rico sarase nera ";
//   }
// }
// Paieska();


// 2 UZDUOTIS (f-ja iekom stalciaus)
// parasyti funkcija, kuriai davus iekoma zodi , ji suranda jo vieta masyve (stalciaus numeri) ir si   numeri grazina
// eg: getStalciausNumeris( ieskomasTekstas)

// function getStalciausNumeris() {
//   let names = ["Enriqueta", "Rico", "Piper", "Anh", "Carmelo", "Regan", "Synthia", "Newton", "Norbert", "Krystyna", "Fidelia", "Christoper", "Lewis", "Jeromy", "Joy", "Lorri", "Owen", "Rosenda", "Devora", "Treva", "Leanora", "Meghann", "Jacqueline", "Bunny", "Tenisha", "Rico", "Clementina", "Samella", "Rico", "Sandi", "Efrain", "Tena", "Vivan", "Hiedi", "Naida", "Evette", "Shane", "Freida", "Marielle", "Wynona", "Cheree", "Gaston", "Aja", "Timika", "Jude", "Griselda", "Luise", "Rico", "Minh", "Warren"];
//   let lastNames = ["Mcdowell", "Gates", "Mccall", "Cisneros", "Hancock", "Gaines", "Juarez", "Nolan", "Barajas", "Ware", "Orr", "Bell", "Donovan", "Rojas", "Stevenson", "Long", "Hays", "Gibson", "Meyer", "Sims", "Mcintosh", "Craig", "Haney", "Cunningham", "Hunt", "Montgomery", "Spears", "Cooke", "Gregory", "Mcknight", "Fernandez", "Hendrix", "Patton", "Bond", "Skinner", "Randolph", "Montes", "Guerra", "Bowen", "Potts", "Dyer", "Riley", "Rodgers", "Schroeder", "Ferguson", "Garrett", "Rush", "Moon", "Whitney", "Mcdaniel"];
//   let ieskomiZmones = [2, 16, 17, 18, 19, 25]
//   let nr;
//   let pr;
//   let sk;
//   let j, k;
//   let Skaiciai = [];

//  let Pavardes =[pr];
// // console.log(names.length);
// // console.log(lastNames.length);
// //let vardas = "Gates"
// for (i = 0; i < names.length; i++) {
//         if (names[i] == "Rico") {
//       //vr = names[i];
//       vr = names[i]
//       pr = lastNames[i];
//       Pavardes.push(pr);
//
//       document.querySelector('p').innerHTML = vr + " " + Pavardes;
//     }
//   }

//  let Pavardes =[pr];
//         for (i = 0; i < ieskomiZmones.length; i++) {
// document.querySelector('p').innerHTML += names[ieskomiZmones[i]] + " " +lastNames[ieskomiZmones[i]] ;
//
//       }
//
//
// }
// getStalciausNumeris();

// uzduotis:----------------------------
// 3) rasti pavarde masyve esancio  zmogaus vardu "Freida" (pirmojo)
// 4) rasti visu zmoniu vardu "Rico" pavardes
// 5) Turime masyva su zmoniu nr.  ieskomiZmones = [2, 16, 17, 18, 19, 25];
// A) atspausdinti visus numerius
// B) isvesti ju pavardes ir vardus



// var a = Math.random(); // 0 - 1
// if ( a <= 0.1) {
//     console.log("laimejai");
// }


// 6. sukurti du masyvus (skirtingus)
// naudojant for cikla sujungti juos, kas antra elementa
// [pirmo masyvo, antro masyvo, pirmo masyvo, antro masyvo , ...]

// sunkesnis
// susikurti masyva su prekiu pavadinimais
// naudojant FOR  parasykite/pergrupuokite ji atvirksciai


let MasyvasA = [1, 2, 3, 4, 5, 6, 7];
let MasyvasB = ['A', 'B', 'C', 'D', 'E', 'F'];
let MasyvasC = [];
let x = 0;
let a = 0;
let b = 0;
let c = 0;
let i = 0;

// for (i=1; i<MasyvasA.length; i++)
// {if ((i%2)==true)
//   { a = MasyvasA[i];
//     b = MasyvasB[i];
//
//     MasyvasC.push(a);
//     MasyvasC.push(b);
//
//   }
//
// }
// console.log(MasyvasC);
b = MasyvasB.length;

for (i = 0; i < b; ){
  //while (b == 0); {
  b--;
  c = MasyvasB[b]
  MasyvasC.push(c);

}
console.log(MasyvasC);
