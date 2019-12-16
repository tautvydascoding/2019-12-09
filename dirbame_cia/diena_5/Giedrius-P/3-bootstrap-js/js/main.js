//TEST
console.log("labas");
// alert("issokanti zinute");
document.write("labas ekrane");



//  1 UZDUOTIS
// sukurti kintamuosius (ir jiems priskirti reiksmes):
// vardas, pavarde, amzius, atlyginimas
// ir panaudoti:
// console.log( vardas, pavarde);

// teo:
//  typeof( k ); f-ja kuri isveda kintamojo tipa
// console.log(    typeof(vardas)  );
// console.log(    typeof(amzius)  );

let vardas = "Giedrius";
let pav = "Palinauskas";
let amzius = 25;
let atlyginimas = 400;

 console.log(vardas," ",pav," ",amzius," ",atlyginimas,"EUR");

 function tipas(){
   console.log(typeof(vardas));
   console.log(typeof(pav));
   console.log(typeof(amzius));
   console.log(typeof(atlyginimas));
 }

 tipas();

//  2 UZDUOTIS
// sukurti funkcija "printVardasPavardeAmzius()" , kuri atspausdina i konsole pirmos uzduoties kintamuosius
function printVardasPavardeAmzius(){
  console.log(vardas," ",pav," ",amzius," ",atlyginimas,"EUR");
}
printVardasPavardeAmzius();
//  3 UZDUOTIS
// sukurti funkcija "printMetinisPajamuDydis()" ,
// kuri  atspausdina i konsole suma 12 atlyginimu (vienas atlyginimas yra lygus "uzduotis 1" kintamajam - "atlyginimas")
function printMetinisPajamuDydis(){
  let metinis = atlyginimas*12;
  console.log(metinis);
}
printMetinisPajamuDydis();

//  4 UZDUOTIS
// A) sukurti kintamuosius:  salis, miestas, adresas, pastoKodas
// B) sukurti f-ja "printAddressData()",  kuri atspausdina i konsole visus siuos kintamuosius
let salis = "Lietuva";
let miestas = "Kaunas";
let adresas = "Vytauto pr. 24";
let pastoKodas = "LT-23456";

function printAddressData(){
  console.log(salis, miestas, adresas, pastoKodas);
}

printAddressData();
// ---- advance-----
//  5 UZDUOTIS
// sukurti funkcija "printTekstas(x)" ,
//  kuri atspausdina i konsole "x" reiksmes
// iskviesti f-ja ir vietoj x irasyti koki nors teksta pvz: printTekstas( "Jokubo istorijos");
 function printTekstas(x){
   console.log(x);
 }

printTekstas("Jokubo istorija");

// 7 UZDUOTIS
// F-ja kuri paskaiciuoja trikampio ilgaja krastine (Pitagoro teorema)
// pitagoroTeorema(x, y)      x*x + y*y ir is visko istraukti sakti (js Math.sqrt())

function pitagoroTeorema(x,y) {
  let pit = x*x + y*y;
  let ats = Math.sqrt(pit);
  console.log("Pitagoro teorema: ",ats);
}

pitagoroTeorema(3,3);
//==========================KOMANDINE (3-4h) Bootstrap && GIT=================
// ant lentos
