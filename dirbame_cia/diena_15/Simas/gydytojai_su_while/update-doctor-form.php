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
             <h1>Redagavimas</h1>
             <form class="" action="update-doctor.php" method="get">
               <?php
                  $vardas = $_GET['vardas'];
                  $pavarde = $_GET['pavarde'];
                  $nr = $_GET['id'];
                  echo "<h2>$vardas $pavarde</h2>";
                  echo "<h4>Pakeiskite varda</h4>";
                  echo "<input type='text' name='vardas' value='$vardas'><br>";
                  echo "<h4>Pakeiskite pavarde</h4>";
                  echo "<input type='text' name='pavarde' value='$pavarde'><br>";
                  echo "<input type='hidden' name='id' value='$nr'>";
                  echo "<input type='submit' name='' value='Pakeisti'>";
                ?>
             </form>


        </div>




        <script type="text/javascript" src="libs/jquery-3.4.1.min.js"> </script>
        <script type="text/javascript" src="libs/bootstrap/js/bootstrap.bundle.min.js"> </script>
        <!-- MANO JS pats zemiausias -->
        <script type="text/javascript" src="js/main.js"></script>

     </body>
</html>
