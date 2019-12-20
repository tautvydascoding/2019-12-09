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
  Pavarde: 'Jurgauskas',
  kelintokas: '7',
  pazymiai: [6, 5, 9 , 10, 8]
};
// 1.1 UZDUOTIS
// atspauzdinti visus duomenis
console.log(mokinys);
// UZDUOTIS 1.2
// PAKEISTI : klase i sekancia
mokinys.kelintokas++;
console.log(mokinys.kelintokas);
// UZDUOTIS 1.2.1
// if patikrinimas: jei mokinys yra 13-tokas - isveskite teksta: "mokinys pabaige mokykla", jeigu mokinys yra penktokas  - "pabaige pradine mokykla"
if (mokinys.kelintokas >= 13){
  console.log("mokinys baige mokykla");
} else if (mokinys.kelintokas >= 5){
  console.log("mokinys baige pradine mokykla");
}
// pakeisti: visus 6 pazymius
for (var i = 0; i < mokinys.pazymiai.length; i++) {
  mokinys.pazymiai[i] = 6;
}
console.log(mokinys.pazymiai);
// prideti nauja f-ja begu(), kuri isves i console 'bugu begu'
mokinys.begu = function begu(){
  console.log("bugu begu");
}

mokinys.begu();
// prideti nauja kintamaji: miestas = 'kaunas'
mokinys.miestas = "Kaunas";
// UZDUOTIS 1.3
// isvesti pakeistus duomenis
console.log(mokinys);
// paleisti f-ja "begu()"

// 2 UZDUOTIS: sukurti 2-u atskirus  objektus:
// A) tevas : vardas(string), pavarde(string), vaikas(object)
let tevas = {
  vardas: "",
  pavarde: "",
  vaikas: {}
};
// B) vaikas:  vardas (string), klase(number)
let vaikas = {
  vardas: '',
  klse: 0
}
// 2.1) priskirti "vaikas" objekta - tevo kintamajam vaikas  (kintamajam)
tevas.vaikas = vaikas;
console.log(tevas);

// 3 UZDUOTIS
// sukurti  objekto "darbuotojas" construktoriu. Objektas darbuotojas: nr, vardas, pavarde, alga
function Darbuotojas(nr, vardas, pavarde, alga) {
    this.telefonoNumeris = nr;
    this.Vardas = vardas;
    this.Pavarde = pavarde;
    this.MenAlga = alga;
}
// 3.1 sukurti pora darbuotoju ir atspausdinti ju duomenis
 var petras = new Darbuotojas(2101010, "Petras", "Petraitis", 12345);
 var jonas = new Darbuotojas(554434343, "Jonas", "Jonaitis", 345);

 console.log(petras);
 console.log(jonas);
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
