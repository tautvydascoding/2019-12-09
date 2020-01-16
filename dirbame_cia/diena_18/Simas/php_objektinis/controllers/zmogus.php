<?php


class Zmogus{
  private $vardas = "Bevardis";
  private $ugis = 0;
  function __construct($vardas = "Bevardis", $ugis = 0) {
    $this -> vardas = $vardas;
    $this -> ugis = $ugis;
  }
  public function getManoUgis() {
    echo $this -> ugis;
  }
  public function getManoVardas() {
    echo $this -> vardas;
  }
  public function setManoUgis($x) {
    $this -> ugis = $x;
    return $this -> ugis;
  }
  public function setManoVardas($x) {
    $this -> vardas = $x;
    return $this -> vardas;
  }
}
