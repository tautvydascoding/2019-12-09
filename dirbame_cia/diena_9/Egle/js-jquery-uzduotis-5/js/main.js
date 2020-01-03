// test
console.log("labas");
// alert("issokanti zinute");
console.log("Labas222");

// visas uzduotis atlikti naudojant js (arba jquery jeigu destytojas leidzia - sisiklausti)

// 1 uzduotis
// su js sukurti <img elementa 200x200 dydzio
// pasitikrinti su console

var elmImg = document.createElement("img");
var elmImg2 = document.createElement("img");
console.log(elmImg);

// var elmBody = document.createElement("body");
// console.log(elmBody);

// 1.1
// su js sukurti <header> ir <footer>
// ir ideti juos i body

var elmHeader = document.createElement("header");
var elmFooter = document.createElement("footer");

document.querySelector("body").innerhtml += elmHeader;
document.querySelector("body").innerhtml += elmFooter;
// console.log(elmHeader, elmFooter);
// 1.2
// i <header> ir <footer> ideti <img> elementa

elmHeader.appendChild(elmImg);
console.log(elmHeader);
elmFooter.appendChild(elmImg2);
console.log(elmFooter);


// 1.3
// css faile aprasyti .logo klase:
//      dydis 100x100, seselis i visas puses per 10px

// 1.4
// <img> elementui, kuris yra <header> elemente,  uzdeti klase "logo"

elmImg.classList.add("logo");


// 1.5
// sukurti <main> elementa po <header> elementu  (<header></header>  <main>text</main>   <footer></footer>)
var elmMain = document.createElement("main");

var mainText = document.createTextNode(" tekstas9999");
elmMain.appendChild(mainText);
console.log(elmMain);


document.body.appendChild(elmHeader);
document.body.appendChild(elmFooter);
document.body.appendChild(elmMain);
document.body.appendChild(elmH2);
document.body.appendChild(elmH1);
document.body.appendChild(elmImg);
document.body.appendChild(elmImg2);



// document.body.insertBefore(elmMain, elmHeader);

// 1.6
// sukurti <article> elementa su viduje <h2> ir <p> elementais (irasyti ir teksto i abu)

var elmArticle = document.createElement("article");
var elmH2 = document.createElement("h2");
var articleTextH2 = document.createTextNode( "whatever" );
var elmP = document.createElement("p");
var textP = document.createTextNode("lorem lorem lorem");

elmArticle.appendChild(elmH2,);
elmArticle.appendChild(elmP);
elmH2.appendChild(articleTextH2);
elmP.appendChild(textP)
console.log(elmArticle);

document.body.appendChild(elmArticle);
document.body.appendChild(articleTextH2);
document.body.appendChild(elmP);
document.body.appendChild(textP);

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
