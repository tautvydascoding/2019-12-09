<?php

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


// UZDUOTIS 2 --------------
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
// printf("<img src='./img/%s' width='200px' alt=''  />", $visosPrekes[$i][1]);



$preke1 = [ "Kedai", "nike", "begimo bateliai", 299 ];
$preke2 = ["Batai", "timberland", "rudeniniai batai", 250];
$preke3 = ["Slepetes", "adidas", "slepetes papludimiui", 200];
$visosPrekes = [$preke1, $preke2, $preke3];

print_r ($visosPrekes);
foreach ($visosPrekes as $prekesArray) {

  print_r ($prekesArray);
  echo "<hr>";
  //echo $prekesArray[0] . " " . $prekesArray[1] . " <br>";
}


 ?>
