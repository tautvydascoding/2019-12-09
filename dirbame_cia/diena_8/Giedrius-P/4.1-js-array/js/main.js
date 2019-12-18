console.log("labas");

// =================taisyklingas Array copy  =================
var array = ['a', 'b', 'c'];  // Becomes arr1 = ['a', 'b', 'c']
var kopijaNEGERAI =  array; // !!! Blogi  - sukurs susietaja kopija ir redaguojant keisis abu masyvai
var kopija1 = array.slice(0);   // Becomes arr2a = ['a', 'b', 'c'] - deep copy
var kopija2 = array.concat(  );   // Becomes arr2b = ['a', 'b', 'c'] - deep copy

// ================= ========= ======== ========


var names = ["Enriqueta", "Sybil", "Piper", "Anh", "Carmelo", "Regan", "Synthia", "Newton", "Norbert", "Krystyna", "Fidelia", "Christoper", "Lewis", "Jeromy", "Joy", "Lorri", "Owen", "Rosenda", "Devora", "Treva", "Leanora", "Meghann", "Jacqueline", "Bunny", "Tenisha", "Rico", "Clementina", "Samella", "Rico", "Sandi", "Efrain", "Tena", "Vivan", "Hiedi", "Naida", "Evette", "Shane", "Freida", "Marielle", "Wynona", "Cheree", "Gaston", "Aja", "Timika", "Jude", "Griselda", "Luise", "Rico", "Minh", "Warren"];

var lastNames = ["Mcdowell", "Gates", "Mccall", "Cisneros", "Hancock", "Gaines", "Juarez", "Nolan", "Barajas", "Ware", "Orr", "Bell", "Donovan", "Rojas", "Stevenson", "Long", "Hays", "Gibson", "Meyer", "Sims", "Mcintosh", "Craig", "Haney", "Cunningham", "Hunt", "Montgomery", "Spears", "Cooke", "Gregory", "Mcknight", "Fernandez", "Hendrix", "Patton", "Bond", "Skinner", "Randolph", "Montes", "Guerra", "Bowen", "Potts", "Dyer", "Riley", "Rodgers", "Schroeder", "Ferguson", "Garrett", "Rush", "Moon", "Whitney", "Mcdaniel"];



// 1A) surasti vardu masyve, kelintas zmogus yra "Rico" (surasti pirmaji; sunkes- surasti visus riko)
a = 0;
let masyvoDydis = names.length;
for (i=0; i < masyvoDydis; i++){
  var b = a++;
  if (names[i] == "Rico"){
    console.log(i);
    b = a++;
  } else if (b === 49) {console.log("Nepavyko rasti.... Bandykite kita zodi");}
}
// 1B) papildyti ^: jeigu tokio vardo neranda, isvesti VIENĄ pranesima "Nepavyko rasti...Bandykite kita zodi"


// 2 UZDUOTIS (f-ja iekom stalciaus)
// parasyti funkcija, kuriai davus iekoma zodi , ji suranda jo vieta masyve (stalciaus numeri) ir si   numeri grazina
// eg: getStalciausNumeris( ieskomasTekstas)
function ieskojimas(ieskomaszodis){
let a = 0;
let masyvoDydis = names.length;
let StalciausNumeris = [];
let m = 0;
for (i=0; i < masyvoDydis; i++){
  var b = a++;
  if (names[i] == ieskomaszodis){
    console.log(i);
    b = a++;
    let z = m++;
    StalciausNumeris[z] = i;
  } else if (b === 49) {console.log("Nepavyko rasti.... Bandykite kita zodi");}
}
return StalciausNumeris;
}
console.log (ieskojimas("Rico"));

// uzduotis:----------------------------
// 3) rasti pavarde masyve esancio  zmogaus vardu "Freida" (pirmojo)
// 4) rasti visu zmoniu vardu "Rico" pavardes
// 5) Turime masyva su zmoniu nr.  ieskomiZmones = [2, 16, 17, 18, 19, 25];
// A) atspausdinti visus numerius
// B) isvesti ju pavardes ir vardus
function pavarde(ieskomasVardas){
  console.log("Ieskomas Vardas: ", ieskomasVardas);
  for(i=0; i < names.length; i++){
    if(names[i] === ieskomasVardas){
      console.log("vardas pavarde: ", ieskomasVardas, " ", lastNames[i]);
    }
  }
}
pavarde("Freida");
pavarde("Rico");

 let ieskomiZmones = [2, 16, 17, 18, 19, 25];
function Zmones(){
  let a =0;
  for(i=0; i < names.length; i++){
    if (i === ieskomiZmones[a]){
      console.log("Numeris: ", i , "vardas pavarde: ", names[i], " ", lastNames[i]);
      a++;
    }
  }
}

Zmones();
// var a = Math.random(); // 0 - 1
// if ( a <= 0.1) {
//     console.log("laimejai");
// }
