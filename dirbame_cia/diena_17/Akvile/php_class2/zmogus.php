<?php


class Zmogus {
    private $ugis = 0;
    private $vardas = '';

    public function getManoUgis($ugis) {
        return $this->ugis;
    }

    public function getManoVardas($vardas) {
        return $this->vardas;
    }

    public function setManoUgis($ugis) {
        $this->ugis = $ugis;
    }

    public function setManoVardas($vardas) {
        $this->vardas = $vardas;
    }

    function __construct($vardas, $ugis) {
    $this->vardas = $vardas;
    $this->ugis = $ugis;
  }
}



// UZDUOTIS 1:
// sukurti  klase: 'zmogus'

// zmogus turi:
// private ugis,
// private vardas
// public f-ja 'getManoUgis()'
// public f-ja 'getManoVardas()'
// public f-ja 'setManoUgis($x)'
// public f-ja 'setManoVardas($x)'
// * kintamojo paemimas f-je:    $this->vardas


// UZDUOTIS 2.1
// susikurti  objektus: Monika

// UZDUOTIS 2.2
// Atspasudinti varda ir ugi naudojant
// f-ja 'manoUgis()'
// f-ja 'manoVardas()'


// UZDUOTIS 3:
// susikurti konstruktoriu

// UZDUOTIS 3.1:
// susikurti  objektus: Monika, Tadas, Jurgis (naudojant konstruktoriu)
