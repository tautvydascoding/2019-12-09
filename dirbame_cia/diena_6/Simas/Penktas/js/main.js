// test
console.log("labas");
// alert("issokanti zinute");
document.write("labas ekrane");


//==============TEORIJA ++ / -- ==========
    // var x = 10;
    // x = x + 3;  // x = 13
    // x += 3;     // tas pats kad x = x + 3;
    // x++;       //  tas pats kas x = x + 1;

//=============FOR   LOOP====================
// teo:  https://www.w3schools.com/js/js_loop_for.asp
//  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration

// 1 UZDUOTIS
// isvesti 30 kartu zodi "Azuolas" i konsole  (! bandant tai padaryti, atsiras skaicius 50)



// 1.1 UZDUOTIS
// isvesti i ekrana "<h3> Azuolas </h3>" su document.write arba innerHTML
let i = 0;
for ( i = 0; i < 31; i++) {
  document.querySelector("h3").innerHTML += "azuolas";
}
// 1.2 UZDUOTIS
// (HTML faile susikurti <article> elementa)
// isvesti 40 kartu zodi "<h2> Azuolas</h2> " i <article> elementa su  innerHTML pagalba
for ( i = 0; i < 41; i++) {
  document.querySelector("article").innerHTML += "<h2>Azuolas</h2>";
}

// 1.3 UZDUOTIS
// (HTML faile susikurti <ul> elementa)
// isvesti 6 kartu zodi "<li> elementas 1 </li> " i <ul> elementa su  innerHTML pagalba
for ( i = 0; i < 6; i++) {
  document.querySelector("ul").innerHTML += "<li>elementas1</li>";
}


// 1.4 UZDUOTIS
// (HTML faile susikurti <header> elementa)
// isvesti 10 kartu zodi "<p> Aprasymas x </p> " i <header> elementa su  innerHTML pagalba (kur x - yra skaicius "i" nuo 0 iki 9 atsisrandantis automatiskai)
for ( i = 0; i < 10; i++) {
  document.querySelector("header").innerHTML += "<p>aprasymas x</p>";
}
// 1.5 UZDUOTIS
// (HTML faile susikurti <div> elementa)
// isvesti 6 kartu zodi "<li> elementas X </li> " i <div> elementa su  innerHTML pagalba (kur x - yra skaicius "i" nuo 1 iki 6 atsisrandasntis automatiskai)
for ( i = 0; i < 6; i++) {
  document.querySelector("div").innerHTML += "<li>elementas x</li>";
}
