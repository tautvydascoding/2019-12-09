var masinosBagazine = ["atsarginisRatas", "kastuvas", "gesintuvas", "virve", "uzkurimoLaidai", "krokodilas"];

console.warn("console blogai atvaizduoja isskleistus masyvus, bet gerai atvaizduoja skliaustuose []");


// =====sukurti masyva 100 elementu ilgio naudojant FOR
//===== sukurti masyva 100 elementu ilgio naudojant WHILE


// ————————————pasikartojimas f-ju ir while————————————————————————

// Uzduotis:
// 1A) susikurti funkcija, kuri atspasudina i konsole skaiciu kuri paduodate
// 1B) Paleisti funkcija 20 kartu
// 2) susikurti funkcija, kuri spausdina paduota skaiciu, kai paduodama reiksme (jeigu niekas nepaduodama: spausdina "-1")

//------------while break-- uzduotis:----------------------------


//  sukurti nauja masyva uzpildyta, atsitiktiniais skaiciais
//  var nuoVienoIkiSimto = Math.floor(Math.random() * 100) ;
skaiciai = [];
console.log(skaiciai.toString());






// ——————————— Object ————————————————
// Uzduotis
// 1:  susiskurti darbuotojo "worker" obj., kuris saugo varda, pavarde, amziu, pagamintu detaliu skaiciu
worker = {vardas:"Jonas", pavarde:"Petraitis", amzius: 40, pagamintosDetales: 15};


// 2. sukurti “workers”  masyva. Masyvas, kuriame saugomi objektai. Kiekvienas obj saugo visa informacija apie konkretu darbuotoja:
  //    A) paleisti cikla ir uzpildyti "workers" masyva darbuotoju duomenimis (amzius ir pagamintu detaliu skaicius - burtu keliu)
  workers = [];

  names = ["Matas", "Lukas", "Kostas", "Tadas"];
  lastNames = ["Morka", "Jonaitis", "Bosas", "Petriukas"];

for (var i = 0; i < names.length; i++) {
  workers[i] = {vardas:names[i], pavarde:lastNames[i], amzius: Math.floor(Math.random() * 100), pagamintosDetales: Math.floor(Math.random() * 1000)};
}

console.log(workers);
   //	HINT: // !!!!! var naudojame, kad RAM'e / atmintyje sukurtu nauja kintamaji
// 3. sukurti f-ja, kuri i konsole atspausdiname masyva (pilna objektu)
function printWorkers() {
  console.log(workers);
}

// 4 UZDUOTIS:
// surasti geriausia darbuotoja

function findBestWorker() {
  var x;
  for (var y = 0; y < workers.length; y++) {
    for (var i = 0; i < workers.length-1; i++) {
      if (workers[i].pagamintosDetales < workers[i+1].pagamintosDetales) {
      var x = JSON.parse(JSON.stringify(workers[i+1]));
        workers[i+1] = workers[i];
        workers[i] = x;
      }
    }
  }

  console.log("Geriausias darbuotojas: " + workers[0].vardas);
  console.log(workers);
}

 findBestWorker();
//  var x = JSON.parse(JSON.stringify(workers[0+1]));
//    workers[0+1] = workers[0];
//    workers[0] = x;
//
// console.log(workers);
// 5 UZDUOTIS:
//surasti blogiausia darbuotoja
