// test
console.log("labas");
// alert("issokanti zinute");
document.write("labas ekrane");

// 1 UZDUOTIS:
// sukurti mokinio objekta: vardas, pavarde, kelintokas, mokinio matematikos pazymiai (6, 5, 9 , 10, 8)
// (ir priskirti reiksmes pvz: 'Jurgis', "Jurgauskas", 7)

let mokinys = {vardas:"",
  pavarde:"",
  kelintokas:"",
  mokinioMatematikosPazymiai: [],
  sportas:function(){
    console.log("begu");
  },
  miestas:"Kaunas"
};

mokinys.vardas = "Jurgis";
mokinys.pavarde = "Jurgaitis";
mokinys.kelintokas = 5;
mokinys.mokinioMatematikosPazymiai = [6, 5, 9, 10, 8];

console.log(mokinys);

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
$("h1").on("click", function() {
  mokinys.kelintokas ++;
  console.log(mokinys);
  if (mokinys.kelintokas > 12) {
    console.log("mokinys pabaige mokykla");
  }
  if (mokinys.kelintokas == 5) {
    console.log("mokinys pabaige pradine mokykla");
  }
});

for (var i = 0; i < mokinys.mokinioMatematikosPazymiai.length; i++) {
  if (mokinys.mokinioMatematikosPazymiai[i] < 10) {
    mokinys.mokinioMatematikosPazymiai[i] ++;
  } else if (mokinys.mokinioMatematikosPazymiai[i] === 10) {
    mokinys.mokinioMatematikosPazymiai[i] --;
  }
}
console.log(mokinys);
mokinys.sportas();

// 2 UZDUOTIS: sukurti 2-u atskirus  objektus:
// A) tevas : vardas(string), pavarde(string), vaikas(object)
// B) vaikas:  vardas (string), klase(number)
// 2.1) priskirti "vaikas" objekta - tevo kintamajam vaikas  (kintamajam)

let tevas = {vardas:"", pavarde:"", vaikas:{}};
let vaikas = {vardas:"", klase:null};

tevas.vardas = "juozas";
tevas.pavarde = "juozaitis";
vaikas.vardas = "juozukas";
tevas.vaikas = vaikas;
console.log(tevas, vaikas);

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



function darbuotojas(nr, vardas, pavarde, alga) {
    this.nr = nr;
    this.vardas = vardas;
    this.pavarde = pavarde;
    this.alga = alga;
}
var Petras = new darbuotojas(65, "Petras", "Petraitis", 1200);
var Kestas = new darbuotojas(1220, "Kestas", "Pavardis", 700);
console.log(Petras, Kestas);
