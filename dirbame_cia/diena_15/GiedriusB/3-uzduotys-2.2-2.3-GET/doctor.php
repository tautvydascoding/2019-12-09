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
          // require_once('doctor-functions.php');
          // $numeris = 4;
          // $gydytojas = getDoctor($numeris);
          // print_r ($gydytojas);
          // //echo $gydytojas[1] .  $gydytojas[2] ;
          // echo "<hr />";
          // echo $gydytojas["name"] . " " .  $gydytojas['lname'] ;
         ?>
         <?php
         require_once('doctor-functions.php');
         $numeris = $_GET['nr'];
         $gydytojas = getDoctor( $numeris);
         // echo $gydytojas[1] .  $gydytojas[2] ;
         echo $gydytojas["name"] . " " . $gydytojas['lname'] ;
          ?>




        <script type="text/javascript" src="libs/jquery-3.4.1.min.js"> </script>
        <script type="text/javascript" src="libs/bootstrap/js/bootstrap.bundle.min.js"> </script>
        <!-- MANO JS pats zemiausias -->
        <script type="text/javascript" src="js/main.js"></script>

     </body>
</html>