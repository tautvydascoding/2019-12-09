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
              echo "naujas tekstas <br>";
              echo "naujas tekstas <br>";
              echo "<div>     naujas tekstas  </div> ";
              echo "<div>
                        naujas tekstas
                    </div> ";
              echo "pirmas " . "antras" . " tercias " . "<br>";
              $x = 1 + 2;        // number: integer arab float/double
              $vardas  = "Aris";  // string
              $cars = [];       // array
              $arVedes = true; // boolean
              $mirtiesData = NULL;

              echo "Turimu vaiku skaicius: $x ir visi pasele <br>"; // x = 3
              echo 'Turimu vaiku skaicius: $x ir visi pasele <br>'; // isves $x

              $y = 10;
              $z = (($x * 2)) + $y;

              print( "teksto isvedimas <br>");
              print_r("isveda tekstus arba masyvus <br>");
              printf("I miska isejo %s ir praejo %d sankryzas <br>", $vardas, $x);

              $ilgis = strlen( $vardas );
              echo "ilgis: $ilgis <br>";


                 // UZDUOTIS  "Switch"
                // paduoti varda ir Jeigu jis lygus:
                // "audi" - atspausdinti "Susimastykite apie variklio prieziura"
                // "BMW" - atspausdinti "Susimastykite apie greiti ir vairavimo kultura"
                // "opel" - atspausdinti "Susimastykite apie naujus priedus"
                $vardas = "   AuDi     ";
                $vardas = htmlspecialchars($vardas, ENT_QUOTES ); // saugumui, uzkoduoja html simbolius  ' " <
                $vardas = trim( $vardas ); // pasalinamai aplinkiniai tarpai , tab,
                $vardas = strtolower($vardas); // sumazinam raides

                switch ($vardas) {
                    case 'audi':
                        echo "Susimastykite apie variklio prieziura <br>";
                        break;
                    case 'bmw':
                        echo "Susimastykite apie greiti ir vairavimo kultura <br>";
                        break;
                    case 'opel':
                        echo "Susimastykite apie naujus priedus <br>";
                        break;
                    default:
                        echo "Tokios markes: $vardas mes nezinome <br>";
                    break;
                }
              ?>
        </div>




        <script type="text/javascript" src="libs/jquery-3.4.1.min.js"> </script>
        <script type="text/javascript" src="libs/bootstrap/js/bootstrap.bundle.min.js"> </script>
        <!-- MANO JS pats zemiausias -->
        <script type="text/javascript" src="js/main.js"></script>

     </body>
</html>
