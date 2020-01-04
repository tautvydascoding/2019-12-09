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
        // tuscio masyvo kurimas - du budai
          $meniu = [];
          //$meniu = array(); //antras budas

          // uzpildyto masyvo kurimas
          $meniu = ['home', 'about', 'gallery', 'contact', 'blog'];
          //$meniu = array('home', 'about', 'gallery', 'contact', 'blog'); // senovinis budas

          echo "<nav>";
          for ($i=0; $i < count($meniu); $i++) {
            echo "<li> $meniu[$i] </li>";
          }
          echo "</nav>";

          $nuotraukos = ['1.jpg', '2.jpg', '3.jpg', '4.jpg'];
         ?>

         <img src='img/1.jpg' alt='' />
         <img src='img/<?php echo $nuotraukos[0]; ?>' alt=''  />

         <?php
            for ($i=0; $i < count($nuotraukos); $i++) {
              echo "<img src='img/$nuotraukos[$i]' alt='' />";
            }
          ?>


        <script type="text/javascript" src="libs/jquery-3.4.1.min.js"> </script>
        <script type="text/javascript" src="libs/bootstrap/js/bootstrap.bundle.min.js"> </script>
        <!-- MANO JS pats zemiausias -->
        <script type="text/javascript" src="js/main.js"></script>

     </body>
</html>
