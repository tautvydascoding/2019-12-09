<?php

class Zmogus {
    public $ugis = 0;
    private $pusryciai = '';
    protected $turtas = 'namas';

    function getPusryciai(){

    return $this->pusryciai;

    }




}




class Vyras  extends Zmogus {

    private $testosteronas = 6122;
    function changeTesto($testo){

      $this->testosteronas = $testo;
      echo $this->testosteronas;


    }
    function printVyroDuomenys(){

      echo "$this->ugis </br>";
      echo $this->getPusryciai(). "</br>";
      echo "$this->turtas </br>";


    }

}

$petras = new Vyras();

$petras->changeTesto(72111);
$petras->printVyroDuomenys();


?>
