// test
console.log("labas");
// alert("issokanti zinute");
document.write("labas ekrane");

//Testas ar veikia jQuery

//$('body').hide(3000);

//$('p').slideDown(2500) {

$('h2').click(function(event) {
  $(this).next('p').toggle(500);
});
