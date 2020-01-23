<?php
include_once('getConnection.php');
function getMeniu() {
    // ! visada patestuoti SQL terminale !!
     $manoSQL = "SELECT * FROM main_meniu  LIMIT 50 ";
     $resultsMysqlObjek = mysqli_query(getConnection(), $manoSQL);

     return $resultsMysqlObjek;

}




 ?>
