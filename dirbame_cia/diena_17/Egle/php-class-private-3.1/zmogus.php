<?php


// zmogus turi:
// private ugis,
// private vardas
// public f-ja 'getManoUgis()'
// public f-ja 'getManoVardas()'
// public f-ja 'setManoUgis($x)'
// public f-ja 'setManoVardas($x)'
// * kintamojo paemimas f-je:    $this->vardas


class Zmogus{
  private $ugis = 0;
  private $vardas = 'bevardis';

function __constructor($ugis, $vardas){
  $this->ugis = $ugis;
  $his->vardas = $vardas;
}

  public function getManoUgis(){
    return   $this->ugis;
  }
  public function getManoVardas(){
      return   $this->vardas;  }

  public function setManoUgis($x){
      $this->ugis = $x;
      }
  public function setManoVardas($x){
      $this->vardas = $x;
  }
}
