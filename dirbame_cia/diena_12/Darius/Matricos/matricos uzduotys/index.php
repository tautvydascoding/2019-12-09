<!-- / =================svarbus patarimai===================:
// ARRAY: jeigu naudoji FOR || while cikla, tai negalvojant masyve naudoti "i" (pvz.: myArray[i])
// FOR:   "for (i = 0; i < x; i++) {"  - nesusijusi su uzdaviniu (skirtas apeit masyva/ ivykdyti daug kartu kazka)
// matricas  - visada nusipiesti ant popieriaus eskiza su testiniais duomenimis
// matrica narys paimamas: myMatrica[x][y]   x- stulpelis; y - eilute
// matrica - pasitikritni ar nereik x ir y sukeisti vietomis (ar nesuklydai kuris stulpelis ir kuris eilute )
// matricos ilgis daznai skiriasi nuo plocio.
//  pvz.:
 // for ( i < eiluciuSkaicius)
 //    for ( k < stulpeliuSkaicius)
 // =================// =================// ========



     // UZDUOTIS 1.0
     // A. sukurti masyva darbuotojas1: Jonas, Jonaitis, 1980, Inspektorius
     // B. sukurti masyva darbuotojas2: Ona, Onute, 1980, sekretore
     // C. sukurti masyva darbuotojas3: Kestas, Kerta, 2001, pavaduotojas
     // D. sukurti masyva 'visiDarbuotojai'
     // E.   i masyva 'visiDarbuotojai'  ideti visus dartuotoju masyvus
     // UZDUOTIS 1.1
     // isvesti visa informacija apie pirma darbuotoja (naudojant FOR cikla)
     // UZDUOTIS 1.2
     // isvesti visu  darbuotoju tik vardus (naudojant FOR cikla)
     // UZDUOTIS 1.3
     // isvesti visa informacija apie kiekviena  darbuotoja  (naudojant VIENA FOR cikla)
     // UZDUOTIS 1.4
     // isvesti visa informacija apie kiekviena  darbuotoja  (naudojant DU FOR ciklus)


    // UZDUOTIS 2
    // sukurti matrica, kurioje bus saugoma kiekvienos prekes info:
    // Antraste, img pavadinimas, kaina, prekes aprasymas

    // A. sukurti masyva preke: Antraste, img pavadinimas, prekes aprasymas, kaina
    // B. i masyva visosPrekes, ideti "preke" masyva
    // C. atvaizduodi kiekvienoje eiluteje po 3 prekes (naudojant for arba foreach)
    // ir bootstrap dizaina
    <article clas='col-...'>
        <h2> ...
        <img>
        <p>...
        <button> ...
        <a class="btn btn-lg  bg-info"> </a>
    </article>


       // 3 budai nuotraukoms
        // printf("<img src='./img/" . $visosPrekes[$i][1] . "' width='200px;' alt=''  />");
        // printf("<img src='./img/%s' width='200px;' alt=''  />", $visosPrekes[$i][1]); -->


<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title></title>

        <!-- !!! mano CSS failas vissada zemiau, nie kiti css failai -->
        <!-- <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"> -->
        <link rel="stylesheet" href="./libs/bootstrap/css/bootstrap.css">

        <!-- !!idedame CSS faila, nes kitaip neveiks -->
        <link rel="stylesheet" href="./css/main.css">


    </head>
    <body>


<?php

$darbuotojas1 = ["Jonas", "Jonaitis", 1980, "Inspektorius"];
$darbuotojas2 = ["Ona", "Onute", 1980, "Sekretore"];
$darbuotojas3 = ["Kestas", "Petraitis", 2001, "pavaduotojas"];

$visiDarbuotojai = [$darbuotojas1, $darbuotojas2, $darbuotojas3];

// for ($i=0; $i < count($visiDarbuotojai[0]) ; $i++) {
// print_r ($visiDarbuotojai[0][$i]);
// }

// for ($i=0; $i < count($visiDarbuotojai) ; $i++) {
// print_r ($visiDarbuotojai[$i][0] . "<br>");
// print_r ($visiDarbuotojai[$i][1] . "<br>");
// print_r ($visiDarbuotojai[$i][2] . "<br>");
// print_r ($visiDarbuotojai[$i][3] . "<br>");


  for ($i=0; $i < count($visiDarbuotojai); $i++) {

  for ($j=0; $j < count($visiDarbuotojai[$i]); $j++) {

    print_r ("<li>".$visiDarbuotojai[$i][$j]);
}
}



 ?>





        <!-- js puslapio apacioje -->
        <script src="http://code.jquery.com/jquery-3.3.1.min.js"  integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>
         <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
        <!-- !!! mano js failas - VISADA pats zemiausias -->
        <script type="text/javascript" src="js/main.js">     </script>
    </body>
</html>
