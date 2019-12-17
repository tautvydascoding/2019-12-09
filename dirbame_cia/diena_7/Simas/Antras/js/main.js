// test
console.log("labas");
// alert("issokanti zinute");
document.write("labas ekrane");
// UZDUOTIS
// 1.1 sukurti tuscia masyva "prekiautojai"
// 1.2 uzpildyti masyva prekiaujanciomis imonemis pvz: senukai, ...
// 1.3 isvesti i console/ekrana "prekiautojai" masyva
let prekiautojai = ["senukai", "maxima", "iki"];
console.log(prekiautojai);
// 2 pervadinti pirma stalciu pvz + "ir KO"
prekiautojai [0] += " ir ko";
console.log(prekiautojai);
// 3 sukeisti antro ir trecio stalciu reiksmes vietomis.
// let a = prekiautojai [1];
// prekiautojai [1] = prekiautojai [2];
// prekiautojai [2] = a;
// console.log(prekiautojai);
  // !negalima rasyti rankomis String (nes duomenys kinta, ir jus nezinote koki duomenys bus po savaites)

// 3.1  padaryti 3) uzdaviniui f-ja sukeistiMasyvo2elementus(x, y)



function sukeistiMasyvo2elementus(x,y) {
  let a = prekiautojai [x];
  prekiautojai [x] = prekiautojai [y];
  prekiautojai [y] = a;
  return prekiautojai;
}
console.log(sukeistiMasyvo2elementus(0,2));
