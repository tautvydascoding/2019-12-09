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
      include('doctor-functions.php');
      $gydytojas = getDoctor($_GET['x']);
         ?>
        <div class="container bg-light p-5">
          <form class="" action="redaguotiGydytoja.php?" method="get">
            <input type="hidden" name="id" value="<?php echo $gydytojas['id'] ?>">
            <input type="text" name="name" value="<?php echo $gydytojas['name'] ?>" placeholder="Vardas">
            <input type="text" name="lname" value="<?php echo $gydytojas['lname'] ?>" placeholder="Pavarde">
            <button type="submit" name="button">Redaguoti</button>
          </form>
        </div>


        <script type="text/javascript" src="libs/jquery-3.4.1.min.js"> </script>
        <script type="text/javascript" src="libs/bootstrap/js/bootstrap.bundle.min.js"> </script>
        <!-- MANO JS pats zemiausias -->
        <script type="text/javascript" src="js/main.js"></script>

     </body>
</html>
