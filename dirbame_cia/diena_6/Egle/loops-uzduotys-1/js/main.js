// test
console.log("labas");



///==============TEORIJA ++ / -- ==========
    var x = 10;
    x = x + 3;  // x = 13
    x += 3;     // tas pats kad x = x + 3;
    x++;       //  tas pats kas x = x + 1;

//=============FOR   LOOP====================
// teo:  https://www.w3schools.com/js/js_loop_for.asp
//  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration

// 1 UZDUOTIS
// isvesti 30 kartu zodi "Azuolas" i konsole  (! bandant tai padaryti, atsiras skaicius 50)


for (var i = 0; i <30; i++) {
   x = "azuolas"
  console.log(x);
}

// 1.1 UZDUOTIS
// isvesti i ekrana "<h3> Azuolas </h3>" su document.write arba innerHTML

for (var i = 0; i <30;  i++) {
  x = "Ąžuolas";
  document.write("<h3>" + x + "</h3>" + "<br>");
}
// 1.2 UZDUOTIS
// (HTML faile susikurti <article> elementa)
// isvesti 40 kartu zodi "<h2> Azuolas</h2> " i <article> elementa su  innerHTML pagalba

for (var i = 0; i < 40; i++) {
  let x = "Ąžuolas";
  document.querySelector("article").innerHTML += "<h2 class='bg-info'>" + x + "</h2> <br>";
}

// 1.3 UZDUOTIS
// (HTML faile susikurti <ul> elementa)
// isvesti 6 kartu zodi "<li> elementas 1 </li> " i <ul> elementa su  innerHTML pagalba

for (var i = 0; i < 6; i++) {
  let y = "Elementas 1";
  document.querySelector('ul').innerHTML += "<li>" + y + "</li>";
}

// 1.4 UZDUOTIS
// (HTML faile susikurti <header> elementa)
// isvesti 10 kartu zodi "<p> Aprasymas x </p> " i <header> elementa su  innerHTML pagalba (kur x - yra skaicius "i" nuo 0 iki 9 atsisrandantis automatiskai)

for (var i = 0; i < 10; i++) {
  let x = i;
  let zodis = "Aprasymas x";
  document.querySelector('header').innerHTML += "<p>" + zodis + x + "</p>";
}




// 1.5 UZDUOTIS
// (HTML faile susikurti <div> elementa)
// isvesti 6 kartu zodi "<li> elementas X </li> " i <div> elementa su  innerHTML pagalba (kur x - yra skaicius "i" nuo 1 iki 6 atsisrandasntis automatiskai)

for (var i = 1; i < 7; i++) {
  let x = i;
  let tekstas = "elementas";
  document.querySelector('div').innerHTML += "<ul> <li>" + tekstas + x + "</li></ul>";

}



// 2.0 UZDUOTIS
// sukurti f-ja "print()", kuri  i browser langa atspausdins  teksta "atspausdintas su f-ja" (panaudojanti document.write arba innerHTML)

function print(){
  document.querySelector('body').innerHTML += "atspausdintas su f-ja <br>";
}
print();
// 2.1 UZDUOTIS
// sukurti f-ja "printX(xx)", kuri  i browser langa atspausdins paduota "xx" teksta (panaudojanti document.write arba innerHTML)

function printX(xx){
  document.querySelector("body").innerHTML += (xx) + "<br>";
}
printX("whatever");

// 2.2 UZDUOTIS
// paleisti f-ja "printX(xx)" 100 kartu

for (var i = 0; i < 100; i++) {

  printX("whatever");

}

// 2.3 UZDUOTIS
// paleisti f-ja "printX(xx)" 12 kartu ir atspausdinti <img ...
// PATARIMAS:
// pabandyti  isideti nuotrauka i HTML faila, jie pavyks tada nusikopijuoti ir ideti i js faila

for (var i = 0; i < 12; i++) {
  printX("<img src='https://cdn.shopifycloud.com/hatchful-web/assets/6fcc76cfd1c59f44d43a485167fb3139.png' alt=''>")
}

// 4 UZDUOTIS
// A) sukurti f-jas piestiEilute(x); spausdintiStulpeli(x);
// B) nupiesti tuscia lentele paleidiznat f-jas (  antrastine eilute "vardas |  pavarde | amzius" - teks isvesti be f-jos)



function piestiEilute(x){
    for(let i =0; i < x ; i++){
        str = "-";
        document.write(str);
    }
}

function spausdintiStulpeli(x){

}

function spausdintiStulpeli(y){

    for(let i =0; i < y ; i++){
        document.write(" Vardas |");
    }
}
piestiEilute(16);
document.write("<br>");
spausdintiStulpeli(4);
document.write("<br>");
piestiEilute(16);

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

// ==============SCSS============================

//========= local/global or Frog/Garden =======
