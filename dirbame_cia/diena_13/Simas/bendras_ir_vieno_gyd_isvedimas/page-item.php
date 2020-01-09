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
                  $gyd = getDoctor($_GET['id']);
                  echo "<h2>" . $gyd['name'] . " " . $gyd['lname'] . "</h2>";
                } elseif ($_GET['x'] == "patients") {
                  $pac = getPatient($_GET['id']);
                  $priskirtasDaktaras = innerJoin($_GET['id']);
                  echo "<h2>" . $pac['name'] . " " . $pac['lname'] . "</h2>";
                  echo "<h6>Priskirtas daktaras: <a href='page-item.php?x=doctor&id=" . $priskirtasDaktaras['id'] . "'>" . $priskirtasDaktaras['name'] . " " . $priskirtasDaktaras['lname'] . "</a></h6><hr>";

                }
              ?>
        </div>




        <script type="text/javascript" src="libs/jquery-3.4.1.min.js"> </script>
        <script type="text/javascript" src="libs/bootstrap/js/bootstrap.bundle.min.js"> </script>
        <!-- MANO JS pats zemiausias -->
        <script type="text/javascript" src="js/main.js"></script>

     </body>
</html>
