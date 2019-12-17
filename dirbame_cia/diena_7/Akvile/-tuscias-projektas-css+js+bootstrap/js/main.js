
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

	let prekiautojai = []; // empty array

  prekiautojai.push("Rimi", "Norfa", "IKI", "Maxima", "Lidl");

  function spausdintiSarasa() {
    for (var i = 0; i < prekiautojai.length; i++) {
      document.querySelector("tbody").innerHTML += "<tr><td>" + prekiautojai[i] + "</td></tr>";;
      }
    }

    prekiautojai[0] = "Rimi ir CO";

    var parduotuveX = prekiautojai[1];
    prekiautojai[1] = prekiautojai[2];
    prekiautojai[2] = parduotuveX;

    function sukeistiMasyvo2elementus(x, y) {
      var elementas = prekiautojai[x];
      prekiautojai[x] = prekiautojai[y];
      prekiautojai[y] = elementas;
    }

// spausdintiSarasa();
sukeistiMasyvo2elementus(2, 3);
spausdintiSarasa();

// ========js best practice & common mistakes (~2h)

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

automobilis = [];
automobilis.push("Volvo", 15000, 30000);

automobilis[2] += 100;
automobilis[1] += 50000;
automobilis[automobilis.length] = "Tomas";

for (var i = 0; i < automobilis.length; i++) {
  console.log(automobilis[i]);
}

automobilis[automobilis.length] = 2004;

document.querySelector("body").innerHTML += "<article><h2>Pavadinimas: " + automobilis[0] + "</h2><br><div>Savininko vardas: " + automobilis[3] +
"</div><br><span>Automobilio metai: " + automobilis[4] + "</span><br><button class='btn btn-info'>Kaina: " + automobilis[2] + "</button></article>";

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

// 1. i masyvo gala ideti elmenta "butelis vandens"
keliautojas.push("Butelis vandens");
// 2. i masyvo pradzia ideti elmenta "ziebtuvelis"
keliautojas.unshift("Žiebtuvėlis");
// 3. istrinti 3-cia elmenta
keliautojas.splice(3, 1);
console.log(keliautojas);
// --------GERESNI UZDAVINIAI-------:
// 4. sukurti masyva (50 ilgumo) naudojant FOR ir uzpildyti visa skaiciais "0" (kiekvienas stalcius turi but lygus "0");
let masyvasSuFor = [];
for (var i = 0; i < 50; i++) {
  masyvasSuFor.push(0);
}
console.log(masyvasSuFor);
// 5.1  sukurti masyva naudojant WHILE (50 ilgumo) ir uzpildyti visa skaiciumi 1;
let masyvasSuWhile = [];
while (masyvasSuWhile.length < 50) {
  masyvasSuWhile.push(1);
}
console.log(masyvasSuWhile);
// 5.2: kas antra ^ masyvo elementa pakeisti i "3"
// [1, 3, 1, 3, 1, 3, 1, 3, 1, 3, ....
for (var i = 1; i < masyvasSuWhile.length; i+=2) {
masyvasSuWhile[i] = 3;
}

console.log(masyvasSuWhile);
// 5.3: kas 5-ta ^ masyvo elementa pakeisti i "9"
// [1, 3, 1, 3, 9, 3, 1, 3, 1, 9, ....
for (var i = 4; i < masyvasSuWhile.length; i+=5) {
masyvasSuWhile[i] = 9;
}

console.log(masyvasSuWhile);

//=============bootstrap---sm-md-lg-xl (30-60m)==========
