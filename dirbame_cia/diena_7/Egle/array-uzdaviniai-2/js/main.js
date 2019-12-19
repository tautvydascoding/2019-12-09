// test
console.log("labas");
// alert("issokanti zinute");
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


let auto = ["skoda", 100000, 9000];
console.log(auto);

// 2. padidinti kaina: 100
  auto[2] += 100;
  console.log(auto[2]);

// 3. padidinti rida: -50000
auto[1]+=50000;
console.log(auto[1]);

// 4. i masyva ideti papildomus duomenis: savininko vardas "Tomas"
auto.push(" savininko vardas: Tomas");
// 4.1 atspausdinti visus pakeistus masyvo duomenis
console.log(auto);

// 5. i masyva ideti papildomus duomenis: masinos metai "2004"
auto.push("masinos metai: 2004");
console.log(auto);

// sunkesne:
// html elementus: article, h2, ... susikurti su javascript/ innerHTML

document.write("<article> <h2>" + auto[0] + "</h2>");
document.write("<div>" + auto[3] + "</div>");
document.write("<span>" + auto[4] + "<br> Rida: " + auto[1] + "</span> <br> <br>");
document.write("<button type='button'>" + auto[2] + " EUR </button> </article>");


// 6. atspausdinti masyvo duomenis i ekrana:
// <article>
//      <h2> pavadinimas </h2>
//      <div> savininko vardas: ...</div>
//      <span> masinos metai: ...  Rida: ...</span>
//      i mygtuka ideti: masinos kaina ....
// </article>

//=============bootstrap---sm-md-lg-xl (30-60m)==========
