// test
console.log("labas");
// alert("issokanti zinute");
document.write("labas ekrane");

//===========================================
// 1 UZDUOTIS:
// sukurti mokinio objekta: vardas, pavarde, kelintokas, mokinio matematikos pazymiai (6, 5, 9 , 10, 8)
// (ir priskirti reiksmes pvz: 'Jurgis', "Jurgauskas", 7)

let mokinys = {
vardas: "Petras",
pavarde: "Petrauskas",
klase: 7,
matematikosPazymiai: [4,5,3,1,2,10],
begu: function begu(){
  console.log("begu, begu");
}


};



// 1.1 UZDUOTIS
// atspauzdinti visus duomenis
console.log(mokinys);

// UZDUOTIS 1.2
// PAKEISTI : klase i sekancia
mokinys.klase++;
console.log(mokinys);
mokinys.klase = 1;
console.log(mokinys.begu());


// UZDUOTIS 1.2.1
// if patikrinimas: jei mokinys yra 13-tokas - isveskite teksta: "mokinys pabaige mokykla", jeigu mokinys yra penktokas  - "pabaige pradine mokykla"
// pakeisti: visus 6 pazymius
// prideti nauja f-ja begu(), kuri isves i console 'bugu begu'
// prideti nauja kintamaji: miestas = 'kaunas'
// UZDUOTIS 1.3
// isvesti pakeistus duomenis
// paleisti f-ja "begu()"
while (mokinys.klase < 13){
console.log("Mokinys dabar "+ mokinys.klase + " klaseje :)");

if(mokinys.klase === 12){
  console.log("Mokinys pabaige mokykla!");
}
else if (mokinys.klase === 5) {
   console.log("Mokinys pabaige pradine mokykla!");
}
mokinys.klase++;
}

mokinys.matematikosPazymiai = [10, 8, 7, 6, 5, 10];
mokinys.miestas = "Kaunas";

// 2 UZDUOTIS: sukurti 2-u atskirus  objektus:
// A) tevas : vardas(string), pavarde(string), vaikas(object)
// B) vaikas:  vardas (string), klase(number)
// 2.1) priskirti "vaikas" objekta - tevo kintamajam vaikas  (kintamajam)

let tevas = {

  vardas: "Petras",
  pavarde: "Petraitis",
  vaikas:{}
};


let vaikas = {

vardas: "Antanas",
klase: 5 };

tevas.vaikas = vaikas;
console.log(tevas);







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
