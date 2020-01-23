<?php
// UZDUOTIS 1:
// sukurti interface 'Z'
// kuris turi f-jas:
//   setSvoris($x)
//   getSvoris()
/**
 *
 */
interface MyInterface
{
  public function setSvoris($x);
  public function getSvoris();
}

// UZDUOTIS 2:
// sukurti klase 'A'
// kuri turi kintamaji:  svoris =100

/**
 *
 */
class A implements MyInterface
{
  private $svoris = 100;
  public function setSvoris($x){
     $this->svoris = $x;
  }
  public function getSvoris(){
    return $this->svoris;
  }
}


// UZDUOTIS 2.2:
//   klase 'A' turi panaudoti interface 'Z'

// UZDUOTIS 3:
// susikurti objekta klases A

// UZDUOTIS 3.2:
// 1. atspausdinti svori
// 2. pakeisti svori i 90
// 3. atspausdinti svori
