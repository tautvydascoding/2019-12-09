<?php



//get data passed to from main.js script
$username =  $_POST["name"];
// su apsauga nuo hackinimo:
$username = htmlspecialchars(strip_tags($_POST["name"]), ENT_QUOTES);


//=============return "STRING"=================
// echo "vardas: " . $username . " vietove: " . $_POST['location']  ;
//    OR
//============ return json objekta=================
$x = $_POST["name"];

$manoAray = ['vardas' => $x, 'vietove' => $_POST['location'], 'amzius' => $_POST['age']  ];
echo json_encode( $manoAray );
