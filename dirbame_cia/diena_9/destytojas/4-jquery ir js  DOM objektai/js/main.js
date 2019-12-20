// test
console.log("labas");
// alert("issokanti zinute");
document.write("labas ekrane");


let manoH1_jQ = $('h1');   // jQ objektas
let manoH1_js = document.querySelector('h1'); // DOM elemntas - obj

if (manoH1_jQ !=  manoH1_js) {
    console.log("panasus bet skirtingi dalykai. jQ objektas turi DOM savybes ir jQuery savybes");
}
if ( $('h1')[0] ==   document.querySelect('h1') ) {
    console.log(" Tas pats - DOM objektas");
}
if ( $('h1')[0] !=   $('h1')  ) {
    console.log("Ne Tas pats  DOM objektas nera jQuery Objektas");
}
if ( $('h1')[0] !=   $('h1').eq(0)  ) {
    console.log("Ne Tas pats  DOM objektas nera jQuery Objektas");
}
if ( $('h1')[0] ==   document.querySelectorAll('h1')[0]  ) {
    console.log("Tas pats - DOM objektas");
}
manoH1_jQ_DOM_objektas = $('h1')[0];      // DOM js objektas surastas su jQuery
manoH1_jQ_objektas = $('h1').eq(0); // ERORO, nes jq objektas cia
manoH1_js_DOM = document.querySelectorAll('h1')[0]; // DOM elemntas - obj

console.log( "H1 manoH1_jQ_DOM_objektas", manoH1_jQ_DOM_objektas);
console.log( "H1 manoH1_jQ_objektas", manoH1_jQ_objektas);
console.log( "H1 js DOM", manoH1_js_DOM);




console.log( "H1 jQ", manoH1_jQ);
console.log( "H1 js", manoH1_js);

$('h1')[0].innerHTML += "Naujas tekstas22";      // DOM js objektas surastas su jQuery
$('h1').eq(0).innerHTML += "Naujas tekstas";      // ERROR, nes jq objektas cia
$('h1').eq(0).text("jQ naujas tekstras");   // jQ objektas
$('h1').text("jQ naujas tekstras 2");       // jQ objektas
document.querySelectorAll('h1')[0].innerHTML += "naujas tekstas"; // DOM elemntas - obj
