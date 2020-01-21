<?php
require_once("controler/vilkas.php");

$rudis = new vilkas();

echo "Vilko tipas: $rudis->tipas <br>";
echo "Vilko svoris: $rudis->svoris <br>";
// echo "Vilko pusryciai: $rudis->pusryciai <br>";
// echo "Vilko ligos: $rudis->ligos <br>";

echo "ligos: "; $rudis->printLigos();
echo "pusryciai: "; $rudis->printPusryciai();

 ?>
