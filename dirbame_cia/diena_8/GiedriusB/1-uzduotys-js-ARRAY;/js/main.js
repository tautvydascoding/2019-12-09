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
  // 1 uzduotis:
	var prekiautojai = ["senukai", "ermitazas", "maxima", "rimi"]; // empty array
  document.querySelector("body").innerHTML = prekiautojai;

  //2 uzduotis:
  prekiautojai[0] = "senukai ir ko";

  //3 uzduotis:
  let laikinas = prekiautojai[2];
  prekiautojai[2] = prekiautojai[3];
  prekiautojai[3] = laikinas;
  // 3.1 uzduotis:
  function sukeistiMasyvo2elementus(x, y){
    let laikinas = prekiautojai[x];
    prekiautojai[x] = prekiautojai[y];
    prekiautojai[y] = laikinas;
    return prekiautojai;
  }
  console.log(sukeistiMasyvo2elementus(0, 1))
