<?php
require_once('zmogus.php');
class Vyras  extends Zmogus {
    private $testosteronas = 6122;
    // UZDUOTIS 1.
    // susikurti f-jas kurios :
    // 1. pakeicia 'testosterono' kieki
    // 2. isveda 'testosrerono' kieki
    public function setTestosteronas($x) {
        $this->testosteronas += $x;
    }
    public function getTestosteronas( ) {
        return $this->testosteronas;
    }
    public function printVisiVyroDuom( ) {
         echo $this->testosteronas . "<br>";
         echo $this->ugis . "<br>";
         // echo $this->pusryciai . "<br>"; // erro nes private pas teti
         echo $this->turtas . "<br>";
    }
}
