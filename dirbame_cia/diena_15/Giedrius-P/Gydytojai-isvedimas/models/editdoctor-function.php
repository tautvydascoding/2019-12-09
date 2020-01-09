<?php
session_start();
// print_r($_POST);
include_once('doctor-functions.php');
updateDoctor($_POST['id'], $_POST['vardas'], $_POST['pavarde']);
$_SESSION['massage'] ="Gydytojas redaguotas sekmingai !";
header('Location: ../view/page-results.php');
 ?>
