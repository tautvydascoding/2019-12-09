<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
    <div class="container row">

    <?php
    $kaina = 200;
    $antraste = "pavadinimas";
    $aprasymas = "aprasymas";
    for ($i=0; $i < 7 ; $i++) {
      include 'template-item.php';
    }
     ?>

    </div>
    <script type="text/javascript" src="libs/jquery-3.4.1.min.js"> </script>
    <script type="text/javascript" src="libs/bootstrap/js/bootstrap.bundle.min.js"> </script>
    <!-- MANO JS pats zemiausias -->
    <script type="text/javascript" src="js/main.js"></script>
  </body>
</html>
