<?php


// UZDUOTIS 2:
// susikurti  objektus: Monika, Tadas, Kestas
require_once("Zmogus.php");

$Monika = new Zmogus();
// echo $Monika->ugis;   // ERROR  Cannot access private property
// $Monika->ugis = 155;  // ERROR  Cannot access private property
echo  $Monika->getUgis();
