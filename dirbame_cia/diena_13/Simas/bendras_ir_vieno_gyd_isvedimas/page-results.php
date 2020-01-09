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

             <?php
             echo "<h1>" . $_GET['x'] . "</h1>";
             require_once('Models/' . $_GET['x'] . '-functions.php');
                if ($_GET['x'] == "doctor") {
                  for ($i=0; $i < 6; $i++) {
                    $gydytojas = getDoctor($i);
                    echo "<a href='page-item.php?x=doctor&id=$i'>" . $gydytojas['name'] . " " . $gydytojas['lname'] . "</a>";
                    echo "<br>";
                  }
                } elseif ($_GET['x'] == "patients") {
                  for ($i=1; $i < 9; $i++) {
                    $pacientas = getPatient($i);
                    echo "<a href='page-item.php?x=patients&id=$i'>" . $pacientas['name'] . " " . $pacientas['lname'] . "</a>";
                    echo "<br>";
                  }
                }
              ?>
        </div>




        <script type="text/javascript" src="libs/jquery-3.4.1.min.js"> </script>
        <script type="text/javascript" src="libs/bootstrap/js/bootstrap.bundle.min.js"> </script>
        <!-- MANO JS pats zemiausias -->
        <script type="text/javascript" src="js/main.js"></script>

     </body>
</html>
