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

        <?php

        $darbuotojas = [
          "vardas" => "Tomas <br>",
          "AK" => 3888 . "<br>",
          "gimimoData" => 1990 . "<br>",
          "pardavimuKiekis" => 120
        ];

          // 1) ivesti visus duomenis apie $darbuotoja

          echo $darbuotojas["vardas"];
          echo $darbuotojas["AK"];
          echo $darbuotojas["gimimoData"];
          echo $darbuotojas["pardavimuKiekis"];

          // 2) pakeisti darbuotojo pardavimu skaiciu i 180

          $darbuotojas["pardavimuKiekis"] = 180;
          echo $darbuotoas["pardavimuKiekis"];


          // 3) i stalcius/index 0 ideti darbuotojo adresa: 'siaures pr. 131'

            $darbuotojas[0] = ["siaures pr. 131"];
            echo $darbuotojas[0];

          // 4) ism4ginti koda:
           //foreach ($darbuotojas as $darbuotojoStalcius) {
           //  echo "$darbuotojoStalcius <br>";
           //  }

         ?>




        <script type="text/javascript" src="libs/jquery-3.4.1.min.js"> </script>
        <script type="text/javascript" src="libs/bootstrap/js/bootstrap.bundle.min.js"> </script>
        <!-- MANO JS pats zemiausias -->
        <script type="text/javascript" src="js/main.js"></script>

     </body>
</html>
