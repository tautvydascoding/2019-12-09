<?php

  // php konstantos
  define( 'DB_PAVADINIMAS',    'hospital12');
  define( 'DB_TIPAS',          'localhost');
  define( 'MYSQL_USER_VARDAS', 'root');
  define( 'MYSQL_USER_PASS',   'root');
  define( 'DEBUG_MODE',   '0');   // 0 - isjungta, 1 - rodo pagrindines, 2 - rodo visas


// mysqli_connect( [$host, $user, $password, $database, $port, $socket])
// mysqli_connect iskeliamas is funkcijos kad jungtusi prie duombazes tik viena karta o ne kaskart kvieciant funkcija
$prisijungimas = mysqli_connect( DB_TIPAS, MYSQL_USER_VARDAS, MYSQL_USER_PASS, DB_PAVADINIMAS);
// lt kalbos nustatymas mysqli
mysqli_set_charset($prisijungimas, "UTF8");   //UTF8 rasomas be minuso!!!

function getPrisijungimas() {
  // paskelbi kad nori prieiti prie globaliu kintamuju, taciau NEGALIMA KEISTI JU REIKSMIU SITOJE EILUTEJE!!!!!
  global $prisijungimas;
  if ($prisijungimas == false) {
      if (DEBUG_MODE > 0) {
        echo "ERROR === prisijungti nepavyko";
        echo mysqli_connect_error($prisijungimas);
        }
      return NULL;
  } else {
      if (DEBUG_MODE > 1) {
        echo "prisijungimas pavyko";
        }
      return $prisijungimas;
  }
}
// getPrisijungimas();



// grazina konkretaus gydytojo duomenis
// $nr - laukia numerio t.y. konkretus id is DB
// return - grazina masyva
function getDoctor($nr) {
  $manoSQL = "SELECT * FROM doctors WHERE id = '$nr' ";
  $resultsMysqlObjekt = mysqli_query(getPrisijungimas(), $manoSQL);
  // test
  // print_r($resultsMysqlObjekt);
  // is mysqli objekto paimame viena eilute ir paverciame i array
  $resultsArray = mysqli_fetch_assoc($resultsMysqlObjekt);
  // test
  //print_r($resultsArray);
  return $resultsArray;
}
// testai
// for ($i=0; $i < 8; $i++) {
//   $daktaras = getDoctor($i);
//   print_r($daktaras);
//   echo "<hr>";
// }

// $vardas $pavard naujojo daktaro vardas ir pavarde
function createDoctor($vardas, $pavard) {
  $manoSQL = "INSERT INTO doctors VALUES (NULL, '$vardas', '$pavard') ";
  $idejimas = mysqli_query(getPrisijungimas(), $manoSQL);
  if ($idejimas == false && DEBUG_MODE > 0) {
    echo "ERROR!!!!! NEpavyko sukurti $vardas $pavard gydytojo duomenu bazeje";
  }
}


// $nr norimo istrinti daktaro id nr;
function deleteDoctor($nr) {
  $manoSQL = "DELETE FROM doctors WHERE id = '$nr' ";
  $trynimas = mysqli_query(getPrisijungimas(), $manoSQL);
  if ($trynimas == false && DEBUG_MODE > 0) {
    echo "ERROR!!!!! NEpavyko istrinti gydytojo nr: $nr is duomenu bazes";
  }
}

// $nr --- norimo reedaguoti daktaro id, $vardas ir $pavard -- naujas vardas ir pavarde
function updateDoctor($nr, $vardas, $pavard) {
  $manoSQL = "UPDATE doctors SET name = '$vardas', lname = '$pavard' WHERE id = '$nr' LIMIT 1 ";
  $updatas = mysqli_query(getPrisijungimas(), $manoSQL);
  if ($updatas == false && DEBUG_MODE > 0) {
    echo "ERROR!!!! NEpavyko redaguoti gydytojo nr: $nr";
  }
}
