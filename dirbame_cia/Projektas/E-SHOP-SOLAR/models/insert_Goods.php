<?php

function insertGood($g_name, $price, $disc, $pos, $amount, $bool) {
    // uzkoduojam renklus:' " <

    $g_name     = htmlspecialchars($g_name,    ENT_QUOTES );
    $price      = htmlspecialchars($price,     ENT_QUOTES );
    $disc       = htmlspecialchars($disc,      ENT_QUOTES );
    $pos        = htmlspecialchars($pos,       ENT_QUOTES );
    $amount     = htmlspecialchars($amount,    ENT_QUOTES );
    $bool       = htmlspecialchars($bool  ,    ENT_QUOTES );


    $manoSQL = "INSERT INTO goods VALUES(NULL,
        '$g_name', NULL, NULL, '$price', '$disc', '$pos', '$amount', '$bool')
               ";
    $arPavyko = mysqli_query(getConnection(), $manoSQL);
    if ($arPavyko == false &&  DEBUG_MODE > 0) {
            echo "ERROR: nepavyko sukurti naujos prekės, kurios pavadinimas yra: $g_name DB-je !!!! <br>";
            echo  mysqli_error(getConnection()); // neveikia, matyt nes naujas MYSQL serveris
    }
}
// test
// createDoctor('Petras', 'Uzurpatorius');
// createDoctor('Antanas', 'Kalkinas');

// $nr - duomenu bazeje esancio gydytojo numeris

 ?>
