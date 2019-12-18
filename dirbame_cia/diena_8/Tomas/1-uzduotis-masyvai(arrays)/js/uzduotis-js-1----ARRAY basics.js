// ========js best practice & common mistakes (~2h)

// -------- --Array / Masyvai  TEORIJA (~2h)--------------------


	// UZDUOTIS
	// 1.1 sukurti tuscia masyva "prekiautojai"
  var prekiautojai = [];

	// 1.2 uzpildyti masyva prekiaujanciomis imonemis pvz: senukai, ...
  prekiautojai[0] = "senukai";
  prekiautojai[1] = "iki";
  prekiautojai[2] = "Depo";
  prekiautojai[3] = "Lidl";

	// 1.3 isvesti i console/ekrana "prekiautojai" masyva

  console.log( prekiautojai );

	// 2 pervadinti pirma stalciu pvz + "ir KO"

  prekiautojai[1] += " ir KO";
  console.log(prekiautojai);

 	// 3 sukeisti antro ir trecio stalciu reiksmes vietomis.
		// !negalima rasyti rankomis String (nes duomenys kinta, ir jus nezinote koki duomenys bus po savaites)

    prekiautojai[2] = prekiautojai[3];
    prekiautojai[3] = prekiautojai[2];

	// 3.1  padaryti 3) uzdaviniui f-ja sukeistiMasyvo2elementus(x, y)

  function sukeistiMasyvo2elementus(x, y) {
    let temp = prekiautojai[x];
    prekiautojai[x] = prekiautojai[y];
    prekiautojai[y] = temp;
  }

  sukeistiMasyvo2elementus(0, 3);
  console.log(prekiautojai);

 // empty array
