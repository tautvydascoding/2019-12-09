<?php
require_once("gyvunas.php");

class vilkas extends gyvunas {
  public $svoris = 95;
  public $tipas = "rudasis";
  public function printLigos() {
    echo $this->ligos . "<br>";
  }
  // public printPusryciai() {
  //   echo $this->pusryciai . "<br>";
  // }
}

 ?>
