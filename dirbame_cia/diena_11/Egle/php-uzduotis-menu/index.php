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

        // uzduotis 1
        // A. susikurti meniu masyva: home, about, gallery, contact, blog
        // B. atspausdinti visus meniu punktus i HTML (su html tag'ais)

          $menu = ["home", "about", "gallery", "contact", "blog"];

            echo "<nav>";


            for ($i=0; $i < count($menu) ; $i++) {
              echo "<li>$menu[$i]</li>";
            }

            echo "</nav>";






            // uzduotis 2
            // A. susirasti 6 nuotraukas
            // B. susikurti nuotrauku TIK pavadinimu masyva
            // C. atspausdinti visas nuotraukas su ciklu, po 3-ris i eilute

           $photo = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.png"];


           echo "<div class= 'row'>";

           for ($i=0; $i < count($photo); $i++) {
             echo "<img src='./img/$photo[$i]' alt='' class ='col-4'  />";
           }

           echo "</div>";



         ?>





        <script type="text/javascript" src="libs/jquery-3.4.1.min.js"> </script>
        <script type="text/javascript" src="libs/bootstrap/js/bootstrap.bundle.min.js"> </script>
        <!-- MANO JS pats zemiausias -->
        <script type="text/javascript" src="js/main.js"></script>

     </body>
</html>
