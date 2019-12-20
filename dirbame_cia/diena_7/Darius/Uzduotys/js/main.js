//=============IF====================
// UZDUOTIS
// sukurti kintamuosius: arVedes ir arDuotiPaskola = false
// patikrinti ar zmogus vedes. Jeigu "vedes" - duoti paskola, jeigu "nevedes" - neduoti paskolos
// su console.log pranesti ar paskola zmogui bus duodama
// let arVedes = true;
// let arDuotiPaskola = false;
//
// if (arVedes = true){
// arDuotiPaskola = true;
// else {
//   arDuotiPaskola = false
// }
//   console.log("paskola bus duodama");
// }


// 0 UZDUOTIS
// A)
// susikurti : vardas1 = "Tomas", vardas2 = "Antanas"
// patikrinti:
// jeigu vardai sutampa, i konsole pranesti apie tai
// jeigu vardai nesutampa - parasysi "vardai yra skirtingi"


// let vardas1 = "Tomas";
// let vardas2 = "Antanas";
// if (vardas1 == "Tomas" && vardas2 == "Darius")
// {
//   document.querySelector('p').innerHTML = "vardai sutampa";
// } else {
//   document.querySelector('p').innerHTML = "vardai nesutampa";
// }
// B)
// Jeigu vardas1 yra "Tomas" - pasisveikinti su juo
// let vardas1 = "Tomas";
// let vardas2 = "Antanas";
// if (vardas1 == "Tomas")
// {
//   document.querySelector('p').innerHTML = "Sveikas Tomai";
// }
// C)
// Patikrinti ar varda1 yra "Tomas", IR butinai vardas2  yra "Karolis"
// pranesti kad vardai: "Tomas ir Karolis"
// arba pranesti, kad : "vardai NE Tomas ir Karolis"
// pakeitineti vardus ir paziureti ar veikia
// let vardas1 = "Tomas";
// let vardas2 = "Karolis";
// if (vardas1 == "Tomas" && vardas2 =="Darius")
// {
//   document.querySelector('p').innerHTML = "varda sutampa";
// } else {
//   document.querySelector("p").innerHTML = "vardai nesutampa";
// }
// D)
// Patikrinti ar bent vienas is vardu "Tomas"
// || - arba
// pranesti: "kazkuris is vardu yra Tomas"
// pakeitineti vardus ir paziureti ar veikia
// let vardas1 = "Darius";
// let vardas2 = "Antanas";
// if ((vardas1 == "Tomas" || vardas1 == "Darius") || (vardas2 == "Tomas" || vardas2 == "Darius"))
// {
//   document.querySelector('p').innerHTML = "Vienas iš vardu Tomas ar Darius";
// } else {
//   document.querySelector("p").innerHTML = "Vienas iš vardų nėra Tomas ar Darius";

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
//function salygos() {


// let age = 20;
// if (((age >= 0) && (age < 7)) || ((age >= 65) && (age < 120))){
//   document.querySelector("h6").innerHTML = "Sokoladiniai zuikuciai 20% nuolaida";
//   if ((age >= 0) && (age < 7)) {
//     document.querySelector("p").innerHTML = "Pliusines varles";
//   } else if ((age >= 65) && (age < 120)) {
//     document.querySelector("p").innerHTML = "Kelione i  Birstona";
//   }
// }
// if ((age >= 7) && (age < 14)) {
//   document.querySelector("p").innerHTML = "Mini telefonai";
// } else if ((age >= 14) && (age < 18)) {
//   document.querySelector("p").innerHTML = "New music app";
// } else if ((age >= 18) && (age < 24)) {
//   document.querySelector("p").innerHTML = "Stok i Sauliu sajunga";
// } else if ((age >= 24) && (age < 65)) {
//   document.querySelector("p").innerHTML = "Pensijos kaupimas uzsiregistruok";
//
// } else if ((age < 0) && (age >120))
// {
//   document.querySelector("p").innerHTML = "patikrinkite skaiciu";
// }



// 2 UZDUOTIS
// susikurti kintamaji 'klietoVardas' - (ja ivesime betkokia) kurio reiksme lyginsime
// sukurti 3  vardas1= "Tomas", vardas2 ="Paulius", vardas3 ="Airidas" (gimianiciu vardai , jie tures akcijas))

// kai "if"-ui padauodame klietoVardas ir vardas1 - isvesti "Masinoms 10% nuolaida"
// kai "if"-ui padauodame klietoVardas ir vardas2 - isvesti "Buitinei technikai  30% nuolaida"
// kai "if"-ui padauodame bet ka kita - isvesti "5% nuolaida kelionems"

// let klietoVardas = "Aidis";
// let vardas1 = "Tomas";
// let vardas2 = "Paulius";
// let vardas3 = "Aidis";


// if (klietoVardas === vardas1) {
//   document.querySelector('p').innerHTML = "Masinoms 10% nuolaida";
// } else if (klietoVardas === vardas2) {
//   document.querySelector('p').innerHTML = "Buitinei technikai  30% nuolaida";
// } else if (klietoVardas === vardas3) {
//   document.querySelector('p').innerHTML = "5% nuolaida kelionems";
// } else {
//   document.querySelector('p').innerHTML = "Jus nesat musu klientas";
// }


// 3 UZDUOTIS
// sukurti 3 kintamuosius (klientu tipus) "bronze", "silver", "gold"
// susikurti kintamaji 'klietoTipas' - kurio reiksme lyginsime

