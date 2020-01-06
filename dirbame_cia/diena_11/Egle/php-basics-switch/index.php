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


      <?php

        echo "Naujas tekstas <br>";
        echo "Naujas tekstas <br>";
        echo "Naujas tekstas <br>";
        echo "<div>
        Kitas tekstas
        </div> <br>";

        echo "pirmas " . "antras " . "trecias " . "<br>";


        $x = 1 + 2; // number
        $vardas = "Aris"; // string
        $cars = []; // array
        $arVedes = true; // boolean
        $mirtiesData = NULL;

        echo "turimu vaiku skaicius $x <br>";
        echo 'turimu viaku skaicius $x <br>'; //$x kintamasis neveikia viengubose kabutese

        print("teksto isvedimas <br>");
        print_r("isveda tekstus ir arrays <br>");
        printf("i miska isejo %s ir priejo %s sankryzas <br>", $vardas, $x); // %s - kintamasis nurodytas gale


        $ilgis = strlen($vardas);
        echo "ilgis: $ilgis <br>";


        // UZDUOTIS  "Switch"
       // paduoti varda ir Jeigu jis lygus:
       // "audi" - atspausdinti "Susimastykite apie variklio prieziura"
       // "BMW" - atspausdinti "Susimastykite apie greiti ir vairavimo kultura"
       // "opel" - atspausdinti "Susimastykite apie naujus priedus"



        $car = "BMW ";
        $car = trim($car); // istrina aplink esancius tarpus, tabus,
        $car = strtolower($car); // pavercia visas raides mazosiomis kad perksiatytu teksta
        $car = htmlspecialchars($car, ENT_QUOTES); // Saugumui uzkoduoti HTML simbolius, kaip " ", ' ', < , kad neveiktu kaip kodas

        switch ($car) {
          case 'audi':
            echo "Susimastykite apie variklio prieziura <br>";
            break;
          case 'bmw':
            echo "Susimastykite apie greiti ir vairavimo kultura <br>";
            break;
          case "opel":
            echo "Susimastykite apie naujus priedus <br>";
            break;

          default:
            echo "Tokios prekes $car mes nezinome <br>";
            break;
        }












       ?>




        <script type="text/javascript" src="libs/jquery-3.4.1.min.js"> </script>
        <script type="text/javascript" src="libs/bootstrap/js/bootstrap.bundle.min.js"> </script>
        <!-- MANO JS pats zemiausias -->
        <script type="text/javascript" src="js/main.js"></script>

     </body>
</html>
