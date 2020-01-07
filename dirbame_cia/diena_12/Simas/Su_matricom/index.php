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
             <?php
              $darbuotojas1 = ['Jonas', 'Jonaitis', 1980, 'Inspektorius'];
              $darbuotojas2 = ['Ona', 'Onute', 1980, 'Sekretore'];
              $darbuotojas3 = ['Kestas', 'Kerta', 2001, 'Pavaduotojas'];
              $visiDarbuotojai = [$darbuotojas1, $darbuotojas2, $darbuotojas3];
              // // isvesti visa informacija apie pirma darbuotoja (naudojant FOR cikla)
              for ($i=0; $i < count($visiDarbuotojai[0]); $i++) {
                print_r($visiDarbuotojai[0][$i]);
              };
              echo "<br>";
              // isvesti visu  darbuotoju tik vardus (naudojant FOR cikla)
              for ($i=0; $i < count($visiDarbuotojai); $i++) {
                print_r($visiDarbuotojai[$i][0]);
              };
              echo "<br>";
              // isvesti visa informacija apie kiekviena  darbuotoja  (naudojant VIENA FOR cikla)
              for ($i=0; $i < count($visiDarbuotojai); $i++) {
                print_r($visiDarbuotojai[$i][0] . $visiDarbuotojai[$i][1] . $visiDarbuotojai[$i][2] . $visiDarbuotojai[$i][3]);
              }
              echo "<br>";
              // isvesti visa informacija apie kiekviena  darbuotoja  (naudojant DU FOR ciklus)
              for ($i=0; $i < count($visiDarbuotojai); $i++) {
                for ($k=0; $k < count($visiDarbuotojai[$i]); $k++) {
                  print_r($visiDarbuotojai[$i][$k]);
                };
              };
              echo "<br>";
              echo "<br>";
              echo "<br>";
              echo "<br>";
              echo "<br>";
              ?>
              <div class="row">

              <?php
              // UZDUOTIS 2 --------------
              // sukurti matrica, kurioje bus saugoma kiekvienos prekes info:
              // Antraste, img pavadinimas, kaina, prekes aprasymas

              // A. sukurti masyva preke: Antraste, img pavadinimas, prekes aprasymas, kaina
              // B. i masyva visosPrekes, ideti "preke" masyva
              // C. atvaizduodi kiekvienoje eiluteje po 3 prekes (naudojant for arba foreach)
              // ir bootstrap dizaina

              $preke1 = ['Antraste', 'nuotrauka', 'kaina', 'aprasymas'];
              $preke2 = ['Antraste', 'nuotrauka', 'kaina', 'aprasymas'];
              $preke3 = ['Antraste', 'nuotrauka', 'kaina', 'aprasymas'];
              $preke4 = ['Antraste', 'nuotrauka', 'kaina', 'aprasymas'];
              $visosPrekes = [$preke1, $preke2, $preke3, $preke4];

                for ($i=0; $i < count($visosPrekes); $i++) {
                  print_r("<article class='col-4'>
                      <h2>" . $visosPrekes[$i][0] . "</h2>
                      <p>" . $visosPrekes[$i][3] . "</p>
                      <button class='btn btn-lg  bg-info'>" . $visosPrekes[$i][2] . "</button>
                  </article>");
                }

                ?>
              </div>






        </div>




        <script type="text/javascript" src="libs/jquery-3.4.1.min.js"> </script>
        <script type="text/javascript" src="libs/bootstrap/js/bootstrap.bundle.min.js"> </script>
        <!-- MANO JS pats zemiausias -->
        <script type="text/javascript" src="js/main.js"></script>

     </body>
</html>
