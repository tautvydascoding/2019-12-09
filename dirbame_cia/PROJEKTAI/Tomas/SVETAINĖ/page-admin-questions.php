<?php
require_once('view/header-navigacija.php');
require_once('models/questions.php');

if(!isset($_SESSION)) //cia kaip echo
    {
        session_start();
    }
 ?>
 <div class="con
 tainer admin-questions">

 <div class="row admin-h3">
   <div class="col mt-3  mb-3">
     <h3>QUESTIONS</h3>
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

  $visiKlausimai = getQuestions();
  // if(mysqli_num_rows($result)>0){}
  while ($klausimas = mysqli_fetch_assoc($visiKlausimai)) { ?>
  <section class="page-admin-questions">
  <h5 class="mt-2 ml-5 "> <?php echo $klausimas['question']; ?></h5>

  <p class="mt-2 ml-5 "> <?php echo $klausimas['answer1'] ; ?></p>
  <p class="mt-2 ml-5 "> <?php echo $klausimas['answer2']; ?></p>
  <p class="mt-2 ml-5 "> <?php echo $klausimas['answer3']; ?></p>
  <p class="mt-2 ml-5 "> <?php echo $klausimas['answer4']; ?></p>
  <p class="mt-2 ml-5 "> <?php echo $klausimas['answer5']; ?></p>
  <?php  echo "<a href='controlers/delete-question.php?id=$klausimas[id] ' class='btn bg-danger del-btn ml-5' > DELETE </a>"?>
  <?php  echo  "<a href='update-page.php?id=$klausimas[id]' class='btn bg-success del-btn '>UPDATE</a> <br />"?>
</section>

<?php } ?>
</div>
</div>
</div>

<?php require_once('view/footer.php'); ?>
