//uzduotis 0 kintamieji;
let atlyginimas = 890;
let psd = (atlyginimas * 9) / 100;
let puseAtlyginimo = atlyginimas / 2;
let vsd = (puseAtlyginimo * 24) / 100;
let iRankas = atlyginimas - psd - vsd;
console.log(iRankas);
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
let pavarde = "Balynas";
let amzius = 28;
let alga = 500;
console.log(typeof(vardas));
console.log(typeof(pavarde));
console.log(typeof(amzius));
console.log(typeof(atlyginimas));
//Pazaidimui pasirasiau ir f-ja, jeigu tikrinsit nekreipkit demesio :D
function vardasPavarde (a, b){
  if (typeof(a) === "string" && typeof(b) === "string"){
  return document.write(a + " " + b);
  } else{
  return document.write("Ivesk zodzius kaip zmogus")
  }
}
vardasPavarde(vardas, pavarde)
//  2 UZDUOTIS
// sukurti funkcija "printVardasPavardeAmzius()" , kuri atspausdina i konsole pirmos uzduoties kintamuosius
function printVardasPavardeAmzius (a, b, c){
  console.log(a, b, c);
}
printVardasPavardeAmzius(vardas, pavarde, amzius);
//  3 UZDUOTIS
// sukurti funkcija "printMetinisPajamuDydis()" ,
// kuri  atspausdina i konsole suma 12 atlyginimu (vienas atlyginimas yra lygus "uzduotis 1" kintamajam - "atlyginimas")
function printMetinisPajamuDydis (a) {
  return a * 12
}
console.log(printMetinisPajamuDydis(alga))

//  4 UZDUOTIS
// A) sukurti kintamuosius:  salis, miestas, adresas, pastoKodas
// B) sukurti f-ja "printAddressData()",  kuri atspausdina i konsole visus siuos kintamuosius
let salis = "Lietuva";
let miestas = "Kaunas"
let adresas = "Medvegalio-12";
let pastoKodas = 44447;
function printAddressData(a, b, c, d){
  console.log(a, b, c, d);
}
printAddressData(salis, miestas, adresas, pastoKodas);
//arba
function printAddressData2(){
  console.log("arba", salis, miestas, adresas, pastoKodas)
}
printAddressData2()

// ---- advance-----
//  5 UZDUOTIS
// sukurti funkcija "printTekstas(x)" ,
//  kuri atspausdina i konsole "x" reiksmes
// iskviesti f-ja ir vietoj x irasyti koki nors teksta pvz: printTekstas( "Jokubo istorijos");
function printTekstas(x) {
  console.log(x);
}
printTekstas("Hello world");

// 7 UZDUOTIS
// F-ja kuri paskaiciuoja trikampio ilgaja krastine (Pitagoro teorema)
// pitagoroTeorema(x, y)      x*x + y*y ir is visko istraukti sakti (js Math.sqrt())
function pitagoroTeorema(x,y){
  return Math.sqrt((x*x)+(y*y));
}
console.log(pitagoroTeorema(3, 4));
//==========================KOMANDINE (3-4h) Bootstrap && GIT=================
// ant lentos
