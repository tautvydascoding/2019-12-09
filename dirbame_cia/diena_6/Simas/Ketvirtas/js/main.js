// test
console.log("labas");
// alert("issokanti zinute");
document.write("labas ekrane");

//=============IF====================
// UZDUOTIS
// sukurti kintamuosius: arVedes ir arDuotiPaskola = false
// patikrinti ar zmogus vedes. Jeigu "vedes" - duoti paskola, jeigu "nevedes" - neduoti paskolos
// su console.log pranesti ar paskola zmogui bus duodama

let arVedes = true;
  if (arVedes == true) {
    console.log("duoti paskola");
  }
  else {
    console.log("neduoti paskolos");
  }



// 0 UZDUOTIS
// A)
// susikurti : vardas1 = "Tomas", vardas2 = "Antanas"
// patikrinti:
// jeigu vardai sutampa, i konsole pranesti apie tai
// jeigu vardai nesutampa - parasysi "vardai yra skirtingi"

let vardas1 = "Tomas";
let vardas2 = "Karolis";

if (vardas1 == vardas2) {
  console.log("vardai sutampa");
}
else {
  console.log("vardai skirtingi");
}
// B)
// Jeigu vardas1 yra "Tomas" - pasisveikinti su juo

if (vardas1 == "Tomas") {
  console.log("sveikas, Tomai");
}

// C)
// Patikrinti ar varda1 yra "Tomas", IR butinai vardas2  yra "Karolis"
// pranesti kad vardai: "Tomas ir Karolis"
// arba pranesti, kad : "vardai NE Tomas ir Karolis"
// pakeitineti vardus ir paziureti ar veikia


if (vardas1 == "Tomas" && vardas2 == "Karolis") {
  console.log("vardai tomas ir karolis");
}
else {
  console.log("vardai ne tomas ir karolis");
}

// D)
// Patikrinti ar bent vienas is vardu "Tomas"
// || - arba
// pranesti: "kazkuris is vardu yra Tomas"
// pakeitineti vardus ir paziureti ar veikia


if (vardas1 == "Tomas" || vardas2 == "Tomas") {
  console.log("kazkuris is vardu yra Tomas");
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

 let age = 66;

 if (age < 7 || age >=65) {
   console.log("akcija");
   if (age < 7) {
     console.log("Pliusines varles");
   } else {
     console.log("kelione i birstona");
   }
 }
 else if (age >= 7 && age < 14) {
   console.log("mini telefonai");
 }
 else if (age >= 14 && age < 18) {
   console.log("new Music app");
 }
 else if (age >= 18 && age< 24) {
   console.log("stok i sauliu sajunga");
 }
 else if (age >= 24 && age < 65) {
   console.log("Pensijos kaupimas - uzsiregsitruok");
 }
 else if (age >= 65) {
   console.log("Kelione i birstona");
 }


 // 2 UZDUOTIS
 // susikurti kintamaji 'klietoVardas' - (ja ivesime betkokia) kurio reiksme lyginsime
 // sukurti 3  vardas1= "Tomas", vardas2 ="Paulius", vardas3 ="Airidas" (gimianiciu vardai , jie tures akcijas))

 // kai "if"-ui padauodame klietoVardas ir vardas1 - isvesti "Masinoms 10% nuolaida"
 // kai "if"-ui padauodame klietoVardas ir vardas2 - isvesti "Buitinei technikai  30% nuolaida"
 // kai "if"-ui padauodame bet ka kita - isvesti "5% nuolaida kelionems"


let klientoVardas = "";
let pirmasVardas = "Tomas";
let antrasVardas = "Paulius";
let treciasVardas = "Airidas";
if (klientoVardas == pirmasVardas) {
  console.log("masinoms 10% nuolaida");
} else if (klientoVardas == antrasVardas) {
  console.log("buitinei technikai 30% nuolaida");
} else {
  console.log("5% nuolaida kelionems");
}



// 3 UZDUOTIS
// sukurti 3 kintamuosius (klientu tipus) "bronze", "silver", "gold"
// susikurti kintamaji 'klietoTipas' - kurio reiksme lyginsime

// kai 'klietoTipas' yra "bronze" - isvesti " 15% nuolaida"
// kai 'klietoTipas' yra "silver" - isvesti " 30% nuolaida"
// kai 'klietoTipas' yra   bet koks kitas - isvesti " 5% nuolaida  "
//
let klientoTipas = "gold";
let tipas1 = "bronze";
let tipas2 = "silver";
let tipas3 = "gold";

if (klientoTipas == tipas1) {
  console.log("15% nuolaida");
} else if (klientoTipas == tipas3) {
  console.log("30% nuolaida");
} else {
  console.log("5% nuolaida");
}
