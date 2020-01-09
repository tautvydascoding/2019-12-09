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
             <h1>Isijuk inspect->console</h1>

        </div>


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

        $visosPrekes = [];

        // A. sukurti masyva preke1: Antraste, img pavadinimas, prekes aprasymas, kaina
        // A. sukurti masyva preke2: Antraste, img pavadinimas, prekes aprasymas, kaina
        // A. sukurti masyva preke3: Antraste, img pavadinimas, prekes aprasymas, kaina

        $preke1 = ['kede', '1.jpg', 'lorem...', '45 EUR'];
        $preke2 = ['stalas', '2.jpg', 'lorem...', '130 EUR'];
        $preke3 = ['lempa', '3.jpg', 'lorem...', '15 EUR'];




        // B. i masyva visosPrekes, ideti "preke" masyva

         $visosPrekes [0] = $preke1;
         $visosPrekes [1] = $preke2;
         $visosPrekes [2] = $preke3;




        // C. atvaizduodi kiekvienoje eiluteje po 3 prekes
        // (naudojant for arba foreach) ir bootstrap dizaina

        for ($i=0; $i < count($visosPrekes); $i++) {
          echo "<div class='container'>
                <div class='row'>
                <article class='col-4'>
                <h2 class = 'bg-success'>" . $visosPrekes[$i][0] . "</h2>
                <p class = 'mt-4'>" . $visosPrekes[$i][3] . "</p>
                <button class='btn bg-info mt-5'>" . $visosPrekes[$i][2] . "</button>
                </article> </div>
                </div>";
        }


        // D. naudojant du FOR FOR arba FOREACH FOREACH


        // 3 budai nuotraukoms
        // printf("<img    src='./img/"     . $visosPrekes[$i][1] . "' width='200px' alt=''  />");
        // printf("<img src='./img/%s' width='200px' alt=''  />", $visosPrekes[$i][1]);

































         ?>





































        <script type="text/javascript" src="libs/jquery-3.4.1.min.js"> </script>
        <script type="text/javascript" src="libs/bootstrap/js/bootstrap.bundle.min.js"> </script>
        <!-- MANO JS pats zemiausias -->
        <script type="text/javascript" src="js/main.js"></script>

     </body>
</html>
