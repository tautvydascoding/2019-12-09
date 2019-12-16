/*document.write("labas vakaras");
alert("labas vakaras");
console.log("labas vakaras");*/


// UZDUOTIS
// sukaiciuoti kokia jusu atlyginimas i rankas, jeigu:
// atlyginimas ant popieriaus 890
// o mokesciai:
// PSD 9%
// VSD 24% nuo puses atlyginimo
// sukikurti 4-5 kintamuosius
// ir apskaiciuoti atlyginima i rankas

//kintamieji

/*var atlyginimasAntPopieriaus = 890;
var psd = 9;
var vsd = 24;

//mokesciai:
var mokesciaiPsd = atlyginimasAntPopieriaus * 9 / 100;
var mokesciaiVsd =  (atlyginimasAntPopieriaus / 2) * 24 / 100;
var atlyginimasIrankas = atlyginimasAntPopieriaus - mokesciaiPsd - mokesciaiVsd;

console.log(atlyginimasIrankas);*/

//--------------------


//  1 UZDUOTIS
// sukurti kintamuosius (ir jiems priskirti reiksmes):
// vardas, pavarde, amzius, atlyginimas
// ir panaudoti:
// console.log( vardas, pavarde);

// teo:
//  typeof( k ); f-ja kuri isveda kintamojo tipa
// console.log(    typeof(vardas)  );
// console.log(    typeof(amzius)  );












var vardas = "Tomas";
var pavarde = "Sakalauskas";
var amzius = 24;
var atlyginimas = 1000;

//arba

//let vardas, pavarde, amzius, atlyginimas;

console.log( typeof(vardas) );
console.log( typeof(amzius) );

//  2 UZDUOTIS
// sukurti funkcija "printVardasPavardeAmzius()" , kuri atspausdina i konsole pirmos uzduoties kintamuosius



function printVardasPavardeAmzius() {
  console.log(vardas, pavarde, amzius, atlyginimas);

}

printVardasPavardeAmzius();

//  3 UZDUOTIS
// sukurti funkcija "printMetinisPajamuDydis()" ,
// kuri  atspausdina i konsole suma 12 atlyginimu (vienas atlyginimas yra lygus "uzduotis 1" kintamajam - "atlyginimas")

function printMetinisPajamuDydis(x) {
  console.log(atlyginimas * 12);
}

printMetinisPajamuDydis();

//  4 UZDUOTIS
// A) sukurti kintamuosius:  salis, miestas, adresas, pastoKodas
// B) sukurti f-ja "printAddressData()",  kuri atspausdina i konsole visus siuos kintamuosius

let salis = "Lietuva";
let miestas = "Kaunas";
let adresas = "Perkuno-aleja";
let pastoKodas = "LT-6556";

function printAddressData() {
  console.log(salis, miestas, adresas, pastoKodas);
}
printAddressData();

// ---- advance-----
//  5 UZDUOTIS
// sukurti funkcija "printTekstas(x)" ,
//  kuri atspausdina i konsole "x" reiksmes
// iskviesti f-ja ir vietoj x irasyti koki nors teksta pvz: printTekstas( "Jokubo istorijos");

function printTekstas(x) {
console.log(x);
}
printTekstas("as vytas");


// 7 UZDUOTIS
// F-ja kuri paskaiciuoja trikampio ilgaja krastine (Pitagoro teorema)
// pitagoroTeorema(x, y)      x*x + y*y ir is visko istraukti sakti (js Math.sqrt())


function pitagoroTeorema(x, y) {
  console.log( Math.sqrt (x * x + y * y));
}
pitagoroTeorema(10, 5);



//==========================KOMANDINE (3-4h) Bootstrap && GIT=================
// ant lentos
