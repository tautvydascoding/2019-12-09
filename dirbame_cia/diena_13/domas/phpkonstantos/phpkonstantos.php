<?php
// php konstantos
define('DB_PAVADINIMAS', 'hospital12');
define('DB_TIPAS', 'localhost');
define('MYSQL_USER_VARDAS', 'root');
define('MYSQL_USER_PASS', 'root');
// 0 isjungta; 1- rodo pagrindiniai; 2- rodo visus

function getPrisijungimas() {

    //mysqli_connect ([$host, $user, $password, $database, $Mysql_port, $socket])

    $prisijungimas = mysqli_connect(DB_TIPAS, MYSQL_USER_VARDAS, MYSQL_USER_PASS, DB_PAVADINIMAS);

    if ($prisijungimas == false) {
          echo "ERROR: nepavyko prisijungti prie DB !!! <br>";
          echo mysqli_connect_error($prisijungimas);
          return NULL;

    } else {



      echo "Prisijungiau prie DB! <br>";
      return $prisijungimas;

    }



}
getPrisijungimas();

function getDoctor($nr){

  $manoSQL = "SELECT * FROM doctors WHERE id = '$nr'";
  $rezultatai = mysqli_query(getPrisijungimas(), $manoSQL);
  //test
  echo "</hr>";
  print_r($rezultatai);
  $rezultataiArray = mysqli_fetch_assoc($rezultatai);
  return $rezultataiArray;
}
  $gydytojas1 = getDoctor(2);
  $gydytojas2 = getDoctor(4);
  $gydytojas3 = getDoctor(6);

  print_r($gydytojas1);
  echo "</hr>";
  print_r($gydytojas2);
  echo "</hr>";
  print_r($gydytojas3);
  echo "</hr>";

  function getDoctors($kiekis = 99999){

    $manoSQL = "SELECT * FROM doctors LIMIT = $kiekis";
    $rezultatai = mysqli_query(getPrisijungimas(), $manoSQL);
    //test

    return $rezultatai;
  }

  //tetst
$visiGydytojai = getDoctors();

// visu gyd isvedimas
$gyd = mysqli_fetch_assoc($visiGydytojai); // is visu paimame viena
while ($gyd = mysqli_fetch_assoc($visiGydytojai)){
  echo $gyd['name'] . "<br>";
  echo "{$gyd['name']} {$gyd['lname']} <br>";
  echo "$gyd[name] $gyd[lname] <br>";
  echo $gyd['name']. " " . $gyd['lname'] . "<br>";
  $gyd = mysqli_fetch_assoc($visiGydytojai);
}




function createDoctor($vard, $pavard) {

  $vard = htmlspecialchars($vard, ENT_QUOTES);
  $pavard = htmlspecialchars($pavard, ENT_QUOTES);

$manoSQL = "INSERT INTO doctors VALUES(null, $vard, $pavard)";

$arPavyko = mysqli_query(getPrisijungimas(), $manoSQL);
if($arPavyko == false && 'DEBUG_MODE' > 0){
echo "ERROR: nepavyko sukurti naujo gydytojo DB-je !!!<br>";
echo mysqli_error(getPrisijungimas());//neveikia

}
}

function deleteDoctor($nr){
$manoSQL = "DELETE FROM doctors WHERE id = $nr";
$arPavyko = mysqli_query(getPrisijungimas(), $manoSQL);
if($arPavyko == false && 'DEBUG_MODE' > 0){

  echo "ERROR nepavyko istrinti gydytojo </hr>";
  echo mysqli_error(getPrisijungimas());//neveikia
}

}

function updateDoctor($nr, $vard, $pavard){

$manoSQL = "UPDATE doctros SET name = '$ard',
                              lname = $pavard'
                              WHERE id = '$nr'
                              LIMIT 1";
    echo "ERROR: nepavyko redaguoti: $nr gydytojo DB-je!!! </hr>";
    echo mysql_error(getPrisijungimas()); // neveikia

}





createDoctor('Petras', 'Uzurpavicius');
createDoctor('Antanas', 'Kalkinas');

getDoctor(1);
?>
