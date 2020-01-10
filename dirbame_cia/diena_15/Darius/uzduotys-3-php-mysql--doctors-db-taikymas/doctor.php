
<?php

require_once('models/doctor-functions.php');
//print_r($_GET);
$x = $_GET['id'];
$gydytojas = getDoctors($x);

echo $x;





 ?>
