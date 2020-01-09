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

             $auto1 = ['audi a4', 1.9];
             $auto2 = ['audi a6', 2.2];
             $auto3 = ['audi a7', 4.0];
             $visiAuto = [$auto1, $auto2, $auto3];

            //arba

             // $visiAuto2 = [
             //   ['audi a4', 1.9],
             //   ['audi a6', 2.2],
             //   ['audi a7', 4.0]
             // ]

             //pakeitimas:
             $visiAuto[0][1] = 1.8;
             //paemimas:
            echo $visiAuto[2][0] . "<br>"; //audi a7
            echo $visiAuto[1][1] . "<br>"; //2.2

            echo count($visiAuto); //suskaiciuos stulpeiu sk.
            echo count($visiAuto[0]); //suskaiciuos pirmo stulpelio eiluciu skaiciu.

            //print_r($autos) - atspausdina visus masyvus;

            // A. sukurti masyva darbuotojas1: Jonas, Jonaitis, 1980, Inspektorius
            $darbuotojas1 = ['Jonas', 'Jonaitis', '1980', 'Inspektorius'];

            //B. sukurti masyva darbuotojas2: Ona, Onute, 1980, sekretore

            $darbuotojas2 = ['Ona', 'Onute', '1980', 'sekretore'];

            // C. sukurti masyva darbuotojas3: Kestas, Kerta, 2001, pavaduotojas

            $darbuotojas3 = ['Kestas', 'Kerta', '2001', 'pavaduotojas'];

            //D. sukurti masyva 'visiDarbuotojai'

            $visiDarbuotojai = [];


            //arba

            // $visiDarbuotojai = [
            //    ['Jonas', 'Jonaitis', '1980', 'Inspektorius'],
            //    ['Ona', 'Onute', '1980', 'sekretore'],
            //    ['Kestas', 'Kerta', '2001', 'pavaduotojas']
            //  ]

            //E.   i masyva 'visiDarbuotojai'  ideti visus dartuotoju masyvus

            $visiDarbuotojai = [$darbuotojas1, $darbuotojas2, $darbuotojas3];

            print_r($visiDarbuotojai);

            // isvesti visa informacija apie pirma darbuotoja (naudojant FOR cikla)


            for (i=0; i < $darbuotojas1; i++) {
              echo ($visiDarbuotojai[0]);
            }

              ?>

        </div>




        <script type="text/javascript" src="libs/jquery-3.4.1.min.js"> </script>
        <script type="text/javascript" src="libs/bootstrap/js/bootstrap.bundle.min.js"> </script>
        <!-- MANO JS pats zemiausias -->
        <script type="text/javascript" src="js/main.js"></script>

     </body>
</html>
