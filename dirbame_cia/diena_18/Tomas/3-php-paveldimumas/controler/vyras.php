<?php
require_once("zmogus.php")

class Vyras extends Zmogus {
    private $testosteronas = 6122;
    public function setTestosteronas($x) {
      $this->testosteronas = $x;
    }
    public function getTestosteronas() {
      return echo $this->testosteronas;
    }

}

 ?>
