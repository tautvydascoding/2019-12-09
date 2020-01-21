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

    $Monika = new Zmogus();
    echo "Monikos ugis: $Monika->ugis <br>";
    $Monika->ugis = 155;
    $Monika->vardas = "Monika";
    echo "Monikos ugis po pakeitimo: $Monika->ugis <br>";

    $Tadas = new Zmogus();
    echo "Tado ugis: $Tadas->ugis <br>";
    $Tadas->ugis = 180;
    $Tadas->vardas = "Tadas";
    echo "Tado ugis po pakeitimo: $Tadas->ugis <br>";

    $Kestas = new Zmogus();
    echo "Kesto ugis: $Kestas->ugis <br>";
    $Kestas->ugis = 179;
    $Kestas->vardas = "Kestas";
    echo "Kesto ugis po pakeitimo: $Kestas->ugis <br>";

    echo "$Monika->ugis, $Monika->vardas <br>";
    echo "$Tadas->ugis, $Tadas->vardas <br>";

    $Monika->einu();







     ?>




        <script type="text/javascript" src="libs/jquery-3.4.1.min.js"> </script>
        <script type="text/javascript" src="libs/bootstrap/js/bootstrap.bundle.min.js"> </script>
        <!-- MANO JS pats zemiausias -->
        <script type="text/javascript" src="js/main.js"></script>

     </body>
</html>
