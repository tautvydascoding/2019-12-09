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



        Susikurti 2 failus:

        template-preke.php
        index.php


        // UZDUOTIS:
        // 1: sukurti "template-preke.php" faila
        // h2 (antraste)
        // p (aprasymas)
        // button (Kaina)

        // 2) sukurti index.php su "<!Doctype html body" (ideti container ir row su bootatrap)

        // 2.2) index.php
        // sukurti kintamuosius:
        // $kaina = ...;
        // $antraste = ...;
        // $aprasymas = ...;
        // 3) template-preke.php faile   isvesti kintamuosius $kaina, $antraste, $aprasymas
        pvz
        // 3.2) index.php faile!! - paleisti FOR cikla 6 kartus include('template-preke.php');


          <main class="container-fluid">
            <div class="row">

            </div>
          </main>


          <?php

            $kaina = 19.99;
            $antraste = "Prekes pavadiniams";
            $aprasymas = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";


            for ($i=0; $i < 6; $i++) {
              include('template-preke.php');

            }



           ?>

        <script type="text/javascript" src="libs/jquery-3.4.1.min.js"> </script>
        <script type="text/javascript" src="libs/bootstrap/js/bootstrap.bundle.min.js"> </script>
        <!-- MANO JS pats zemiausias -->
        <script type="text/javascript" src="js/main.js"></script>

     </body>
</html>
