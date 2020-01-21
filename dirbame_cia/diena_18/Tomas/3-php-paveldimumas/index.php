<?php
require_once("controler/vyras.php");

$Petras = new Vyras();
echo $Petras->$testosteronas; //error nes privataus
echo $Petras->getTestosteronas();
$Petras->setTestosteronas(-1000);
echo $Petras->getTestosteronas();



 ?>
