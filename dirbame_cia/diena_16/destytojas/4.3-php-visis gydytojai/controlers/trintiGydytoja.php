<?php
// 2.1. sukurti PHP faila  trintiGydytoja.php
// 2.2. faile paleisti:

// ../ nes sis failas controlers kataloge
include('../models/doctor-functions.php');

$x = $_GET['nr'];
deleteDoctor($x);

echo "pavyko istrinti  gydytoja $x<br>";

// 2.3. Narsykleje nueiti:
//    localhost/ ... /trintiGydytoja.php
