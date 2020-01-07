<?php

    // PHP konstantos
    define( 'DB_PAVADINIMAS',    'hospital12' );
    define( 'DB_TIPAS',          'localhost' );
    define( 'MYSQL_USER_VARDAS', 'root' );
    define( 'MYSQL_USER_PASS',   'root' );
    // 0 isjungta; 1- rodo pagrindiniai; 2- rodo visus pranesimus
    define( 'DEBUG_MODE',   '1' );

function getPrisijungimas() {
    // mysqli_connect( [$host, $user, $password, $database, $Mysql_port, $socket]);
    $prisijungimas =  mysqli_connect( DB_TIPAS, MYSQL_USER_VARDAS, MYSQL_USER_PASS, DB_PAVADINIMAS);
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
getPrisijungimas();


//
function getDoctor() {
    
}

//
