
// UZDUOTIS 1:
// SUKURTI DVI F-JAS:
// viena pasisveikina "sveikinuosi()"
// kita atsisveikina "atsisveikinu()"

// UZDUOTIS 1.1
// patobulinti f-ja, kuri sveikinasi, kad ji papildoma argumenta "callback"  / "iskviestiPabaigusDarbus"

// UZDUOTIS 1.2
// iskviesti pasisveikinimo f-ja, ir jai padduoti atsisveikino f-ja

function sveikinuosi(){

}

function atsisveikinu(){
  
}



 

// UZDUOTIS 1:
// SUKURTI DVI F-JAS:
// viena pasisveikina "sveikinuosi()"
// kita atsisveikina "atsisveikinu()"

// UZDUOTIS 1.1
// patobulinti f-ja, kuri sveikinasi, kad ji papildoma argumenta "callback"  / "iskviestiPabaigusDarbus"

// UZDUOTIS 1.2
// iskviesti pasisveikinimo f-ja, ir jai padduoti atsisveikino f-ja

function sveikinuosi( funkcijosPavadinimas ){
    console.log("Labutaitis");
    if (funkcijosPavadinimas != undefined && funkcijosPavadinimas != null) {
        funkcijosPavadinimas();
    }
}

var atsisveikinu = function() {
     console.log("Viso gero!");
  };

sveikinuosi();
sveikinuosi(atsisveikinu);
// sveikinuosi(siustiEmail);
// sveikinuosi(pranesuOrus);
// sunku
// anonimine f-ja  - neturinti pavadinimo
sveikinuosi(      function(){   console.log("anonimine!!!"); }      );

//anonimine pati save iskviecia
(function(){   console.log("anonimine pati save iskviecia!!!");   })();
