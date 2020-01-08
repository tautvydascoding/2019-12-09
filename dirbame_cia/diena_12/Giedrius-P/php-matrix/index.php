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
        <div class="container row">
          <!-- // UZDUOTIS 1.0
          // A. sukurti masyva darbuotojas1: Jonas, Jonaitis, 1980, Inspektorius
          // B. sukurti masyva darbuotojas2: Ona, Onute, 1980, sekretore
          // C. sukurti masyva darbuotojas3: Kestas, Kerta, 2001, pavaduotojas
          // D. sukurti masyva 'visiDarbuotojai'
          // E.   i masyva 'visiDarbuotojai'  ideti visus dartuotoju masyvus
          // UZDUOTIS 1.1
          // isvesti visa informacija apie pirma darbuotoja (naudojant FOR cikla)
          // UZDUOTIS 1.2
          // isvesti visu  darbuotoju tik vardus (naudojant FOR cikla)
          // UZDUOTIS 1.3
          // isvesti visa informacija apie kiekviena  darbuotoja  (naudojant VIENA FOR cikla)
          // UZDUOTIS 1.4
          // isvesti visa informacija apie kiekviena  darbuotoja  (naudojant DU FOR ciklus)
      -->

      <?php
       $darbuotojas1 = ['Jonas', 'Jonaistis', 1980, 'Inspektorius'];
       $darbuotojas2 = ['Ona', 'Onute', 1980, 'sekretore'];
       $darbuotojas3 = ['Kestas', 'Kerta', 2001, 'pavaduotojas'];

       $visimasyvai = [$darbuotojas1, $darbuotojas2, $darbuotojas3];
      print_r($visimasyvai);

      for ($x=0; $x < 1 ; $x++) {
        for ($y=0; $y < count($visimasyvai[$x]) ; $y++) {
          echo $visimasyvai[$x][$y]."<br>";
        }
      };

      for ($x=0; $x < count($visimasyvai) ; $x++) {
        for ($y=0; $y < 1; $y++) {
          echo $visimasyvai[$x][$y]."<br>";
        }
      }

      for ($x=0; $x < count($visimasyvai) ; $x++) {
        print_r($visimasyvai[$x]);
      }

      for ($x=0; $x < count($visimasyvai) ; $x++) {
        for ($y=0; $y < count($visimasyvai[$x]); $y++) {
          echo $visimasyvai[$x][$y]."<br>";
        }
      }


      // // UZDUOTIS 2 --------------
      // // sukurti matrica, kurioje bus saugoma kiekvienos prekes info:
      // // Antraste, img pavadinimas, kaina, prekes aprasymas
      //
      // // A. sukurti masyva preke: Antraste, img pavadinimas, prekes aprasymas, kaina
      // // B. i masyva visosPrekes, ideti "preke" masyva
      // // C. atvaizduodi kiekvienoje eiluteje po 3 prekes (naudojant for arba foreach)
      // // ir bootstrap dizaina
      // <article clas='col-...'>
      //     <h2> ...
      //     <img>
      //     <p>...
      //     <button> ...
      //     <a class="btn btn-lg  bg-info"> </a>
      // </article>
      //
      //
      //    // 3 budai nuotraukoms
      //     // printf("<img src='./img/" . $visosPrekes[$i][1] . "' width='200px;' alt=''  />");
      //     // printf("<img src='./img/%s' width='200px;' alt=''  />", $visosPrekes[$i][1]);



        
       ?>





        <script type="text/javascript" src="libs/jquery-3.4.1.min.js"> </script>
        <script type="text/javascript" src="libs/bootstrap/js/bootstrap.bundle.min.js"> </script>
        <!-- MANO JS pats zemiausias -->
        <script type="text/javascript" src="js/main.js"></script>

     </body>
</html>
