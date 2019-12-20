// test
console.log("labas");
// alert("issokanti zinute");
document.write("labas ekrane");

// visas uzduotis atlikti naudojant js (arba jquery jeigu destytojas leidzia - sisiklausti)

// 1 uzduotis
// su js sukurti <img elementa 200x200 dydzio
// pasitikrinti su console

let pav = document.createElement("img");
pav.setAttribute("height", "200px");
pav.setAttribute("width", "200px");
console.log(pav);

// 1.1
// su js sukurti <header> ir <footer>
// ir ideti juos i body

let headeris = document.createElement("header");
let footeris = document.createElement("footer");

document.body.appendChild(headeris);
document.body.appendChild(footeris);

// 1.2
// i <header> ir <footer> ideti <img> elementa

headeris.appendChild(pav);


footeris.appendChild(pav);

// 1.3
// css faile aprasyti .logo klase:
//      dydis 100x100, seselis i visas puses per 10px
