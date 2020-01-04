<?php

$darbuotojas = [];
// 0 ) sukurti asociatyvu masyva uzpildyta duomenimis apie darbuotoja:
// vardas, asmens kodas, gimData, pardavimuKiekis
// 1)  isvesti visus duomenis apie darbuotoja
// 2) pakeisti darbuotojo pardavimu skaiciu i 180
// 3) i stalciu/index 0 ideti  darbuotojo adresa:
//  "Siaures pr. 131"
// 4) ismeginti koda:

foreach ($darbuotojas as $darbuotojoStalcius ) {
    echo "$darbuotojoStalcius <br>" ;
}


print_r($darbuotojas); // masyvo arba objekto isvedimas
var_dump($darbuotojas); // detalus kintamojo arba  masyvo  isvedimas
