// test
console.log("labas");
// alert("issokanti zinute");
document.write("labas ekrane");
// PRISIMINTI TEORIJA
var vardas = "";    // inicialisation (kintamojo kurimo metu, reiksmes priskyrimas)
var zmogus; // undefined
// console.log( mama );  // not defined

//===========================================
// 1 UZDUOTIS:
// sukurti mokinio objekta: vardas: "", pavarde: "", kelintokas: 0, mokinio matematikos pazymiai (6, 5, 9 , 10, 8)
// (ir priskirti reiksmes pvz: 'Jurgis', "Jurgauskas", 7)

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

// 2 UZDUOTIS: sukurti 2-u atskirus  objektus:
// A) tevas : vardas(string), pavarde(string), vaikas(object)
// B) vaikas:  vardas (string), klase(number)
// 2.1) priskirti "vaikas" objekta - tevo kintamajam vaikas  (kintamajam)
var tevas = {
        vardas : "",
        pavarde : "",
        vaikas : {}
};
var vaikas = {
        vardas : "",
        pavarde : ""
};
tevas.vardas = 'Petras';
tevas.pavarde = 'Petrauskas';

vaikas.vardas = 'Jonas';
vaikas.pavarde = 'Petrauskas';

tevas.vaikas = vaikas;  // vieno objekto idejimas i kita, tiesiog kintamo priskyrimas

console.log("tevo objektas: ", tevas);

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
// console.log( AudiTT.color );
// console.log( AudiTT.maxSpeed );
//
// console.log( Audi100.color );
// console.log( Audi100.maxSpeed );
