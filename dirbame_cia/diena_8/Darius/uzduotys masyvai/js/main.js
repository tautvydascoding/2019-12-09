// ========js best practice & common mistakes (~2h)

// -------- --Array / Masyvai  TEORIJA (~2h)--------------------


	// UZDUOTIS
	// 1.1 sukurti tuscia masyva "prekiautojai"
	// 1.2 uzpildyti masyva prekiaujanciomis imonemis pvz: senukai, ...
	// 1.3 isvesti i console/ekrana "prekiautojai" masyva

	// 2 pervadinti pirma stalciu pvz + "ir KO"
 	// 3 sukeisti antro ir trecio stalciu reiksmes vietomis.
		// !negalima rasyti rankomis String (nes duomenys kinta, ir jus nezinote koki duomenys bus po savaites)

	// 3.1  padaryti 3) uzdaviniui f-ja sukeistiMasyvo2elementus(x, y)

// function sukeistiMasyvo2elementus(x, y)
// {	var prekiautojai = ["senukai ", "maxima ", "iki ", "depo "]; // empty array
//
//   let a = prekiautojai[x];
//   prekiautojai[x]=prekiautojai[y];
//   prekiautojai[y]= a;
//
// document.querySelector('p').innerHTML = prekiautojai + " ";}
//
// sukeistiMasyvo2elementus(1, 3);


// UZDUOTIS:
// sukurti vienos masinos duomenu masyva:
//  pavadinimas, pravaziuota rida, kaina
// 1. isvesti masyvo duomenis
// 2. padidinti kaina: 100
// 3. padidinti rida: -50000
// 4. i masyva ideti papildomus duomenis: savininko vardas "Tomas"
// 4.1 atspausdinti visus pakeistus masyvo duomenis
// 5. i masyva ideti papildomus duomenis: masinos metai "2004"

// sunkesne:
// html elementus: article, h2, ... susikurti su javascript/ innerHTML
// 6. atspausdinti masyvo duomenis i ekrana:
// <article>
//      <h2> pavadinimas </h2>
//      <div> savininko vardas: ...</div>
//      <span> masinos metai: ...  Rida: ...</span>
//      i mygtuka ideti: masinos kaina ....
// </article>

//=============bootstrap---sm-md-lg-xl (30-60m)==========

// var masinos = ["BMW", 265000, 5999];
// var kaina;
// var rida;
//
// masinos[2] += 100;
// masinos[1] +=-50000;
// masinos[3] = "Tomas";
// masinos[4] = 2004;
//
//
// document.querySelector('p').innerHTML = "Marke: " + masinos[0] + " / Rida: " + masinos[1] + " / Kaina: " + masinos[2]+ " / Pirkejas: " + masinos[3] + " / Metai: " + masinos[4];

// ========js best practice & common mistakes (~2h)


// -------- --Array / Masyvai  Methods (~2h)----------
names = ["Tomas", "Pietkus", 25, "VDU - inzinerija"];

console.log(names);
// UZDUOTIS; panaudoti masyvu Methods:

// .length
// .join()
// .shift()
// .pop()
// ...
// pvz    names.shift();

// =========================================================
// SAVARANKISKA UZDUOTIS  Array
keliautojas = ["Tomas", "Pietkus", 25, "VDU - inzinerija"];
var x = keliautojas.join();
document.querySelector('p').innerHTML =  x;
// 1. i masyvo gala ideti elmenta "butelis vandens"
// 2. i masyvo pradzia ideti elmenta "ziebtuvelis"
// 3. istrinti 3-cia elmenta

// --------GERESNI UZDAVINIAI-------:
// 4. sukurti masyva (50 ilgumo) naudojant FOR ir uzpildyti visa skaiciais "0" (kiekvienas stalcius turi but lygus "0");

// 5.1  sukurti masyva naudojant WHILE (50 ilgumo) ir uzpildyti visa skaiciumi 1;
// 5.2: kas antra ^ masyvo elementa pakeisti i "3"
// [1, 3, 1, 3, 1, 3, 1, 3, 1, 3, ....
// 5.3: kas 5-ta ^ masyvo elementa pakeisti i "9"
// [1, 3, 1, 3, 9, 3, 1, 3, 1, 9, ....


//=============bootstrap---sm-md-lg-xl (30-60m)==========
