<?php
include ("objektai.php");

// UZDUOTIS 2:
// susikurti  objektus: Monika, Tadas, Kestas

$Monika = new zmogus();

$Monika->ugis = 155;
$Monika->vardas = "Monika";

$Tadas = new zmogus();

$Tadas->ugis = 185;
$Tadas->vardas = "Tadas";

$Kestas = new zmogus();
$Kestas->ugis = 192;
$Kestas->vardas = "Kestas";


echo "Monikos ugis po pakeitimo:  $Monika->ugis <br />";
echo "Monikos vardas po pakeitimo: $Monika->vardas <br />";
echo "Tado ugis po pakeitimo: $Tadas->ugis <br />";
echo "Tado vardas po pakeitimo: $Tadas->vardas <br />";
echo "Kesto ugis po pakeitimo: $Kestas->ugis <br />";
echo "Monikos vardas po pakeitimo: $Kestas->vardas <br />";
$Monika->einu();



 ?>
