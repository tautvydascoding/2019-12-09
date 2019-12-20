// test
console.log("labas");
// alert("issokanti zinute");
document.write("labas ekrane");



// $("h2").click(function(){
//   $(this).next("p").fadeToggle(400);
// });
// $("h2").on('mouseenter', function() {
//   $(this).next('p').fadeIn(200);
// });
// $("h2").on('mouseleave', function() {
//   $(this).next('p').fadeOut(200);
// });

// UZDUOTIS 1
// pakeisti visus h1 tekstus i "Antraste nr: XX"
//( vietoj "xx" isvesti skaiciu, kelinta tai antrate)

$('h1').eq(0).on('click', function(){
  $(this).text("Antraste nr 1");
});
$('h1').eq(1).on('click', function(){
  $(this).text("Antraste nr 2");
});

//  UZDUOTIS 2
// pakeisti visus h2 tekstus, kurie yra "section" elemente.
// pakeisti i "Pakeista antraste "

$('section h2').on('dblclick', function(){
  $('section h2').html("Pakeista antraste");
});

// UZDUOTIS 3
// i console atspausdinti "li" elemento, kurio klase "reklama" - teksta

$('li.reklama').on('click', function(){
  let x = $('li.reklama').text();
  console.log(x);
});

// UZDUOTIS 4
// i console atspausdinti  visus "li" tekstus

$('li').on('dblclick', function(){
  let x = $('li').text();
  console.log("visi li elementai " + x);
});

// UZDUOTIS 5
// sukeisti vietomis "li" elementu "about" ir "gallery" (naujant jQuery)

$('li').eq(1).on('click', function(){
  let x = $('li').eq(2).text();
  $('li').eq(2).text($('li').eq(1).text());
  $('li').eq(1).text(x);
});

//------ atributes--------------------------
// UZDUOTIS 6
// surasti <li class='reklama'> ir jam ideti dar viena atributa: style='color: red'   (naujant jQuery)

$('li.reklama').on('mouseenter', function() {
  $('li.reklama').attr('style', 'color: red');
});

// UZDUOTIS 7
// A. visiems "li" elementams pridete atributa: class='nav-item '   (naujant jQuery)
// B. pirmam "li" elementui uzddeti dar viena klase: "active"

$("li").addClass("nav-item");
$("li").eq(0).addClass("active");

// UZDUOTIS 8
//   su jquery uzpildyti form'a uz vartotoja:
//  visiems "input" elementams pridete atributa: value=' xxx '   (naujant jQuery)
//  ivesti vardas: 'Tomas'
//  ivesti pastas: 'a@a.lt'

$("input").on('click', function() {
  $(":text").attr("value", "Tomas");
  $("input").eq(1).attr("value", "a@a.lt");
});
