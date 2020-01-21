<?php  require_once('view/header-navigacija.php'); ?>

<section class="container adminLogin">
  <div class="">
   <h3>ADMIN LOGIN</h3>

    <!-- ======FORMA===== -->
      <form action="models/authen_login.php" method="post"> <!-- action - nurodo i kur siusti ivestus formos duomenis -->
       User Name: <input class="admin" type="text" name="admin_id"><br>
       Password: <input class="pass" type="password" name="admin_pass"><br>

       <!-- =======BUTTONS===== -->
      <input class="orange1" type="submit" value="Submit"/>
      <input class="orange2" type="reset" value="Reset"/>

      </form>
    </div>
  </section>

  <?php require_once('view/footer.php'); ?>
