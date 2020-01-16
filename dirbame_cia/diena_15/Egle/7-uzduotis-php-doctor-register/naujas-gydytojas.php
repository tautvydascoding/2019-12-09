<?php

require_once('models/doc-functions.php');
header('Location: index.php');




$vard = $_GET['vard'];
$parv = $_GET['parv'];
createDoctor($vard, $parv);
// session_start();
// $_SESSION["a"] = "SUKURTAS";
