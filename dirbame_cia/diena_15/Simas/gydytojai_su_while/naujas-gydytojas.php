<?php
include('models/doctor-functions.php');
$vard = $_GET['vardas'];
$pavard = $_GET['pavarde'];
createDoctor($vard, $pavard);
