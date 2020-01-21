
 <!-- // UZDUOTIS 1.0:
 // sukurti klase 'Gyvunas' su kintamaisiais:
 // public 'svoris', private 'pusryciai', protected 'ligos'

 // UZDUOTIS 1.1
 // sukurti klase 'Vilkas' su kintamaisiais:
 // public 'tipas'

 // UZDUOTIS 1.2
 // klase 'Vilkas' paveldi klase 'Gyvunas'

  // UZDUOTIS 2.0:
 // sukurti VILKO OBJEKTA ir
 // pabandyti isvesti visa info apie Vilka:
 // tipas
 // svoris,
 // ligos     // klaida
 // pusryciai // klaida

 // UZDUOTIS 3
 // klaseje 'Vilkas' sukurti f-jas:
 // public printLigos()
 // public printPusryciai() // neveiks

 // UZDUOTIS 4
 // klaseje 'Gyvunas' sukurti f-jas:
 // public printPusryciai() -->


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
// sukurti funkcija kuri mažina "z" kintamaji,
//padaryti su Yaf_Route_Static
// funkciją iškviesti 3  kartus


require_once("Klases/Vyras.php");

$data = new Vyras();
echo $data->getTesto() . "<br>";
$data->setTesto(1000)  . "<br>";
echo $data->getTesto() . "<br>";




// echo $data->ligos;
// echo $data->pusryciai;

//echo "$tipas, $ligos, $svoris, $pusryciai";


         ?>




        <script type="text/javascript" src="libs/jquery-3.4.1.min.js"> </script>
        <script type="text/javascript" src="libs/bootstrap/js/bootstrap.bundle.min.js"> </script>
        <!-- MANO JS pats zemiausias -->
        <script type="text/javascript" src="js/main.js"></script>

     </body>
</html>
