// test
console.log("labas");
// alert("issokanti zinute");
document.write("labas again");

// 1 UZDUOTIS
// sukurti kintamuosius (ir jiems priskirti reiksmes):
// vardas, pavarde, amzius, atlyginimas
// ir panaudoti:
// console.log( vardas, pavarde);

let vardas = "Simas";
let pavarde = "Bakus";
let amzius = 22;
let atlyginimas = 700;

console.log(vardas, pavarde);

// teo:
//  typeof( k ); f-ja kuri isveda kintamojo tipa
// console.log(    typeof(vardas)  );
// console.log(    typeof(amzius)  );

//  2 UZDUOTIS
// sukurti funkcija "printVardasPavardeAmzius()" , kuri atspausdina i konsole pirmos uzduoties kintamuosius

function printVardasPavardeAmzius() {
  console.log(vardas, pavarde, "amzius", amzius);
}

printVardasPavardeAmzius();

//  3 UZDUOTIS
// sukurti funkcija "printMetinisPajamuDydis()" ,
// kuri  atspausdina i konsole suma 12 atlyginimu (vienas atlyginimas yra lygus "uzduotis 1" kintamajam - "atlyginimas")

let metinesPajamos;
function printMetinisPajamuDydis() {
  metinesPajamos = atlyginimas * 12;
  console.log("metines pajamos", metinesPajamos);
}
printMetinisPajamuDydis();

//  4 UZDUOTIS
// A) sukurti kintamuosius:  salis, miestas, adresas, pastoKodas
// B) sukurti f-ja "printAddressData()",  kuri atspausdina i konsole visus siuos kintamuosius

let salis = "Lietuva";
let miestas = "Kaunas";
let adresas = "Kauno g. 1";
let pastoKodas = "LT-66173"

function printAddressData() {
  console.log(salis, miestas, adresas, pastoKodas);
}
printAddressData();

// ---- advance-----
//  5 UZDUOTIS
// sukurti funkcija "printTekstas(x)" ,
//  kuri atspausdina i konsole "x" reiksmes
// iskviesti f-ja ir vietoj x irasyti koki nors teksta pvz: printTekstas( "Jokubo istorijos");

function printTekstas(x) {
  console.log(x);
}
printTekstas("jokubas");



// 7 UZDUOTIS
// F-ja kuri paskaiciuoja trikampio ilgaja krastine (Pitagoro teorema)
// pitagoroTeorema(x, y)      x*x + y*y ir is visko istraukti sakti (js Math.sqrt())
let trikampioIlgojiKrastine;
function pitagoroTeorema(x,y) {
    trikampioIlgojiKrastine = Math.sqrt((x*x)+(y*y))
    console.log("trikampio ilgoji krastine", trikampioIlgojiKrastine, "jei statiniai:", x, "ir", y);
}
pitagoroTeorema(2,2);

// UZDUOTIS
// Issimeginti komandas:

// document.write(" <b class='bg-info'> Mano tekstas </b> ");
// window.alert("labas");
// alert("Viso");
// var ivestasTekstas = prompt("Ivestkite savo varda");
// console.log(ivestasTekstas);
// document.querySelector('h1').innerHTML = " <b>Antraste</b>";

document.write(" <b class='bg-info'> Mano tekstas </b> ");
// window.alert("labas");
// alert("viso");
// var ivestasTekstas = prompt("Iveskite savo varda");
// console.log(ivestasTekstas);
// document.querySelector('h1').innerHTML = "<b>Antraste</b>";



// 1.1 UZDUOTIS
//  sukurti funkcija "printKaina(x)" ,
//  kuri atspausdina i konsole "x" reiksme
//  iskviesti f-ja print(15.99);


function printKaina(x) {
  console.log("kaina", x);
}
printKaina(15.99);

// 1.2 UZDUOTIS
// iskviesti f-ja print 3 kartus, kad atspausdintu 3 skirtingas kainas:  999 , 13.49, 100.05
//    vietoj x irasant, koki nors teksta pvz: printKaina( 999);


printKaina(999);
printKaina(13.49);
printKaina(100.05);

// 2.1 UZDUOTIS
// parasyti f-ja "pazymiuVidurkis()", kuri apskaiciuoja vidurki is  5 menesiu pazymiu
// suskaiciuoti pazymiu vidurki (pazymius sukurti f-jos viduje) 5, 10 , 8 , 6 , 8  (ir atspausdintu vidurki)

