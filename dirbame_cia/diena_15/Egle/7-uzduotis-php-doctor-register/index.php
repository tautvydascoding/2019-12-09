<?php
// session_start()

?>

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
             <h1 class="bg-info"> Naujas Gydytojas</h1>


             <a href="naujas-gydytojas.php?vard=TOMAS&parv=TOMAUSKIs"> <button type="submit" name="button" class="btn bg-success mb-5 mt-5"> Naujas Gyddytojas </button> </a>
             <br />

             <a href="trintiGydytoja.php?id=5"> <button type="submit" name="button" class="btn bg-warning mb-5"> Istrinti Gydytoja </button> </a>


             <div class="row">
               <form class="col-8" action="registracija.php" method="GET">
                 <input type="text" name="vardas" value="" placeholder="vardas" class="mb-3"> <br />
                 <input type="text" name="pavarde" value="" placeholder="pavarde" class="mb-3"><br />
                 <input type="submit" name="registruotis" value="Registruotis" class="btn bg-success" class="mb-3"><br />
               </form>

             </div>

             <?php
              // echo $_SESSION["a"];
              ?>












        </div>




        <script type="text/javascript" src="libs/jquery-3.4.1.min.js"> </script>
        <script type="text/javascript" src="libs/bootstrap/js/bootstrap.bundle.min.js"> </script>
        <!-- MANO JS pats zemiausias -->
        <script type="text/javascript" src="js/main.js"></script>

     </body>
</html>
