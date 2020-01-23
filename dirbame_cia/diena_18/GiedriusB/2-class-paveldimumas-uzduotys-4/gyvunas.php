<?php
class Gyvunas {
  public $svoris = 100;
  private $pusryciai = "kiskis";
  protected $ligos = "sifilis";
  public function printPusryciai(){
    return $this->pusryciai." <br />";
  }
}

class Vilkas extends Gyvunas {
  public $tipas = "pilkasis";
  public function printLigos(){
      echo $this->ligos. "<br />";
  }
  //public function printPusryciai(){
    //echo $this->pusryciai. "<br />";
    //meta klaida!
//  }
}
