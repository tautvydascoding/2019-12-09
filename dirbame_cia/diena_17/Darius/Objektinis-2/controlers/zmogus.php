<!--
// UZDUOTIS 1:
// sukurti  klase: 'zmogus'

// zmogus turi:
// private ugis,
// private vardas
// public f-ja 'getManoUgis()'
// public f-ja 'getManoVardas()'
// public f-ja 'setManoUgis($x)'
// public f-ja 'setManoVardas($x)'
* kintamojo paemimas f-je:    $this->vardas


// UZDUOTIS 2.1
// susikurti  objektus: Monika

// UZDUOTIS 2.2
// Atspasudinti varda ir ugi naudojant
// f-ja 'manoUgis()'
// f-ja 'manoVardas()'


// UZDUOTIS 3:
// susikurti konstruktoriu

// UZDUOTIS 3.1:
// susikurti  objektus: Monika, Tadas, Jurgis (naudojant konstruktoriu) -->

<?php

class Zmogus {
      private $ugis = 0;
      private $vardas = "Bevardis";
        public function getManoUgis()
        {
          return $this->ugis;
        }
        public function getManoVardas()
        {
          return $this->vardas;
        }
        public function setManoUgis($x)
        {
                $this->ugis =$x;
        }
        public function setManoVardas($x)
        {
              $this->vardas = $x;
        }
      }

  class Zmogus2{

    function tadas_C($ugis, $vardas)
    {
      $this->ugis = $ugis;
      $this->vardas = $vardas;

    }

function get_name()
{
  return $this->vardas;
}

    function jurgis_C($ugis, $vardas)
    {
      $this->ugis = $ugis;
      $this->vardas = $vardas;

    }
    function matas_C($ugis, $vardas)
    {
      $this->ugis = $ugis;
      $this->vardas = $vardas;

    }

  }
