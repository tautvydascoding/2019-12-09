<?php
// createDoctor() paleidimas per narsykle

// 1.1 sukurti PHP faila  naujasGydytojas.php
// 1.2. faile paleisti:

// ../ nes naudoju controlers kataloga
include('../models/doctor-functions.php');

$vard = $_GET['vardas'];
$parv = $_GET['pavarde'];
createDoctor($vard, $parv);

echo "pavyko sukurti nauja gydytoja<br>";


// 1.3. Narsykleje nueiti:
// localhost/ ... /naujasGydytojas.php
