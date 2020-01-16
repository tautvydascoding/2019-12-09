<?php

//matrix - masyvai masyvuose - dvimatis masyvas

$auto1 = ['audi A4', 1.9];
$auto2 =['audi A6', 2.2];
$auto3 = ['audi A7', 4.0];
$visiAuto = [$auto1, $auto2, $auto3];

$visiAuto2 = [
 ['audi A4', 1.9],
 ['audi A6', 2.2],
 ['audi A7', 4.0]
];


$visiAuto[0][1] = 1.8;

echo count($visiAuto); //suskaiciuos stulpeliu skaiciu
echo count($visiAuto[0]); // suskaiciuos pirmo stulp eiluciu skaiciu
