
<?php
include('../models/doctor-functions.php');
$x = $_GET['nr'];
deleteDoctor($x);
echo "pavyko istrinti <br>";
