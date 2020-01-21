<!-- // uzduotis 2: atspausdinti gydytoja i <p> </p>, kurio 'id' yra 4
// uzduotis 3.1: atspausdinti visas gydytoju pavardes , kaip list item "ul li"
// uzduotis 3.2: patobulinti 'uzduotis3',
    kad paspaudus ant gydytojo pavardes   atidarytu doctor.php faila
// uzduotis 3.3:
        doctor.php faile isvesti info apie - paspausta gydytoja:
        vardas pavarde numeris

    HINT: 'a' nuorodoje, prideti '?kintamasis=...'   ir doctor.php faile su $_GET pasiimti kintamaji -->


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

      <p>
        <?php
        include('models/doctor-functions.php');

      $visi = getDoctors();
        $gydytojas = mysqli_fetch_assoc($visi);
          while ($gydytojas == true) {

          echo "<ul> <a href='doctor.php?id=$gydytojas[ID]' >$gydytojas[name]</a> <li> $gydytojas[lname] <br> </li></ul>";

          $gydytojas = mysqli_fetch_assoc($visi);
}

      ?>

     </p>

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
