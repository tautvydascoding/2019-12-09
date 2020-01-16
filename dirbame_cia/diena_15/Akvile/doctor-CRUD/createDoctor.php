<?php
require('models/doctor.php');

$name = $_POST['name'];
$lastname = $_POST['lastname'];


createDoctor($name, $lastname);

header("Location: allDoctors.php");

die;

// print_r($_SERVER['REQUEST_URI']);
// print_r($GLOBALS);
