<?php require_once('models/doctor.php') ?>

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
             <h1>Poliklinika</h1>

        <?php
            for ($i=0; $i < 10; $i++) {
                $gydytojas = getDoctor($i);
                // print_r($gydytojas);
                // echo $gydytojas['Name'] . " " . $gydytojas['LastName'];
                echo "<a href='page-item.php?id=$i'>" . $gydytojas['Name'] . " " . $gydytojas['LastName'] . "</a>";
                echo "<br>";
            }
         ?>

        </div>




        <script type="text/javascript" src="libs/jquery-3.4.1.min.js"> </script>
        <script type="text/javascript" src="libs/bootstrap/js/bootstrap.bundle.min.js"> </script>
        <!-- MANO JS pats zemiausias -->
        <script type="text/javascript" src="js/main.js"></script>

     </body>
</html>
