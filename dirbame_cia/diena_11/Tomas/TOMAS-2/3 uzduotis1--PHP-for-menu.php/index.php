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
      $meniu = ["home", "about", "gallery", "contact", "blog"];

      $nuotraukos = ['1.jpg', '2.jpg', '3.jpg', '4.jpg'];


      echo "<nav>";
      for ($i=0; $i < count($meniu); $i++) {
        echo "<li>  $meniu[$i]  </li>";
      }
      echo "</nav>";


       ?>
       <!-- <img src="img/1.jpg" alt=""> -->

       <!-- arba -->


<div class="row">
  <?php

  for ($i=0; $i < count($nuotraukos); $i++) {
    echo "<div class='col-4'>
    <img class='img-fluid' src='img/$nuotraukos[$i] ' alt=''>
    </div>";
  }
  ?>

</div>










        <script type="text/javascript" src="libs/jquery-3.4.1.min.js"> </script>
        <script type="text/javascript" src="libs/bootstrap/js/bootstrap.bundle.min.js"> </script>
        <!-- MANO JS pats zemiausias -->
        <script type="text/javascript" src="js/main.js"></script>

     </body>
</html>
