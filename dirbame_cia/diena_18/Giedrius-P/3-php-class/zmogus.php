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
// * kintamojo paemimas f-je:    $this->vardas


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


/**
 *
 */
class zmogus
{
  private $vardas = "Bevardis";
  private $ugis = 0;
  public function getManoUgis(){
    return $this->ugis;
  }
  public function getManoVardas(){
    return $this->vardas;
  }
  function __construct($x, $y){
    $this->vardas = $x;
    $this->ugis = $y;
  }
}
