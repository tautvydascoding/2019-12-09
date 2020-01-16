<?php
session_start();
include('models/doctor-functions.php');
$vard = $_GET['vardas'];
$pavard = $_GET['pavarde'];
createDoctor($vard, $pavard);
$_SESSION["naujoGydAlert"] = "<script>alert('Naujas gydytojas sukurtas')</script>";
header('Location: index.php');
