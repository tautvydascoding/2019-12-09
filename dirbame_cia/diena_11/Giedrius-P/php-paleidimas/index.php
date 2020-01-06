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
             <h1>failo galune turi buti PHP</h1>
             <h1>kodinant PHP reikia atidaryti ir uzdaryti</h1>
             <h1>reikia paleisti apache serverio(MAMP ijungti)</h1>

              <?php
              $marke = "BMW";
              $marke = htmlspecialchars(marke, ENT_QUOTES); //saugumui uzkoduojam HTMl simbolius.
              $marke = trim( $vardas ); //pasalinami aplinkiniai tarpai, tabai
              $marke = strtolower($vardas);

              switch ($marke) {
                case 'audi':
                  echo "Susimastykite apie variklio prieziura";
                  break;
                  case 'bmw':
                  echo "Susimastykite apie greiti ir vairavimo kultura";
                  break;
                  case 'opel':
                    echo "Susimastykite apie naujus priedus";
                    break;
                default:
                  echo "Nera $marke tokio automobilio markes";
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
