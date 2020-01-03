// PRISIMINTI TEORIJA
//var vardas = "";    // inicialisation (kintamojo kurimo metu, reiksmes priskyrimas)
//var zmogus; // undefined
// console.log( mama );  // not defined

//===========================================
// 1 UZDUOTIS:
// sukurti mokinio objekta: vardas, pavarde, kelintokas, mokinio matematikos pazymiai (6, 5, 9 , 10, 8)
// (ir priskirti reiksmes pvz: 'Jurgis', "Jurgauskas", 7)
let zmogus = {
  vardas: "Jurgis",
  pavarde: "Jurgauskas",
  kelintokas: 5,
  mokinioPazymiai: [6, 5, 9 , 10, 8]
}

// 1.1 UZDUOTIS
// atspauzdinti visus duomenis
console.log(zmogus.vardas);
console.log(zmogus.pavarde);
console.log(zmogus.kelintokas);
console.log(zmogus.mokinioPazymiai);
// UZDUOTIS 1.2
// PAKEISTI : klase i sekancia
zmogus.kelintokas ++;
// UZDUOTIS 1.2.1
// if patikrinimas: jei mokinys yra 13-tokas - isveskite teksta: "mokinys pabaige mokykla", jeigu mokinys yra penktokas  - "pabaige pradine mokykla"
if(zmogus.kelintokas == 13){
  document.querySelector("body").innerHTML += "mokinys pabaige mokykla"
}else if(zmogus.kelintokas == 5){
  document.querySelector("body").innerHTML += "pabaige pradine mokykla"
}
// pakeisti: visus 6 pazymius
zmogus.mokinioPazymiai = [4, 5, 8, 9, 2];
// prideti nauja f-ja begu(), kuri isves i console 'bugu begu'
zmogus.begu = function begu(){console.log("begu begu")};
// prideti nauja kintamaji: miestas = 'kaunas'
zmogus.miestas = "kaunas"
// UZDUOTIS 1.3
// isvesti pakeistus duomenis
console.log("-----1.3-----");
console.log(zmogus.kelintokas);
console.log(zmogus.mokinioPazymiai);
console.log(zmogus.miestas);
// paleisti f-ja "begu()"
zmogus.begu();
// 2 UZDUOTIS: sukurti 2-u atskirus  objektus:
// A) tevas : vardas(string), pavarde(string), vaikas(object)
let tevas = {
  vardas: "",
  pavarde: "",
  vaikas: {},
}
// B) vaikas:  vardas (string), klase(number)
let vaikas = {
vardas: "",
klase: 0
}
// 2.1) priskirti "vaikas" objekta - tevo kintamajam vaikas  (kintamajam)
tevas.vaikas = vaikas;
console.log(tevas);

// 3 UZDUOTIS
// sukurti  objekto "darbuotojas" construktoriu. Objektas darbuotojas: nr, vardas, pavarde, alga
function darbuotojas(nr, vardas, pavarde, alga){
  this.nr = nr;
  this.name = vardas;
  this.lastName = pavarde;
  this.salary = alga;
}

// 3.1 sukurti pora darbuotoju ir atspausdinti ju duomenis
let darbuotojas1 =  new darbuotojas(1, "Giedrius", "Balynas", 1500);
let darbuotojas2 = new darbuotojas(2, "Styvas", "Bardaciokas", 500);
console.log(darbuotojas1);
console.log(darbuotojas2.salary);
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
