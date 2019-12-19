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

//=============bootstrap---sm-md-lg-xl (30-60m)==========
function masina(){
var masina = ["audi", 350000, 5000];
masina.splice(1, 0, "Tomas");
masina.splice(2, 0, 2004);
console.log(masina);
document.querySelector('body').innerHTML += "<article></article>"
document.querySelector('article').innerHTML += "<h2>" + masina[0] + "</h2>";
document.querySelector('article').innerHTML += "<div> Savaninko vardas: " + masina[1] + "</div>";
document.querySelector('article').innerHTML += "<span> Masinos metai: " + masina[2] + " Rida: "+  masina[3] + "</h2><br>";
document.querySelector('article').innerHTML += "<button>" + masina[4] + " Eur </button>";
}

masina();
