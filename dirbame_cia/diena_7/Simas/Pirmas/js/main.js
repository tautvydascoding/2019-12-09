// test
console.log("labas");
// alert("issokanti zinute");
// document.write("labas ekrane");
// 4 UZDUOTIS
// A) sukurti f-jas piestiEilute(x); spausdintiStulpeli(x);
// B) nupiesti tuscia lentele paleidiznat f-jas (  antrastine eilute "vardas |  pavarde | amzius" - teks isvesti be f-jos)




// ----------------------------
// vardas |  pavarde | amzius
// ----------------------------
// |
// |
// |
// |
// |

let i = 0;
function piestiEilute(x) {
  document.write(x);
}
function spausdintiStulpeli(y) {
  document.write(y + "<br>");
}
for ( i = 0; i < 30; i++) {
  piestiEilute("-");
}
document.write("<br> vardas | pavarde | amzius <br>");
for ( i = 0; i < 30; i++) {
  piestiEilute("-");
}
document.write("<br>");
for ( i = 0; i < 6; i++) {
  spausdintiStulpeli("*");
}


// advance
// 5 UZDUOTIS
// sukurti f-ja, kuri apskaiciuos kiek uzdirbsime po 10 metu , jei pradzioje uzdirbdami 680, ir kai alga i menesi pakyla 1% (~6.8eur)
// var kiekMenesiu = 10 * 12;
// var menAtlyginimas = 680;
// var algosPokytis = 1;  // 1%

let kiekMenesiu = 10 * 12;
let menAtlyginimas = 680;
let algosPokytis = 1;


function uzdarbis() {
  for ( i = 0; i < kiekMenesiu; i++) {
    menAtlyginimas = menAtlyginimas + (menAtlyginimas * (algosPokytis / 100));
  }
  return menAtlyginimas;
}
console.log("menesio atlyginmas po 10 metu = " + uzdarbis());
