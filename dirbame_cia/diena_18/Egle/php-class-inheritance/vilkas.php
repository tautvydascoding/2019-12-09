<?php

include('gyvunas.php');

class Vilkas extends Gyvunas{
  public $tipas = "pilkas";
  public function getLigos(){
    return $this->ligos;
  }
  public function getPusryciai(){
    return  $this->printPusryciai();
  }
}
