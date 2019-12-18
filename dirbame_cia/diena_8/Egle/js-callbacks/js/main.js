// test
console.log("labas");
// alert("issokanti zinute");

// UZDUOTIS 1:
// SUKURTI DVI F-JAS:
// viena pasisveikina "sveikinuosi()"
// kita atsisveikina "atsisveikinu()" 

// UZDUOTIS 1.1
// patobulinti f-ja, kuri sveikinasi, kad ji papildoma argumenta "callback"  / "iskviestiPabaigusDarbus"

// UZDUOTIS 1.2
// iskviesti pasisveikinimo f-ja, ir jai padduoti atsisveikino f-ja

function sveikinuosi(funkcijosPavadinimas){
  console.log("sveikinuosi");
    funkcijosPavadinimas();
}
// sveikinuosi();


let atsisveikinu = function(){
  console.log("Viso gero");
};   //nepamirst ; nes funkcija yra kintamasis
sveikinuosi(atsisveikinu);
