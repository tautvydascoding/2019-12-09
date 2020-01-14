<?php
require_once('models/doc-functions.php');

// session_start();

// print_r($_GET);

echo "<hr/>";

$vard = $_GET['vardas'];
$pavr = $_GET['pavarde'];

echo "Vardas: " . $_GET['vardas'] . "<br />" . "Pavarde: " . $_GET['pavarde'] . "<br />" .  "<br />";

createDoctor($vard, $pavr);


// echo $_SESSION["a"];
