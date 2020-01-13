<?php


class Zmogus {
    public $ugis = 0;
    public $vardas = '';

    public function einu() {
        echo "Einu einu...";
    }
    public function set_ugis($ugis) {
        $this->ugis = $ugis;
    }

    public function set_vardas($vardas) {
        $this->vardas = $vardas;
    }
}




// <?php
// // UZDUOTIS 1:
// // sukurti  klase: 'zmogus'
// // zmogus turi: public ugis, public vardas
// // f-ja 'einu()', kuri daro echo "Einu einu..."
//
// // UZDUOTIS 2:
// // susikurti  objektus: Monika, Tadas, Kestas
//
//
// // UZDUOTIS 2.1
// Monikos objektui priskirti reiksmes: Monika, 155
// Tado objektui priskirti reiksmes: Tadas, 180
// Kesto objektui priskirti reiksmes: Kestas, 179
//
// // UZDUOTIS 2.2
// // Atspausdinti MONIKOS, TADO varda ir ugi
// // paleisti f-ja 'einu()'
