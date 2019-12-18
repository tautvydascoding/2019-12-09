//  1 UZDUOTIS
// sukurti kintamuosius (ir jiems priskirti reiksmes):
// vardas, pavarde, amzius, atlyginimas
// ir panaudoti:
// console.log( vardas, pavarde);

// teo:
//  typeof( k ); f-ja kuri isveda kintamojo tipa
// console.log(    typeof(vardas)  );
// console.log(    typeof(amzius)  );








// ---- advance-----


// Pirma uzduotis

let vardas = "Darius";
let pavarde = "Jonaitis";
let amzius = 30;
let atlyginimas = 500;

console.log(vardas, pavarde);

console.log(typeof(vardas));
console.log(typeof(pavarde));

// antra uzduotis
//  2 UZDUOTIS
// sukurti funkcija "printVardasPavardeAmzius()" , kuri atspausdina i konsole pirmos uzduoties kintamuosius

function printVardasPavardeAmzius() {
  console.log(vardas);
  console.log(pavarde);
  console.log(amzius);
  console.log(atlyginimas);
}

printVardasPavardeAmzius();

// trečia užduotis
//  3 UZDUOTIS
// sukurti funkcija "printMetinisPajamuDydis()" ,
// kuri  atspausdina i konsole suma 12 atlyginimu (vienas atlyginimas yra lygus "uzduotis 1" kintamajam - "atlyginimas")

function printMetinisPajamuDydis(){

let MetinisPajamuDydis = atlyginimas * 12;
console.log(MetinisPajamuDydis);
}

printMetinisPajamuDydis();

// ketvirta uzduotis
//  4 UZDUOTIS
// A) sukurti kintamuosius:  salis, miestas, adresas, pastoKodas
// B) sukurti f-ja "printAddressData()",  kuri atspausdina i konsole visus siuos kintamuosius


function printAddressData(){

  let salis = "Lietuva";
  let miestas = "Kaunas";
  let adresas = "Vytauto pr 10";
  let pastoKodas = "3000LT";

  console.log(salis);
  console.log(miestas);
  console.log(adresas);
  console.log(pastoKodas);
}

printAddressData();

// penkta uzduotis
//  5 UZDUOTIS
// sukurti funkcija "printTekstas(x)" ,
//  kuri atspausdina i konsole "x" reiksmes
// iskviesti f-ja ir vietoj x irasyti koki nors teksta pvz: printTekstas( "Jokubo istorijos");


function printTekstas(x){


console.log(x);

}

printTekstas(99);
printTekstas('Jokubas');
//var ivestasTekstas = prompt("Ivestkite savo varda");
//console.log(ivestasTekstas);
//document.querySelector('h1').innerHTML = " <b>Antraste</b>";

var aukstis1 = document.querySelector('h1').clientHeight;   // clientHeight includes the height and vertical padding.

var aukstis2 = document.querySelector('h1').offsetHeight;  //  offsetHeight includes the height, vertical padding, and vertical borders.

console.log(aukstis1, aukstis2);
// aukscio nustatymas:
document.querySelector("h1").style.height = "500px"; 		// change the height of a <div> element:

//x = "Jokubas";
//console.log(x);
