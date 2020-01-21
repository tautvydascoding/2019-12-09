<?php

//susikuri klase
class zmogus {
  private $ugis = 0;
  private $vardas = "bevardis";

  public function __construct( $ugis, $vardas) {
      $this->ugis = $ugis;
      $this->vardas = $vardas;
    }
  public function getManoUgis() {
    return  $this->ugis;
  } //get paima
  public function getManoVardas() {
    return  $this->vardas;
  }

  public function setManoUgis($ugis) {
    $this->ugis = $ugis;
  } //set pakeicia
  public function setManoVardas($x){
    $this->vardas = $x;
  }
}



 ?>
