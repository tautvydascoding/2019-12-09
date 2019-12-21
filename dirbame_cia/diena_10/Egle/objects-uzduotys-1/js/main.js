// test
console.log("labas");
// alert("issokanti zinute");
// PRISIMINTI TEORIJA
var vardas = "";    // inicialisation (kintamojo kurimo metu, reiksmes priskyrimas)
var zmogus; // undefined
// console.log( mama );  // not defined

//===========================================
// 1 UZDUOTIS:
// sukurti mokinio objekta: vardas, pavarde, kelintokas, mokinio matematikos pazymiai (6, 5, 9 , 10, 8)
// (ir priskirti reiksmes pvz: 'Jurgis', "Jurgauskas", 7)

var vaikas = {
  vardas : "Jurgis",
  pavarde: "Jurginas",
  kelintokas: 12,
  pazymiai: [6, 5, 9 , 10, 8],
  begu: function(){
    console.log("begu begu");
  }
};

console.log(vaikas.vardas, vaikas.pavarde, vaikas.pazymiai[2]);





// 1.1 UZDUOTIS
// atspauzdinti visus duomenis

console.log(vaikas);

// UZDUOTIS 1.2
// PAKEISTI : klase i sekancia

vaikas.kelintokas ++;
console.log(vaikas.kelintokas);

// UZDUOTIS 1.2.1
// if patikrinimas: jei mokinys yra 13-tokas - isveskite teksta: "mokinys pabaige mokykla", jeigu mokinys yra penktokas  - "pabaige pradine mokykla"

if(vaikas.kelintokas >= 13){
  console.log("mokinys pabaiges mokykla");
} else if(vaikas.kelintokas >= 5){
  console.log("vaikas pabaige pradine mokykla");
}else{
  console.log("vaiaks yra pradinukas");
};


// pakeisti: visus 6 pazymius

vaikas.pazymiai = [6, 5, 2, 8, 10, 4];
console.log(vaikas.pazymiai);
// prideti nauja f-ja begu(), kuri isves i console 'bugu begu'
// vaikas.begu = function(){
//   console.log("begu begu");
// };


// prideti nauja kintamaji: miestas = 'kaunas'

vaikas.miestas = "Kaunas";

// UZDUOTIS 1.3
// isvesti pakeistus duomenis
// paleisti f-ja "begu()"
console.log(vaikas.begu());
console.log(vaikas.miestas);


// 2 UZDUOTIS: sukurti 2-u atskirus  objektus:
// A) tevas : vardas(string), pavarde(string), vaikas(object)
// B) vaikas:  vardas (string), klase(number)
// 2.1) priskirti "vaikas" objekta - tevo kintamajam vaikas  (kintamajam)

let tevas = {
  vardas: "Jonas",
  pavarde: "Jonaitis",
  vaikas: {}
};

let vaikas1 = {
  vardas:"Jonukas",
  klase: 1
};

tevas.vaikas = vaikas1;

console.log(tevas.vaikas);

console.log(tevas.vardas, tevas.pavarde, tevas.vaikas);

// 3 UZDUOTIS
// sukurti  objekto "darbuotojas" construktoriu. Objektas darbuotojas: nr, vardas, pavarde, alga
// 3.1 sukurti pora darbuotoju ir atspausdinti ju duomenis


function darbuotojai(nr, vardas, pavarde, alga){
  this.nr = nr;
  this.vardas = vardas;
  this.pavarde = pavarde;
  this.uzdarbis = alga;
}

let darbuotojas1 = new darbuotojai(115, "Juozas", "Juozaitis", 600);
let darbuotojas2 = new darbuotojai(42, "Albinas", "Albinaitis", 1430);

console.log(darbuotojas1);
console.log(darbuotojas2);
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
