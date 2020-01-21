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
              $auto1 = ['audi A4', 1.9];
              $auto2 = ['audi A6', 2.2];
              $auto3 = ['audi A7', 4.0];

              // echo $auto1[0] . '<br>';
              // echo $auto1[1];
              //echo $auto1;

              $masyvoIlgis = count($auto1);

              for($x = 0; $x < $masyvoIlgis; $x++) {
                  echo $auto1[$x];
                  echo "<br>";
              }

              $visiAuto = [ $auto1, $auto2, $auto3 ];

              //PAKEITIMAS
            //  echo $visiAuto[1][0] = 'audi A8';

              print_r($visiAuto);






            ?>

        </div>




        <script type="text/javascript" src="libs/jquery-3.4.1.min.js"> </script>
        <script type="text/javascript" src="libs/bootstrap/js/bootstrap.bundle.min.js"> </script>
        <!-- MANO JS pats zemiausias -->
        <script type="text/javascript" src="js/main.js"></script>

     </body>
</html>
