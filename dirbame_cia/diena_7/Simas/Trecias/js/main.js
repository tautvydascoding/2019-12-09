// test
console.log("labas");
// alert("issokanti zinute");
// document.write("labas ekrane");
// UZDUOTIS:
// sukurti vienos masinos duomenu masyva:
//  pavadinimas, pravaziuota rida, kaina
// 1. isvesti masyvo duomenis
// 2. padidinti kaina: 100
// 3. padidinti rida: -50000
// 4. i masyva ideti papildomus duomenis: savininko vardas "Tomas"
// 4.1 atspausdinti visus pakeistus masyvo duomenis
// 5. i masyva ideti papildomus duomenis: masinos metai "2004"
let automobilis = ["opelis", 200000, 1000];
console.log(automobilis);
automobilis[2] += 100;
console.log(automobilis);
automobilis[1] += -50000;
console.log(automobilis);
automobilis[3]="Tomas";
console.log(automobilis);
automobilis[4]="2004m";
console.log(automobilis);

// / sunkesne:
// html elementus: article, h2, ... susikurti su javascript/ innerHTML
// 6. atspausdinti masyvo duomenis i ekrana:
// <article>
//      <h2> pavadinimas </h2>
//      <div> savininko vardas: ...</div>
//      <span> masinos metai: ...  Rida: ...</span>
//      i mygtuka ideti: masinos kaina ....
// </article>
document.querySelector("article h2").innerHTML = automobilis[0];
document.querySelector("article div").innerHTML = "savininko vardas: "+automobilis[3];
document.querySelector("article span").innerHTML = "masinos metai: "+automobilis[4]+"<br>"+"Rida: "+automobilis[1]+" km"+"<br>";
document.querySelector("article button").innerHTML = automobilis[2]+" pinigu";
