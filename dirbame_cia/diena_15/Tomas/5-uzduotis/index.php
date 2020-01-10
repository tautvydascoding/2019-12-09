<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title></title>
        <!-- search Bot'ai pvz: google neskanuos musu svetaines -->
         <meta name="robots" content="nofollow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <link rel="stylesheet" href="libs/bootstrap-4/css/bootstrap.min.css">
        <!-- !! mano CSS failas visada pats zemiausias -->
        <link rel="stylesheet" href="css/master.css">

    </head>
    <body>

      <!-- uzduotis 2: atspausdinti gydytoja i <p> </p>, kurio 'id' yra 4 -->

      <?php
      include('models/doctor-functions.php');

     $numeris = 4;
     $gydytojas = getDoctor( $numeris);
      // print_r($gydytojas);
     echo "<p>" . $gydytojas['name'] . $gydytojas['lname'] . "</p>";

      //uzduotis 3.1: atspausdinti visas gydytoju pavardes , kaip list item "ul li"


     $visiGydytojai = getDoctors();
     // print_r($visiGydytojai);  //test

      $gydytojas = mysqli_fetch_assoc($visiGydytojai);
      while($gydytojas == true) {
          echo "<ul><li><a href='doctor.php?id=$gydytojas[id]'>" . $gydytojas['lname'] . "</a></li></ul>";
          $gydytojas = mysqli_fetch_assoc($visiGydytojai);
      }
      ?>

      <!-- uzduotis 3.2: patobulinti 'uzduotis3', kad paspaudus ant gydytojo pavardes   atidarytu doctor.php faila -->
      <!-- uzduotis 3.3:
              doctor.php faile isvesti info apie - paspausta gydytoja:
              vardas pavarde numeris -->

          <!-- HINT: 'a' nuorodoje, prideti '?kintamasis=...'   ir doctor.php faile su $_GET pasiimti kintamaji -->


        <script type="text/javascript"  src="libs/bootstrap-4/js/bootstrap.min.js">      </script><script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
        <script type="text/javascript"  src="libs/jquery.min.js"> </script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js" integrity="sha384-wHAiFfRlMFy6i5SRaxvfOCifBUQy1xHdJ/yoi7FRNXMRBu5WHdZYu1hA6ZOblgut" crossorigin="anonymous"></script>
        <!-- !!! mano js failas pats zemiausias -->
        <script type="text/javascript"  src="main.js">    </script>

    </body>
</html>
