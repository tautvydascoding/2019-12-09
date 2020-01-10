<?php
include('models/doctor-functions.php');
$nr = $_GET['nr'];
deleteDoctor($nr);
