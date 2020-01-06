//  1 UZDUOTIS
// sukurti kintamuosius (ir jiems priskirti reiksmes):
// vardas, pavarde, amzius, atlyginimas
// ir panaudoti:
// console.log( vardas, pavarde);

let vardas = "Tomas";
let pavarde = "Sakalauskas";
let amžius = 24;
let atlyginimas = 1000;


/*var vardas = "Tomas";
var pavarde = "Sakalauskas";
var amzius = 24;
var atlyginimas = 1000;*/

//arba

//let vardas, pavarde, amzius, atlyginimas;


// teo:
//  typeof( k ); f-ja kuri isveda kintamojo tipa
console.log(typeof(vardas));
console.log(typeof(amžius));


/*console.log( typeof(vardas) );
console.log( typeof(amzius) );*/

//  2 UZDUOTIS
// sukurti funkcija "printVardasPavardeAmzius()" ,
// kuri atspausdina i konsole pirmos uzduoties kintamuosius

function printVardasPavardeAmzius() {
  console.log(vardas, pavarde, amžius, atlyginimas);
}
printVardasPavardeAmzius();


/*function printVardasPavardeAmzius() {
  console.log(vardas, pavarde, amzius, atlyginimas);
}
printVardasPavardeAmzius();*/

//  3 UZDUOTIS
// sukurti funkcija "printMetinisPajamuDydis()" ,
// kuri  atspausdina i konsole suma 12 atlyginimu
//(vienas atlyginimas yra lygus "uzduotis 1" kintamajam - "atlyginimas")

function printMetinisPajamuDydis(x) {
  console.log(atlyginimas * 12);
}
printMetinisPajamuDydis();

/*function printMetinisPajamuDydis(x) {
  console.log(atlyginimas * 12);
}
printMetinisPajamuDydis();*/

//  4 UZDUOTIS
// A) sukurti kintamuosius:  salis, miestas, adresas, pastoKodas
// B) sukurti f-ja "printAddressData()",  kuri atspausdina i konsole visus siuos kintamuosius

let salis = "Lietuva";
let miestas = "Kaunas";
let adresas = "Ausros aleja";
let pastoKodas = "LT-6565";

function printAddressData() {
 console.log(salis, miestas, adresas, pastoKodas);
}
printAddressData();


/*let salis = "Lietuva";
let miestas = "Kaunas";
let adresas = "Perkuno-aleja";
let pastoKodas = "LT-6556";

function printAddressData() {
  console.log(salis, miestas, adresas, pastoKodas);
}
printAddressData();*/

// ---- advance-----
//  5 UZDUOTIS
// sukurti funkcija "printTekstas(x)" ,
//  kuri atspausdina i konsole "x" reiksmes
// iskviesti f-ja ir vietoj x irasyti koki nors teksta pvz: printTekstas( "Jokubo istorijos");

function printTekstas(x) {
  console.log(x);
}
printTekstas("Jokubo istorijos");


/*function printTekstas(x) {
console.log(x);
}
printTekstas("as vytas");*/


// 7 UZDUOTIS
// F-ja kuri paskaiciuoja trikampio ilgaja krastine (Pitagoro teorema)
// pitagoroTeorema(x, y)      x*x + y*y ir is visko istraukti sakti (js Math.sqrt())

function pitagoroTeorema(x, y) {
  console.log(Math.sqrt(x * x + y * y));
}
pitagoroTeorema(10, 15);



/*function pitagoroTeorema(x, y) {
  console.log( Math.sqrt (x * x + y * y));
}
pitagoroTeorema(10, 5);*/



//==========================KOMANDINE (3-4h) Bootstrap && GIT=================
// ant lentos
