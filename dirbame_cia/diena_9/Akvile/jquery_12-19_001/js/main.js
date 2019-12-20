// $('body').hide(3000); //testas ar veikia jquery
// $("h2").click(function(){
//   $(this).next("p").toggle();
// });


//  visur naudoti tik jQuery!!!!!!


// UZDUOTIS 1
// pakeisti visus h1 tekstus i "Antraste nr: XX"
// $("h1").html("Antraste nr: XX");
//( vietoj "xx" isvesti skaiciu, kelinta tai antrate)
$( "h1" ).each(function( index ) {
  console.log( index + ": " + $( this ).text() );
  $(this).html( "Antraste nr: " + index);
});

//  UZDUOTIS 2
// pakeisti visus h2 tekstus, kurie yra "section" elemente.
// pakeisti i "Pakeista antraste "
$("section h2").html("Pakeista antraste ");

// UZDUOTIS 3
// i console atspausdinti "li" elemento, kurio klase "reklama" - teksta
console.log($("li.reklama").text());

// UZDUOTIS 4
// i console atspausdinti  visus "li" tekstus
console.log($("li").text());
//-------advance --------

// UZDUOTIS 5
// sukeisti vietomis "li" elementu "about" ir "gallery" (naujant jQuery)
$("li").each(function(index) {
  if ($(this).text() === "About") {
    console.log($(this).text());
    $(this).text("Gallery");
  } else if ($(this).text() === "Gallery") {
    console.log($(this).text());
    $(this).text("About");
console.log($(this).text());
}
});


//------ atributes--------------------------
// UZDUOTIS 6
// surasti <li class='reklama'> ir jam ideti dar viena atributa: style='color: red'   (naujant jQuery)
$("li.reklama").css("color", "red");

// UZDUOTIS 7
// A. visiems "li" elementams pridete atributa: class='nav-item '   (naujant jQuery)
$("li").addClass("nav-item");
// B. pirmam "li" elementui uzddeti dar viena klase: "active"
$("li").eq(0).addClass("active");

// UZDUOTIS 8
//   su jquery uzpildyti form'a uz vartotoja:
//  visiems "input" elementams pridete atributa: value=' xxx '   (naujant jQuery)
//  ivesti vardas: 'Tomas'
//  ivesti pastas: 'a@a.lt'
$("input[name=vardas]").val("Tomas");
$("input[name=pastas]").val("a@a");
