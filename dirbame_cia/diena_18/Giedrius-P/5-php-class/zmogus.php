<?php
class Zmogus {
    public $ugis = 0;
    private $pusryciai = 'blynai';
    protected $turtas = 'namas';
    public function getPusryciai(){
      return $this->pusryciai;
    }
}
class Vyras  extends Zmogus {
    private $testosteronas = 6122;
public function getTestosteronas(){
  return $this->testosteronas;
}
public function setTestosteronas($x){
   $this->testosteronas = $x;
}
public function printVyroDuomenys(){
  echo $this->testosteronas."<br>";
  echo $this->turtas."<br>";
  echo $this->ugis."<br>";
  echo $this->getPusryciai();
}
}


// UZDUOTIS 0.
// susikurti objekta VYRAS

// UZDUOTIS 1.
// susikurti f-jas kurios :
// 1. pakeicia 'testosterono' kieki
// 2. isveda 'testosrerono' kieki

// UZDUOTIS 2  (private-protected skirtumas)
// Vyras klases viduje atspausdinti:
// f-ja printVyroDuomenys()
// ugi, pusrycius, turtas
// kur gausite klaida? Kurio kintamojo neiseina atspausdinti?

// UZDUOTIS 3 (atspausdinti kintamaji, kurio neleido 2 uzdavinys)
// klases viduje (atspekite kurios) sukurti f-ja, kuri prieina prie privataus kintamojo . ir ji atspausdina
