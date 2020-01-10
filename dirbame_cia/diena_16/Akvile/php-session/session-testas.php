
<?php
   session_start();



   // if( isset( $_SESSION['counter'] ) ) {
   //    $_SESSION['counter'] += 1;
   // }else {
   //    $_SESSION['counter'] = 1;
   // }
   //
   // $msg = "You have visited this page ".  $_SESSION['counter'] . " time in this session.";

   if(isset($_POST['name']) && isset($_POST['password'])) {

       if (($_POST['name'] == "Jonas") && ($_POST['password'] == "slaptazodis")) {
           
           $_SESSION['name'] = "Jonas";
           $_SESSION['password'] = "slaptazodis";
           header ("Location: after-login.php");
       } else {
           $login_error = "Prisijungti nepavyko!";
       }
   }
