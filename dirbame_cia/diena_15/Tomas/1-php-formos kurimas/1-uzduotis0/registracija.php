<html>
<body>

  <!-- 3. registracija.php faile pasinaudojant globaliu PHP masyvu $_GET atspausdinti vartotojo ivestu duomenis
  pvz.:
  print_r( $_GET); -->

<!-- testuojam ar turime duomenis is formos -->
      <?php
      //print_r($_GET);
      ?>
      <!-- ========= -->



      <?php
      echo "Sveikinu sekmingai uzsiregistravus!!!" . "<br>";
      echo "Sveiki: " . $_GET["vardas"] . "<br>";
      ?>

        Jusu vardas: <?php echo $_GET["vardas"]; ?><br>
        Jusu Pavardė: <?php echo $_GET["pavarde"]; ?><br>
        Jusu Telefonas: <?php echo $_GET["telefonas"]; ?><br>

</body>
</html>
