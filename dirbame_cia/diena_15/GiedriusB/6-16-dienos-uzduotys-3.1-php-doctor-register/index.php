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
        <div class="container  bg-light p-5">
             <a class="btn btn-dark" href='registracija.php'>Kurti nauja gydytoja</a>
             <a class="btn btn-dark" href="trintiGydytoja.php?id=39">Trinti gydytoja</a>
        </div>
        <div class="container p-5 bg-dark text-light">
          <?php
            include('doctor-functions.php');
            $daktarai = getDoctors();
            $gydytojas = mysqli_fetch_assoc($daktarai);
            while ($gydytojas) {
              // print_r($gydytojas);
            ?>
            <div class="row">
              <div class="col-6">
                <a href="doctors.php?x=<?php echo $gydytojas['id']?>"> <?php echo "$gydytojas[name] $gydytojas[lname] <br>";?> </a>
              </div>
              <div class="col-6">
                <a class="btn btn-outline-light" href="trintiGydytoja.php?x=<?php echo $gydytojas['id']?>">DELETE</a>
                <a class="btn btn-outline-light" href="editGyd.php?x=<?php echo $gydytojas['id']?>">EDIT</a>

              </div>
            </div>

            <?php
              $gydytojas = mysqli_fetch_assoc($daktarai);
            }

           ?>
        </div>
        <script type="text/javascript" src="libs/jquery-3.4.1.min.js"> </script>
        <script type="text/javascript" src="libs/bootstrap/js/bootstrap.bundle.min.js"> </script>
        <!-- MANO JS pats zemiausias -->
        <script type="text/javascript" src="js/main.js"></script>

     </body>
</html>
