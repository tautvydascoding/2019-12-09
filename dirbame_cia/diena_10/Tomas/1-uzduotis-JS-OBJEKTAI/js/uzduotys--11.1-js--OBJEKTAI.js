// PRISIMINTI TEORIJA
var vardas = "";    // inicialisation (kintamojo kurimo metu, reiksmes priskyrimas)
var zmogus; // undefined
// console.log( mama );  // not defined

//===========================================
// 1 UZDUOTIS:
// sukurti mokinio objekta: vardas, pavarde, kelintokas, mokinio matematikos pazymiai (6, 5, 9 , 10, 8)
// (ir priskirti reiksmes pvz: 'Jurgis', "Jurgauskas", 7)

let mokinys = {
  vardas: 'Jurgis',
  pavarde: "Pavardauskas",
  klase: 10,
  mokinioMatematikosPazymiai: [6, 5, 9, 10, 8, 7],
};

// 1.1 UZDUOTIS
// atspauzdinti visus duomenis

console.log(mokinys);

// UZDUOTIS 1.2
// PAKEISTI : klase i sekancia

console.log(mokinys.klase += 1);

// UZDUOTIS 1.2.1
// if patikrinimas: jei mokinys yra 13-tokas - isveskite teksta: "mokinys pabaige mokykla", jeigu mokinys yra penktokas  - "pabaige pradine mokykla"

if( mokinys.klase == 13 ) {
  console.log("mokinys pabaige mokykla");
} else if( mokinys.klase > 5 ) {
  console.log( "pabaige pradine mokykla" );
}

// pakeisti: visus 6 pazymius

mokinys.mokinioMatematikosPazymiai = [9, 7, 3, 4, 10, 8] ;
console.log(mokinys.mokinioMatematikosPazymiai);

// prideti nauja f-ja begu(), kuri isves i console 'bugu begu'

function begu() {
  console.log('bugu begu');
}

// UZDUOTIS 1.3
// isvesti pakeistus duomenis
// paleisti f-ja "begu()"

begu();

// 2 UZDUOTIS: sukurti 2-u atskirus  objektus:
// A) tevas : vardas(string), pavarde(string), vaikas(object)

var tevas = {
  vardas: "",
  pavarde: "",
  vaikas: {},
}

// B) vaikas:  vardas (string), klase(number)

var vaikas = {
  vardas: "",
  klase: "",
}

//prisiskiriu duomenis

tevas.vardas = "Petras";
tevas.pavarde = "Petrauskas";

vaikas.vardas = "Jonas";
vaikas.klase = "";

// 2.1) priskirti "vaikas" objekta - tevo kintamajam vaikas  (kintamajam)

tevas.vaikas = vaikas;

// 3 UZDUOTIS
// sukurti  objekto "darbuotojas" construktoriu. Objektas darbuotojas: nr, vardas, pavarde, alga
// 3.1 sukurti pora darbuotoju ir atspausdinti ju duomenis

//============3=pvz: construktorius =====
// function Car(dSkaicius, spalva, greitis) {
//     this.numberOfDoors = dSkaicius;
//     this.color = spalva;
//     this.maxSpeed = greitis;
// }
//
// // objekto kurimas
// var AudiTT  = new Car(2, "red", 280);
// var Audi100 = new Car(5, "black", 200);
