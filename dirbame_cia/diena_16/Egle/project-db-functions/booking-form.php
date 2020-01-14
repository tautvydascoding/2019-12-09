

<?php

require_once('models/functions.php');
session_start();





$name = $_GET['name'];
$surname = $_GET['surname'];
$email = $_GET['email'];
$phone = $_GET['phone'];
$orderDate = $_GET['date'];
$peopleNumber = $_GET['peopleNumber'];
$comment = $_GET['comment'];
$productID = $_GET['productID'];



createCustomer($name, $surname, $email, $phone, $comment,  $peopleNumber, $orderDate, $productID);



// sukurti funkcija, kuri tikrina ar createCustmer suveike!! Jeigu taip - isvest session



echo $_SESSION["a"];


//redirect:
header('Location: index.php');




exit;
