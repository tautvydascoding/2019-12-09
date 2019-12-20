// ==============patarimai==========
// reiksme  - kintamasis  / variable
// "reiksme" - tekstas/ reiksme/ value
// reiksme() - f-jos paleidimas
// =============================



//==============TEKSTO ISVEDIMAS (tik susipazinti)=========
// UZDUOTIS
// Issimeginti komandas:

// document.write(" <b class='bg-info'> Mano tekstas </b> ");
// window.alert("labas");
// alert("Viso");
// var ivestasTekstas = prompt("Ivestkite savo varda");
// console.log(ivestasTekstas);
// document.querySelector('h1').innerHTML = " <b>Antraste</b>";

//----Elemento duomenys--------
// auksto paemimas:
// var aukstis = document.querySelector('h1').clientHeight;   // clientHeight includes the height and vertical padding.
// var aukstis = document.querySelector('h1').offsetHeight;  //  offsetHeight includes the height, vertical padding, and vertical borders.
// aukscio nustatymas:
// document.querySelector("h1").style.height = "500px"; 		// change the height of a <div> element:

//=====================PASIKARTOJIMAS==================

// 1.1 UZDUOTIS
//  sukurti funkcija "printKaina(x)" ,
//  kuri atspausdina i konsole "x" reiksme
//  iskviesti f-ja print(15.99);


function printKaina() {

  let x = 15.99;
  console.log(x);
}

printKaina();

//  1.2 UZDUOTIS
// iskviesti f-ja print 3 kartus, kad atspausdintu 3 skirtingas kainas:  999 , 13.49, 100.05
//    vietoj x irasant, koki nors teksta pvz: printKaina( 999);

function trysKainos(x) {
  // let x = 999, y = 13.49, z = 100.05;
  console.log(x);
}

trysKainos(99);


// 2.1 UZDUOTIS
// parasyti f-ja "pazymiuVidurkis()", kuri apskaiciuoja vidurki is  5 menesiu pazymiu
// suskaiciuoti pazymiu vidurki (pazymius sukurti f-jos viduje) 5, 10 , 8 , 6 , 8  (ir atspausdintu vidurki)

// function pazymiuVidurkis(){
//   let a = 5, b  = 10, c = 8, d = 6, e = 8, f = 0;
//
//   f = (a+b+c+d+e)/5
//
//   console.log(f);
//
// }
//
// pazymiuVidurkis();

// 2.2 UZDUOTIS
// parasyti f-ja "pazymiuVidurkis1(x1, x2, x3, x4, x5)", kuriai galima paduoti 5 kintamuosius,
// kuri apskaiciuoja vidurki is paduotu 5 menesiu pazymiu
// suskaiciuoti pazymiu vidurki, 5, 10 , 8 , 6 , 8  (ir atspausdintu vidurki)

// function pazymiuVidurkis2(x1, x2, x3, x4, x5){
//
// let f = 0;
//
//   f = (x1 + x2 + x3 + x4 + x5)/5
//
//
//
// return f;
// }
//
// vid = pazymiuVidurkis2(5, 10, 8, 6, 8);
//
// document.querySelector('h1').innerHTML = "pazymiu vidurkis = " + vid + "<br>";

// 1 UZDUOTIS
// A) parasyti f-ja "getVardas()", kuri turi "return" zodeli ir grazina varda i iskveitimo vieta.
// B)   f-joje  sukurti kintamaji "vardas" Tomas
// C) patikrinti ar veikia f-ja


// function getVardas(){
//   let vardas = "Tomas";
//
//
// console.log("suveike get vardas" + vardas);
//
//   return vardas;
//
//   }
//
// let vard = getVardas();
//
// document.querySelector('section').innerHTML = "vardas = " + vard;

// 2 UZDUOTIS
// parasyti f-ja "getVardasPavarde()", kuri turi "return" zodeli ir grazina varda ir pavarde i iskveitimo vieta.
//  f-joje sukurti kintamaji   "pavarde" Tomauskas, "vardas" - Antanas
// patikrinti ar veikia f-ja

