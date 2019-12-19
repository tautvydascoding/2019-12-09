// test
console.log("labas");
// alert("issokanti zinute");
document.write("labas ekrane");

// _______naudojant tik js_________(create and add_class)_____
//  atlikti   uzduotis naudojant tik jQuery

// 1.1  sukurti:
// <section>
//     <h1>  Tekstas </h1>
// </section>

//1.2 patobulinti h1 -  ant h1 elemento uzdesime klases: " bg-info  mt-5 aukstis-200" (naudojant jQuery)


$("h1").on("click", function(){
  $("div").after("<section><h1>Tekstas</h1></section>");
  $("section>h1").addClass("bg-info mt-5 aukstis-200");
});

// 1.3  nuo h1 pasalinti mt-5 klase
$("body").on("dblclick", function(){
  $("section>h1").removeClass("mt-5");
  $("section>h1").toggleClass("aukstis-200");
});

// 2. Patikrinti ar h1 turi klase 'bg-info':
// jeigu NETURI  uzdeti klase "bg-success"
// jeigu TURI  uzdeti klase "bg-danger"

$("p").on("click", function(){
  if ($("section>h1").hasClass("bg-info")) {
    $("section>h1").removeClass("bg-info").addClass("bg-danger");
  } else {
    $("section>h1").addClass("bg-success");
  }
});

// 3. Patikrinti ar 'section' turi klase 'aukstis-200':
// jeigu NETURI  uzdeti klase "aukstis-200"
// jeigu TURI  uzdeti klase "aukstis-500"

$("p").on("dblclick", function (){
  if ($("section").hasClass("aukstis-200")) {
    $("section").removeClass("aukstis-200").addClass("aukstis-500");
  } else {
    $("section").removeClass("aukstis-500").addClass("aukstis-200");
  }
});
