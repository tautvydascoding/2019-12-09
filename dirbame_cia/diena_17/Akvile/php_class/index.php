<?php
include('zmogus.php');

$monika = new Zmogus;
$tadas = new Zmogus;
$kestas = new Zmogus;

$monika->set_ugis(1.55);
$monika->set_vardas('Monika');

$tadas->set_ugis(1.80);
$tadas->set_vardas('Tadas');

$kestas->set_ugis(1.79);
$kestas->set_vardas('Kestas');


echo "Vardas: $monika->vardas Ugis:  $monika->ugis <br>";
echo "Vardas: $tadas->vardas Ugis:  $tadas->ugis <br>";
echo "Vardas: $kestas->vardas Ugis:  $kestas->ugis <br>";

$monika->einu();
// print_r($monika);
 ?>
