<?php
session_start();
unset($_SESSION['user']);
header("location: ../view/index.php");
