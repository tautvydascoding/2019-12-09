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
                $darbuotojas = [
                  "vardas" => "Petras",
                  "asmensKodas" => 48501042984,
                  "gimimoData" => "1985-01-04",
                  "pardavimuKiekis" => 200];
                foreach ($darbuotojas as $darbuotojoStalcius) {
                  echo "$darbuotojoStalcius <br>";
                };
                $darbuotojas["pardavimuKiekis"] = 180;
                echo "pakeistas pardavimu kiekis <br>";
                foreach ($darbuotojas as $darbuotojoStalcius) {
                  echo "$darbuotojoStalcius <br>";
                };
                echo "pridedam adresa <br>";
                $darbuotojas["adresas"] = "Siaures pr 113";
                foreach ($darbuotojas as $darbuotojoStalcius) {
                  echo "$darbuotojoStalcius <br>";
                };
                print_r($darbuotojas);

              ?>

        </div>





        <script type="text/javascript" src="libs/jquery-3.4.1.min.js"> </script>
        <script type="text/javascript" src="libs/bootstrap/js/bootstrap.bundle.min.js"> </script>
        <!-- MANO JS pats zemiausias -->
        <script type="text/javascript" src="js/main.js"></script>

     </body>
</html>
