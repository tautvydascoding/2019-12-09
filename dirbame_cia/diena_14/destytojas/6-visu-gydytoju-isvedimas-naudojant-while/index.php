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

             <h2>Visi gydytojai</h2>

             <?php
                 require_once('models/doctor-functions.php');

                 $visiGyd = getDoctors(); //    MYSQL objektas

                 // is surastu visu gyd. paimame viena (pati pirma)
                 $gydytojas = mysqli_fetch_assoc($visiGyd);
                 while ($gydytojas) {
                     echo "$gydytojas[name]  $gydytojas[lname]  <br>";
                     // paimam sekanti gydytoja,  kai gydytojai baigsis
                     // - gausime NULL ir while ciklas nustos veikti
                     $gydytojas = mysqli_fetch_assoc($visiGyd);
                 }

              ?>

 
        </div>




        <script type="text/javascript" src="libs/jquery-3.4.1.min.js"> </script>
        <script type="text/javascript" src="libs/bootstrap/js/bootstrap.bundle.min.js"> </script>
        <!-- MANO JS pats zemiausias -->
        <script type="text/javascript" src="js/main.js"></script>

     </body>
</html>
