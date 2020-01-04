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
            <?php  echo "naujas tekstas <br>";?>
            <?php  echo "naujas tekstas <br>";?>
            <?php  echo "naujas tekstas <br>";?>
        </div>

<?php
$car = "opel";
switch ($car) {
  case 'audi':
    echo 'Susimastykite apie variklio prieziura';
    break;
  case 'BMW':
    echo "Susimastykite apie greiti ir vairavimo kultura";
    break;
  case 'opel':
    echo "Susimastykite apie naujus priedus";
    break;
  default:
    echo "Jus neturite automobilio";
    break;
} ?>
<!--
        // PASIZIURETI KAS YRA PHP, js "Switch"



          // UZDUOTIS  "Switch"
         // paduoti varda ir Jeigu jis lygus:
         // "audi" - atspausdinti "Susimastykite apie variklio prieziura"
         // "BMW" - atspausdinti "Susimastykite apie greiti ir vairavimo kultura"
         // "opel" - atspausdinti "Susimastykite apie naujus priedus" -->

        <script type="text/javascript" src="libs/jquery-3.4.1.min.js"> </script>
        <script type="text/javascript" src="libs/bootstrap/js/bootstrap.bundle.min.js"> </script>
        <!-- MANO JS pats zemiausias -->
        <script type="text/javascript" src="js/main.js"></script>

     </body>
</html>
