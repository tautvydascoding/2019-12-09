console.log("Labas222");

// visas uzduotis atlikti naudojant js (arba jquery jeigu destytojas leidzia - sisiklausti)

// 1 uzduotis
// su js sukurti <img elementa 200x200 dydzio
// pasitikrinti su console
$('body').append('<img src = >');
$('img').addClass('aukstis-200');
$('img').addClass('w-20');

// 1.1
// su js sukurti <header> ir <footer>
// ir ideti juos i body
$('body').prepend('<header></header>');
$('body').append('<footer></footer>');
// 1.2
// i <header> ir <footer> ideti <img> elementa
$('header').append('<img src = img/1.jpg>');
//$('footer').append('<img src = >');
// 1.3
// css faile aprasyti .logo klase:
//      dydis 100x100, seselis i visas puses per 10px
var logo = {
  "height": "100px",
  "width": "100px",
  "box-shadow": "2px 2px black",
  "margin": "2px"};



// 1.4
// <img> elementui, kuris yra <header> elemente,  uzdeti klase "logo"
$('header img').css(logo);
// 1.5
// sukurti <main> elementa po <header> elementu  (<header></header>  <main>text</main>   <footer></footer>)
$('<main>tekstas</main>').insertAfter('header');
// 1.6
// sukurti <article> elementa su viduje <h2> ir <p> elementais (irasyti ir teksto i abu)
$('body').append('<article>Article</article>');
$('article').append('<h2>h2</h2>');
$('article').append('<p>p</p>');
// 1.7
//  ideti 1.6 <article> elementa (kuris laiko savyne <h2> ir <p>)  i <main> elementa
$('article').prependTo('main');
// 1.8
// perkelti LOGOTIPA i kita vieta naudojant js
// A) perkelti i footer
$('header img').prependTo('footer');
// B) perkelti i article ( tarp h2 ir p)
$('footer img').prependTo('article').insertAfter('h2');
// ---------------------------------
// 1.9 daugiau uzduociu su perkelimu elementu append, prepend, after, before, appendTo
// ---------------------------------


// =================click=========
// 1.9.1
// paspaudus ant logo ji suanimuoti jQuery
// LOGO keliauja i desine ir virsu ekrano puse
// tampa permatomas 0.5
//
$('article img').click(function(event) {
  // $('article img').toggle(function(){
  //   $('article img').css({position: "absolute"});
  //   $('article img').animate({
  //     left: '90%',
  //     top: '5px'
  //   }, "slow");})
  $('article img').css({position: "absolute"});
  $('article img').animate({
    left: '90%',
    top: '5px'
  }, "slow");
  console.log("veikia");
});
