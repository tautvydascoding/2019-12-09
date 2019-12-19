// test
console.log("labas");
// alert("issokanti zinute");
document.write("labas ekrane");

// mili sekundemis laikas - 1000 = 1sek
// $('body').hide(3000);  // test ar viekai jQuery
// $('p').slideDown(2500);

$('h2').click(function(event) {
    $(this).next('p').toggle(3000);
    // printXX("eisiu i lauka");  // galima issaukti f-jas

});

$('input').on('keypress', function(event){
    console.log('veikia');
    document.querySelector('body').innerHTML += "Parasei..";
});
