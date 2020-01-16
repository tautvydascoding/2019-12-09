<?php
// UZDUOTIS 1:
// sukurti interface 'Z'
// kuris turi f-jas:
//   setSvoris($x)
//   getSvoris()

// UZDUOTIS 2:
// sukurti klase 'A'
// kuri turi kintamaji:  svoris =100

// UZDUOTIS 2.2:
//   klase 'A' turi panaudoti interface 'Z'

// UZDUOTIS 3:
// susikurti objekta klases A

// UZDUOTIS 3.2:
// 1. atspausdinti svori
// 2. pakeisti svori i 90
// 3. atspausdinti svori


interface Z{
  public function setSvoris($x);
  public function getSvoris();
}

class A implements Z{

  public $svoris = 100;
  function setSvoris($x){
    $this->svoris = $x;
  }
  function getSvoris(){
    echo $this->svoris . "<br />";
  }

}

$A = new A();

echo $A->getSvoris();

$A->setSvoris(90);

echo $A->getSvoris(). "<br />";
