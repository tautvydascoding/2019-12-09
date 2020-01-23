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
      <!-- uzduotis 2 -->
      <?php
      require_once('doctor-functions.php');
      $numeris = 4;
      $gydytojas = getDoctor($numeris);
      // print_r ($gydytojas);
      // echo $gydytojas[1] .  $gydytojas[2] ;
      echo "<p>".$gydytojas["name"] . " " . $gydytojas['lname']."</p>" ;
       echo "<hr />";
       ?>
       <!-- uzduotis 3.2 -->
       <ul>


       <?php
       require_once('doctor-functions.php');
       $visiGyd = getDoctors(); //mySQL objektas
       //is visu gydytoju paimame viena (pati pirma)
       $gydytojas = mysqli_fetch_assoc($visiGyd);
       while($gydytojas){
         echo "<li><a href='doctors.php?x=".$gydytojas['id']."'> $gydytojas[name] $gydytojas[lname] </li><br />";
         //paimam sekanti gydytoja
         $gydytojas = mysqli_fetch_assoc($visiGyd);
       }
       ?>
       </ul>
        <script type="text/javascript" src="libs/jquery-3.4.1.min.js"> </script>
        <script type="text/javascript" src="libs/bootstrap/js/bootstrap.bundle.min.js"> </script>
        <!-- MANO JS pats zemiausias -->
        <script type="text/javascript" src="js/main.js"></script>
<a href="#"></a>
     </body>
</html>
