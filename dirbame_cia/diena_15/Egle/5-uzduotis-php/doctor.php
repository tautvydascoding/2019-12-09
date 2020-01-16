<?php

require_once('models/doc-functions.php');


$numeris = $_GET['id'];

$gydytojas = getDoctor( $numeris);

echo $gydytojas["id"] . " " . $gydytojas["name"] . " " .  $gydytojas['lname'] . "<br>" ;
