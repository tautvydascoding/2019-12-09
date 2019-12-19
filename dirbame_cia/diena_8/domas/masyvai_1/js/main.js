// test
console.log("labas");
// alert("issokanti zinute");
document.write("labas ekrane");
// ========js best practice & common mistakes (~2h)

// -------- --Array / Masyvai  TEORIJA (~2h)--------------------


	// UZDUOTIS
	// 1.1 sukurti tuscia masyva "prekiautojai"
	// 1.2 uzpildyti masyva prekiaujanciomis imonemis pvz: senukai, ...
	// 1.3 isvesti i console/ekrana "prekiautojai" masyva
  var prekiautojai = []; // empty array

  prekiautojai [0] = "Senukai";
  prekiautojai [1] = "Iki";
  prekiautojai [2] = "Depo";
  prekiautojai [3] = "Moki vezi";
  prekiautojai [4] = "Ermitazas";

  console.log(prekiautojai);


	// 2 pervadinti pirma stalciu pvz + "ir KO"
prekiautojai [0] += "      ir ko";
console.log(prekiautojai); //test

 	// 3 sukeisti antro ir trecio stalciu reiksmes vietomis.
		// !negalima rasyti rankomis String (nes duomenys kinta, ir jus nezinote koki duomenys bus po savaites)
let temp = prekiautojai[0];

prekiautojai [0] = prekiautojai [1];
prekiautojai [1] = temp;

console.log(prekiautojai);

	// 3.1  padaryti 3) uzdaviniui f-ja sukeistiMasyvo2elementus(x, y)

function sukeistiMasyvo2elementus (x,y){

  let temp = prekiautojai[x];

  prekiautojai [x] = prekiautojai [y];
  prekiautojai [y] = temp;

  console.log(prekiautojai);


}

sukeistiMasyvo2elementus(2,3);
