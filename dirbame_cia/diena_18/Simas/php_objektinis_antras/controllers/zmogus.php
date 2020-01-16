<?php
class Zmogus {
    public $ugis = 0;
    protected $turtas = 'namas';
    private $pusryciai = 'maistas';
    function getPusryciai() {
      echo $this -> pusryciai;
    }
}
class Vyras extends Zmogus {
    private $testosteronas = 6122;
    function getTestosteronas() {
      echo $this -> testosteronas;
    }
    function setTestosteronas($x) {
      echo $this -> testosteronas = $x;
    }
    function printVyroDuomenys() {
      echo $this -> ugis;
      echo $this -> pusryciai;
      echo $this -> turtas;
    }
}
