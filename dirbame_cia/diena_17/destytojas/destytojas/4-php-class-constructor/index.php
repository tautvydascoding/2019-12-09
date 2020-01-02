<?php


// UZDUOTIS 2:
// susikurti  objektus: Monika, Tadas, Kestas
require_once("Zmogus.php");

$Monika = new Zmogus( "Moniki", 165  );
$Tadas = new Zmogus( "Tadukas", 180  );
// echo $Monika->ugis;   // ERROR  Cannot access private property
// $Monika->ugis = 155;  // ERROR  Cannot access private property
echo  $Monika->getUgis();
$Monika->setUgis(188);
echo  "Po pakeitimo" . $Monika->getUgis();
