<!-- // UZDUOTIS
// 1. suskurti faila:  straipsnis.php
// 1.1 straipsnis.php faile sukurti 2 kintamuosius $vardas, $pavarde
// 1.2 straipsnis.php faile sukurti masyva: 'straipnis' = ['antraste', 'aprasymas', 'data'];
//
// pvz:   'BMW vel preleke saligatviu',   'Lorem lorem....', '2010-12-01'

// 2. index.php faile  ideti:
// include( 'straipsnis.php');

// 2.1 index.php failesukurti <div> ir jo viduje isvesti su echo $vardas, $pavarde
// 2.2 index.php faile sukurti   'container' 'main' 'article'
// 2.3 'article' videje sukurti:
// 2.3.1    sukurti 'h2' ir jo viduje isvesti antrastę (is masyvo)
// 2.3.2    sukurti 'paragrafa' ir jo viduje isvesti aprasymą  (is masyvo)
// 2.3.3    sukurti '<div>' ir jo viduje isvesti datą  (is masyvo)  -->


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
    <h1>PHP straipsnis</h1>


<?php

$vardas = "Tomas";
$pavarde = "Antanaitis";
$straipsnis = ['antraste' => 'BMW vel preleke saligatviu',
'aprasymas' => 'Lorem ipsum dolor sit amet',
'data' => 2019-12-12];

 ?>



  </div>
  <script type="text/javascript" src="libs/jquery-3.4.1.min.js"> </script>
  <script type="text/javascript" src="libs/bootstrap/js/bootstrap.bundle.min.js"> </script>
  <!-- MANO JS pats zemiausias -->
  <script type="text/javascript" src="js/main.js"></script>

</body>

</html>
