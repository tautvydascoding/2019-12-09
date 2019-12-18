// ========js best practice & common mistakes (~2h)

// UZDUOTIS:
// sukurti vienos masinos duomenu masyva:
//  pavadinimas, pravaziuota rida, kaina
  let bmw = ["BMW 318", 220000, 3800];
// 1. isvesti masyvo duomenis
  document.querySelector("body").innerHTML += bmw + "<br>";
// 2. padidinti kaina: 100
  bmw[2] = bmw[2] + 100;
  console.log(bmw[2]);
// 3. padidinti rida: -50000
  bmw[1] += -50000;
  console.log(bmw[1]);
// 4. i masyva ideti papildomus duomenis: savininko vardas "Tomas"
  //bmw[3] = "Tomas";
   bmw[bmw.length] = "savininko vardas: Tomas";
  console.log(bmw)
// 4.1 atspausdinti visus pakeistus masyvo duomenis
document.querySelector("body").innerHTML += bmw;
// 5. i masyva ideti papildomus duomenis: masinos metai "2004"
bmw[bmw.length] = 'masinos metai: 2004';
console.log(bmw);
// sunkesne:
// html elementus: article, h2, ... susikurti su javascript/ innerHTML
document.querySelector("body").innerHTML += "<article></article>" + "<br>" + "<h2></h2>";
// 6. atspausdinti masyvo duomenis i ekrana:
// <article>
//      <h2> pavadinimas </h2>
//      <div> savininko vardas: ...</div>
//      <span> masinos metai: ...  Rida: ...</span>
//      i mygtuka ideti: masinos kaina ....
// </article>
document.querySelector("article").innerHTML +=
"<h2> pavadinimas: " + bmw[0] + "</h2>" +
"<div>" + bmw[3] + "</div>" +
"<span>" + bmw[4] + " Rida: " + bmw[1] + "</span><br>" +
'<button type="button" name="button">' + bmw[2] + "Eur" + '</button>';











//=============bootstrap---sm-md-lg-xl (30-60m)==========
