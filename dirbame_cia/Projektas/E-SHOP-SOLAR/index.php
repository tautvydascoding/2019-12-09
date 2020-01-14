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

include('models/get_Goods.php');



$visosPrekes = getGoods(); // MYSQL objektas
 //print_r( $visosPrekes ) ;


if ($visosPrekes > 0)
{

  echo "<table ><tr><th style='width: 200px; border: 1px solid black'> Prekė </th><th style='width: 70px; border: 1px solid black'> Kaina  </th><th style='width: 70px; border: 1px solid black'> Kiekis </th></tr>";

// visu gydytoju isvedimas
  // is visu paimame viena
  $pre = mysqli_fetch_assoc($visosPrekes);
    while ($pre) {

    // echo "{$gyd['name']}  {$gyd['lname']} <br>";
    //echo "$gyd[name]  $gyd[lname] <br>"; -->

    echo "<tr><td style='border: 1px solid black'>" . $pre['goods_name'] . "</td><td  style='border: 1px solid black'>" . $pre['price'] . "</td><td  style='border: 1px solid black'>". " ". $pre['amount'] . "</td></tr>";
$pre = mysqli_fetch_assoc($visosPrekes);
    // <!-- is visu paimame sekanti gydytoja -->
    }
 echo "</table>";
  } else {
  echo "results";
}

?>







  <script type="text/javascript" src="libs/jquery-3.4.1.min.js"> </script>
  <script type="text/javascript" src="libs/bootstrap/js/bootstrap.bundle.min.js"> </script>
  <!-- MANO JS pats zemiausias -->
  <script type="text/javascript" src="js/main.js"></script>

</body>

</html>
