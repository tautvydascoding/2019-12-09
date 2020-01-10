<?php
session_start();
include('models/doctor-functions.php');
$nr = $_GET['id'];
$vard = $_GET['vardas'];
$pavard = $_GET['pavarde'];
updateDoctor($nr, $vard, $pavard);
$_SESSION["message"] = "<script>alert('Pakeitimas ivykdytas')</script>";
header('Location: index.php');
