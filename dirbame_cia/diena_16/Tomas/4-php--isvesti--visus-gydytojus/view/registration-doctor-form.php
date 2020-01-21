<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title></title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <link rel="stylesheet" href="css/normalize.css">

        <link rel="stylesheet" href="libs/bootstrap/css/bootstrap.min.css">

        <!-- MANO CSS visada pats zemiausias!!! -->
        <link rel="stylesheet" href="css/style.css">
    </head>
    <body>

      <h1>Gydytoju registracija</h1>

      <form action="../controler/registracija.php" method="get">
          <input type="text" name="vardas" placeholder="Jusu vardas">
          <input type="text" name="pavarde" placeholder="Jusu pavarde">
          <button class="btn btn-primary" type="submit">Registruotis</button>
      </form>

      <!-- <a class="btn btn bg-success" href='controler/naujasGydytojas.php?vardas=Tomas&pavarde=Sakalauskas'>Kurti Nauja Gydytoja</a>
      <a class="btn btn bg-danger" href='controler/trintiGydytoja.php?nr=5'>Trinti Gydytoja</a> -->






        <script type="text/javascript" src="libs/jquery-3.4.1.min.js"> </script>
        <script type="text/javascript" src="libs/bootstrap/js/bootstrap.bundle.min.js"> </script>
        <!-- MANO JS pats zemiausias -->
        <script type="text/javascript" src="js/main.js"></script>

     </body>
</html>
