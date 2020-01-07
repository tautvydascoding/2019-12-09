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
             <?php
              $auto1 = ['audi A4', 1.9];
              $auto2 = ['audi A6', 2.2];
              $auto3 = ['audi A7', 4.0];
              $visiAuto = [$auto1, $auto2, $auto3];
              print_r ($visiAuto);

              $visiAuto2 = [['audi A4', 1.9], ['audi A6', 2.2], ['audi A7', 4.0]];
              $visiAuto[0][1] = 1.8;
              ?>
        </div>
        <!-- // UZDUOTIS 1.0
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
        // isvesti visa informacija apie kiekviena  darbuotoja  (naudojant DU FOR ciklus) -->
            <?php
              $darbuotojas1 = ["Jonas", "Jonaitis", 1980, "inspektorius"];
              $darbuotojas2 = ["Ona", "Onute", 1980, "sekretore"];
              $darbuotojas3 = ["Kestas", "Kerta", 2001, "pavaduotojas"];
              $visiDarbuotojai = [$darbuotojas1, $darbuotojas2, $darbuotojas3];
            // uzduotis 1.1
              for ($i=0; $i < count($visiDarbuotojai); $i++) {
                echo $visiDarbuotojai[0][$i]." ";
              }
              echo ("<br />");
              // uzduotis 1.2
              for ($i=0; $i < count($visiDarbuotojai); $i++) {
                  echo ($visiDarbuotojai[$i][0]." "."<br />");
              }

              // uzduotis 1.3
              for ($i=0; $i < count($visiDarbuotojai); $i++) {
                echo ($visiDarbuotojai[$i][0]." ");
                echo ($visiDarbuotojai[$i][1]." ");
                echo ($visiDarbuotojai[$i][2]." ");
                echo ("<br>");
              }
              // uzduotis 1.4
              for ($i=0; $i < count($visiDarbuotojai); $i++) {
                for ($j=0; $j < count($visiDarbuotojai[$i]); $j++) {
                  echo $visiDarbuotojai[$i][$j]." ";
                }
              }
             ?>



       <!-- // UZDUOTIS 2
       // sukurti matrica, kurioje bus saugoma kiekvienos prekes info:
       // Antraste, img pavadinimas, kaina, prekes aprasymas

       // A. sukurti masyva preke: Antraste, img pavadinimas, prekes aprasymas, kaina
       // B. i masyva visosPrekes, ideti "preke" masyva
       // C. atvaizduodi kiekvienoje eiluteje po 3 prekes (naudojant for arba foreach)
       // ir bootstrap dizaina -->
       <div class="row">


       <?php
        $preke1 = ["Antraste1", "1.jpg", "Prekes aprasymas1: labai gera preke ir t.t, visi pirkit.", 200];
        $preke2 = ["Antraste2", "2.jpg", "Prekes aprasymas2: labai gera preke ir t.t, visi pirkit.", 300];
        $preke3 = ["Antraste3", "3.jpg", "Prekes aprasymas3: labai gera preke ir t.t, visi pirkit.", 400];
        $visosPrekes = [$preke1, $preke2, $preke3];
        for ($i=0; $i < 3; $i++) {
          echo
          "<article class='col-4'>
          <h2>".$visosPrekes[$i][0]."</h2>
          <img src='img/".$visosPrekes[$i][1]."' alt='img'>
          <p>".$visosPrekes[$i][2]."</p>
          <button>
          <a class='btn btn-lg bg-info'>".$visosPrekes[$i][3]." </a>
          </article>";
        }
        ?>
       </div>

        <script type="text/javascript" src="libs/jquery-3.4.1.min.js"> </script>
        <script type="text/javascript" src="libs/bootstrap/js/bootstrap.bundle.min.js"> </script>
        <!-- MANO JS pats zemiausias -->
        <script type="text/javascript" src="js/main.js"></script>

     </body>
</html>
