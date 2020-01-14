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
             <h1 class="bg-light"> Doctors DB taikymas </h1>


              <?php

              require_once('models/doc-functions.php');


              $numeris = 4;

              $gydytojas = getDoctor($numeris);

              // echo $gydytojas[1] .  $gydytojas[2]; <-- duoda error kad nera stalciaus tokiu pavadinimu

              echo "<p>" . $gydytojas['name'] . " " .$gydytojas['lname'] . "</p> <br />";




              while ($doctors = mysqli_fetch_assoc($visiGydytojai)) {
                $nr = $doctors['id'];// butinai ieskot $doctors or ne $gydytojas !!!
                echo "<ul>
                 <li> <a href='doctor.php?id=$nr'>". $doctors['lname'] . "</a></li>
                </ul>";
              }




               ?>






        </div>



        <!-- // uzduotis 2: atspausdinti gydytoja i <p> </p>, kurio 'id' yra 4
        // uzduotis 3.1: atspausdinti visas gydytoju pavardes , kaip list item "ul li"
        // uzduotis 3.2: patobulinti 'uzduotis3',
            kad paspaudus ant gydytojo pavardes   atidarytu doctor.php faila
        // uzduotis 3.3:
                doctor.php faile isvesti info apie - paspausta gydytoja:
                vardas pavarde numeris

            HINT: 'a' nuorodoje, prideti '?kintamasis=...'   ir doctor.php faile su $_GET pasiimti kintamaji -->





        <script type="text/javascript" src="libs/jquery-3.4.1.min.js"> </script>
        <script type="text/javascript" src="libs/bootstrap/js/bootstrap.bundle.min.js"> </script>
        <!-- MANO JS pats zemiausias -->
        <script type="text/javascript" src="js/main.js"></script>

     </body>
</html>
