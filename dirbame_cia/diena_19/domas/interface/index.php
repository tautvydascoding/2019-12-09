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


interface IMyinterface{

function setSvoris($x);
function getSvoris();

}

class A implements IMyinterface{

   private $svoris = 100;
   function setSvoris($x){

  $this->svoris = $x;
}

function getSvoris(){

return $this->svoris;


}

}

$objektas = new A();

echo $objektas->getSvoris();
$objektas->setSvoris(500);
echo"<br>". $objektas->getSvoris();










?>
