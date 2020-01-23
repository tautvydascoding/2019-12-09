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

include ("controlers/zmogus.php");

$monika = new Zmogus();
$monika->vardas = "Monikele";
$monika->ugis = 155;
echo $monika->ugis;
echo $monika->vardas;

$tadas = new Zmogus();
$tadas->vardas = "Tadelis";
$tadas->ugis = 185;
echo $tadas->ugis;
echo $tadas->vardas;

$kestas = new Zmogus();
$kestas->vardas = "Kestelis";
$kestas->ugis = 195;
echo $kestas->ugis;
echo $kestas->vardas;





$monika->einu();
              ?>

        </div>




        <script type="text/javascript" src="libs/jquery-3.4.1.min.js"> </script>
        <script type="text/javascript" src="libs/bootstrap/js/bootstrap.bundle.min.js"> </script>
        <!-- MANO JS pats zemiausias -->
        <script type="text/javascript" src="js/main.js"></script>

     </body>
</html>
