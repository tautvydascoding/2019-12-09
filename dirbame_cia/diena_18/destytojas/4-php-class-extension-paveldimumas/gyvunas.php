<?php
// UZDUOTIS 1.0:
// sukurti klase 'Gyvunas' su kintamaisiais:
// public 'svoris', private 'pusryciai', protected 'ligos'

class Gyvunas
{
    public    $svoris = 65;

    protected $ligos = 'sirdies yda';
    private   $pusryciai = "zuikis";

    // prieinam prie private reiksmes,
    // nes sioje klaseje ji sukurta
    public function printPusryciai() {
        echo  $this->pusryciai . "<br>";
    }

}






//
