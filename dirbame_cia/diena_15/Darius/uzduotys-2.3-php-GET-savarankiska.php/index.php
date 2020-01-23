


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

      <!-- // 1. sukurti tuscia porjekta (default)

      // 2. doctor.php faile parasyti PHP koda:
          $numeris = $_GET['nr'];
          $gydytojas = getDoctors( $numeris);
          echo $gydytojas[1] .  $gydytojas[2] ;
          echo $gydytojas["name"] .  $gydytojas['lname'] ;

      // 3. pasileisti Narsykleje si puslapi (doctor.php ne index.php, Narsykles adreso ivedimo lange (paciam gale) prirasyti : doctor.php)
      // 3.1 istaisyti klaida: function 'getDoctors' not found
      // 3.1.1 isideti i projekta - faila: db_functions.php
      // 3.1.2  i  faila  doctor.php parasyti:
      include('db_functions.php');
      // 3.1.3 Narsykles adreso ivedimo lange (paciam gale) prirasyti :
          doctor.php?nr=4

      // 4. Narsykles adrese  pakeisti ?nr=3
      // 4. Narsykles adrese  pakeisti ?nr=2
      // ir paziureti kas bus -->


      <?php

      include('models/doctor-functions.php');

          $numeris = $_GET['nmr'];
      $gydytojas = getDoctor($numeris);

      //echo $gydytojas[8] .  $gydytojas[10] ;
      echo $gydytojas["name"] .  $gydytojas['lname'];

       ?>


        <script type="text/javascript" src="libs/jquery-3.4.1.min.js"> </script>
        <script type="text/javascript" src="libs/bootstrap/js/bootstrap.bundle.min.js"> </script>
        <!-- MANO JS pats zemiausias -->
        <script type="text/javascript" src="js/main.js"></script>

     </body>
</html>


<!-- // 1. sukurti index.php
// 2. parasyti PHP koda:
    $x = $_GET['tekstas'];
    echo $x;
// 3. pasileisti Narsykleje si puslapi
// 3.1 Narsykles adreso ivedimo lange (paciam gale) prirasyti :
    ?tekstas=Mano ivestas tekstas

// 4. Narsykleje  pakeisti zodi "tekstas" i koki nors kitoki
// 4.1 istaisyti klaidas index.php faile -->
