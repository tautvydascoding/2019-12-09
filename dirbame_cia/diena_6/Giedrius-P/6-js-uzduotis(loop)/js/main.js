//==============TEORIJA ++ / -- ==========
    var x = 10;
    x = x + 3;  // x = 13
    x += 3;     // tas pats kad x = x + 3;
    x++;       //  tas pats kas x = x + 1;

//=============FOR   LOOP====================
// teo:  https://www.w3schools.com/js/js_loop_for.asp
//  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration

// 1 UZDUOTIS
// isvesti 30 kartu zodi "Azuolas" i konsole  (! bandant tai padaryti, atsiras skaicius 50)
function ivesticonsole(){
  for (i=0; i < 30; i++){
    console.log("Azuolas");
  }
}
ivesticonsole();
// 1.1 UZDUOTIS
// isvesti i ekrana "<h3> Azuolas </h3>" su document.write arba innerHTML
// document.write("<h3> Azuolas </h3>");
// 1.2 UZDUOTIS
// (HTML faile susikurti <article> elementa)
// isvesti 40 kartu zodi "<h2> Azuolas</h2> " i <article> elementa su  innerHTML pagalba
function article(){
  for (i=0; i < 40; i++){
  document.querySelector('article').innerHTML += "<h3> Azuolas </h3>";
  }
}
article();
// 1.3 UZDUOTIS
// (HTML faile susikurti <ul> elementa)
// isvesti 6 kartu zodi "<li> elementas 1 </li> " i <ul> elementa su  innerHTML pagalba
function ul(){
  for (i=1; i <= 6; i++){
    document.querySelector('ul').innerHTML += "<li> elementas: " + i + " </li";
  }
}
ul();
// 1.4 UZDUOTIS
// (HTML faile susikurti <header> elementa)
// isvesti 10 kartu zodi "<p> Aprasymas x </p> " i <header> elementa su  innerHTML pagalba (kur x - yra skaicius "i" nuo 0 iki 9 atsisrandantis automatiskai)
function header(){
  for (i=1; i <= 10; i++){
    document.querySelector('header').innerHTML += "<p> Aprasymas: " + i + " </p>";
  }
}
header();
// 1.5 UZDUOTIS
// (HTML faile susikurti <div> elementa)
// isvesti 6 kartu zodi "<li> elementas X </li> " i <div> elementa su  innerHTML pagalba (kur x - yra skaicius "i" nuo 1 iki 6 atsisrandasntis automatiskai)
function div(){
  for (i=1; i <= 6; i++){
    document.querySelector('div').innerHTML += "<li> elementas: " + i + " </li>";
  }
}
div();
// 2.0 UZDUOTIS
// sukurti f-ja "print()", kuri  i browser langa atspausdins  teksta "atspausdintas su f-ja" (panaudojanti document.write arba innerHTML)
function print(x){
  document.write("<p>" + x + "</p>");
}

print("labas");
// 2.1 UZDUOTIS
// sukurti f-ja "printX(xx)", kuri  i browser langa atspausdins paduota "xx" teksta (panaudojanti document.write arba innerHTML)

// 2.2 UZDUOTIS
// paleisti f-ja "printX(xx)" 100 kartu
for (i=0; i < 100; i++){
  print("Bandymas 100 kartu");
}
// 2.3 UZDUOTIS
// paleisti f-ja "printX(xx)" 12 kartu ir atspausdinti <img ...
// PATARIMAS:
// pabandyti  isideti nuotrauka i HTML faila, jie pavyks tada nusikopijuoti ir ideti i js faila
for (i=0; i <12; i++){
print('<img src="img/1.jpg"');
}
// 4 UZDUOTIS
// A) sukurti f-jas piestiEilute(x); spausdintiStulpeli(x);
// B) nupiesti tuscia lentele paleidiznat f-jas (  antrastine eilute "vardas |  pavarde | amzius" - teks isvesti be f-jos)
function piestiEilute(x){
  document.write("<p>")
  for (i=0; i < x; i++){
  document.write("-");
}
document.write("</p>")
document.write("<p> vardas |  pavarde | amzius </p>");
document.write("<p>")
for (i=0; i < x; i++){
document.write("-");
}
document.write("</p>")
}


function spausdintiStulpeli(x){
  for(i=0; i < x; i++){
  document.write("/"+"<br>");
}
}

piestiEilute(50);
spausdintiStulpeli(5);
// ----------------------------
// vardas |  pavarde | amzius
// ----------------------------
// |
// |
// |
// |
// |


// advance
// 5 UZDUOTIS
// sukurti f-ja, kuri apskaiciuos kiek uzdirbsime po 10 metu , jei pradzioje uzdirbdami 680, ir kai alga i menesi pakyla 1% (~6.8eur)
// var kiekMenesiu = 10 * 12;
// var menAtlyginimas = 680;
// var algosPokytis = 1;  // 1%
function alga(){
  var kiekMenesiu = 10 * 12;
  var menAtlyginimas = 680;
  var algosPokytis = 1/100;
  for (i=0; i < kiekMenesiu; i++){
   menAtlyginimas += algosPokytis * menAtlyginimas;
  }
  console.log(menAtlyginimas);
}

alga();
// ==============SCSS============================

//========= local/global or Frog/Garden =======
