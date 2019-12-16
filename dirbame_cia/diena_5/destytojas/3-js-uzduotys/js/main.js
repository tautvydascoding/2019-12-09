// test
console.log("labas");
// alert("issokanti zinute");
document.write("labas ekrane");
//  1 UZDUOTIS
// sukurti kintamuosius (ir jiems priskirti reiksmes):
// vardas, pavarde, amzius, atlyginimas
// ir panaudoti:
// console.log( vardas, pavarde);
let vardas = "Jonas";
 vardas = "Joniukas";

let pavarde = "Jonaitis";
let amzius = 21;
let atlyginimas = 1200;

// teo:
//  typeof( k ); f-ja kuri isveda kintamojo tipa
console.log(    typeof(vardas)  );
console.log(    typeof(amzius)  );

//  2 UZDUOTIS
// sukurti funkcija "printVardasPavardeAmzius()" ,
// kuri atspausdina i konsole pirmos uzduoties kintamuosius

// F-JOS SUKURIMAS:
function printVardasPavardeAmzius() {
    console.log(vardas, pavarde, amzius);
}
// F-JOS PALEIDIMAS
printVardasPavardeAmzius();
printVardasPavardeAmzius();
printVardasPavardeAmzius();

//  3 UZDUOTIS
// sukurti funkcija "printMetinisPajamuDydis()" ,
// kuri  atspausdina i konsole suma 12 atlyginimu (vienas atlyginimas yra lygus "uzduotis 1" kintamajam - "atlyginimas")
function printMetinisPajamuDydis() {
    let suma = 12 * atlyginimas;
    console.log("12 meneisu atlyginimas", suma);
}
printMetinisPajamuDydis();

//  4 UZDUOTIS
// A) sukurti kintamuosius:  salis, miestas, adresas, pastoKodas
// B) sukurti f-ja "printAddressData()",  kuri atspausdina i konsole visus siuos kintamuosius

let  salis = "UK";
let miestas = "Nothingem";
let adresas = "great str. 244";
let pastoKodas = "UK-54546";
 function printAddressData() {
     console.log( "salis: ", salis );
     console.log( "miestas: ", miestas );
     console.log( "adresas: ", adresas );
     console.log( "pasto Kodas: ", pastoKodas );

     console.log( " adresas: " + salis + miestas + adresas + pastoKodas );
     console.log( "amzius:" + 21); // "amzius21"
 }
 printAddressData() ;


 let baldai = " sofa, stalas,";

 baldai = baldai + "kede"; // sofa, stalas, kede
 baldai += "lempa";   // sofa, stalas, kede, lempa

// ---- advance-----
//  5 UZDUOTIS
// sukurti funkcija "printTekstas(x)" ,
//  kuri atspausdina i konsole "x" reiksmes
// iskviesti f-ja ir vietoj x irasyti koki nors teksta pvz: printTekstas( "Jokubo istorijos");

function printTekstas(x) {
    console.log("paduotas tekstas", x );
}
printTekstas( "Jokubo istorijos");
printTekstas( "Ievos pasakos");
printTekstas( "Antano pasakojimai");

// 7 UZDUOTIS
// F-ja kuri paskaiciuoja trikampio ilgaja krastine (Pitagoro teorema)
// pitagoroTeorema(x, y)      x*x + y*y ir is visko istraukti sakti (js Math.sqrt())

//==========================KOMANDINE (3-4h) Bootstrap && GIT=================
// ant lentos
