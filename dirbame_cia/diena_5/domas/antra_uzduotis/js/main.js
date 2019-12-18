// test
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

let vardas;
let pavarde;
let amzius;
let atlyginimas;
vardas = "Domas";
pavarde = "Zitkevicius";
amzius = 35;
atlyginimas = 5000;

console.log(typeof(vardas));
console.log(typeof(pavarde));




//  2 UZDUOTIS
// sukurti funkcija "printVardasPavardeAmzius()" , kuri atspausdina i konsole pirmos uzduoties kintamuosius
function printVardasPavardeAmzius(){
console.log(vardas);
console.log(pavarde);
console.log(amzius);
//console.log(atlyginimas);


}
printVardasPavardeAmzius();



//  3 UZDUOTIS
// sukurti funkcija "printMetinisPajamuDydis()" ,
// kuri  atspausdina i konsole suma 12 atlyginimu (vienas atlyginimas yra lygus "uzduotis 1" kintamajam - "atlyginimas")
function printMetinisPajamuDydis(menPajamos){
metPajamos = menPajamos * 12;

//XSconsole.log(metPajamos);

//x=Math.round(metPajamos);
metPajamos = metPajamos.toFixed(2);


console.log(metPajamos);


}

printMetinisPajamuDydis(703.01);



//  4 UZDUOTIS
// A) sukurti kintamuosius:  salis, miestas, adresas, pastoKodas
// B) sukurti f-ja "printAddressData()",  kuri atspausdina i konsole visus siuos kintamuosius

let salis = "JAV";
let miestas = "Niujorkas";
let adresas = "Brooklyn Ave";
let pastoKodas = "90210";
function printAddressData(){

console.log(salis);
console.log(miestas);
console.log(adresas);
console.log(pastoKodas);
console.log(salis + ", " + miestas + ", "+ adresas + ", " + pastoKodas);



}
printAddressData();

// ---- advance-----
//  5 UZDUOTIS
// sukurti funkcija "printTekstas(x)" ,
//  kuri atspausdina i konsole "x" reiksmes
// iskviesti f-ja ir vietoj x irasyti koki nors teksta pvz: printTekstas( "Jokubo istorijos");

function printTekstas(x){

console.log(x)


}
printTekstas("Ridin' a bus");




// 7 UZDUOTIS
// F-ja kuri paskaiciuoja trikampio ilgaja krastine (Pitagoro teorema)
// pitagoroTeorema(x, y)      x*x + y*y ir is visko istraukti sakti (js Math.sqrt())

function pitagoroTeorema(x, y) {

var pitagoro;
pitagoro = (x*x) + (y*y);
pitagoro = Math.sqrt(pitagoro);
pitagoro = pitagoro.toFixed(2);

console.log(pitagoro);



}

pitagoroTeorema(9, 10);







//==========================KOMANDINE (3-4h) Bootstrap && GIT=================
// ant lentos
