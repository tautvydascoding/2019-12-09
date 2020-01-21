<?php include('header.php');  ?>





<div class="maindiv">
  <!--HTML Form -->
  <div class="form_div row ">
    <div class="col-12 title">
      <h2 ></h2>
    </div>
    <form action="controlers/insert.php" method="get">
      <!-- Method can be set as POST for hiding values in URL-->
      <h2>Prekių įtraukimo forma</h2>
      <label>Pavadinimas:</label>
      <input class="input" name="goods_name" type="text" value="">
      <label>Kaina, EUR:</label>
      <input class="input" name="price" type="text" value="">
      <label>Nuolaida:</label>
      <input class="input" name="discount" type="text" value="">
      <label>Pozicija:</label>
      <input class="input" name="position" type="text" value="">
      <label>Kiekis, vnt:</label>
      <input class="input" name="amount" type="text" value="">

      <br>
      <input class="submit" method="get" name="iterpti" type="submit" value="Iterpti prekes">
      <input class="submit" method="" name="nunulinti" type="reset" value="Reset">
    </form>
    <form class="" action="controlers/display.php" method="post">
      <h2>Prekių išvedimas</h2>
      <input class="submit" method="get" name="isvesti" type="submit" value="Išvesti prekių lentelę:">

    </form>
<form class="" action="controlers/display2.php" method="post">
  <input class="submit" method="get" name="isvesti2" type="submit" value="Išvesti prekių lentelę su nuotraukomis:">
  </form>

  </div>
</div>
<?php include('footer.php'); ?>
