<?php
require_once('../models/del_Good.php');


     $x = $_GET['y'];

      deleteGood($x); // MYSQL objektas
    header("location:../Admin.php");
?>
