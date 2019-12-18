
// UZDUOTIS 1:
// SUKURTI DVI F-JAS:
// viena pasisveikina "sveikinuosi()"
// kita atsisveikina "atsisveikinu()"
function sveikinuosi(callback){
  console.log("Nu zdarova");
  callback();
}
// UZDUOTIS 1.1
// patobulinti f-ja, kuri sveikinasi, kad ji papildoma argumenta "callback"  / "iskviestiPabaigusDarbus"

// UZDUOTIS 1.2
// iskviesti pasisveikinimo f-ja, ir jai padduoti atsisveikino f-ja
let printX = function (){
  console.log("Viso gero");
}
sveikinuosi(printX);
