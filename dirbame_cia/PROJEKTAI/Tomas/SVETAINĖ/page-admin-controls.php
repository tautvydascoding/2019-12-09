<?php
require_once('view/header-navigacija.php');
// require_once('models/all.php');
require_once('models/authen_login.php');

if(!isset($_SESSION))
    {
        session_start();
    }

if ($_SESSION['success'] == true){


 ?>

 <section class=" container adminControls">

   <h3>ADMIN CONTROLS</h3>

   <div class="">
     <a href="page-admin-questions.php">
       <button type="button" name="button">questions</button>
     </a>
     <a href="page-admin-answers.php">
       <button type="button" name="button">answers</button>
     </a>
     <a href="page-admin-programs.php">
       <button type="button" name="button">programs</button>
     </a>
   </div>
 </section>

<?php } else{
  header("Location: page-admin-login.php"); //kur mane numes
} ?>

<?php require_once('view/footer.php'); ?>
