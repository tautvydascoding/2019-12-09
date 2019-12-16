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
printX();
