<?php
include('iZ.php');
class A implements ManoZ {
  public $svoris = 100;
  function setSvoris($x) {
    $this -> svoris = $x;
  }
  function getSvoris() {
    echo $this -> svoris;
  }
}
