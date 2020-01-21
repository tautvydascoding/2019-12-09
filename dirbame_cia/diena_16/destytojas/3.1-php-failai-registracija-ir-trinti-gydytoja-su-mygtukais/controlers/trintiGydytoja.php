<?php
// 2.1. sukurti PHP faila  trintiGydytoja.php
// 2.2. faile paleisti:

// ../ nes sis failas controlers kataloge
include('../models/doctor-functions.php');

$x = $_GET['nr'];
deleteDoctor($x);

echo "pavyko istrinti  gydytoja $x<br>";

?>
<a class="btn bg-danger" href='..'> Istrinti 6 gyd</a>
