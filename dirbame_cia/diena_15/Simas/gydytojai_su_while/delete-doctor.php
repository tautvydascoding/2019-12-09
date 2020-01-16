<?php
include('models/doctor-functions.php');
// print_r($_GET);
$nr = $_GET['nr'];
deleteDoctor($nr);
