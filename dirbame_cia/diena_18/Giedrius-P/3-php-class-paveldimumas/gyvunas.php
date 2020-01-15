<?php


 // UZDUOTIS 1.0:
 // sukurti klase 'Gyvunas' su kintamaisiais:
 // public 'svoris', private 'pusryciai', protected 'ligos'
/**
 *
 */
class Gyvunas
{
  public $svoris = 0;
  private $pusryciai = "nera pusryciu";
  protected $ligos = "nera ligu";
  public function printpusryciai(){
    return $this->pusryciai;
  }
}


/**
 *
 */
 // UZDUOTIS 1.1
 // sukurti klase 'Vilkas' su kintamaisiais:
 // public 'tipas'
/**
 *
 */
 // UZDUOTIS 1.2
 // klase 'Vilkas' paveldi klase 'Gyvunas'
 // UZDUOTIS 3
 // klaseje 'Vilkas' sukurti f-jas:
 // public printLigos()
class Vilkas extends Gyvunas
{
  public $tipas = "nera tipo";
  function __construct($x){
    $this->tipas = $x;
  }
 public function printligos(){
   return $this->ligos;
 }
}



 ?>
