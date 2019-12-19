// test
console.log("labas");
// alert("issokanti zinute");
document.write("labas ekrane");
// UZDUOTIS 1:
// SUKURTI DVI F-JAS:
// viena pasisveikina "sveikinuosi()"
// kita atsisveikina "atsisveikinu()"

// UZDUOTIS 1.1
// patobulinti f-ja, kuri sveikinasi, kad ji papildoma argumenta "callback"  / "iskviestiPabaigusDarbus"

// UZDUOTIS 1.2
// iskviesti pasisveikinimo f-ja, ir jai padduoti atsisveikino f-ja

function sveikinuosi(funkcijosPavadinimas){

  console.log("Labutaitis");
  if(funkcijosPavadinimas != null && funkcijosPavadinimas != undefined){
  funkcijosPavadinimas();
}
}

let atsisveikinu = function(){

console.log("Viso gero!");

};


(function(){console.log("anonimine funkcija pati save iskviecia!!!!")})();
sveikinuosi();
