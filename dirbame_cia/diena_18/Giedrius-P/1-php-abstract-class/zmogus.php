<?php

// UZDUOTIS 1:
// sukurti  abstrakcia klase 'Pagrindai'
// kuri turi kintamaji:  ratai = 4
//   sukurti abstrakcia f-ja: vaziuoti($x)
//   sukurti abstrakcia f-ja: sutoti()
/**
*
*/
abstract class Pagrindai
{
  public $ratai = 4;
  abstract public function vaziuoti($x);
  abstract public function sustoti();
}

// UZDUOTIS 2
// sukurti klase   'Automobilis'
//   sukurti  f-ja: atidarytiDuris($x)
//  sukurti kintamasis: liukas = true;
//  sukurti kintamasis: pavadinimas = "Audi";

/**
 *
 */
class Automobilis extends Pagrindai
{
 public function atidarytiDuris($x){
   return $x;
 }
 public $liukas = "true";
 public $pavadinimas = "audi";
 public function vaziuoti($x){
   return $x;
 }
 public function sustoti(){
   echo "sustojo";
 }
}


// UZDUOTIS 2.1
// paveldeti klase:  Pagrindai


// UZDUOTIS 2.2:
// istaisyti klaidas atsiraduses del abstrakcios klases paveldejimo