// 2.2 UZDUOTIS
// parasyti f-ja "pazymiuVidurkis1(x1, x2, x3, x4, x5)", kuriai galima paduoti 5 kintamuosius,
// kuri apskaiciuoja vidurki is paduotu 5 menesiu pazymiu
// suskaiciuoti pazymiu vidurki, 5, 10 , 8 , 6 , 8  (ir atspausdintu vidurki)

let vidurkis;
function pazymiuVidurkis1(x1, x2, x3, x4, x5) {
    vidurkis = (x1 + x2 + x3 + x4 + x5) / 5;
    console.log("vidurkis", vidurkis);
}
pazymiuVidurkis1(5, 10, 8, 6, 8);

//=====================RETURN==================

// 1 UZDUOTIS
// A) parasyti f-ja "getVardas()", kuri turi "return" zodeli ir grazina varda i iskveitimo vieta.
// B)   f-joje  sukurti kintamaji "vardas" Tomas
// C) patikrinti ar veikia f-ja
function getVardas(v) {
  return v ;
}
console.log(getVardas("Tomas"));


// 2 UZDUOTIS
// parasyti f-ja "getVardasPavarde()", kuri turi "return" zodeli ir grazina varda ir pavarde i iskveitimo vieta.
//  f-joje sukurti kintamaji   "pavarde" Tomauskas, "vardas" - Antanas
// patikrinti ar veikia f-ja


function getVardasPavarde(v ,p) {
    return v + p;
}
console.log(getVardasPavarde("Antanas", " Tomasauskas"));


// 3 UZDUOTIS
// A) parasyti f-ja "getPelnas()", kuri turi "return" zodeli ir grazina apskaiciuota pelna
// B) f-joje sukurti kintamaji "pajamos" 12500
// B) f-joje sukurti kintamaji "islaidos" 7500
// B) f-joje apskaiciuoti pelna  ( pvz: pelnas = pajamos - islaidos)
// C) patikrinti ar veikia f-ja

function getPelnas(pajamos, islaidos) {
  pelnas = pajamos - islaidos;
  return pelnas;
}
console.log("pelnas", getPelnas(12500, 7500));

// 3.2 UZDUOTIS
// A) parasyti f-ja "getPelnas(pajamos, nuostoliai)", kuri turi "return" zodeli ir grazina apskaiciuota pelna
// B) f-joje apskaiciuoti pelna  ( pvz: pelnas = pajamos - nuostoliai)
// C) patikrinti ar veikia f-ja


function getPelnas1(pajamos, nuostoliai) {
  pelnas = pajamos - nuostoliai;
  return pelnas;
}
console.log("pelnas", getPelnas1(12500, 500));

// 4.1 UZDUOTIS
// parasyti f-ja, kuri skaiciuoja vieno mokinio pazymiu vidurki
// "getPazymiuVidurkis2(x1, x2, x3, x4, x5)"  f-ja apskaiciuoja vidurki is paduotu 5 menesiu pazymiu (ir grazina atsakyma i iskvietimo vieta! "return atskymas;")
//  turi "return" zodeli.

function getPazymiuVidurkis2(x1, x2, x3, x4, x5) {
  vidurkis = (x1+x2+x3+x4+x5)/5;
  return vidurkis;
}
console.log("vidurkis", getPazymiuVidurkis2(8, 5, 9, 4, 10));

// 5 UZDUOTIS
// A) sukurti h1 su tekstu viduje  (HTML faile)
// B) sukurti f-ja "getH1ElementoAukstis(), kuri su "return" grazina surenderinto h1 elemento auksti
// C) su CSS pakeisti h1 auksti, ir paziureti ar jusu f-ja veikia
function getH1ElementoAukstis() {
  aukstis = document.querySelector('h1').clientHeight;
  return aukstis;
}
console.log("h1 aukstis", getH1ElementoAukstis(), "px");


// =================FOR intro  ======================

// 1 UZDUOTIS
// naudojant FOR cikla, atspausdinti  "#" tiek, kad gautusi trikampio vaizdas
// #
// ##
// ###
// ####
// #####
// ######
