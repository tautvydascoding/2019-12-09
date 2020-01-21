<?php
// include('prisijungimas-db.php');
include('../models/questions.php');

// reikia session_start
session_start();

 $x = $_GET['id']; //kur yra linkas su button

deleteQuestion($x);


$_SESSION['delete'] = "<h5 class='alert alert-success justify-content-center d-flex align-items-center'> Question DELETED  </h5>";

//dar reikia location - redirect

header("Location: ../page-admin-questions.php");
