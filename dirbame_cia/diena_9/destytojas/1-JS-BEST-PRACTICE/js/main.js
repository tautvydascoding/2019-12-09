// test
console.log("labas");
// alert("issokanti zinute");
document.write("labas ekrane");

// deklaracija - susikuri kintamuosius
let x = 0;
let y = 0;
let i = 0;
var d = 0;
let prekes = [];
let vardas;   //  deklaruotas, bet nera inicializacija
// (js-te toks kintamasis gauna reiksme: 'undefined')
x = 0;  // veiks

 Number.isInteger(99999999999999999999999); // true
if( 0 ==  "") {
    console.log("salyga - tiesa");
} else {
    console.log("salyga - netiesa");
}

// a ir b nustacaiu default reiksmes
function suma (a = -99999, b = -99999) {
    // tikrinu ar  a ir b yra skaiciai
    if( !isNaN(a) && !isNaN(b) ) {
        let ats = a + b;
        console.log("ats:" + ats);
    }
}
suma(10   );
suma(  );
suma(10 , 1 );
c = "1l  0o  ;:   ,.    nematomi      \`\'\"    "
    +  "     tesiu kitoje eiluteje   "
    +  "     tesiu kitoje eiluteje   "
    +  "     tesiu kitoje eiluteje   ";

var t  = "Hello \
            World!";

let ilgis = c.length;
console.log("teksto ilgis:" + ilgis);
if (ilgis < 40   ||   ilgis > 10000) {
    console.log("Tekstas per trumpas arba per ilgas (leistinas 40-10000)");
}



//
