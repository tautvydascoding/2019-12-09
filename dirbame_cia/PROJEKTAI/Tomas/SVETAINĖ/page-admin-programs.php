<?php
require_once('view/header-navigacija.php');
require_once('models/programs.php');

if(!isset($_SESSION))
    {
        session_start();
    }
 ?>
 <div class="container adminPrograms">

 <div class="row admin-h3">
   <div class="col mt-3  mb-3">
     <h3 class="programs">PROGRAMS</h3>
   </div>
 </div>


 <div class="row mb-5">
   <div class="col">

     <?php if (isset($_SESSION['delete']))
    {
    echo $_SESSION['delete'];
    unset($_SESSION['delete']); //isjungia kad nesitestu
  } ?>

 <?php
  $visosProgramos = getPrograms();
  // if(mysqli_num_rows($result)>0){}
  while ($programa = mysqli_fetch_assoc($visosProgramos)) { ?>
  <section class="page-admin-programs">
    <?php
    echo      "$programa[program_name]";
    echo      "$programa[price]";
    echo      "$programa[img] <br>";
     ?>

</section>

<?php } ?>
</div>
</div>
</div>

<?php require_once('view/footer.php'); ?>
