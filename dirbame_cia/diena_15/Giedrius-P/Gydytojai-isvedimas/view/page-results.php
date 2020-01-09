<?php session_start();
// print_r($_SESSION);
if (isset( $_SESSION['massage'] ) )   {
  echo "<script> alert('".($_SESSION['massage'])."')</script>";
  unset($_SESSION['massage']);
}
?>
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
    </head>
    <body>
        <div class="container bg-light">
             <h1>Visi Gydytojai</h1>
             <div class="row border p-2">
                 <?php
                 require_once('../models/doctor-functions.php');
                 $visiGydytojai = getDoctors();
                 while($gydytojas = mysqli_fetch_assoc($visiGydytojai)) {?>
                   <div class="col-5">
                     <label for=""><?php $i=1; $i++; ?></label>
                     <a href='page-items.php?id=<?= $gydytojas['id'] ?>'><?php echo $gydytojas['name']." ".$gydytojas['lastname']; ?></a>
                   </div>
                   <div class="col-5">
                     <a class="mt-2 mr-2 btn bg-warning" href="../models/deleteDoctor.php?id=<?= $gydytojas['id'] ?>">DELETE</a>
                     <a class="mt-2 btn bg-success" href="editdoctor.php?id=<?= $gydytojas['id'] ?>">EDIT</a>
                   </div>
                   <hr>
                 <?php } ?>
           </div>
           <br>
             <div class="border p-2">
               <label for="">Sukurti nauja gydytoja:</label>
               <a class="btn border" href="newDoctor.php">New Doctor</a>
             </div>
        </div>




        <script type="text/javascript" src="../libs/jquery-3.4.1.min.js"> </script>
        <script type="text/javascript" src="../libs/bootstrap/js/bootstrap.bundle.min.js"> </script>
        <!-- MANO JS pats zemiausias -->
        <script type="text/javascript" src="../js/main.js"></script>

     </body>
</html>
