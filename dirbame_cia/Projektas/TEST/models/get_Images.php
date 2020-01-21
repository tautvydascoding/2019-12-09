<?php
include('models/getConnection.php');
function getImages() {
    // ! visada patestuoti SQL terminale !!
     $manoSQL = "SELECT * FROM figures  LIMIT 50 ";
     $resultsMysqlObjek = mysqli_query(getConnection(), $manoSQL);

     return $resultsMysqlObjek;

}




 ?>
