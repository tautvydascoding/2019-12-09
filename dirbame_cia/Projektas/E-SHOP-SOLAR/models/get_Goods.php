<?php
include('models/getConnection.php');
function getGoods() {
    // ! visada patestuoti SQL terminale !!
     $manoSQL = "SELECT * FROM goods  LIMIT 50 ";
     $resultsMysqlObjek = mysqli_query(getConnection(), $manoSQL);

     return $resultsMysqlObjek;

}




 ?>
