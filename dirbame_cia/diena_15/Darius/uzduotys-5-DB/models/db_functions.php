<?php

define ('DB_TIPAS', 'localhost');
define ('MYSQL_USER_NAME', 'root');
define ('MYSQL_USER_PASS', 'root');
define ('DB_NAME', 'klinika');
 // Ji yra norima matyti išvedamas klaidas tai tam naudojama ši funkcija
define ('DEBUG_MODE', '1');

$connection = mysqli_connect(DB-TIPAS, MYSQL_USER_NAME, MYSQL_USER_PASS, DB_PAVADINIMAS);

mysqli_set_charset($connection, "UTF8");


function getConnection()
  {
  global $connection;

  if ($connection == false){
    if (DEBUG_MODE > 0)
    {
      echo "Klaida!!! nepavyko prisijungti prie Duomenų bazes <br>";
      echo mysqli_connect_error($connection);
    }
    return NULL;
  } else {
    if (DEBUG_MODE > 1)
    {
      echo "Prie Duomenų bazės prisijungimas įvyko <br>"
    }
    return $connection;
  }
}

function getDoctor($nr)
{
  $MySQL = "SELECT * FROM gydytojai WHERE id = '$nr'";
  $resultsMySQLObject = mysqli_query($getConnection(), $MySQL);

  $resulrArray = mysqli_fetch_assoc($resultsMySQLObject);
  return $resulrArray;
}
 ?>
