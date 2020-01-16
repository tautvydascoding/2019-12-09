<?php
// createDoctor() paleidimas per narsykle

// 1.1 sukurti PHP faila  naujasGydytojas.php
// 1.2. faile paleisti:
include('db_functions.php');
createDoctor("Juozas", "Juozaitis");
echo "pacyko sukurti nauja gydytoja<br>";
// 1.3. Narsykleje nueiti:
    localhost/ ... /naujasGydytojas.php



// 2.1. sukurti PHP faila  trintiGydytoja.php
// 2.2. faile paleisti:
include('db_functions.php');
deleteDoctor(4);
echo "pavyko istrinti  gydytoja <br>";
// 2.3. Narsykleje nueiti:
    localhost/ ... /trintiGydytoja.php