// kai 'klietoTipas' yra "bronze" - isvesti " 15% nuolaida"
// kai 'klietoTipas' yra "silver" - isvesti " 30% nuolaida"
// kai 'klietoTipas' yra   bet koks kitas - isvesti " 5% nuolaida  "
//

// let klietoTipas = "bronze";
// let tipas1 = "bronze";
// let tipas2 = "silver";
// let tipas3 = "gold";
//
//
// if (klietoTipas === tipas1) {
//   document.querySelector('p').innerHTML = "15% nuolaida";
// } else if (klietoVardas === tipas2) {
//   document.querySelector('p').innerHTML = "30% nuolaida";
// } else if (klietoVardas === tipas3) {
//   document.querySelector('p').innerHTML = "5% nuolaida";
// } else {
//   document.querySelector('p').innerHTML = "Jus nesat musu klientas";
// }


//------------------------------------------------------------------------

//==============TEORIJA ++ / -- ==========
// var x = 10;
// x = x + 3;  // x = 13
// x += 3;     // tas pats kad x = x + 3;
// x++;       //  tas pats kas x = x + 1;

//=============FOR   LOOP====================
// teo:  https://www.w3schools.com/js/js_loop_for.asp
//  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration

// 1 UZDUOTIS
// isvesti 30 kartu zodi "Azuolas" i konsole  (! bandant tai padaryti, atsiras skaicius 50)


// 1.1 UZDUOTIS
// isvesti i ekrana "<h3> Azuolas </h3>" su document.write arba innerHTML

// 1.2 UZDUOTIS
// (HTML faile susikurti <article> elementa)
// isvesti 40 kartu zodi "<h2> Azuolas</h2> " i <article> elementa su  innerHTML pagalba

// 1.3 UZDUOTIS
// (HTML faile susikurti <ul> elementa)
// isvesti 6 kartu zodi "<li> elementas 1 </li> " i <ul> elementa su  innerHTML pagalba

// 1.4 UZDUOTIS
// (HTML faile susikurti <header> elementa)
// isvesti 10 kartu zodi "<p> Aprasymas x </p> " i <header> elementa su  innerHTML pagalba (kur x - yra skaicius "i" nuo 0 iki 9 atsisrandantis automatiskai)


// var i;
// let text = "";
// for (i = 0; i < 10; i++)
// { x = i;
//   text += "<p> Aprasymas " + i + "</p>" + "<br>";
//
//   document.querySelector("p").innerHTML = text + "<br>";
// }

// 1.5 UZDUOTIS
// (HTML faile susikurti <div> elementa)
// isvesti 6 kartu zodi "<li> elementas X </li> " i <div> elementa su  innerHTML pagalba (kur x - yra skaicius "i" nuo 1 iki 6 atsisrandasntis automatiskai)

// var i;
// let text = "";
// for (i = 0; i < 10; i++)
// { x = i;
//   text += "<li> elementas " + i + "</li>" + "<br>";
//
//   document.querySelector("div").innerHTML = text + "<br>";
// }

// 2.0 UZDUOTIS
// sukurti f-ja "print()", kuri  i browser langa atspausdins  teksta "atspausdintas su f-ja" (panaudojanti document.write arba innerHTML)



// 2.1 UZDUOTIS
// sukurti f-ja "printX(xx)", kuri  i browser langa atspausdins paduota "xx" teksta (panaudojanti document.write arba innerHTML)

// 2.2 UZDUOTIS
// paleisti f-ja "printX(xx)" 100 kartu



// function printX(x) {
//   document.querySelector("ol").innerHTML += "Tekstas" + "<br>";
// }
//
//
// var i;
// var x;
// for (i = 0; i < 100; i++) {
//   printX(vaziuok);
//
// }


// 2.3 UZDUOTIS
// paleisti f-ja "printX(xx)" 12 kartu ir atspausdinti <img ...
// PATARIMAS:
// pabandyti  isideti nuotrauka i HTML faila, jie pavyks tada nusikopijuoti ir ideti i js faila

// function printX(x) {
//
// let text = "";
// text = '<img src="C:/Users/Darius/Pictures/20191124_153935.jpg" alt="HTML5 Icon" width="128" height="128">';
//   //text += "<img> nuotrauka </img>" + x + "<br>"
//   document.querySelector("ol").innerHTML += text + "<br>";
//
// }
//
//
// var i;
// var x;
// for (i = 0; i < 12; i++) {
//   printX("");
//
// }

// 4 UZDUOTIS
// A) sukurti f-jas piestiEilute(x); spausdintiStulpeli(x);
// B) nupiesti tuscia lentele paleidiznat f-jas (  antrastine eilute "vardas |  pavarde | amzius" - teks isvesti be f-jos)


function piestiEilute(x){
  let a = "-"
}

function spausdintiStulpeli(x) {

}

// ----------------------------
// vardas |  pavarde | amzius
// ----------------------------
// |
// |
// |
// |
// |


// advance
// 5 UZDUOTIS
// sukurti f-ja, kuri apskaiciuos kiek uzdirbsime po 10 metu , jei pradzioje uzdirbdami 680, ir kai alga i menesi pakyla 1% (~6.8eur)
// var kiekMenesiu = 10 * 12;
// var menAtlyginimas = 680;
// var algosPokytis = 1;  // 1%

// ==============SCSS============================

//========= local/global or Frog/Garden =======
