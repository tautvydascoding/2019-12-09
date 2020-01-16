<?php
include('models/doctor-functions.php');
$nr = $_GET['id'];
deleteDoctor($nr);
