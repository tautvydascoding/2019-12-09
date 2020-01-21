<?php
require_once('view/header-navigacija.php');
require_once('models/questions.php');
 ?>

 <div class="container admin-questions">

 <div class="row admin-h3">
   <div class="col mt-3  mb-3">
     <h4>QUESTIONNAIRE</h4>
   </div>
 </div>


 <div class="row mb-5">
   <div class="col">

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

</section>

<?php } ?>
</div>
</div>
</div>

<?php require_once('view/footer.php'); ?>

<form class="" action="index.html" method="post">
  <input type="text" name="" value="">

</form>
