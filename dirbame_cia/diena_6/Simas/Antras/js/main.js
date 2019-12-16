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



//============== =========
// UZDUOTIS 1
// sukurti ivedimo lauka, naudojantis pvz 3,
// kur reikes ivesti apskritimo spinduli ,,R".
// Kai paspaudziamas mygtukas - paskaiciuojamas apskritimo plotas: Plotas = pi * R*R
// pi = Math.PI;


function apskritimoPlotas() {
  let ivedimoLaukasSpindulys = document.querySelector("#spindulys");
  console.log("ivestas apskritimo spindulys", ivedimoLaukasSpindulys.value);
  Plotas = Math.PI * ivedimoLaukasSpindulys.value * ivedimoLaukasSpindulys.value;
  document.querySelector("p").innerHTML = "Apskritimo plotas " + Plotas;
}
