<?php

include('zmogus.php');


// UZDUOTIS 2:
// susikurti  objektus: Monika, Tadas, Kestas

$monika = new Zmogus();
$tadas = new Zmogus();
$kestas = new Zmogus();


// UZDUOTIS 2.1
// Monikos objektui priskirti reiksmes: Monika, 155
// Tado objektui priskirti reiksmes: Tadas, 180
// Kesto objektui priskirti reiksmes: Kestas, 179

$monika->vardas = "Monika";
$monika->ugis = 155;

$tadas->vardas = "Tomas";
$tadas->ugis = 180;

$kestas->vardas ="Kestas";
$kestas->ugis = 179;

// UZDUOTIS 2.2
// Atspausdinti MONIKOS, TADO varda ir ugi
// paleisti f-ja 'einu()'


echo $monika->vardas . ". Jos ugis:  " . $monika->ugis . "<br />";
echo $tadas->vardas . ". Jo ugis:  " . $tadas->ugis . "<br />";

echo $monika->einu();
