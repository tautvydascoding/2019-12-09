<?php



 // UZDUOTIS:
 // 1. sukurti dvi klases A ir B
 // "B" klase turi paveldi "A"
 // "A" klase turi kintamuosius:
 // name , plaukuSpalva, sirdiesYda
 // kurie yra "public", "private", "protected"

 // 2. SUSIKURTI "B" objekta
 // 3. atspausdinti visus kintamuosius (nenaudojant/nesikurti "A" objekto IR nenaudojant "echo" komandos "A" klaseje)


 //



class A {

public $name = " ";
private $plaukuSpalva = "blonde";
protected $sirdiesYda = true;

function getName(){

  return $this->name;

}

function getPlaukuSpalva(){

  return $this->name;

}

function getSirdiesYda(){


  return $this->sirdiesYda;

}





}

class B extends A{

function getName (){

return $name;

}



}

$objektas = new B();

if($objektas->getSirdiesYda()){
echo "tiesa";

}
else{
  echo "netiesa";
}
