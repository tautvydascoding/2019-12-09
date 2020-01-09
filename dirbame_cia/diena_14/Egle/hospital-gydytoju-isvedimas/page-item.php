<?php
require_once('models/doc-functions.php');


$gyd = getDoctor( $_GET['id'] );

echo $gyd['name'] . " " . $gyd['lname'];
