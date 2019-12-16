console.log(" Labas ");

// UZDUOTIS
// Issimeginti komandas:










// function keisti() {
//
// 	 // alert("pradzia");
//
// 	// suradimas
// 	let ivedimoLaukasVardas = document.querySelector('#vardas');  // surandame HTML elemnta
// 	//test
// 	 console.log("surastas elementas: ", ivedimoLaukasVardas);
//
// 	// paemimas
// 	let laukoPradineReiksme = ivedimoLaukasVardas.value;
// 	//test
// 	 console.log("paimta reiksme: ", laukoPradineReiksme);

	 // ivedimo lauko pakeitimas
	// ivedimoLaukasVardas.value = "  Pakeistas   ";  //querySelector - paieskos/selector komanda (veikia pagal CSS taiyskles pvz: '.class', '#id', )
	// //test
	//  console.log("po pakeitimo lauko reiksme: ", ivedimoLaukasVardas.value);


	   //----ne ivedimo lauku keitimas -  --------


// 		 let manoP = document.querySelector('p');
// 		manoP.innerHTML = 	"ivedet: " + ivedimoLaukasVardas.value;	 //innerHTML - keicia surasto HTML elemento vidu
// }


// ==============patarimai==========
// reiksme  - kintamasis  / variable
// "reiksme" - tekstas/ reiksme/ value
// reiksme() - f-jos paleidimas
// =============================

//  // UZDUOTIS 2
// sukurti ivedimo 2 laukus, naudojantis pvz 3,
// kur reikes ivesti staciakampio auksti ir ploti.
// Kai paspaudziamas mygtukas - paskaiciuojamas staciakampio plotas:
// Plotas  = x * y;


function staciakampioPlotas() {
  let aukstis = document.querySelector("#aukstis");
  let plotis = document.querySelector("#plotis");
  console.log("aukstis" + aukstis.value, "plotis" + plotis.value);
  Plotas = aukstis.value * plotis.value;
  document.querySelector("p").innerHTML = "Staciakampio plotas " + Plotas;
}
