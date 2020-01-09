<?php
require_once('doctor-functions.php');
deleteDoctor( $_GET['id'] );
header('Location: ../view/page-results.php');
 ?>
