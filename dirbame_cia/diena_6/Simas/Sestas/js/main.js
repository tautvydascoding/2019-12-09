// test
console.log("labas");
// alert("issokanti zinute");
document.write("labas ekrane");
// 2.0 UZDUOTIS
// sukurti f-ja "print()", kuri  i browser langa atspausdins  teksta "atspausdintas su f-ja" (panaudojanti document.write arba innerHTML)
function print() {
  document.querySelector("p").innerHTML = "Tekstas atspausdintas su funkcija";
}
// 2.1 UZDUOTIS
// sukurti f-ja "printX(xx)", kuri  i browser langa atspausdins paduota "xx" teksta (panaudojanti document.write arba innerHTML)
function printX(xx) {
  document.write(xx);
}
// 2.2 UZDUOTIS
// paleisti f-ja "printX(xx)" 100 kartu



// let i = 0;
// for ( i = 0; i < 100; i++) {
//   printX("kazkas <br>");
// }



// 2.3 UZDUOTIS
// paleisti f-ja "printX(xx)" 12 kartu ir atspausdinti <img ...
// PATARIMAS:
// pabandyti  isideti nuotrauka i HTML faila, jie pavyks tada nusikopijuoti ir ideti i js faila
for ( i = 0; i < 12; i++) {
  printX('<img id="image" src="images/balionas.png" alt="balionas">');
}
