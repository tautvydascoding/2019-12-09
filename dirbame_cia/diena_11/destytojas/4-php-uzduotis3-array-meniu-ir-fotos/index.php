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

        </div>

<?php
    // tuscio masyvo sukurimas
    $meniu = [];
    $meniu = array(); // senovinis budas

    // uzpildyto masyvo sukurimas
    $meniu = ['home', 'about', 'gallery', 'contact'];
    $meniu = array('home', 'about', 'gallery', 'contact'); // senovinis budas

    echo "<nav>";
    for ($i=0; $i < count($meniu); $i++) {
        echo "<li>   $meniu[$i]  </li>";
    }
    echo "</nav>";


    $nuotraukos = ['1.jpg','2.jpg','3.jpg','4.jpg'];

 ?>
 <img src='img/1.jpg' alt=''  />
 <!-- ARBA -->
 <img src='img/<?php   echo $nuotraukos[0]; ?>' alt=''  />

<div class="row">
        <?php
        for ($i=0; $i < count($nuotraukos); $i++) {
            echo "<div  class='col-4'>
                    <img  class='img-fluid' src='img/$nuotraukos[$i]' alt=''  />
                 </div>";
        }
    ?>
</div>

<?php
// arba
// for ($i=0; $i < count($nuotraukos); $i++) :   ?>
//      <img  src='img/<?php   echo $nuotraukos[$i]; ?>' alt=''  />
//      <img src='img/<?php   echo $nuotraukos[$i]; ?>' alt=''  />
//      <img src='img/<?php   echo $nuotraukos[$i]; ?>' alt=''  />
//      <img src='img/<?php   echo $nuotraukos[$i]; ?>' alt=''  />
  <?php // endfor;  ?>

<?php
    $x = 16;
    if ( $x < 10) :
        echo "pamatysim ";
    elseif( $x > 50) :
        echo "niekada pamatysim1";
    else :
        echo "niekada pamatysim2";
    endif;

    while (false) :
        # code...
    endwhile;
 ?>









        <script type="text/javascript" src="libs/jquery-3.4.1.min.js"> </script>
        <script type="text/javascript" src="libs/bootstrap/js/bootstrap.bundle.min.js"> </script>
        <!-- MANO JS pats zemiausias -->
        <script type="text/javascript" src="js/main.js"></script>

     </body>
</html>
