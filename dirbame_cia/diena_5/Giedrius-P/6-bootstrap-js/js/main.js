//TEST
console.log("labas");
// alert("issokanti zinute");
document.write("labas ekrane");



// ==============patarimai==========
// reiksme  - kintamasis  / variable
// "reiksme" - tekstas/ reiksme/ value
// reiksme() - f-jos paleidimas
// =============================



//==============TEKSTO ISVEDIMAS (tik susipazinti)=========
// UZDUOTIS
// Issimeginti komandas:

// window.alert("labas");
// alert("Viso");
// var ivestasTekstas = prompt("Ivestkite savo varda");
// console.log(ivestasTekstas);
// document.querySelector('h1').innerHTML = " <b>Antraste</b>";
// document.write(" <b class='bg-info'> ",ivestasTekstas," </b> ");

//----Elemento duomenys--------
//auksto paemimas:
// var aukstis = document.querySelector('h1').clientHeight += 100;   // clientHeight includes the height and vertical padding.
// var aukstis = document.querySelector('h1').offsetHeight;  //  offsetHeight includes the height, vertical padding, and vertical borders.
// //aukscio nustatymas:
// document.querySelector("h1").style.height = "500px"; 		// change the height of a <div> element:

//=====================PASIKARTOJIMAS==================

//  1.1 UZDUOTIS
//  sukurti funkcija "printKaina(x)" ,
//  kuri atspausdina i konsole "x" reiksme
//  iskviesti f-ja print(15.99);
function printKaina(x){
  console.log(x);
}
//  1.2 UZDUOTIS
// iskviesti f-ja print 3 kartus, kad atspausdintu 3 skirtingas kainas:  999 , 13.49, 100.05
//    vietoj x irasant, koki nors teksta pvz: printKaina( 999);
printKaina(999);
printKaina(13.49);
printKaina(100.05);
// 2.1 UZDUOTIS
// parasyti f-ja "pazymiuVidurkis()", kuri apskaiciuoja vidurki is  5 menesiu pazymiu
// suskaiciuoti pazymiu vidurki (pazymius sukurti f-jos viduje) 5, 10 , 8 , 6 , 8  (ir atspausdintu vidurki)
function pazymiuVidurkis(a,b,c,d,e){
  let vid = (a + b + c + d + e)/5;
  console.log("Pazymiu vidurkis: ",vid);
}
 pazymiuVidurkis(5, 10 , 8 , 6 , 8);

// 2.2 UZDUOTIS
// parasyti f-ja "pazymiuVidurkis1(x1, x2, x3, x4, x5)", kuriai galima paduoti 5 kintamuosius,
// kuri apskaiciuoja vidurki is paduotu 5 menesiu pazymiu
// suskaiciuoti pazymiu vidurki, 5, 10 , 8 , 6 , 8  (ir atspausdintu vidurki)


//=====================RETURN==================

// 1 UZDUOTIS
// A) parasyti f-ja "getVardas()", kuri turi "return" zodeli ir grazina varda i iskveitimo vieta.
// B)   f-joje  sukurti kintamaji "vardas" Tomas
// C) patikrinti ar veikia f-ja
function getVardas(){
  let vardas = "petras";
  return(vardas);
}
console.log(getVardas());
// 2 UZDUOTIS
// parasyti f-ja "getVardasPavarde()", kuri turi "return" zodeli ir grazina varda ir pavarde i iskveitimo vieta.
//  f-joje sukurti kintamaji   "pavarde" Tomauskas, "vardas" - Antanas
// patikrinti ar veikia f-ja
function getPavarde(){
  let pavarde = "petraitis";
  return(pavarde);
}

console.log(getVardas(), getPavarde() );
// 3 UZDUOTIS
// A) parasyti f-ja "getPelnas()", kuri turi "return" zodeli ir grazina apskaiciuota pelna
// B) f-joje sukurti kintamaji "pajamos" 12500
// B) f-joje sukurti kintamaji "islaidos" 7500
// B) f-joje apskaiciuoti pelna  ( pvz: pelnas = pajamos - islaidos)
// C) patikrinti ar veikia f-ja

function getPelnas() {
  let pajamos = 12500;
  let islaidos = 7500;
  let pelnas = pajamos - islaidos;
  return(pelnas);
}

console.log("Pelnas: ", getPelnas() );
// 3.2 UZDUOTIS
// A) parasyti f-ja "getPelnas(pajamos, nuostoliai)", kuri turi "return" zodeli ir grazina apskaiciuota pelna
// B) f-joje apskaiciuoti pelna  ( pvz: pelnas = pajamos - nuostoliai)
// C) patikrinti ar veikia f-ja
function getPelnas2(pajamos, nuostoliai) {
  let pelnas = pajamos - nuostoliai;
  return(pelnas);
}
let pajamos = 19500;
let nuostoliai = 7500;
console.log("Pelnas: ", getPelnas2(pajamos, nuostoliai) );

// 4.1 UZDUOTIS
// parasyti f-ja, kuri skaiciuoja vieno mokinio pazymiu vidurki
// "getPazymiuVidurkis2(x1, x2, x3, x4, x5)"  f-ja apskaiciuoja vidurki is paduotu 5 menesiu pazymiu (ir grazina atsakyma i iskvietimo vieta! "return atskymas;")
//  turi "return" zodeli.
function getPazymiuVidurkis2(a,b,c,d,e){
  let vid = (a + b + c + d + e)/5;
  return vid;
}
console.log( "Pazymiu vidurkis: ",getPazymiuVidurkis2(5, 10 , 8 , 10 , 8) );
// 4.2 UZDUOTIS
// parasyti f-ja, kuri skaiciuoja 6-kiu mokiniu pazymiu vidurki
// "getKlasesPazymiuVidurkis()"
// f-ja apskaiciuoja vidurki is paduotu 5 menesiu pazymiu
// (ir grazina atsakyma i iskvietimo vieta! "return atskymas;")
// turi "return" zodeli.


// 5 UZDUOTIS
// A) sukurti h1 su tekstu viduje  (HTML faile)
// B) sukurti f-ja "getH1ElementoAukstis(), kuri su "return" grazina surenderinto h1 elemento auksti
// C) su CSS pakeisti h1 auksti, ir paziureti ar jusu f-ja veikia
function getH1ElementoAukstis(){
  var aukstis = document.querySelector('h1').clientHeight;
  return(aukstis);
}
console.log("h1 aukstis", getH1ElementoAukstis());
// =================FOR intro  ======================
function trikampis(){
  var simbolis = "";
  for (i = 0; i < 6; i++){
    var simbolis = simbolis + "#";
    console.log(simbolis);
  }
}

trikampis();
// 1 UZDUOTIS
// naudojant FOR cikla, atspausdinti  "#" tiek, kad gautusi trikampio vaizdas
// #
// ##
// ###
// ####
// #####
// ######

//=========== =KOMANDINE (3-4h) Bootstrap && GIT=================
// ant lentos

//======= local/global or SCSS or IF or Bootstrap Layout or Frog/Garden ====
