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
            include('gyvunas.php');
            $naujasVilkas = new Vilkas();
            $naujasVilkas->printLigos();
            echo $naujasVilkas->printPusryciai();
            echo $naujasVilkas->tipas. " <br />";
            echo $naujasVilkas->svoris. " <br />";
            //echo $naujasVilkas->ligos. " <br />"; //klaida
            // echo $naujasVilkas->pusryciai. " <br />";//klaida
           ?>

        </div>




        <script type="text/javascript" src="libs/jquery-3.4.1.min.js"> </script>
        <script type="text/javascript" src="libs/bootstrap/js/bootstrap.bundle.min.js"> </script>
        <!-- MANO JS pats zemiausias -->
        <script type="text/javascript" src="js/main.js"></script>

     </body>
</html>
