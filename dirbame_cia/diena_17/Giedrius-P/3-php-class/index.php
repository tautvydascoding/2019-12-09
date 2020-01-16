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
        <div class="container  bg-light">
             <h1>Isijuk inspect->console</h1>

        <?php
        // include('zmg.php');
        // $Giedrius = new zmg();
        // $Giedrius->ugis = 186;
        // $Giedrius->vardas = "Giedrius";
        // echo "vardas : ".$Giedrius->vardas." ugis : ".$Giedrius->ugis;
        //
        // // UZDUOTIS 2.1
        // // Monikos objektui priskirti reiksmes: Monika, 155
        // // Tado objektui priskirti reiksmes: Tadas, 180
        // // Kesto objektui priskirti reiksmes: Kestas, 179
        //
        // $Monika = new zmg();
        // $Monika->vardas = "Monika";
        // $Monika->ugis = 155;
        //
        // $Tadas = new zmg();
        // $Tadas->vardas = "Tadas";
        // $Tadas->ugis = 180;
        //
        // $Kestas = new zmg();
        // $Kestas->vardas = "Kestas";
        // $Kestas->ugis = 179;
        //
        // echo "vardas : ".$Tadas->vardas." ugis : ".$Tadas->ugis;
        // echo "vardas : ".$Monika->vardas." ugis : ".$Monika->ugis." Funkcija ";
        // echo $Monika->eitu();


        include('zmogus.php');
        $Monika = new zmogus('Monika', 156);
        echo $Monika->getManoUgis(); echo "<br>";
        echo $Monika->getManoVardas();

        $Tadas = new zmogus('Tadas', 186);
        $Kestas = new zmogus('Kestas', 170);
        echo "<br>";
        echo $Tadas->getManoUgis(); echo "<br>";
        echo $Tadas->getManoVardas();
        echo "<br>";
        echo $Kestas->getManoUgis(); echo "<br>";
        echo $Kestas->getManoVardas();
         ?>
        </div>




        <script type="text/javascript" src="libs/jquery-3.4.1.min.js"> </script>
        <script type="text/javascript" src="libs/bootstrap/js/bootstrap.bundle.min.js"> </script>
        <!-- MANO JS pats zemiausias -->
        <script type="text/javascript" src="js/main.js"></script>

     </body>
</html>
