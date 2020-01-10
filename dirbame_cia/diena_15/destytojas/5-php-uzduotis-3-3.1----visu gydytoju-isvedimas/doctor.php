<?php

require_once('models/doctor-functions.php');

$x = $_GET['numeris'];
$gydytojas = getDoctor($x); // array - gydytrojo duomenis is DB

// print_r($gydytojas); // test

echo "<h2>Gydytojas</h2>";
echo "<h3>  $gydytojas[name]   $gydytojas[lname]</h3>";
