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
<?php include "view/registracija_gyd_forma.php" ?>
<?php include "view/visi_gyd.php" ?>

             <a class="btn bg-success"  href='controlers/naujasGydytojas.php?vardas=TOMAS&pavarde=TOMAUSKIS'> Naujas Gyd</a>
             <a class="btn bg-danger" href='view/registracija_gyd_forma.php'> Registruoti Gydytoja</a>



        </div>




        <script type="text/javascript" src="libs/jquery-3.4.1.min.js"> </script>
        <script type="text/javascript" src="libs/bootstrap/js/bootstrap.bundle.min.js"> </script>
        <!-- MANO JS pats zemiausias -->
        <script type="text/javascript" src="js/main.js"></script>

     </body>
</html>