// function getVardasPavarde() {
//
//   let vardas = "Tomas";
//   let pavarde = "Antainaitis"
//
// let kontaktas = vardas + " " + pavarde;
// return kontaktas;
//
// }
//
// let vard = getVardasPavarde();
//
// document.querySelector('section').innerHTML = "vardas = " + vard;

// 3 UZDUOTIS
// A) parasyti f-ja "getPelnas()", kuri turi "return" zodeli ir grazina apskaiciuota pelna
// B) f-joje sukurti kintamaji "pajamos" 12500
// B) f-joje sukurti kintamaji "islaidos" 7500
// B) f-joje apskaiciuoti pelna  ( pvz: pelnas = pajamos - islaidos)
// C) patikrinti ar veikia f-ja


// function getPelnas() {
// let pajamos = 12500;
// let islaidos = 7500;
// let pelnas = 0;
// pelnas = pajamos - islaidos;
// return pelnas;
// }
//
// let pelnas2 = getPelnas();
//
// document.querySelector('section').innerHTML = "pelnas = " + pelnas2;

// 3.2 UZDUOTIS
// A) parasyti f-ja "getPelnas(pajamos, nuostoliai)", kuri turi "return" zodeli ir grazina apskaiciuota pelna
// B) f-joje apskaiciuoti pelna  ( pvz: pelnas = pajamos - nuostoliai)
// C) patikrinti ar veikia f-ja

// function getPelnas(pajamos, nuostoliai) {
//
// let pelnas = 0;
// pelnas = pajamos - nuostoliai;
// return pelnas;
// }
//
// let pelnas2 = getPelnas(8000, 3986);
//
// document.querySelector('section').innerHTML = "pelnas = " + pelnas2;

// 4.1 UZDUOTIS
// parasyti f-ja, kuri skaiciuoja vieno mokinio pazymiu vidurki
// "getPazymiuVidurkis2(x1, x2, x3, x4, x5)"  f-ja apskaiciuoja vidurki is paduotu 5 menesiu pazymiu (ir grazina atsakyma i iskvietimo vieta! "return atskymas;")
//  turi "return" zodeli. Padarytas auksciau

// 4.2 UZDUOTIS
// parasyti f-ja, kuri skaiciuoja 6-kiu mokiniu pazymiu vidurki
// "getKlasesPazymiuVidurkis()"
// f-ja apskaiciuoja vidurki is paduotu 5 menesiu pazymiu
// (ir grazina atsakyma i iskvietimo vieta! "return atskymas;")
// turi "return" zodeli.


// function getKlasesPazymiuVidurkis(x1, x2, x3, x4, x5) {
//   let vidurkis = 0;
//   vidurkis = (x1 + x2 + x3 + x4 + x5)/5
//   return vidurkis;
// }
// let atsakymas = getKlasesPazymiuVidurkis(5, 9, 6, 1, 0)
// document.querySelector("section").innerHTML = "vidurkis" + atsakymas;

// 5 UZDUOTIS
// A) sukurti h1 su tekstu viduje  (HTML faile)
// B) sukurti f-ja "getH1ElementoAukstis(), kuri su "return" grazina surenderinto h1 elemento auksti
// C) su CSS pakeisti h1 auksti, ir paziureti ar jusu f-ja veikia

// function getH1ElementoAukstis(){
//
//   var aukstis = document.querySelector('h1').clientHeight;   // clientHeight includes the height and vertical padding.
//   //var aukstis = document.querySelector('h1').offsetHeight;  //  offsetHeight includes the height, vertical padding, and vertical borders.
//
//   return aukstis;
// }
//
// let aukst = getH1ElementoAukstis()
// document.querySelector("h1").innerHTML = "aukstis" + aukst;

// 1 UZDUOTIS
// naudojant FOR cikla, atspausdinti  "#" tiek, kad gautusi trikampio vaizdas
// #
// ##
// ###
// ####
// #####
// ######

