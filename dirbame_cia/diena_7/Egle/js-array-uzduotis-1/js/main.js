// test
console.log("labas");
// alert("issokanti zinute");
// ========js best practice & common mistakes (~2h)

// -------- --Array / Masyvai  TEORIJA (~2h)--------------------


	// UZDUOTIS
	// 1.1 sukurti tuscia masyva "prekiautojai"
	// 1.2 uzpildyti masyva prekiaujanciomis imonemis pvz: senukai, ...
	// 1.3 isvesti i console/ekrana "prekiautojai" masyva

var prekiautojai = [];

prekiautojai[prekiautojai.length] = 'senukai';
prekiautojai[prekiautojai.length] = 'maxima';
prekiautojai[prekiautojai.length] = 'rimi';
prekiautojai.push('iki');
prekiautojai.unshift('norfa');

console.log(prekiautojai);


	// 2 pervadinti pirma stalciu pvz + "ir KO"

  prekiautojai[1] = "Senukai ir Ko";
  console.log(prekiautojai[1]);

 	// 3 sukeisti antro ir trecio stalciu reiksmes vietomis.
		// !negalima rasyti rankomis String (nes duomenys kinta, ir jus nezinote koki duomenys bus po savaites)

    var x = prekiautojai[2];
    prekiautojai[2] = prekiautojai[3];
    prekiautojai[3] = x;

    console.log(prekiautojai);



	// 3.1  padaryti 3) uzdaviniui f-ja sukeistiMasyvo2elementus(x, y)

	// var prekiautojai = []; // empty array


function sukeistiMasyvo2elementus(x, y){

  let temp = prekiautojai[x];
  prekiautojai[x] = prekiautojai[y];
  prekiautojai[y] = temp;
}
sukeistiMasyvo2elementus(0,4);
console.log(prekiautojai);
