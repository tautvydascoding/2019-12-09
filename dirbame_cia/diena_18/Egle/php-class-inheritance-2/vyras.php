<?php

require_once('zmogus.php');

class Vyras  extends Zmogus {
    private $testosteronas = 6122;
    public function setTestosteronas($x){
      $this->testosteronas = $x;
    }
    public function printTestosteronas(){
     echo  $this->testosteronas ;
    }
    public function getTurtas(){
    echo  $this->turtas ;
    }

    public function printVyroDuomenys(){
    echo  $this->printTestosteronas() . "<br />";
    echo  $this->ugis . "<br />";
    echo  $this->getTurtas() . "<br />";
    echo  $this->getPusryciai() . "<br />";

    }
}
