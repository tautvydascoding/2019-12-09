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

        </div>

        <?php
          $meniu = ['about', 'gallery', 'home'];

          for ($i=0; $i < count($meniu); $i++) {
            echo $meniu[$i];
          }

          $nuotraukos = ['1.jpg', '2.jpg'];


         ?>

         <?php

         $nuotraukos = ['1.jpg', '2.jpg'];

         for ($i=0; $i < count($nuotraukos); $i++)
          echo "<img src='img/$nuotraukos[$i]' alt='' />";
          ?>

          for ($i=0; $i < count($nuotraukos); $i++) {<?php

          }



        <script type="text/javascript" src="libs/jquery-3.4.1.min.js"> </script>
        <script type="text/javascript" src="libs/bootstrap/js/bootstrap.bundle.min.js"> </script>
        <!-- MANO JS pats zemiausias -->
        <script type="text/javascript" src="js/main.js"></script>

     </body>
</html>
