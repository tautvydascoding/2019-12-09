// test
console.log("labas");
// alert("issokanti zinute");
// document.write("labas ekrane");

function trinti(id) {
   var row = $(this).parent().parent();
   console.log(row.eq(0));
  $.ajax({
    url: "../models/deleteDoctor.php",
    type: "POST",
    data: {id: id},
  success: function(arPavyko) {
    row.remove();
    console.log(arPavyko);
    // if(arPavyko == "True"){
    // } else {
    //   alert("nepavyko sekmingai istrinti, bandykite dar karta");
    // }
  }
});
}

// trinti("labas");
