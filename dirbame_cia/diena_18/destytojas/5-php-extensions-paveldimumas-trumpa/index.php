<?php

include_once('vyras.php');
$Rokas = new Vyras();
// echo $Rokas->testosteronas; // error nes privatus
echo $Rokas->getTestosteronas( ) . "<br>";
$Rokas->setTestosteronas( -1000 );
echo $Rokas->getTestosteronas( ) . "<br>";

$Rokas->printVisiVyroDuom(  );
