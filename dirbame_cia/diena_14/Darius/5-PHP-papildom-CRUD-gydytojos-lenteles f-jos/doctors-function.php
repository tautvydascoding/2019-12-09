<?php

// PHP kontantos

define('DB_PAVADINIMAS', 'hospital12');
define('DB_TIPAS', 'localhost');
define('MYSQL_USER_VARDAS', 'root');
define('MYSQL_USER_PASS', 'root');
define('DEBUG_MODE', '0');

$DEBUG_MODE = 0; // 0 isjungta; 1- rodo pagrindinius; 2-rodo visus pranesimus


$prisijungimas = mysqli_connect (DB_TIPAS, MYSQL_USER_VARDAS, MYSQL_USER_PASS, DB_PAVADINIMAS);  // prijungimas ziuri ar ivyko prisijungimas, kaip irodymas
mysqli_set_charset($prisijungimas, "UTF-8");
function getPrisijungimas(){
global $prisijungimas; // noriu prieti prie globaliu kintamuju


// mysqli_connect( [$host, $user, $password, $database, $port, $socket]) JEI NAUDOJAMAS DEFAULT PORT, SOCKET TAI JI DRAUDZIAMA NURODYTI

if ($prisijungimas != true)
{ if (DEBUG_MODE > 0)
  {
  echo "Erorr: nepavyko prisijungti prie DB !!! <br>";
  echo mysqli_connect_error($prisijungimas); // si funkcija parodo kas yra negerai
  }
  return NULL;
} else {
      if (DEBUG_MODE > 1) {
          echo "prisijungti pavyko <br>";
        }
      return $prisijungimas;
    }
}

//getPrisijungimas();

// return grazina masyva;
// $nr norimo gydytojo "id" is duomenu bazes;
// grazina konkretu gydytojo duomenis is DB


function getDoctor($nr){

  $vardas=htmlspecialchars($vardas, ENT_QOUTES); //uzkoduosim simbolius apsaugai
  $pavarde=htmlspecialchars($pavarde, ENT_QOUTES); //uzkoduosim simbolius

  // !visada patestuoti SQL
  $manoSQL = "SELECT * FROM doctors WHERE id = '$nr' ";
  $rezultataiMysqlObjekt = mysqli_query(getPrisijungimas(), $manoSQL);
  //gmp_test
  print_r($rezultataiMysqlObjekt);
  // is Mysqli objekto paimame viena eilute ir paverciame i array
  $rezultataiArray = mysqli_fetch_assoc($rezultataiMysqlObjekt); // grazina lenteles pirma eilute i masyva, dar karta leidziant atspausdin seknacia lenteles eilute
  //echo "<hr>";
  // gmp_test
//  print_r($rezultataiArray);
return $rezultataiArray;
}


// $kiekis kiek gydytoju paimt? jei niekur nerasysiste tai visus
// return Mysql Objekta
function getDoctors($kiekis = 9999){

  // $vardas=htmlspecialchars($vardas, ENT_QOUTES); //uzkoduosim simbolius apsaugai
  // $pavarde=htmlspecialchars($pavarde, ENT_QOUTES); //uzkoduosim simbolius

  // !visada patestuoti SQL
  $manoSQL = "SELECT * FROM doctors Limit $kiekis ";
  $rezultataiMysqlObjekt = mysqli_query(getPrisijungimas(), $manoSQL);

  //echo "<hr>";
  // gmp_test
//  print_r($rezultataiArray);
return $rezultataiMysqlObjekt;
}

$visiGydytojai = getDoctors(); //MYSQL objektas
// print_r($visiGydytojai);
//visus gydytoju isvedimas

$gyd = mysqli_fetch_assoc($visiGydytojai); //is visu paimame 1
while ($gyd)
{
  echo $gyd['name'] . " " . $gyd['lname'] . "<br>";
  $gyd = mysqli_fetch_assoc($visiGydytojai); //is visu paimame sekanti gydytoja, veikia kaip i++
}
//testuojam
// $gydytojas1 = getDoctor(2);
// $gydytojas2 = getDoctor(3);
// $gydytojas3 = getDoctor(5);


// print_r($gydytojas1);
// echo "<hr>";
// print_r($gydytojas2);
// echo "<hr>";
// print_r($gydytojas3);
// echo "<hr>";

// function createDoctor($vardas, $pavarde)
// {
//   $manoSQL = "Insert INTO doctors VALUES (NULL, '$vardas', '$pavarde')";
//
// $arPavyko = mysqli_query(getPrisijungimas(), $manoSQL);
//   if ($arPavyko == false && DEBUG_MODE > 0)
//   { echo "Eror: nepavyko sukurti naujo gydytojo <br>";
//     echo mysqli_error($prisijungimas());
//   }
// }
//   createDoctor('Petras',  'Petruskas');
//  createDoctor('Antanas',  'Kalkinas');


//$nr - duomenu bazeje esancio gydytojo numeris

// function deleteDoctor($nr)
// {
// $manoSQL= "DELETE FROM doctors WHERE id = '$nr' ";
//  mysqli_query(getPrisijungimas(), $manoSQL);
// }
// deleteDoctor(5);
//nuo sios minutes galima naudoti mysql querry

function updateDoctor($nr, $vardas, $pavarde)
{
$manoSQL="UPDATE doctors
SET
name = '$vardas',
lname = '$pavarde'
WHERE id = '$nr'
Limit 1";
 mysqli_query(getPrisijungimas(), $manoSQL);
}


updateDoctor(8, 'Darius', 'Daraitis');
