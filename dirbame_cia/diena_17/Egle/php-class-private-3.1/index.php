<?php
include('zmogus.php');

// UZDUOTIS 1:
// sukurti  klase: 'zmogus'

// zmogus turi:
// private ugis,
// private vardas
// public f-ja 'getManoUgis()'
// public f-ja 'getManoVardas()'
// public f-ja 'setManoUgis($x)'
// public f-ja 'setManoVardas($x)'
// * kintamojo paemimas f-je:    $this->vardas


// UZDUOTIS 2.1
// susikurti  objektus: Monika

$monika = new Zmogus();
$monika->setManoUgis(155);
$monika->setManoVardas("Monika");


// UZDUOTIS 2.2
// Atspasudinti varda ir ugi naudojant
// f-ja 'manoUgis()'
// f-ja 'manoVardas()'


echo $monika->getManoVardas();
echo $monika->getManoUgis();

// UZDUOTIS 3:
// susikurti konstruktoriu

// UZDUOTIS 3.1:
// susikurti  objektus: Monika, Tadas, Jurgis (naudojant konstruktoriu)

$tadas = new Zmogus( 180, "Tadas" );

echo $tadas->vardas;
echo $tadas->ugis;





 ?>
