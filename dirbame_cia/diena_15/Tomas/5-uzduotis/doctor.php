<?php
require_once('models/doctor-functions.php');
$x = $_GET['numeris'];
$gydytojas = getDoctor($x); // array - gydytojo duomenys is DB
// print_r($_GET);
echo "<h2>Gydytojas</h2>";
// print_r($gydytojas);
echo "<h3>$gydytojas[name]  $gydytojas[lname]</h3>";
 ?>
