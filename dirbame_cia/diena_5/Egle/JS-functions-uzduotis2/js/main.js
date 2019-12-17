// test
console.log("labas");

//  1 UZDUOTIS
// sukurti kintamuosius (ir jiems priskirti reiksmes):
// vardas, pavarde, amzius, atlyginimas
// ir panaudoti:
// console.log( vardas, pavarde);



let vardas = 'Jonas';
let pavarde = "Jonaitis";
let amzius = 39;
let atlyginimas = 950;

console.log(vardas, pavarde, ", amzius: ", amzius, 'metai. Alga ', atlyginimas, 'EUR/men.');



// teo:
//  typeof( k ); f-ja kuri isveda kintamojo tipa
// console.log(    typeof(vardas)  );
// console.log(    typeof(amzius)  );

console.log(typeof(vardas), typeof(pavarde), typeof(amzius), typeof(atlyginimas));


//  2 UZDUOTIS
// sukurti funkcija "printVardasPavardeAmzius()" , kuri atspausdina i konsole pirmos uzduoties kintamuosius

 function printVardasPavardeAmzius() {
   console.log(vardas, pavarde, amzius, atlyginimas);
 }

 printVardasPavardeAmzius();


//  3 UZDUOTIS
// sukurti funkcija "printMetinisPajamuDydis()" ,
// kuri  atspausdina i konsole suma 12 atlyginimu (vienas atlyginimas yra lygus "uzduotis 1" kintamajam - "atlyginimas")

function printMetinisPajamuDydis() {
  let metineAlga = atlyginimas * 12;
  console.log(metineAlga);
}

printMetinisPajamuDydis();


//  4 UZDUOTIS
// A) sukurti kintamuosius:  salis, miestas, adresas, pastoKodas
// B) sukurti f-ja "printAddressData()",  kuri atspausdina i konsole visus siuos kintamuosius

let salis = "Japonija";
let miestas = "Kitakyushu";
let adresas = "Kokura-Minami";
let pastoKodas = 775538;

function printAddressData() {

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

printTekstas("sesios zasys su sesiais zasyciais");
printTekstas("Pakopa po pakopos");


// 7 UZDUOTIS
// F-ja kuri paskaiciuoja trikampio ilgaja krastine (Pitagoro teorema)
// pitagoroTeorema(x, y)      x*x + y*y ir is visko istraukti sakti (js Math.sqrt())


function pitagoroTeorema(x, y) {
  let pitagoras =  x*x + y*y;
  let saknis = Math.sqrt(pitagoras);
  console.log(pitagoras, saknis);
}

pitagoroTeorema(10, 5);

//==========================KOMANDINE (3-4h) Bootstrap && GIT=================
// ant lentos
