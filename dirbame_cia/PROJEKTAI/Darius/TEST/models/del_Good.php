<?php
require_once('getConnection.php');
function deleteGood($nr) {
    // uzkoduojam renklus:' " <
    $nr =   htmlspecialchars($nr, ENT_QUOTES );

    $manoSQL = "DELETE FROM goods WHERE id = '$nr'  LIMIT 1 ";
    $arPavyko = mysqli_query(getConnection(), $manoSQL);
    if ($arPavyko == false &&  DEBUG_MODE > 0) {
            echo "ERROR: nepavyko istrinti: $nr prekes DB-je !!!! <br>";
     }
}
 ?>
