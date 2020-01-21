<?php

class Vilkas extends Gyvunas {

    public $tipas = 'piktasis';

    function __construct($svoris, $tipas) {
        $this->svoris = $svoris;
        $this->tipas = $tipas;
    }

    // su public f-ja galima isvesti protected kintamuosius
    public function printLigos() {
        foreach ($this->ligos as $liga) {
            echo "$liga<br>";
        }
    }

    // ERROR! private reiksmiu niekaip negalima paimti!!!
    public function printPusryciai() {
        echo $this->pusryciai;
    }

    public function printSvoris() {
        echo $this->svoris;
    }

}
