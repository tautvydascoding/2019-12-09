<?php


// UZDUOTIS 2:
// susikurti  objektus: Monika, Tadas, Kestas
require_once("vilkas.php");

$Simba = new Vilkas();
echo $Simba->tipas . "<br>";
echo $Simba->svoris . "<br>";

// sie nesuveiks, nes private arba protected
// echo $Simba->ligos . "<br>";
// echo $Simba->pusryciai . "<br>";
 $Simba->printLigos();
 $Simba->printPusryciai();

//
