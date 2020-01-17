<?php
class Zmogus {
    public $ugis = 190;
    private $pusryciai = 'kiausiniene';
    protected $turtas = 'namas';
    public function getPusryciai(){
    return $this->pusryciai;
    }
}
class Vyras  extends Zmogus {
    private $testosteronas = 6122;
    public function changeTesto($xx){
       $this->testosteronas = $xx;
    }
    public function getTesto(){
      return $this->testosteronas;
    }
    public function printVyroDuomenys(){
      echo $this->ugis. "<br />";
      echo $this->getPusryciai(). "<br />";
      echo $this->turtas. "<br />";
    }
}
