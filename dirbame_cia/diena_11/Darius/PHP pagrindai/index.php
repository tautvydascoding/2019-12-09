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
             <h1>PHP</h1>
             <?php


             $masyvas = ['home', 'about', 'gallery', 'contact', 'blog'];
echo "<nav>"
 for ($i=0; $i < count($masyvas); $i++) {
   echo "<li> $masyvas[$i]; </li>";
 }

echo "</nav>"
              ?>
        </div>

        <!-- pvz: include('header.php');

        Susikurti 4 failus:

        header.php
        main.php
        footer.php
        index.php -->


        <script type="text/javascript" src="libs/jquery-3.4.1.min.js"> </script>
        <script type="text/javascript" src="libs/bootstrap/js/bootstrap.bundle.min.js"> </script>
        <!-- MANO JS pats zemiausias -->
        <script type="text/javascript" src="js/main.js"></script>

     </body>
</html>

<!-- // uzduotis 1
// A. susikurti meniu masyva: home, about, gallery, contact, blog
// B. atspausdinti visus meniu punktus i HTML (su html tag'ais)


// uzduotis 2
// A. susirasti 6 nuotraukas
// B. susikurti nuotrauku TIK pavadinimu masyva
// C. atspausdinti visas nuotraukas su ciklu, po 3-ris i eilute
// <img src='./img/1.jpg' alt=''  />
// <img src='./img/2.jpg' alt=''  />
// <img src='./img/3.jpg' alt=''  />
// <img src='./img/4.jpg' alt=''  /> -->
