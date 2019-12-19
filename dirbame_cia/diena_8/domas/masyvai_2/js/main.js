// test
console.log("labas");
// alert("issokanti zinute");
document.write("labas ekrane");
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

let masina = [];

masina [0] = "Ford";
masina [1] = 20000;
masina [2] = 50000;
console.log(" Pavadinimas: " + masina[0] );
console.log(" Rida: " + masina[1] + " KM" );
console.log(" Kaina: " + masina[2] + " EUR" );

masina [1] += 100;
masina [2] += 50000;
masina [3] = "Tomas";
masina [4] = "2004";
console.log(" Savininko vardas: " + masina[3] +  " :)");
console.log(" Masinos metai: " + masina[4] +  " :)");

//console.log(masina);




// sunkesne:
// html elementus: article, h2, ... susikurti su javascript/ innerHTML
// 6. atspausdinti masyvo duomenis i ekrana:
// <article>
//      <h2> pavadinimas </h2>
//      <div> savininko vardas: ...</div>
//      <span> masinos metai: ...  Rida: ...</span>
//      i mygtuka ideti: masinos kaina ....
// </article>

document.querySelector("body").innerHTML += "<article>"+

"<h2>"+ masina[0] + "</h2>" + " <div>" + masina[3]+  "</div>"+
"<span>" + masina[4]+ "</br>" + masina[1] + "</span>" + "<button>" + masina[2] + "</button>"





" </article>";









//=============bootstrap---sm-md-lg-xl (30-60m)==========
