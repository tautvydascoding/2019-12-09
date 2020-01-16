<?php
require_once('doctor-functions.php');
print_r($_GET);
echo "neveikia";
deleteDoctor( $_POST['id'] );
header('Location: ../view/page-results.php');
echo "True";
 ?>
