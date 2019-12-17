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
let arVedes = false;
let arDuotiPaskola = false;
if(arVedes === true){
  console.log("Zmogui paskola bus duodama");
}else{
  console.log("zmogui paskola nebus duodama");
}
// 0 UZDUOTIS
// A)
// susikurti : vardas1 = "Tomas", vardas2 = "Antanas"
// patikrinti:
// jeigu vardai sutampa, i konsole pranesti apie tai
// jeigu vardai nesutampa - parasysi "vardai yra skirtingi"
let vardas1 = "Tomas";
let vardas2 = "Paulius";
if(vardas1 === vardas2){
  console.log("Vardai sutampa");
}else{
  console.log("Vardai nesutampa");
}
// B)
// Jeigu vardas1 yra "Tomas" - pasisveikinti su juo
if(vardas1 === "Tomas"){
  console.log("Sveikas, Tomai");
}
// C)
// Patikrinti ar varda1 yra "Tomas", IR butinai vardas2  yra "Karolis"
// pranesti kad vardai: "Tomas ir Karolis"
// arba pranesti, kad : "vardai NE Tomas ir Karolis"
// pakeitineti vardus ir paziureti ar veikia
if(vardas1 === "Tomas" && vardas2 === "Karolis"){
  console.log("Vardai yra Tomas ir Karolis");
}else{
  console.log("Vardai NERA Tomas ir Karolis");
}
// D)
// Patikrinti ar bent vienas is vardu "Tomas"
// || - arba
// pranesti: "kazkuris is vardu yra Tomas"
// pakeitineti vardus ir paziureti ar veikia
if(vardas1 === "Tomas" || vardas2 === "Tomas"){
  console.log("Vienas is vardu yra Tomas");
}else{
  console.log("Nei vienas is vardu nera Tomas");
}
// 1 UZDUOTIS
// turesime vartotojo amziu
// let age = 24;
// gapal ji, turesiem isvesti tam tikra reklamos teksta
let age = 6;

// Salygos:

// iki 7 metu
//      "Pliusines varles"
if(age < 7){
  console.log("Pliusines varles");

}
// nuo 7 iki 14
//      "Mini telefonai"
else if (age > 7 && age < 14) {
  console.log("Mini telefonai");
}
// nuo 14 iki 18
//      "new Music App"
else if(age > 14 && age < 18){
  console.log("new Music App");
}
// nuo 18 iki 24
//      "Stok i sauliu sajunga"
else if(age > 18 && age < 24){
  console.log("Stok i sauliu sajunga");
}
// nuo 24 iki 65
//      "Pensijos kaupimas - zusiregistruok"
else if(age > 24 && age <65){
  console.log("Pensijos kaupimas - uzsiregistruok");
}
// nuo 65
//      "kelione i Bristona"
else if(age > 65){
  console.log("kelione i Birstona");
}
// sunkesne:
//      (i 'if' vidu ideti papildoma 'if')
//      iki 7 metu ir nuo 65 metu papildomai isvesti "Sokoladiniai zuikuciai 20% nuolaida"
console.log("//////////")
if(age < 7 || age > 65){
  console.log("Sokoladiniai zuikuciai 20% nuolaida");
  if(age < 7){console.log("Pliusines varles");}
  if(age > 65){console.log("Pensijos kaupimas - uzsiregistruok");}
}

// 2 UZDUOTIS
// susikurti kintamaji 'klietoVardas' - (ja ivesime betkokia) kurio reiksme lyginsime
// sukurti 3  vardas1= "Tomas", vardas2 ="Paulius", vardas3 ="Airidas" (gimianiciu vardai , jie tures akcijas))
let klientoVardas = "Paulius";
let vardas3 = "Airidas";
// kai "if"-ui padauodame klietoVardas ir vardas1 - isvesti "Masinoms 10% nuolaida"
if(klientoVardas == vardas1){
  console.log("Masinoms 10% nuolaida");
}
// kai "if"-ui padauodame klietoVardas ir vardas2 - isvesti "Buitinei technikai  30% nuolaida"
else if(klientoVardas == vardas2){
  console.log("Buitinei technikai 30% nuolaida");
}
// kai "if"-ui padauodame bet ka kita - isvesti "5% nuolaida kelionems"
else {
  console.log("5% nuolaida kelionems");
}
// 3 UZDUOTIS
// sukurti 3 kintamuosius (klientu tipus) "bronze", "silver", "gold"
// susikurti kintamaji 'klietoTipas' - kurio reiksme lyginsime
let tipas1 = "bronze";
let tipas2= "silver";
let tipas3 = "gold";
let klientoTipas = "silver";


// kai 'klietoTipas' yra "bronze" - isvesti " 15% nuolaida"
if(klientoTipas == tipas1){
  console.log("15% nuolaida")
}
// kai 'klietoTipas' yra "silver" - isvesti " 30% nuolaida"
else if (klientoTipas == tipas2) {
  console.log("30% nuolaida");

// kai 'klietoTipas' yra   bet koks kitas - isvesti " 5% nuolaida  "
} else {
  console.log("5% nuolaida");
}
//
