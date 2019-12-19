// test
console.log("labas");
// alert("issokanti zinute");
document.write("labas ekrane");


// ====================Scope====================
//   UZDUOTIS  A
// sukurti funkcija "printDuomenys()" ,
// funkcijoje sukurti kintamaji: var vardas = "Tomas"
// kuri  atspausdina i konsole  kintamaji "vardas"
// iskviesti f-ja

function printDuomenys(){

var vardas = "Tomas";
console.log(vardas);


}
printDuomenys();



//   UZDUOTIS  B
//  dabar, pabandykite po f-ja (uz jos ribu) i konsole atspausdinti kintamaji "vardas"
//  console.log( vardas) ;
// NOTE: gausite klaida ""is not defined""

//console.log(vardas);



// //================local && global=========
// var x = "x -viesas ";   // global
// function testLocalVar() {
//    var y = "y -vietinis ";  // local
//    z = "z -viesas";        // global // nereiketu taip daryti
//    console.log("x", x);
//    console.log("y", y);
//    console.log("z", z);
// }
// testLocalVar();
// console.log("x", x);
// console.log("z", z);
// console.log("y", y);  // error - 1)   nes sukurtas f-jos viduje 2) sukurtas su "var"



//------
 // UZDUOTIS // UZDUOTIS
 // A) sukurti kintamaji var katinas = "juodas"
 // B) sukurti f-ja
 // C) sukurti f-jos viduje kintamaji var katinas = "baltas"
 // D) atspauzdinti abu f-jos viduje
 // E) atspauzdinti  uz f-jos

var katinas = "juodas";

function kityCat(){
var katinas = "baltas";
console.log(katinas);
console.log(this.katinas);

}
kityCat();
