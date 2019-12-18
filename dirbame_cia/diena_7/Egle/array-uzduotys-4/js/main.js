// test
console.log("labas");
// alert("issokanti zinute");
console.log("labas");

// =================taisyklingas Array copy  =================
var array = ['a', 'b', 'c'];  // Becomes arr1 = ['a', 'b', 'c']
var kopijaNEGERAI =  array; // !!! Blogi  - sukurs susietaja kopija ir redaguojant keisis abu masyvai
var kopija1 = array.slice(0);   // Becomes arr2a = ['a', 'b', 'c'] - deep copy
var kopija2 = array.concat(  );   // Becomes arr2b = ['a', 'b', 'c'] - deep copy

// ================= ========= ======== ========
 ieskomiZmones = [2, 16, 17, 18, 19, 25];

var names = ["Enriqueta", "Sybil", "Piper", "Anh", "Carmelo", "Regan", "Synthia", "Newton", "Norbert", "Krystyna", "Fidelia", "Christoper", "Lewis", "Jeromy", "Joy", "Lorri", "Owen", "Rosenda", "Devora", "Treva", "Leanora", "Meghann", "Jacqueline", "Bunny", "Tenisha", "Rico", "Clementina", "Samella", "Rico", "Sandi", "Efrain", "Tena", "Vivan", "Hiedi", "Naida", "Evette", "Shane", "Freida", "Marielle", "Wynona", "Cheree", "Gaston", "Aja", "Timika", "Jude", "Griselda", "Luise", "Rico", "Minh", "Warren"];

var lastNames = ["Mcdowell", "Gates", "Mccall", "Cisneros", "Hancock", "Gaines", "Juarez", "Nolan", "Barajas", "Ware", "Orr", "Bell", "Donovan", "Rojas", "Stevenson", "Long", "Hays", "Gibson", "Meyer", "Sims", "Mcintosh", "Craig", "Haney", "Cunningham", "Hunt", "Montgomery", "Spears", "Cooke", "Gregory", "Mcknight", "Fernandez", "Hendrix", "Patton", "Bond", "Skinner", "Randolph", "Montes", "Guerra", "Bowen", "Potts", "Dyer", "Riley", "Rodgers", "Schroeder", "Ferguson", "Garrett", "Rush", "Moon", "Whitney", "Mcdaniel"];



// 1A) surasti vardu masyve, kelintas zmogus yra "Rico" (surasti pirmaji; sunkes- surasti visus riko)

let ieskomas = "Rico";

for (var i = 0; i < names.length; i++) {
  if (names[i] === ieskomas){
    console.log("Rico stalcius: " + i);
  }
}


// 1B) papildyti ^: jeigu tokio vardo neranda, isvesti VIENĄ pranesima "Nepavyko rasti...Bandykite kita zodi"

let arPavyko = false;
let ieskomasVardas = 'Owen';


for (var i = 0; i < names.length; i++) {
  if (names[i] === ieskomasVardas){
    arPavyko = true;
    break;
  }
}
  if(arPavyko == false){
    console.log("Nepavyko rasti. Bandykite kita varda");
    } else{
    console.log(ieskomasVardas + " radau stalciuje: " + i);
  }



// 2 UZDUOTIS (f-ja iekom stalciaus)
// parasyti funkcija, kuriai davus iekoma zodi , ji suranda jo vieta masyve (stalciaus numeri) ir si   numeri grazina
// eg: getStalciausNumeris( ieskomasTekstas)

let x = 'Freida';

function getStalciausNumeris(x){
  for (var i = 0; i < names.length; i++) {
    if (names[i] === x) {
      return i;
    }
  }
}
console.log(x + " stalciaus numeris: " + getStalciausNumeris(x));

// uzduotis:----------------------------
// 3) rasti pavarde masyve esancio  zmogaus vardu "Freida" (pirmojo)

let lastNameNr = getStalciausNumeris(x);
console.log(lastNameNr); // tikrinu ar veikia

console.log(x + " " + lastNames[lastNameNr]);




// 4) rasti visu zmoniu vardu "Rico" pavardes

for (var i = 0; i < names.length; i++) {
  if (names[i] === ieskomas){
    console.log(names[i] + " " + lastNames[i]);
  }
}


// 5) Turime masyva su zmoniu nr.  ieskomiZmones = [2, 16, 17, 18, 19, 25];
// A) atspausdinti visus numerius
// B) isvesti ju pavardes ir vardus

// A:
for (var i = 0; i < ieskomiZmones.length; i++) {
  console.log(ieskomiZmones[i]);
}


// B:

for (var i = 0; i < ieskomiZmones.length; i++) {
  let y = ieskomiZmones[i];
  console.log(names[y] + " " + lastNames[y]);
}


// var a = Math.random(); // 0 - 1
// if ( a <= 0.1) {
//     console.log("laimejai");
// }
