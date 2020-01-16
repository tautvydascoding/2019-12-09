<?php

require_once('vyras.php');

// UZDUOTIS 0.
// susikurti objekta VYRAS

$Vyras = new Vyras();




// UZDUOTIS 1.
// susikurti f-jas kurios :
// 1. pakeicia 'testosterono' kieki
// 2. isveda 'testosrerono' kieki




// UZDUOTIS 2  (private-protected skirtumas)
// Vyras klases viduje atspausdinti:
// f-ja printVyroDuomenys()
// ugi, pusrycius, turtas
// kur gausite klaida? Kurio kintamojo neiseina atspausdinti?

// echo $Vyras->printTestosteronas();
// echo $Vyras->ugis . "<br />";
// echo $Vyras->getTurtas();
// echo $Vyras->getPusryciai();

echo $Vyras->printVyroDuomenys();

// UZDUOTIS 3 (atspausdinti kintamaji, kurio neleido 2 uzdavinys)
// klases viduje (atspekite kurios) sukurti f-ja, kuri prieina prie privataus kintamojo . ir ji atspausdina