// function groteles(){
//
// let text = " ";
// var i;
// for (i = 0; i < 6; i++)
//
// {text += "#" ;
//
// document.querySelector("h1").innerHTML+= text + "<br>";}
// }
//
// groteles()


// UZDUOTIS - f-jos return
// failo virusje sukurti kintamuosius:
// valandinisIkainis = 10
// valandos Povilas = 160
// valandos Antanas = 80
// valandos Tomas   = 100
// imones pajamos = 20000
// kitos imones islaidos = 3400
//  UZDUOTIS:
//  1) sukurti  f-ja: getDarbuotojoAtlyginimas
//  1.2) paleisti tiek kartu kiek turime darbuotoju
//  2) sukurti  f-ja: getImonesPelnas
//  2.2) isvesti apskaiciuota pelna i console ar ekrana



//  let valandinisIkainis = 10;
//  // let valandosPovilas = 160;
//  // let valandosAntanas = 80;
//  // let valandosTomas   = 100;
//  let pajamos = 20000;
//  let kastai = 3400;
//
// function getDarbuotojoAtlyginimas(valandos, ikainis)
// {   let atlyginimas = valandos * ikainis;
//   return atlyginimas;
//
// }
//
// console.log(getDarbuotojoAtlyginimas(160, 10));
// console.log(getDarbuotojoAtlyginimas(80, 10));
// console.log(getDarbuotojoAtlyginimas(100, 10));
// atl = getDarbuotojoAtlyginimas(160, 10);
// console.log(atl);
//
// document.querySelector('section').innerHTML = atl;
//
// function getImonesPelnas()
// {
//  let pelnas = pajamos - kastai - getDarbuotojoAtlyginimas(160,80)- getDarbuotojoAtlyginimas(80, 10)- getDarbuotojoAtlyginimas(100, 10);
//  return pelnas;
// }
// getImonesPelnas();
// console.log(getImonesPelnas());

// ==============patarimai==========
// reiksme  - kintamasis  / variable
// "reiksme" - tekstas/ reiksme/ value
// reiksme() - f-jos paleidimas
// =============================



//============== =========
// UZDUOTIS 1
// sukurti ivedimo lauka, naudojantis pvz 3,
// kur reikes ivesti apskritimo spinduli ,,R".
// Kai paspaudziamas mygtukas - paskaiciuojamas apskritimo plotas: Plotas = pi * R*R
// pi = Math.PI;
//
//
//
//  // UZDUOTIS 2
// sukurti ivedimo 2 laukus, naudojantis pvz 3,
// kur reikes ivesti staciakampio auksti ir ploti.
// Kai paspaudziamas mygtukas - paskaiciuojamas staciakampio plotas:
// Plotas  = x * y;

console.log(" Labas ");

// UZDUOTIS
// Issimeginti komandas:


function plotas() {

	 alert("Ploto skaiciavimas");

	//suradimas
	let ivedimoLaukasVardas = document.querySelector('#skaicius');  // surandame HTML elemnta
	//test
	 console.log("surastas elmentas: ", ivedimoLaukasVardas);

	// paemimas
	let spindulys = ivedimoLaukasVardas.value;
  var a = parseFloat(spindulys);
  let plotas2 = 0;
  plotas2 = a*a*Math.PI;
	//test
	// console.log("paimta reiksme: ", laukoPradineReiksme);

	 // ivedimo lauko pakeitimas
	// ivedimoLaukasVardas.value = "  Pakeistas   ";  //querySelector - paieskos/selector komanda (veikia pagal CSS taiyskles pvz: '.class', '#id', )
	//test
	 // console.log("po pakeitimo lauko reiksme: ", ivedimoLaukasVardas.value);


	   //----ne ivedimo lauku keitimas -  --------


		 let manoP = document.querySelector('p');
		manoP.innerHTML = 	"plotas yra: " + plotas2;	 //innerHTML - keicia surasto HTML elemento vidu
}
