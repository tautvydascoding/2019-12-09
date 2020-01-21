<?php
require_once("Klases/Gyvunas.php");
class Vilkas extends Gyvunas
{

  public $tipas = "baltas";
  public $svoris = 99;

public function printLigos()
  {
    echo $this->ligos . "<br>";
  }
// public function printPusryciai()
//   {
//   //  echo $this->pusryciai . "<br>";
//   }

}

 ?>
