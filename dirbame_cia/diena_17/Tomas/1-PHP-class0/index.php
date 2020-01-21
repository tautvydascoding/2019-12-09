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
    include("controler/zmogus.php");

      $Monika = new zmogus();
      $Tadas = new zmogus();
      $Kestas = new zmogus();

        // MONIKA
      $Monika->vardas = "Monika";
      $Monika->ugis = 155;
      echo "Monikos vardas yra: " . $Monika->vardas . "<br>";
      echo "Monikos ugis: " . $Monika->ugis . "<br><br>";

       // TADAS
       $Tadas->vardas = "Tadas";
       $Tadas->ugis = 180;
       echo "Tado vardas yra: " . $Tadas->vardas . "<br>";
       echo "Tado ugis yra: " . $Tadas->ugis . "<br><br>";

        // KESTAS
      $Kestas->vardas = "Kestas";
      $Kestas->ugis = 179;
      echo "Kesto vardas yra: " . $Kestas->vardas . "<br>";
      echo "Kesto ugis yra: " . $Kestas->ugis . "<br><br>";

      $Monika->einu();











     ?>




        <script type="text/javascript" src="libs/jquery-3.4.1.min.js"> </script>
        <script type="text/javascript" src="libs/bootstrap/js/bootstrap.bundle.min.js"> </script>
        <!-- MANO JS pats zemiausias -->
        <script type="text/javascript" src="js/main.js"></script>

     </body>
</html>
