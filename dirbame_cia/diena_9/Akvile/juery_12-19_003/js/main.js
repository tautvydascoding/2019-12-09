console.log("Labas222");

// visas uzduotis atlikti naudojant js (arba jquery jeigu destytojas leidzia - sisiklausti)

// 1 uzduotis
// su js sukurti <img elementa 200x200 dydzio
// pasitikrinti su console
var paveiksliukas = document.createElement("img");
var pav = document.createElement("img");
console.log(paveiksliukas);
console.log(pav);



// 1.1
// su js sukurti <header> ir <footer>
// ir ideti juos i body
var headeris = document.createElement("header");
var footeris = document.createElement("footer");


document.querySelector("body").appendChild(headeris);
document.querySelector("body").appendChild(footeris);
// 1.2
// i <header> ir <footer> ideti <img> elementa
document.querySelector("header").appendChild(pav);
document.querySelector("footer").appendChild(paveiksliukas);
// 1.3
// css faile aprasyti .logo klase:
//      dydis 100x100, seselis i visas puses per 10px

// 1.4
// <img> elementui, kuris yra <header> elemente,  uzdeti klase "logo"
document.querySelector("header img").classList.add("logo");
// 1.5
// sukurti <main> elementa po <header> elementu  (<header></header>  <main>text</main>   <footer></footer>)
var main = document.createElement("main");
main.parentNode.insertBefore(footeris, main);
// 1.6
// sukurti <article> elementa su viduje <h2> ir <p> elementais (irasyti ir teksto i abu)

// 1.7
//  ideti 1.6 <article> elementa (kuris laiko savyne <h2> ir <p>)  i <main> elementa

// 1.8
// perkelti LOGOTIPA i kita vieta naudojant js
// A) perkelti i footer
// B) perkelti i article ( tarp h2 ir p)
//
// ---------------------------------
// 1.9 daugiau uzduociu su perkelimu elementu append, prepend, after, before, appendTo
// ---------------------------------


// =================click=========
// 1.9.1
// paspaudus ant logo ji suanimuoti jQuery
// LOGO keliauja i desine ir virsu ekrano puse
// tampa permatomas 0.5
//
