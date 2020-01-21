<?php include('header.php');  ?>





<div class="maindiv">
  <!--HTML Form -->
  <div class="form_div row ">
    <div class="col-12 title">
      <h2 ></h2>
    </div>
    <form action="controlers/login2.php" method="get">
      <!-- Method can be set as POST for hiding values in URL-->
      <h2>Prekių įtraukimo forma</h2>
      <label>Vardas:</label>
      <input class="input" name="vardas" type="text" value="">
      <label>El_pastas:</label>
      <input class="input" name="el_pastas" type="text" value="">
      <label>Slaptazodis:</label>
      <input class="input" name="slaptazodis" type="text" value="">

      <br>
      <input class="submit" method="get" name="login" type="submit" value="Login">
      <input class="submit" method="" name="nunulinti" type="reset" value="Reset">
    </form>

  </div>
</div>
<?php include('footer.php'); ?>
