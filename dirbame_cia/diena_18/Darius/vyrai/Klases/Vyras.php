<?php
require_once("Klases/Zmogus.php");
class Vyras  extends Zmogus {
    private $testosteronas = 6122;
    public $ugis = 0;
    private $pusryciai = 'Mesa';
    protected $turtas = 'namas';

public function setTesto($x)
  {
    $this->testosteronas += $x;
  }

public function getTesto()
  {
    return $this->testosteronas;
  }

  public function printVyroDuomenys()

  {


  }
//     function printVyroDuomenys()
//     {
// echo $this->ugis;
//     }
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
