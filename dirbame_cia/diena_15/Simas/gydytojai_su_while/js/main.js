// test
console.log("labas");
let string = $("button").attr("id");
let sliceString = string.slice(3, 4);


// alert("issokanti zinute");
document.write("labas ekrane");
$(".delete").on("click", function() {
  $.ajax({
    url: "delete-doctor.php",
    type: "GET",
    data: {nr: sliceString},
    success: function() {
      console.log("suveike");
      
    }
  });
});
