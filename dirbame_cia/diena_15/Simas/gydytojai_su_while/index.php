<?php session_start(); ?>
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
             <h1>Poliklinika</h1>
             <h2>VISI GYDYTOJAI</h2>
             <?php
               if (isset($_SESSION["message"])) {
                 echo "$_SESSION[message]";
                 unset($_SESSION["message"]);
               } elseif (isset($_SESSION["naujoGydAlert"])) {
                 echo "$_SESSION[naujoGydAlert]";
                 unset($_SESSION["naujoGydAlert"]);
               }
                require_once('models/doctor-functions.php');
                $visiGyd = getDoctors(); //cia yra MySQL objektas
                $gydytojas = mysqli_fetch_assoc($visiGyd);
                while ($gydytojas) {
                  // <a href='delete-doctor.php?id=$gydytojas[id]' class='btn btn-danger delete'>Trinti</a>

                  echo "<div class='d-flex justify-content-between'><a href='page-results.php?id=$gydytojas[id]'> $gydytojas[name] $gydytojas[lname] </a>


                  <button id='$gydytojas[id]' class='delete btn-danger'>Trinti</button>


                  <a href='update-doctor-form.php?id=$gydytojas[id]&vardas=$gydytojas[name]&pavarde=$gydytojas[lname]' class='btn btn-success '>Redaguoti</a><br></div>";
                  $gydytojas = mysqli_fetch_assoc($visiGyd);
                }
              ?>
              <a href="naujas-gydytojas-form.php" class="btn btn-info">Registruoti nauja gydytoja</a><br>
              <!-- <h4>Registracija</h4>
              <form class="" action="registracija.php" method="get">
                <input type="text" name="vardas" value="" placeholder="Vardas"><br>
                <input type="text" name="pavarde" value="" placeholder="Pavarde"><br>
                <input type="int" name="telefonas" value="" placeholder="Tel. nr."><br>
                <input type="submit" name="" value="Registruotis">
              </form> -->


              <!-- <h4>Gydytojo pasalinimas</h4>
              <form class="" action="trynimas.php" method="get">
                <input type="int" name="id" value="" placeholder="Daktaro id">
                <input type="submit" name="" value="Trinti">
              </form> -->
        </div>




        <script type="text/javascript" src="libs/jquery-3.4.1.min.js"> </script>
        <script type="text/javascript" src="libs/bootstrap/js/bootstrap.bundle.min.js"> </script>
        <!-- MANO JS pats zemiausias -->
        <script type="text/javascript" src="js/main.js"></script>

     </body>
</html>
