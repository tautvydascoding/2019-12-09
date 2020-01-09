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
             <h1>Visi <?php echo $_GET['x']; ?></h1>
             <?php
             require_once('models/doctor-functions.php');
             $visiGydytojai = getDoctors();
             while($gydytojas = mysqli_fetch_assoc($visiGydytojai)) {?>
               <a href='page-items.php?id=<?= $gydytojas['id'] ?>'><?php echo $gydytojas['name']." ".$gydytojas['lastname']; ?></a>
               <br>
             <?php } ?>
        </div>




        <script type="text/javascript" src="libs/jquery-3.4.1.min.js"> </script>
        <script type="text/javascript" src="libs/bootstrap/js/bootstrap.bundle.min.js"> </script>
        <!-- MANO JS pats zemiausias -->
        <script type="text/javascript" src="js/main.js"></script>

     </body>
</html>
