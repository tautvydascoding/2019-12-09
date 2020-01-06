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

        <!-- // UZDUOTIS 1.0
        // A. sukurti masyva darbuotojas1: Jonas, Jonaitis, 1980, Inspektorius
        // B. sukurti masyva darbuotojas2: Ona, Onute, 1980, sekretore
        // C. sukurti masyva darbuotojas3: Kestas, Kerta, 2001, pavaduotojas
        // D. sukurti masyva 'visiDarbuotojai'
        // E.   i masyva 'visiDarbuotojai'  ideti visus dartuotoju masyvus

        // UZDUOTIS 1.4
        // isvesti visa informacija apie kiekviena  darbuotoja  (naudojant DU FOR ciklus) -->


          <?php

            $darbuotojas1 = [ "Jonas", " Jonaitis", 1980, "Inspektorius"];
            $darbuotojas2 =  ["Ona", "Onute", 1980, "Sekretore"];
            $darbuotojas3 = ["Kestas", "Kerta", 2001, "pavaduotojas"];

            $visiDarbuotojai = [$darbuotojas1, $darbuotojas2, $darbuotojas3];


            // UZDUOTIS 1.1
            //  isvesti visa informacija apie pirma darbuotoja (naudojant FOR cikla)
            for ($i=0; $i < count($darbuotojas1); $i++) {
              echo $darbuotojas1[$i] . " " . "<br />";
            }

            // UZDUOTIS 1.2
            // isvesti visu  darbuotoju tik vardus (naudojant FOR cikla)

            for ($i=0; $i <count($visiDarbuotojai) ; $i++) {
              echo $visiDarbuotojai[$i][0] . " " ;
            }

            echo "<br />";

            // UZDUOTIS 1.3
            // isvesti visa informacija apie kiekviena  darbuotoja  (naudojant VIENA FOR cikla)

            for ($i=0; $i <count($visiDarbuotojai) ; $i++) {
              echo $visiDarbuotojai[$i][0] . " ";
              echo $visiDarbuotojai[$i][1] . " ";
              echo $visiDarbuotojai[$i][3] . " ";
              echo "<br />";
            }





           ?>



        <script type="text/javascript" src="libs/jquery-3.4.1.min.js"> </script>
        <script type="text/javascript" src="libs/bootstrap/js/bootstrap.bundle.min.js"> </script>
        <!-- MANO JS pats zemiausias -->
        <script type="text/javascript" src="js/main.js"></script>

     </body>
</html>
