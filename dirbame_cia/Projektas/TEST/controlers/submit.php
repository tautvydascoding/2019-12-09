<?php

  // PHP konstantos
  define( 'DB_PAVADINIMAS',    'solar_shop' );
  define( 'DB_TIPAS',          'localhost' );
  define( 'MYSQL_USER_VARDAS', 'root' );
  define( 'MYSQL_USER_PASS',   'root' );
  // 0 isjungta; 1- rodo pagrindiniai; 2- rodo visus pranesimus
  define( 'DEBUG_MODE',   '1' );


    $connect =  mysqli_connect( DB_TIPAS, MYSQL_USER_VARDAS, MYSQL_USER_PASS, DB_PAVADINIMAS);
    // 1) html/php faile nustatyt meta tag utf-8
    // 2) DB-je nustatyti collation   UTF-8 general_ci arba unicode_ci
    // 3) MYsql lietuviskos kalbos nustaytmas
    mysqli_set_charset($connect, "UTF8"); // !!! UTF8 be jokio "-"


     function getConnection() {
         // paskelbiu, kad noriu prieiti prie globaliaus kintamojo $connect
         global $connect;

         // mysqli_connect( [$host, $user, $password, $database, $Mysql_port, $socket]);
         if ($connect == false) {
                 if (DEBUG_MODE > 0) {
                     echo "ERROR: nepavyko prisijungti prie DB !!!! <br>";
                     echo  mysqli_connect_error($connect);
                 }
                 return NULL;
         } else {
                 if (DEBUG_MODE > 1) {
                     echo "Pisijungiau prie DB! <br>";
                 }
                 return $connect;
         }

     }


     if (isset($_GET['pateikti']))
     {
function insertRegis($name, $e_mail, $password) {
    // uzkoduojam renklus:' " <

    $name     = htmlspecialchars($name,    ENT_QUOTES );
    $e_mail   = htmlspecialchars($e_mail,     ENT_QUOTES );
    $password = htmlspecialchars($password,      ENT_QUOTES );




    $manoSQL = "INSERT INTO registration_db VALUES(NULL,
        '$name', NULL, NULL, NULL, NULL, NULL, NULL, NULL,  '$e_mail', '$password')
               ";
    $arPavyko = mysqli_query(getConnection(), $manoSQL);
    if ($arPavyko == false &&  DEBUG_MODE > 0) {
            echo "ERROR: nepavyko sukurti naujos prekės, kurios pavadinimas yra: $name DB-je !!!! <br>";
            echo  mysqli_error(getConnection()); // neveikia, matyt nes naujas MYSQL serveris
    }
}



$name = $_GET['name'];
$e_mail = $_GET['e_mail'];
$password = $_GET['password'];


insertRegis($name, $e_mail, $password);
}
?>
<a align="center" class="btn bg-warning" href='../index.php' method='get'>Grįžti</a>

<?php


echo "pavyko iterpti nauja preke <br>";

 ?>
