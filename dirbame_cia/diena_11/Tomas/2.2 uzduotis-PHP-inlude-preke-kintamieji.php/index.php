<!DOCTYPE html>
<html>
    <head>
    </head>
    <body>

      <?php
      // kintamieji:
      $kaina = 299;
      $antraste = "Dviratis";
      $aprasymas = "melynas dviratis";
       ?>

       <div class="container-fluid">

         <h1>Prekes</h1>

        <div class="row">
         <?php
          for ($i=0; $i < 6; $i++) {
            include('template-preke.php');
          }
          ?>
        </div>
       </div>
