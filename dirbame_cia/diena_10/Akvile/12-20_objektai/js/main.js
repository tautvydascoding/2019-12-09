// PRISIMINTI TEORIJA
var vardas = "";    // inicialisation (kintamojo kurimo metu, reiksmes priskyrimas)
var zmogus; // undefined
// console.log( mama );  // not defined

//===========================================
// 1 UZDUOTIS:
// sukurti mokinio objekta: vardas, pavarde, kelintokas, mokinio matematikos pazymiai (6, 5, 9 , 10, 8)
// (ir priskirti reiksmes pvz: 'Jurgis', "Jurgauskas", 7)
var mokinys = {
  vardas: "",
  pavarde: "",
  kelintokas: 0,
  pazymiai:[]
};

mokinys.vardas = "Jurgis";
mokinys.pavarde = "Jurgauskas";
mokinys.kelintokas = 5;
mokinys.pazymiai = [6, 5, 9 , 10, 8];
// 1.1 UZDUOTIS
// atspauzdinti visus duomenis
console.log(mokinys);
// UZDUOTIS 1.2
// PAKEISTI : klase i sekancia
mokinys.kelintokas ++;
console.log(mokinys.kelintokas);
// UZDUOTIS 1.2.1
// if patikrinimas: jei mokinys yra 13-tokas - isveskite teksta: "mokinys pabaige mokykla", jeigu mokinys yra penktokas  - "pabaige pradine mokykla"
if (mokinys.kelintokas > 12) {
  console.log("mokinys pabaige mokykla");
} else if (mokinys.kelintokas >= 5 && mokinys.kelintokas < 13) {
  console.log("pabaige pradine mokykla");
}
// pakeisti: visus 6 pazymius
mokinys.pazymiai = [10, 4, 5, 6, 9, 10];
// prideti nauja f-ja begu(), kuri isves i console 'bugu begu'
mokinys.dirbu = function() {
  console.log("begu, begu");
}

console.log(mokinys);
// prideti nauja kintamaji: miestas = 'kaunas'
mokinys.miestas = "Kaunas"; //realiai sukuriant nauja objekto kintamaji, jį iš karto įrašyti sukuriant objekta, failo virsuje

// UZDUOTIS 1.3
// isvesti pakeistus duomenis
// paleisti f-ja "begu()"
console.log("mokinio vardas: " + mokinys.vardas + " " + mokinys.pavarde + " mokosi " + mokinys.kelintokas + " klaseje, matematikos pazymiai: " + mokinys.pazymiai + ", miestas: " + mokinys.miestas);

// 2 UZDUOTIS: sukurti 2-u atskirus  objektus:
// A) tevas : vardas(string), pavarde(string), vaikas(object)
var tevas = {
  vardas: "",
  pavarde: "",
  vaikas: {}
};
// B) vaikas:  vardas (string), klase(number)
var vaikas = {
  vardas: "",
  klase: 0
};
// 2.1) priskirti "vaikas" objekta - tevo kintamajam vaikas  (kintamajam)
tevas.vaikas = vaikas;
console.log(tevas);
// 3 UZDUOTIS
// sukurti  objekto "darbuotojas" construktoriu. Objektas darbuotojas: nr, vardas, pavarde, alga
function Darbuotojas(nr, vardas, pavarde, alga) {
  this.nr = nr;
  this.vardas = vardas;
  this.pavarde = pavarde;
  this.alga = alga;
}
// 3.1 sukurti pora darbuotoju ir atspausdinti ju duomenis
var darbuotojas1 = new Darbuotojas(1, "Jonas", "Petrauskas", 1500);
var darbuotojas2 = new Darbuotojas(2, "Petras", "Jonauskas", 1000);
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
console.log(darbuotojas1);
