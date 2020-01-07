<?php

$preke1 = ["Lova", "01.jpg", 500, "Labai patogi ir grazi lova"];
$preke2 = ["Komoda", "02.jpg", 400, "Labai patogi ir grazi komoda"];
$preke3 = ["Spinta", "03.jpg", 600, "Labai patogi ir grazi spinta"];

$visosPrekes = [$preke1, $preke2, $preke3];


 ?>

<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title></title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <link rel="stylesheet" href="css/normalize.css">

        <link rel="stylesheet" href="libs/bootstrap/css/bootstrap.min.css">

        <!-- MANO CSS visada pats zemiausias!!! -->
        <link rel="stylesheet" href="css/style.css">
    </head>
    <body>
        <div class="container  bg-light">
            <table>
              <tr>
                  <th>Preke</th>
                  <th>Img</th>
                  <th>Kaina</th>
                  <th>Aprasymas</th>
              </tr>
              <?php for ($i=0; $i < count($visosPrekes); $i++) {
                echo "<tr>";
                  for ($y=0; $y < count($visosPrekes[$i]); $y++) {
                    echo "<td>".
                    $visosPrekes[$i][$y].
                    "</td>";
                  }
                echo "</tr>";

              } ?>

            </table>

        </div>




        <script type="text/javascript" src="libs/jquery-3.4.1.min.js"> </script>
        <script type="text/javascript" src="libs/bootstrap/js/bootstrap.bundle.min.js"> </script>
        <!-- MANO JS pats zemiausias -->
        <script type="text/javascript" src="js/main.js"></script>

     </body>
</html>


<!--
// ============svarbus patarimai===============:
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


// UZDUOTIS 2
// sukurti matrica, kurioje bus saugoma kiekvienos prekes info:

// Antraste, img pavadinimas, kaina, prekes aprasymas

// A. sukurti masyva preke1: Antraste, img pavadinimas, prekes aprasymas, kaina
// A. sukurti masyva preke2: Antraste, img pavadinimas, prekes aprasymas, kaina
// A. sukurti masyva preke3: Antraste, img pavadinimas, prekes aprasymas, kaina
// B. i masyva visosPrekes, ideti "preke" masyva
// C. atvaizduodi kiekvienoje eiluteje po 3 prekes
// (naudojant for arba foreach) ir bootstrap dizaina
// D. naudojant du FOR FOR arba FOREACH FOREACH


// 3 budai nuotraukoms
// printf("<img    src='./img/"     . $visosPrekes[$i][1] . "' width='200px' alt=''  />");
// printf("<img src='./img/%s' width='200px' alt=''  />", $visosPrekes[$i][1]); -->
