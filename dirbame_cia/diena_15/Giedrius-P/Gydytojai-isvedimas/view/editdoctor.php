<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title></title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <link rel="stylesheet" href="../css/normalize.css">

        <link rel="stylesheet" href="../libs/bootstrap/css/bootstrap.min.css">

        <!-- MANO CSS visada pats zemiausias!!! -->
        <link rel="stylesheet" href="../css/style.css">
        <?php include_once('../models/doctor-functions.php');
        $gydytojas = getDocter( $_GET['id']);
        ?>
    </head>
    <body>
        <div class="container  bg-light">
             <h1>Redaguoti Daktara:</h1>
             <div class="row d-flex">
             <form class="col-4" action="../models/editdoctor-function.php" method="post">
               <input style="width: 100%" type="text" name="vardas" value="<?php echo ($gydytojas['name']) ?>" placeholder="Iveskite varda">
               <input style="width: 100%" type="text" name="pavarde" value="<?php echo ($gydytojas['lastname']) ?>" placeholder="Iveskite Pavarde">
               <input type="hidden" name="id" value="<?php echo $gydytojas['id'] ?>">
               <div class="mt-2 d-flex justify-content-end">
                 <button type="submit" name="">Redaguoti</button>
               </div>
             </form>
           </div>
        </div>




        <script type="text/javascript" src="../libs/jquery-3.4.1.min.js"> </script>
        <script type="text/javascript" src="../libs/bootstrap/js/bootstrap.bundle.min.js"> </script>
        <!-- MANO JS pats zemiausias -->
        <script type="text/javascript" src="../js/main.js"></script>

     </body>
</html>
