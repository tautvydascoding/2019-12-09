<?php
//PHP konstantos
define('DB_PAVADINIMAS', 'hospital12');
define('DB_TIPAS', 'localhost');
define('MYSQL_USER_VARDAS', 'root');
define('MYSQL_USER_PASS', 'root');

// 0 isjungta; 1 rodo pagrindines; 2 rodo visus pranesimus.
define('DEBUG_MODE', 1);

// mysqli_connect( [$host, $user, $password, $database, $port, $socket])
$prisijungimas = mysqli_connect(DB_TIPAS, MYSQL_USER_VARDAS, MYSQL_USER_PASS, DB_PAVADINIMAS);
mysqli_set_charset($prisijungimas, "UTF8"); // ijungia LT kalba mySQL'e
//Prisijungimas prie Db ir debug.
function getPrisijungimas(){
  global $prisijungimas; // paskelbiu, kad noriu prieti prie globalaus kintamojo $prisijungimas
  if ($prisijungimas == false) {
    if (DEBUG_MODE > 0) {
      echo "ERROR: prie DB prisijungti nepavyko <br>";
      echo mysqli_connect_error ($prisijungimas);
          }
    return NULL;
  } else {
    if (DEBUG_MODE > 1) {
      // code...
      echo "Prisijungimas prie DB sekmingas";
    }
    return $prisijungimas;
  }
}
//getPrisijungimas(); //test

//CRUD
//grazina konkretu gydytojo duomenis is DB
//$nr - grazina norimo gydytojo 'id' is DB
//return - grazina masyva
function getDoctor($nr){
  //visada SQL koda pratestuot terminale!!!!
  $manoSQL = "SELECT * FROM doctors WHERE id = '$nr' "; //nepamirst ant variable kabuciu uzdet!
  $rezultataiMysqlObjekt = mysqli_query(getPrisijungimas(), $manoSQL);
  //test
  // print_r ($rezultataiMysqlObjekt);
  //is mysqli objekto paimame viena eilute ir paverciam i array.
  $rezultataiArray = mysqli_fetch_assoc($rezultataiMysqlObjekt);
  // echo "<hr>";
  //test
  // print_r($rezultataiArray);
  return $rezultataiArray;
}
// //testas ar isveda gydytoju array:
//   $gydytojas1 = getDoctor(1);
//   $gydytojas2 = getDoctor(2);
//   $gydytojas3 = getDoctor(3);
//   print_r ($gydytojas1);
//   echo "<br />";
//   print_r ($gydytojas2);
//   echo "<br />";
//   print_r ($gydytojas3);
//   echo "<br />";
function createDoctor($vard, $pavard){
  $vard = htmlspecialchars($vard, ENT_QUOTES); //saugumui; uzkoduoja zenklus.
  $pavard = htmlspecialchars($pavard, ENT_QUOTES); //saugumui; uzkoduoja zenklus.
  $manoSQL = "INSERT INTO doctors
                VALUES (NULL, '$vard', '$pavard')
             ";
  $result = mysqli_query(getPrisijungimas(), $manoSQL);
  if ($result == false && DEBUG_MODE > 0) {
    echo "ERROR: nepavyko sukurti naujo gydytojo DB-je!!! <br>";
    //sitas ifas yra testas
  }
}
// createDoctor('Petras', 'Petraitis');
// createDoctor('Styvas', 'Bardaciokas');

function deleteDoctor($nr){
  $manoSQL = "DELETE FROM doctors WHERE id = '$nr'";
  $result = mysqli_query(getPrisijungimas(), $manoSQL);
  // debug
  if ($result == false && DEBUG_MODE > 0) {
    echo "ERROR: Nepavyko istrinti $nr gydytojo is DB <br>";
  }
}
 //deleteDoctor(6);
function updateDoctor ($nr, $vard, $pavard){
  $nr = htmlspecialchars($nr, ENT_QUOTES);
  $vard = htmlspecialchars($vard, ENT_QUOTES); //saugumui; uzkoduoja zenklus.
  $pavard = htmlspecialchars($pavard, ENT_QUOTES); //saugumui; uzkoduoja zenklus.
  $manoSQL = "UPDATE doctors
                SET
                    name = '$vard',
                    lname = '$pavard'
              WHERE id = $nr
              LIMIT 1
              ";
  $result = mysqli_query(getPrisijungimas(), $manoSQL);
  //debug
  if ($result == false && DEBUG_MODE > 0){
    echo "ERROR: nepavyko redaguoti $nr gydytojo DB-je!";
  }
}
//  updateDoctor(31, "Testas", "Testukas");



function getDoctors($kiekis = 999999) {
  $sql = "Select * FROM doctors LIMIT $kiekis";
  $result = mysqli_query(getPrisijungimas(), $sql);

  return $result;
}
// $gydytojai = getdoctors();
// // print_r($gydytojai);
// //visu gydytoju isvedimas:
// $gyd = mysqli_fetch_assoc($gydytojai);
// while ($gyd){
//   echo $gyd['name'] . $gyd['name'] . "<br />"; //1 budas
//   echo "{$gyd['name']} {$gyd['lname']} <br>"; //2budas
//   echo "$gyd[name] $gyd[lname] <br>"; //3budas
//   //is visu paimam sekanti gydytoja:
//   $gyd = mysqli_fetch_assoc($gydytojai);
// }
