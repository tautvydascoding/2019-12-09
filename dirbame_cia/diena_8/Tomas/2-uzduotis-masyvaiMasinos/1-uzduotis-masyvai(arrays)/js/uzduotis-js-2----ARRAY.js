// ========js best practice & common mistakes (~2h)

// UZDUOTIS:
// sukurti vienos masinos duomenu masyva:
//  pavadinimas, pravaziuota rida, kaina

let car = ["BMW ", 300000, 5000];

// 1. isvesti masyvo duomenis

console.log("pavadinimas: " + car[0] );
console.log("rida " + car[1] );
console.log("kaina: " + car[2] );

// 2. padidinti kaina: 100

car[2] += 100;
console.log(car);

// 3. padidinti rida: -50000

car[1] += -50000;
console.log(car);

// 4. i masyva ideti papildomus duomenis: savininko vardas "Tomas"

car[3] = "Tomas";
console.log(car);

// 4.1 atspausdinti visus pakeistus masyvo duomenis

console.log(car[3]);

// 5. i masyva ideti papildomus duomenis: masinos metai "2004"

car[4] = "masinos metai - 2004, ";
console.log(car[4]);

// sunkesne:
// html elementus: article, h2, ... susikurti su javascript/ innerHTML

document.querySelector('body').innerHTML += "<article></article>";
document.querySelector('body').innerHTML += "<h2>" + car[0] + "</h2>";
document.querySelector('body').innerHTML += "<h2>" + "<div>" + car[3] + "</div>" + "</h2>";
document.querySelector('body').innerHTML += "<h2>" + "<span>" + car[4] + "Rida " + car[1] + "</span>" + "</h2>";
document.querySelector('body').innerHTML += "<h2>" + "Kaina " + "<button>" + car[2] + "</button>" + "</h2>";


// 6. atspausdinti masyvo duomenis i ekrana:
// <article>
//      <h2> pavadinimas </h2>
//      <div> savininko vardas: ...</div>
//      <span> masinos metai: ...  Rida: ...</span>
//      i mygtuka ideti: masinos kaina ....
// </article>



//=============bootstrap---sm-md-lg-xl (30-60m)==========
