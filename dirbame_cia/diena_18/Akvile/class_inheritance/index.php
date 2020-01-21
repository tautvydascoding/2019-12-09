<?php


include('Gyvunas.php');
include('Vilkas.php');


$vilkas = new Vilkas(100, 'rudasis');

// print_r($vilkas);
//
// echo $vilkas->pusryciai; // negalima prieiti prie private kintamojo
// echo $vilkas->ligos; // negalima prieiti prie protected kintamojo
// echo $vilkas->svoris; // 100;

$vilkas->printLigos();
$vilkas->printSvoris();
$vilkas->printPusryciai();
