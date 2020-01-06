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
        <div class="container row">
          <div class="col">
            <ul>
              <?php
              $meniu = ["home", "about", "gallery", "contact", "blog"];
              $masyvodydis = count($meniu);
                for ($i=0; $i < $masyvodydis ; $i++) {
                  print_r("<il><a href=#> $meniu[$i] </a></il>");
                }
               ?>
           </ul>
           <br>
           <div class="row ">
                <?php
                $nuotraukos = [1,2,3,4,5,6];
                $dydis = count($nuotraukos);
                for ($i=0; $i < $dydis ; $i++) {
                  print_r("<div class='col-4 mb-2'>
                  <img class='img-fluid' src='img/$nuotraukos[$i].jpg' alt=''  />
                  </div>");
                }
                 ?>
           </div>
          </div>
          <?php
          $preke = [
            "vardas" => "Juozas",
            "asmk" => 339393993,
            "gimdata" => "1991-01-01",
            "pardavimukiekis" => 120
          ];
          print_r($preke);
          echo "<br>";
          $preke["pardavimukiekis"] = 180;
          echo ("pardavimo kiekis: ".$preke["pardavimukiekis"]."<br>");

          $darbuotojas = [
            "vardas" => "Juozas",
            "asmk" => 339393993,
            "gimdata" => "1991-01-01",
            "pardavimukiekis" => 120
          ];
          foreach ($darbuotojas as $darbuotojoStalcius) {
            echo "$darbuotojoStalcius <br>";
          };

          print_r($darbuotojas);
          var_dump($darbuotojas);
           ?>
        </div>



        <script type="text/javascript" src="libs/jquery-3.4.1.min.js"> </script>
        <script type="text/javascript" src="libs/bootstrap/js/bootstrap.bundle.min.js"> </script>
        <!-- MANO JS pats zemiausias -->
        <script type="text/javascript" src="js/main.js"></script>

     </body>
</html>
