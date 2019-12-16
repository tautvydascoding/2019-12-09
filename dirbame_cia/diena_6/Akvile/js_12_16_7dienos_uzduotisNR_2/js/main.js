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

// 1.1 UZDUOTIS
// isvesti i ekrana "<h3> Azuolas </h3>" su document.write arba innerHTML

// 1.2 UZDUOTIS
// (HTML faile susikurti <article> elementa)
// isvesti 40 kartu zodi "<h2> Azuolas</h2> " i <article> elementa su  innerHTML pagalba

// 1.3 UZDUOTIS
// (HTML faile susikurti <ul> elementa)
// isvesti 6 kartu zodi "<li> elementas 1 </li> " i <ul> elementa su  innerHTML pagalba

// 1.4 UZDUOTIS
// (HTML faile susikurti <header> elementa)
// isvesti 10 kartu zodi "<p> Aprasymas x </p> " i <header> elementa su  innerHTML pagalba (kur x - yra skaicius "i" nuo 0 iki 9 atsisrandantis automatiskai)

// 1.5 UZDUOTIS
// (HTML faile susikurti <div> elementa)
// isvesti 6 kartu zodi "<li> elementas X </li> " i <div> elementa su  innerHTML pagalba (kur x - yra skaicius "i" nuo 1 iki 6 atsisrandasntis automatiskai)


for (var i = 1; i <= 30; i++) {
	console.log("Ąžuolas");
	document.write("<h3> Ąžuolas </h3>");
	document.querySelector("article").innerHTML += "<h2> Azuolas " + i + " </h2>";
}

for (var i = 1; i <= 6; i++) {
	document.querySelector("ul").innerHTML += "<li> Elementas " + i + "</li>";
}

for (var i = 0; i < 10; i++) {
	document.querySelector("header").innerHTML += "<p> Aprašymas " + i + "</p>";
}

// 2.0 UZDUOTIS
// sukurti f-ja "print()", kuri  i browser langa atspausdins  teksta "atspausdintas su f-ja" (panaudojanti document.write arba innerHTML)

function print() {
	document.write("atspausdintas su f-ja");
}

print();
// 2.1 UZDUOTIS
// sukurti f-ja "printX(xx)", kuri  i browser langa atspausdins paduota "xx" teksta (panaudojanti document.write arba innerHTML)
let tekstas = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
function printX(xx) {
	document.querySelector("main p").innerHTML += "<p>" + xx + "</p>";
}

printX(tekstas);
// 2.2 UZDUOTIS
// paleisti f-ja "printX(xx)" 100 kartu

for (var i = 0; i < 100; i++) {
	printX(tekstas);
}

// 2.3 UZDUOTIS
// paleisti f-ja "printX(xx)" 12 kartu ir atspausdinti <img ...
// PATARIMAS:
// pabandyti  isideti nuotrauka i HTML faila, jie pavyks tada nusikopijuoti ir ideti i js faila
let img = "<img src='img/5.jpg' width=\"30\">";

function printImg(img) {
	document.querySelector("body").innerHTML += img;
}

for (var i = 0; i < 12; i++) {
	printImg(img);
}
// 4 UZDUOTIS
// A) sukurti f-jas piestiEilute(x); spausdintiStulpeli(x);
// B) nupiesti tuscia lentele paleidiznat f-jas (  antrastine eilute "vardas |  pavarde | amzius" - teks isvesti be f-jos)

// function piestiEilute(x) {
// 	let row = "<tr></tr>";
// 	for (var i = 0; i < x; i++) {
// 		document.querySelector("tbody").innerHTML += row;
// 	}
// }
//
// function spausdintiStulpeli(x) {
// 	let col = "<td>Stulpelis</td>";
// 	for (var i = 0; i < x; i++) {
// 		document.querySelector("tbody tr").innerHTML += col;
// 	}
// }
//
// piestiEilute(5);
// spausdintiStulpeli(3);
let row = "<tr></tr>";
let col = "<td>Stulpelis</td>";

function spausdintiLentele(x, z) {
	for (var i = 0; i < x; i++) {
		document.querySelector("tbody").innerHTML += row;
		for (var y = 0; y < z; y++) {
			document.querySelectorAll("tbody tr")[i].innerHTML += col;
		}
	}
}

spausdintiLentele(5, 3);


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
var kiekMenesiu = 10 * 12;
var menAtlyginimas = 680;
var algosPokytis = 1;  // 1%

function kiekGausimPo10Metu() {
		for (var i = 0; i < kiekMenesiu; i++) {
			menAtlyginimas+= menAtlyginimas/100*algosPokytis;
		}
		return menAtlyginimas;
}

console.log(kiekGausimPo10Metu());

// ==============SCSS============================

//========= local/global or Frog/Garden =======
