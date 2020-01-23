<?php
// UZDUOTIS 2:
// sukurti klase 'A'
// kuri turi kintamaji:  svoris =100

  include('interface.php');
  class A implements Z {
  public  $svoris = 100;
  public function setSvoris($x){
    $this->svoris = $x;
  }
  public function getSvoris(){
    return $this->svoris;
  }
  }
