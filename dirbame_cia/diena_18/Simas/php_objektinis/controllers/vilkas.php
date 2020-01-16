<?php
class Vilkas extends Gyvunas {
  public $tipas = "baltas";
  function printLigos() {
    echo $this -> ligos;
  }
  function printPusryciai() {
    echo $this -> pusryciai;
  }
}
