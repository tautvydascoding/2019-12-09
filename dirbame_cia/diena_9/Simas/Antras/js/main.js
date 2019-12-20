// test
console.log("labas");
// alert("issokanti zinute");
document.write("labas ekrane");



// A) visus h1 ir h2 pakeisti i melyna spalva (visur naudoti tik jQuery)
$("h1, h2").on("click", function() {
  $("h1, h2").addClass("text-info");
});


// A2) kas antra h2 pakeisti i raudona
$("h2").on("click", function(){
  $("h2:odd").addClass("text-danger");
});

// / B) paskutinta "li" elemnta pakeisti i zalia (visur naudoti tik jQuery)

$("li:last").on("click", function() {
  $("li:last").addClass("text-success");
});

// C) visus 'li' elementus pakeisti i geltonus (isskyrus su klase 'reklama') pvz.: li:not('.reklama') {}

$("li").on("dblclick", function() {
  $("li:not('.reklama')").addClass("text-warning");
});
