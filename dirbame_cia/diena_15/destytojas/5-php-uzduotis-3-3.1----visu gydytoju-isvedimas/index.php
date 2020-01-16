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

<?php
include('models/doctor-functions.php');
$visiGydytojai = getDoctors();
// print_r($visiGydytojai); // test

$gydytojas = mysqli_fetch_assoc($visiGydytojai);
while ($gydytojas == true) {
    // print_r($gydytojas); // test
    echo "<a href='doctor.php?aa=88'>   $gydytojas[name]   $gydytojas[lname]</a><br>";
    $gydytojas = mysqli_fetch_assoc($visiGydytojai);
}
 ?>
        </div>




        <script type="text/javascript" src="libs/jquery-3.4.1.min.js"> </script>
        <script type="text/javascript" src="libs/bootstrap/js/bootstrap.bundle.min.js"> </script>
        <!-- MANO JS pats zemiausias -->
        <script type="text/javascript" src="js/main.js"></script>

     </body>
</html>
