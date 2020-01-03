// PRISIMINTI TEORIJA
var vardas = ""; // inicialisation (kintamojo kurimo metu, reiksmes priskyrimas)
var zmogus; // undefined
// console.log( mama );  // not defined

//===========================================
// 1 UZDUOTIS:
// sukurti mokinio objekta: vardas, pavarde, kelintokas, mokinio matematikos pazymiai (6, 5, 9 , 10, 8)
// (ir priskirti reiksmes pvz: 'Jurgis', "Jurgauskas", 7)

zmogus = {
  vardas: "Jurgis",
  pavarde: "Antainaitis",
  kelintokas: 7,
  mokinioPazymiai: [6, 5, 9 ,10, 8]
};
zmogus.kelintokas = 13;
zmogus.mokinioPazymiai = [10, 9 ,8, 7, 6, 5];

function begu()
{
  document.querySelector("p8").innerHTML = "begu";
}

zmogus.miestas = "Kaunas";

if (zmogus.kelintokas > 4)
{
  document.querySelector("p1").innerHTML = "mokinys pabaige pradine mokykla";
}
 if (zmogus.kelintokas > 12)
{
  document.querySelector("p2").innerHTML = "mokinys pabaige mokykla";
}

console.log(zmogus);
document.querySelector("p3").innerHTML = "vardas "+zmogus.vardas;
document.querySelector("p4").innerHTML = "pavarde "+zmogus.pavarde;
document.querySelector("p5").innerHTML = "kelintokas "+zmogus.kelintokas;
document.querySelector("p6").innerHTML = "pazymiai "+zmogus.mokinioPazymiai;
//document.querySelector("p7").innerHTML = "pazymiai "+begu().mokinioPazymiai;


// 1.1 UZDUOTIS
// atspauzdinti visus duomenis

// UZDUOTIS 1.2
// PAKEISTI : klase i sekancia
// UZDUOTIS 1.2.1
// if patikrinimas: jei mokinys yra 13-tokas - isveskite teksta: "mokinys pabaige mokykla", jeigu mokinys yra penktokas  - "pabaige pradine mokykla"
// pakeisti: visus 6 pazymius
// prideti nauja f-ja begu(), kuri isves i console 'bugu begu'
// prideti nauja kintamaji: miestas = 'kaunas'
// UZDUOTIS 1.3
// isvesti pakeistus duomenis
// paleisti f-ja "begu()"

let tevas = {
  vardas: "",
  pavarde: "",
  vaikas: ""
};
let vaikas = {
  vardas: "",
  klase: ""
  };



// 2 UZDUOTIS: sukurti 2-u atskirus  objektus:
// A) tevas : vardas(string), pavarde(string), vaikas(object)
// B) vaikas:  vardas (string), klase(number)
// 2.1) priskirti "vaikas" objekta - tevo kintamajam vaikas  (kintamajam)


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
