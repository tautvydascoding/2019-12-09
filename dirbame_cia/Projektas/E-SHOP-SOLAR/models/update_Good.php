<?php

function updateGood($g_name, $price, $discount, $pos, $amount, $bool) {
    // uzkoduojam renklus:' " <

    $good_name  = htmlspecialchars($g_name,    ENT_QUOTES );
    $price      = htmlspecialchars($price,     ENT_QUOTES );
    $discount   = htmlspecialchars($disc,      ENT_QUOTES );
    $pos        = htmlspecialchars($pos,       ENT_QUOTES );
    $amount     = htmlspecialchars($amount,    ENT_QUOTES );
    $bool       = htmlspecialchars($bool,      ENT_QUOTES );



    $manoSQL = "UPDATE  goods
                        SET
                            good_name = '$g_name',
                            description = NULL,
                            type = NULL,
                            price = '$price',
                            discount = '$disc',
                            position = '$pos',
                            amount = '$amount',
                            show = '$amount',
                        WHERE id = '$bool'
                        LIMIT 1
                ";
    $arPavyko = mysqli_query(getConnection(), $manoSQL);
    if ($arPavyko == false &&  DEBUG_MODE > 0) {
            echo "ERROR: nepavyko redaguoti: $nr prekės DB-je !!!! <br>";
     }
}

 ?>
