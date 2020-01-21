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

      $kaina=20;
      $antraste="XXL dviratis";
      $aprasymas="grazi preke";
      ?>
      <h1>Prekes <br></h1>
<div class="container bg-light">
  <div class="row">



<?php

for ($i=0; $i <6; $i++)
{
  include('template-preke.php');
}

 ?>

  </div>
</div>





<script type="text/javascript" src="libs/jquery-3.4.1.min.js"> </script>
<script type="text/javascript" src="libs/bootstrap/js/bootstrap.bundle.min.js"> </script>
<!-- MANO JS pats zemiausias -->
<script type="text/javascript" src="js/main.js"></script>
<h2>footeris</h2>

</body>
</html>







<!-- // UZDUOTIS:
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
<h2>  </h2>
// 3.2) index.php faile!! - paleisti FOR cikla 6 kartus include('template-preke.php'); -->
