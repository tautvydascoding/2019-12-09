// test
console.log("labas");
let string = $(".delete").attr("id");
// console.log(string);
// let stringSlice = string.slice(3, 4);
//
//
// // alert("issokanti zinute");
// document.write("labas ekrane");
//
//
//


$(".delete").on("click", function() {
  let elementas = $(this).parent();
  $.ajax({
    url: "delete-doctor.php",
    type: "GET",
    data: {nr: string},
    success: function(nr) {  //nr yra paimtas is delete-doctor.php is echo (jei tikrini ar pavyko trynimas)
      console.log("suveike");
      elementas.fadeOut().remove();
    }
  });
});
