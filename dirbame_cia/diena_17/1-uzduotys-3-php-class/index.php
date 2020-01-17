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
          include('controler/zmogus.php');
            $monika = new zmogus();
            $monika->vardas = 'Monika';
            $monika->ugis = 155;


            $Tadas = new zmogus();
            $Tadas->vardas = 'Tadas';
            $Tadas->ugis = 180;


            $kestas = new zmogus();
            $kestas->vardas = 'Kestas';
            $kestas->ugis = 179;

            echo $monika->vardas. " " .$monika->ugis. "<br />";
            echo $Tadas->vardas. " " .$monika->ugis. "<br />";
            echo $kestas->vardas. " " .$monika->ugis. "<br />";

            $monika->einu();

            ?>

        </div>




        <script type="text/javascript" src="libs/jquery-3.4.1.min.js"> </script>
        <script type="text/javascript" src="libs/bootstrap/js/bootstrap.bundle.min.js"> </script>
        <!-- MANO JS pats zemiausias -->
        <script type="text/javascript" src="js/main.js"></script>

     </body>
</html>
