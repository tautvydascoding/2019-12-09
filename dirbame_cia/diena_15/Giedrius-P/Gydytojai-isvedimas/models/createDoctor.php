<?php
// test
// print_r( $_POST );
session_start();
// Idedam nauja daktara !
require_once('doctor-functions.php');
createDoctor($_POST['vardas'], $_POST['pavarde']);
$_SESSION['massage'] ="Vardas: ".$_POST['vardas']." Pavarde: ".$_POST['pavarde']." Gydytojas sukurtas sekmingai!";
header('Location: ../view/page-results.php');
 ?>
