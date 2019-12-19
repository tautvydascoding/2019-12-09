// test
console.log("labas");
// alert("issokanti zinute");
//  visur naudoti tik jQuery!!!!!!


// .html kodas:
// <h1>Isijunk konsole</h1>
// <h1>Isijunk konsole</h1>
//
// <h2> 1. h2 Isijunk konsole</h2>
// <h2> 2. h2 Isijunk konsole</h2>
// <h2> 3. h2 Isijunk konsole</h2>
//
//  <section>
//      <h2 class='reklama'> 1. h2 Isijunk konsole</h2>
//      <h2> 2. h2 Isijunk konsole</h2>
//      <h2> 3. h2 Isijunk konsole</h2>
//      <h2> 4. h2 Isijunk konsole</h2>
//  </section>
//
// <ul>
//     <li>Home</li>
//     <li>About</li>
//     <li class='reklama'>Gallery</li>
//     <li>Contact</li>
// </ul>
//
// <form>
// 	<input type="text" name="vardas" value="">
// 	<input type="email" name="pastas" value="">
// </form>

// UZDUOTIS 1
// pakeisti visus h1 tekstus i "Antraste nr: XX"
//( vietoj "xx" isvesti skaiciu, kelinta tai antrate)

$("h1").html("antraste nr: 1");
$("h1").last().html("antraste nr: 2");




//  UZDUOTIS 2
// pakeisti visus h2 tekstus, kurie yra "section" elemente.
// pakeisti i "Pakeista antraste "

$("section h2").html("Pakeista antraste");

// UZDUOTIS 3
// i console atspausdinti "li" elemento, kurio klase "reklama" - teksta

var text = $("li.reklama").text();
console.log(text);

// UZDUOTIS 4
// i console atspausdinti  visus "li" tekstus

var liTekstai = $("li").text();
console.log(liTekstai);

//-------advance --------

// UZDUOTIS 5
// sukeisti vietomis "li" elementu "about" ir "gallery" (naujant jQuery)


var aboutElementas = $("li.reklama").prev().text();
console.log(aboutElementas);

$("li.reklama").html(aboutElementas);
$("li.reklama").prev().html(text);


//------ atributes--------------------------
// UZDUOTIS 6
// surasti <li class='reklama'> ir jam ideti dar viena atributa: style='color: red'   (naujant jQuery)

$("li.reklama").css("color", "red");



// UZDUOTIS 7
// A. visiems "li" elementams pridete atributa: class='nav-item '   (naujant jQuery)
// B. pirmam "li" elementui uzddeti dar viena klase: "active"

$("li").addClass("nav-item");

$("li").first().addClass("active");

// UZDUOTIS 8
//   su jquery uzpildyti form'a uz vartotoja:
//  visiems "input" elementams pridete atributa: value=' xxx '   (naujant jQuery)
//  ivesti vardas: 'Tomas'
//  ivesti pastas: 'a@a.lt'


// $("input").first().val("Tomas");
// $("input").last().val("a@a.lt");

// arba

$("input[name ='vardas']").val("Tomas");
$("input[name = 'pastas']").val("a@a.lt");
