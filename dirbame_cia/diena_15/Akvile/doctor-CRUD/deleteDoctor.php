<?php
require('models/doctor.php');

$id = $_GET['id'];

deleteDoctor($id);

header("Location: allDoctors.php");
