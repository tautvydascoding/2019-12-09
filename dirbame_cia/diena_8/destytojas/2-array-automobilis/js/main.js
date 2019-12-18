// test
console.log("labas");
// alert("issokanti zinute");
document.write("labas ekrane");

// ========js best practice & common mistakes (~2h)

// UZDUOTIS:
// sukurti vienos masinos duomenu masyva:
//  pavadinimas, pravaziuota rida, kaina
let automobilis = ['Audi', 300000, 2500];
// 1. isvesti masyvo duomenis
console.log("Pavadinimas: " + automobilis[0] );
console.log("Rida: " + automobilis[1] );
console.log("Kaina: " + automobilis[2] );
// 2. padidinti kaina: 100
automobilis[2] += 100;
// 3. padidinti rida: -50000
automobilis[1] += -50000;
console.log( "automobilis po redagavimo:", automobilis);
// 4. i masyva ideti papildomus duomenis: savininko vardas "Tomas"
automobilis[4] = "Petras";
// 4.1 atspausdinti visus pakeistus masyvo duomenis
console.log( "automobilis po redagavimo:", automobilis);
// 5. i masyva ideti papildomus duomenis: masinos metai "2004"
automobilis[5] = 2004;
console.log( "automobilis po redagavimo:", automobilis);

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
