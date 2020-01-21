<?php
define( 'DB_PAVADINIMAS',    'sport_programs' );
define( 'DB_TIPAS',          'localhost' );
define( 'MYSQL_USER_VARDAS', 'root' );
define( 'MYSQL_USER_PASS',   '' );

// 0 isjungta; 1- rodo pagrindiniai; 2- rodo visus pranesimus
define( 'DEBUG_MODE',   '1' );

$prisijungimas =  mysqli_connect( DB_TIPAS, MYSQL_USER_VARDAS, MYSQL_USER_PASS, DB_PAVADINIMAS);
// 1) html/php faile nustatyt meta tag utf-8
// 2) DB-je nustatyti collation   UTF-8 general_ci arba unicode_ci

// 3) MYsql lietuviskos kalbos nustaytmas
mysqli_set_charset($prisijungimas, "UTF8"); // !!! UTF8 be jokio "-"

function getPrisijungimas() {
// paskelbiu, kad noriu prieiti prie globalaus kintamojo $prisijungimas
global $prisijungimas;

// mysqli_connect( [$host, $user, $password, $database, $Mysql_port, $socket]);
if ($prisijungimas == false) {
        if (DEBUG_MODE > 0) {
            echo "ERROR: nepavyko prisijungti prie DB !!!! <br>";
            echo  mysqli_connect_error($prisijungimas);
        }
        return NULL;
} else {
        if (DEBUG_MODE > 1) {
            echo "Pisijungiau prie DB! <br>";
        }
        return $prisijungimas;
}
}

//getPrisijungimas();  //test
