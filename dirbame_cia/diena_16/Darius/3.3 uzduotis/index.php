<!-- // // createDoctor() paleidimas per narsykle
//
// // 1.1 sukurti PHP faila  naujasGydytojas.php
// // 1.2. faile paleisti:
// include('db_functions.php');
// createDoctor("Juozas", "Juozaitis");
// // 1.3. Narsykleje nueiti:
//     localhost/ ... /naujasGydytojas.php
//
//
// deleteDoctor() paleidimas per narsykle
// // 2.1. sukurti PHP faila  trintiGydytoja.php
// // 2.2. faile paleisti:
// include('db_functions.php');
// deleteDoctor(4);
// // 2.3. Narsykleje nueiti:
//     localhost/ ... /trintiGydytoja.php -->


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
             <h1></h1>

             <!-- <a href="controlers/printGydytojas.php">Registracija</a> -->
             <?php

                include_once('models/doctor-functions.php');
                // test
                $visiGydytojai = getDoctors(); // MYSQL objektas
                // // print_r( $visiGydytojai ) ;

                //visu gydytoju isvedimas
                $gyd = mysqli_fetch_assoc($visiGydytojai); // is visu paimame viena
                while ($gyd) {  // false, 0, NULL, ''
                    echo $gyd['name'] . " " . $gyd['lname'] ;
                    ?>
                    <a class="btn bg-danger" href='controlers/deleteGydytojas.php?nr=<?php echo $gyd['id']?>'> Istrinti</a> <br>

                    <?php
                    // is visu paimame sekanti gydytoja
                    $gyd = mysqli_fetch_assoc($visiGydytojai);
                }
              ?>
        </div>

        <script type="text/javascript" src="libs/jquery-3.4.1.min.js"> </script>
        <script type="text/javascript" src="libs/bootstrap/js/bootstrap.bundle.min.js"> </script>
        <!-- MANO JS pats zemiausias -->
        <script type="text/javascript" src="js/main.js"></script>

     </body>
</html>
