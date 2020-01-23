<?php

class Vyras extends Zmogus {

    private $testosteronas = 6122;

    function __construct($ugis, $pusryciai, $turtas) {
        $this->ugis = $ugis;
        $this->pusryciai = $pusryciai;
        $this->turtas = $turtas;
    }

    public function getTestosteronas() {
        return $testosteronas;
    }

    public function setTestosteronas($kiekis) {
        $this->testosteronas = $kiekis;
    }

    public function printVyroDuomenys() {
        echo "ugis: $this->ugis, pusryciai: $this->pusryciai, turtas: $this->turtas";
    }

}


// UZDUOTIS 0.
// susikurti objekta VYRAS

// UZDUOTIS 1.
// susikurti f-jas kurios :
// 1. pakeicia 'testosterono' kieki
// 2. isveda 'testosrerono' kieki

// UZDUOTIS 2  (private-protected skirtumas)
// Vyras klases viduje atspausdinti:
// f-ja printVyroDuomenys()
// ugi, pusrycius, turtas
// kur gausite klaida? Kurio kintamojo neiseina atspausdinti?

// UZDUOTIS 3 (atspausdinti kintamaji, kurio neleido 2 uzdavinys)
// klases viduje (atspekite kurios) sukurti f-ja, kuri prieina prie privataus kintamojo . ir ji atspausdina
