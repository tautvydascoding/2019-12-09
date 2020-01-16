<?php
require_once('gyvunas.php');

class Vilkas extends Gyvunas
{ 
    public $tipas = 'baltasis';
    // UZDUOTIS 3
    // klaseje 'Vilkas' sukurti f-jas:
    // public printLigos()
    // public printPusryciai() // neveiks

    // isveda - protected reiksme
    public function printLigos()     {
         echo  $this->ligos . "<br>";
     }
    // ERROR, nes [private reiksme]
    // public function printPusryciai() { echo  $this->pusryciai . "<br>";     }

}






//
