<?php
include('../models/getConnection.php');

function getGood($nr) {
    // ! visada patestuoti SQL terminale !!
     $manoSQL = "SELECT * FROM goods WHERE goods_name = '$nr'  ";
     $resultsMysqlObjek = mysqli_query(getConnection(), $manoSQL);
     //test
     // print_r($rezultataiMysqlObjek);
     // is mysqli objekto paimame viena eilute ir paverciam i array
     $resultsArray = mysqli_fetch_assoc($resultsMysqlObjek);
     //test
     // echo "<hr>";
     // print_r($rezultataiArray);
     return $resultsArray;




 ?>
