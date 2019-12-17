// =================if  teorija====================
// if ( true ) {
//     console.log("labas");
// }
// if(true){
// 	console.log("labas")
// }

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
function paskola(){
let arVedes = false;
let arDuotiPaskola = false;
if(arVedes === true){
  console.log("duoti paskola");
} else {
  console.log("neduoti paskola");
}
}

 paskola();
// 0 UZDUOTIS
// A)
// susikurti : vardas1 = "Tomas", vardas2 = "Antanas"
// patikrinti:
// jeigu vardai sutampa, i konsole pranesti apie tai
// jeigu vardai nesutampa - parasysi "vardai yra skirtingi"
function vardutikrinimas(){
  let vardas1 = "Tomas";
  let vardas2 = "Antanas";
  if (vardas1 !== vardas2){
    console.log("Vardai yra skirtingi");
  } else {
    console.log("vardai yra vienodi");
  }
}
vardutikrinimas();

// B)
// Jeigu vardas1 yra "Tomas" - pasisveikinti su juo
function tikrinimas() {
  let vardas1 = "Tomas";
  let vardas2 = "Antanas";
  if( vardas1 === "Tomas");
  console.log("Sveikinimai vardas Tomas");
}
tikrinimas();
// C)
// Patikrinti ar varda1 yra "Tomas", IR butinai vardas2  yra "Karolis"
// pranesti kad vardai: "Tomas ir Karolis"
// arba pranesti, kad : "vardai NE Tomas ir Karolis"
// pakeitineti vardus ir paziureti ar veikia
function tikrinimas2() {
  let vardas1 = "Tomas";
  let vardas2 = "Karolis";
  if( vardas1 === "Tomas" && vardas2 === "Karolis"){
  console.log("Vardai Tomas ir Karolis");
} else{ console.log("Vardai ne Tomas ir Karolis");}
}
tikrinimas2();

// D)
// Patikrinti ar bent vienas is vardu "Tomas"
// || - arba
// pranesti: "kazkuris is vardu yra Tomas"
// pakeitineti vardus ir paziureti ar veikia
function tikrinimas3() {
  let vardas1 = "Tomas";
  let vardas2 = "Karolis";
  if( vardas1 === "Tomas" || vardas2 === "Tomas"){
  console.log("kazkuris is vardu yra Tomas");
} else{ console.log("nei vienas vardas nera Tomas");}
}
tikrinimas3();

// 1 UZDUOTIS
// turesime vartotojo amziu
// let age = 24;
// gapal ji, turesiem isvesti tam tikra reklamos teksta
function reklama(){
        let age = 65;
        if (age <7 ){
          console.log("Pliusines Varles");
          console.log("Sokoladiniai zuikuciai 20% nuolaida");
        } else if (age >=7 && age < 14){
          console.log("mini telefonai");}
         else if (age >=7 && age < 14){
          console.log("mini telefonai");}
         else if(age >= 14 && age < 18){
           console.log("new music app");
         } else if(age >= 18 && age < 24){
           console.log("Stok i sauliu sajunga");
         } else if(age >= 24 && age < 65){
           console.log("Pensijos kaupimas - uzsiregistruok");
         } else if(age >= 65){
           console.log("kelione i birstona");
           console.log("Sokoladiniai zuikuciai 20% nuolaida");
         }

}
reklama();
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


// 2 UZDUOTIS
// susikurti kintamaji 'klietoVardas' - (ja ivesime betkokia) kurio reiksme lyginsime
// sukurti 3  vardas1= "Tomas", vardas2 ="Paulius", vardas3 ="Airidas" (gimianiciu vardai , jie tures akcijas))
function akcija(){
  let klinetovardas = "Paulius";
  let vardas1 = "Tomas";
  let vardas2 = "Paulius";
  let vardas3 = "Airidas";
// kai "if"-ui padauodame klietoVardas ir vardas1 - isvesti "Masinoms 10% nuolaida"
// kai "if"-ui padauodame klietoVardas ir vardas2 - isvesti "Buitinei technikai  30% nuolaida"
// kai "if"-ui padauodame bet ka kita - isvesti "5% nuolaida kelionems"
  if (klinetovardas === vardas1){
    console.log("Masinoms 10% nuolaida");
  } else if(klinetovardas === vardas2){
    console.log("Buitinei technikai 30% nuolaida");
  } else if (klinetovardas === vardas3){
    console.log("5% nuolaida kelionems");
  } else {console.log("Neatitiko nei vienas vardas todel nuolaidu neturite");}
}
akcija();
// 3 UZDUOTIS
// sukurti 3 kintamuosius (klientu tipus) "bronze", "silver", "gold"
// susikurti kintamaji 'klietoTipas' - kurio reiksme lyginsime
function metalai(){
  let klientas1 = "bronze";
  let klientas2 = "silver";
  let klientas3 = "gold";
  let klientotipas = "gold";

  if(klientas1 === klientotipas){
    console.log("15% nuolaida");
  } else if (klientas2 === klientotipas){
    console.log("30% nuolaida");
  } else {console.log("5% nuolaida");}
}

metalai();
// kai 'klietoTipas' yra "bronze" - isvesti " 15% nuolaida"
// kai 'klietoTipas' yra "silver" - isvesti " 30% nuolaida"
// kai 'klietoTipas' yra   bet koks kitas - isvesti " 5% nuolaida  "
//
