//  visur naudoti tik jQuery!!!!!!


// .html kodas:


// UZDUOTIS 1
// pakeisti visus h1 tekstus i "Antraste nr: XX"
//( vietoj "xx" isvesti skaiciu, kelinta tai antrate)

$("h1").first().text("Antraste nr: 1" );
$("h1").last().text("Antraste nr: 2" );
//  UZDUOTIS 2
// pakeisti visus h2 tekstus, kurie yra "section" elemente.
// pakeisti i "Pakeista antraste "
$("section h2").text("Pakeista antraste");
// UZDUOTIS 3
// i console atspausdinti "li" elemento, kurio klase "reklama" - teksta
var otext = $("li.reklama").text();
console.log(otext);
// UZDUOTIS 4
// i console atspausdinti  visus "li" tekstus
var li = $('li').text();
console.log(li);

//-------advance --------

// UZDUOTIS 5
// sukeisti vietomis "li" elementu "about" ir "gallery" (naujant jQuery)
var tekstas2 = $('li:eq(3)').text();
$("li:eq(3)").text($('li:eq(2)').text());
$("li:eq(2)").text(tekstas2);


//------ atributes--------------------------
// UZDUOTIS 6
// surasti <li class='reklama'> ir jam ideti dar viena atributa: style='color: red'   (naujant jQuery)
$("li.reklama").css("color", "red");
// UZDUOTIS 7
// A. visiems "li" elementams pridete atributa: class='nav-item '   (naujant jQuery)
// B. pirmam "li" elementui uzddeti dar viena klase: "active"
$("li").addClass("nav-item");
$("li").first().addClass('active');
// UZDUOTIS 8
//   su jquery uzpildyti form'a uz vartotoja:
//  visiems "input" elementams pridete atributa: value=' xxx '   (naujant jQuery)
//  ivesti vardas: 'Tomas'
//  ivesti pastas: 'a@a.lt'

$("input[name=vardas]").val("Tomas");
$("input[name=pastas]").val("a@a.lt");
