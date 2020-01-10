<?php

// // 1. sukurti index.php
// // 2. parasyti PHP koda:
    $x = $_GET['tekstas'];
    if (isset($x)) {
  echo "Mano tekstas: $x.<br>";
}else {
    echo "Nėra įvesto teksto!<br>";
}


// // 3. pasileisti Narsykleje si puslapi
// // 3.1 Narsykles adreso ivedimo lange (paciam gale) prirasyti :
//     ?tekstas=Mano ivestas tekstas
//
// // 4. Narsykleje  pakeisti zodi "tekstas" i koki nors kitoki
// // 4.1 istaisyti klaidas index.php faile

 ?>

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
            <div class="col-6">
                <h1>Registracija</h1>
                <form action="registracija.php" method="get">
                     <div class="form-group">
                           <input type="text" class="form-control" name="name" placeholder="Name" required>
                     </div>
                     <div class="form-group">
                           <input type="text" class="form-control" name="lastname" placeholder="Lastname">
                     </div>
                     <div class="form-group">
                           <input type="text" class="form-control" name="phone" placeholder="+370 000000">
                     </div>
                     <button type="submit" class="btn btn-primary">Registruotis</button>
                 </form>
            </div>

        </div>




        <script type="text/javascript" src="libs/jquery-3.4.1.min.js"> </script>
        <script type="text/javascript" src="libs/bootstrap/js/bootstrap.bundle.min.js"> </script>
        <!-- MANO JS pats zemiausias -->
        <script type="text/javascript" src="js/main.js"></script>

     </body>
</html>
