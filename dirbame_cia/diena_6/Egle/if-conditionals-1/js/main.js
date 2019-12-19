// =================if  teorija====================
// if ( true ) {
//     console.log("labas");
// }
if(true){
	console.log("labas")
}

// if (salyga) {
//     // jei true
//     //
//     //
// } else {
//     // jei false
// }


// if ( salyga ) {
//     // jei salyga tenkinama
// }
//
// if ( salyga ) {
//     // jei salyga tenkinama
// } else {
//     // jei salyga netenkinama  / priesingu atveju
// }
//
// if (salyga) {
//
// } else if (salyga) {
//
// } else {
//     // ?
// }

//=============IF====================
// UZDUOTIS
// sukurti kintamuosius: arVedes ir arDuotiPaskola = false
// patikrinti ar zmogus vedes. Jeigu "vedes" - duoti paskola, jeigu "nevedes" - neduoti paskolos
// su console.log pranesti ar paskola zmogui bus duodama

let arVedes = 'false';
let arDuotiPaskola = 'false';

if (arVedes == 'true'){
	arDuotiPaskola = true;
  console.log("paskola duoti");
  document.querySelector('body').innerHTML += "paskola duoti";
} else {
	arDuotiPaskola = falce;
  console.log("paskolos neduoti");
  document.querySelector('body').innerHTML += "paskolos neduoti";
}
console.log("Ar gausite paskola: " + arDuotiPaskola);


// 0 UZDUOTIS
// A)
// susikurti : vardas1 = "Tomas", vardas2 = "Antanas"
// patikrinti:
// jeigu vardai sutampa, i konsole pranesti apie tai
// jeigu vardai nesutampa - parasysi "vardai yra skirtingi"

let vardas1 = "Tomas";
let vardas2 = "Antanas";

if (vardas1 == vardas2){
  console.log("vardai sutampa");
  document.querySelector('body').innerHTML += "vardai sutampa" + "<br>";
} else{
console.log("vardai skirasi");
document.querySelector('body').innerHTML += "vardai skirasi" + "<br>";
}



// B)
// Jeigu vardas1 yra "Tomas" - pasisveikinti su juo

if (vardas1 == 'Tomas'){
  console.log('Labas, Tomai');
  document.querySelector('body').innerHTML += 'Labas, Tomai' + "<br>";
}


// C)
// Patikrinti ar varda1 yra "Tomas", IR butinai vardas2  yra "Karolis"
// pranesti kad vardai: "Tomas ir Karolis"
// arba pranesti, kad : "vardai NE Tomas ir Karolis"
// pakeitineti vardus ir paziureti ar veikia

if (vardas1 == "Tomas" && vardas2 == "Karolis"){
  console.log("Tomas ir Karolis");
  document.querySelector('body').innerHTML += "Tomas ir Karolis" + "<br>";
}else{
  console.log("vardai nera Tomas ir Karolis");
  document.querySelector('body').innerHTML += "vardai nera Tomas ir Karolis" + "<br>";
}




// D)
// Patikrinti ar bent vienas is vardu "Tomas"
// || - arba
// pranesti: "kazkuris is vardu yra Tomas"
// pakeitineti vardus ir paziureti ar veikia



if (vardas1=="Tomas" || vardas2 == "Tomas"){
  console.log('kazkuris is vardu yra Tomas');
  document.querySelector('body').innerHTML += "Kazkuris is vardu yra Tomas" + "<br>";
}

// 1 UZDUOTIS
// turesime vartotojo amziu
// let age = 24;
// gapal ji, turesiem isvesti tam tikra reklamos teksta


// Salygos:

// iki 7 metu
//      "Pliusines varles"
// nuo 7 iki 14
//      "Mini telefonai"
// nuo 14 iki 18
//      "new Music App"
// nuo 18 iki 24
//      "Stok i sauliu sajunga"
// nuo 24 iki 65
//      "Pensijos kaupimas - zusiregistruok"
// nuo 65
//      "kelione i Bristona"
// sunkesne:
//      (i 'if' vidu ideti papildoma 'if')
//      iki 7 metu ir nuo 65 metu papildomai isvesti "Sokoladiniai zuikuciai 20% nuolaida"

let age = 15;


switch(true){
  case age<7:
  console.log("pliusines varles");
  console.log("Sokoladiniai zuikuciai 20% nuolaida");
  break;
  case age=7 && age<14:
  console.log("mini telefonai");
  break;
  case age=14 && age<18:
  console.log("New Music App");
  break;
  case age= 8 && age<24:
  console.log("Stok i sauliu sajunga");
  break;
  case age=24 && age <=65:
  console.log("pensijos kaupimas - uzsiregistruok");
  break;
  case age>65:
  console.log("Kelione i Birstona");
  console.log("Sokoladiniai zuikuciai 20% nuolaida");
}





// 2 UZDUOTIS
// susikurti kintamaji 'klietoVardas' - (ja ivesime betkokia) kurio reiksme lyginsime
// sukurti 3  vardas1= "Tomas", vardas2 ="Paulius", vardas3 ="Airidas" (gimianiciu vardai , jie tures akcijas))

// kai "if"-ui padauodame klietoVardas ir vardas1 - isvesti "Masinoms 10% nuolaida"
// kai "if"-ui padauodame klietoVardas ir vardas2 - isvesti "Buitinei technikai  30% nuolaida"
// kai "if"-ui padauodame bet ka kita - isvesti "5% nuolaida kelionems"


let klientoVardas = "Tomas";
let vardas01 = "Tomas";
let vardas02 = "Paulius";
let vardas03 = "Airidas";

if (klientoVardas == vardas01){
  console.log("Masinoms 10% nuolaida");
} else if(klientoVardas == vardas02){
  console.log("Buitinei technikai 30% nuolaida");
}else{
  console.log("5% nuolaida kelionems");
}





// 3 UZDUOTIS
// sukurti 3 kintamuosius (klientu tipus) "bronze", "silver", "gold"
// susikurti kintamaji 'klietoTipas' - kurio reiksme lyginsime

// kai 'klietoTipas' yra "bronze" - isvesti " 15% nuolaida"
// kai 'klietoTipas' yra "silver" - isvesti " 30% nuolaida"
// kai 'klietoTipas' yra   bet koks kitas - isvesti " 5% nuolaida  "
//


let tipas1 = "bronze";
let tipas2 = "silver";
let tipas3 = "gold";

let klientoTipas = "raudonas";

if(klientoTipas == tipas1){
  document.querySelector('body').innerHTML += "15% nuolaida" + "<br>";
} else if(klientoTipas == tipas2){
  document.querySelector('body').innerHTML += "35% nuolaida" + "<br>";
}else{
  document.querySelector('body').innerHTML += "5% nuolaida" + "<br>";
}
