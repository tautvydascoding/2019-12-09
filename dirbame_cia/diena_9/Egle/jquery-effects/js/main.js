// test
console.log("labas");
// alert("issokanti zinute");
document.write("labas ekrane");



//
// $("h2").click(function(){
//     $("p").toggle(1000); // galima naudot show(), hide(), slideUP(), SlideDown()...
//   });



  // $("p").click(function(){
  //   $(this).toggle(fast);
  // });


$("h2").click(function(event){
  $(this).next("p").toggle(1000);
});
