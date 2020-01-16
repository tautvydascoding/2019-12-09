<?php
// createDoctor() paleidimas per narsykle

// 1.1 sukurti PHP faila  naujasGydytojas.php
// 1.2. faile paleisti:

// ../ nes naudoju controlers kataloga
include('../models/doctor-functions.php');
createDoctor("Juozas", "Juozaitis");
echo "pavyko sukurti nauja gydytoja<br>";


// 1.3. Narsykleje nueiti:
// localhost/ ... /naujasGydytojas.php
