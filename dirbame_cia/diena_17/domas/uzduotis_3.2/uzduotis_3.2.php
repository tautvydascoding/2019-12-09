<?php
// UZDUOTIS 1:
// sukurti  klase: 'zmogus'

// zmogus turi:
// private ugis,
// private vardas
// public f-ja 'getManoUgis()'
// public f-ja 'getManoVardas()'
// public f-ja 'setManoUgis($x)'
// public f-ja 'setManoVardas($x)'
//* kintamojo paemimas f-je:    $this->vardas


// UZDUOTIS 2.1
// susikurti  objektus: Monika

// UZDUOTIS 2.2
// Atspasudinti varda ir ugi naudojant
// f-ja 'manoUgis()'
// f-ja 'manoVardas()'


// UZDUOTIS 3:
// susikurti konstruktoriu

// UZDUOTIS 3.1:
// susikurti  objektus: Monika, Tadas, Jurgis (naudojant konstruktoriu)

class zmogus{



private $ugis= 0;
private $vardas = "bevardis";


function __construct($ugis, $vardas) {
  $this->ugis = $ugis;
  $this->vardas = $vardas;
}

function getUgis(){

return $this->ugis;

}

function getVardas(){


return $this->vardas;

}

function setUgis($cm){

  $this->ugis = $cm;
}


function setVardas($vrd){

  $this->vardas = $vrd;
}

function manoUgis(){

echo $this->vardas;
echo "<br>";

}
function manoVardas(){

echo $this->ugis;
echo "<br>";

}




}
