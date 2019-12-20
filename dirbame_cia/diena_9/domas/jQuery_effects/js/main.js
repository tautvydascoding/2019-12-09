// test
console.log("labas");
// alert("issokanti zinute");
document.write("labas ekrane");

// mili sekundemis laikas - 1000 = 1sek
//$('body').hide(3000);
$("h2").click(function(){
  $(this).next("p").toggle();
});
$("input").on("keypress", function(event){

  console.log("veikia...");

  document.querySelector("body").innerHTML += "parasei";



});



//$("h2").click(function(){
//$(this).next("p").hide(3000);

//});
