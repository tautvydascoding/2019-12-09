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

          $darbuotojas = [
                  "vardas" => "Jonas",
                  "asmensKodas" => 4276221095,
                  "gimimoData" => "1976-10-26",
                  "pardavimuKiekis" => 120
          ];


          print_r($darbuotojas); // masyvo spausdinimas

          echo "<br />";



          $darbuotojas["pardavimuKiekis"] = 180;

          $darbuotojas[0] = "adresas";
          $darbuotojas["adresas"] = "Siaures pr. 104";

         echo $darbuotojas["vardas"] . "<br />" . $darbuotojas["asmensKodas"] . "<br />" . $darbuotojas["gimimoData"] . "<br />" . $darbuotojas["pardavimuKiekis"] . "<br />" . $darbuotojas["adresas"] . "<br />"; // stalciu info spausdinimas

        echo $darbuotojas[0]; //


          foreach ($darbuotojas as $darbuotojoStalcius) {
            echo "$darbuotojoStalcius <br />";  // isveda visa masyva 
          }





         ?>






        <script type="text/javascript" src="libs/jquery-3.4.1.min.js"> </script>
        <script type="text/javascript" src="libs/bootstrap/js/bootstrap.bundle.min.js"> </script>
        <!-- MANO JS pats zemiausias -->
        <script type="text/javascript" src="js/main.js"></script>

     </body>
</html>
