<?php

 // PHP konstantos

 define('DB_NAME', 'hospital12');
 define('DB_TYPE', 'localhost');
 define('MYSQL_USER_NAME', 'root');
 define('MYSQL_USER_PASS', 'root');

 // mysqli_connect( [$host, $user, $password, $database, $port, $socket]);
 // Jeigu naudojamas default mysql portas, tai jo nereikia isvis nurodyti!!!

 define('DEBUG_MODE', '0'); //0 - isjungta, 1 - rodo pagrindinius, 2 - rodo visus pranesimus

$prisijungimas = mysqli_connect(DB_TYPE, MYSQL_USER_NAME, MYSQL_USER_PASS, DB_NAME);

// 1) html faile nustatyti utf8 koduote
// 2) duomenu bazeje nustatyti UTF-8_general_ci koduote

// 3) mysql lietuviskos kalbos nustatymas
mysqli_set_charset($prisijungimas, "UTF8"); // UTF8 rayti be jokio bruksnio!!!

 function getPrisijungimas() {

 global $prisijungimas;

     if (!$prisijungimas) {
         if (DEBUG_MODE > 0 ) {
         echo "ERROR: nepavyko prisijungti prie DB!!! <br>";
         echo mysqli_connect_error($prisijungimas);
     }
         return NULL;
     } else {
         if (DEBUG_MODE > 1) {
             echo "Prisijungiau prie duomenu bazes <br>";
         }
         return $prisijungimas;
     }
 }

 getPrisijungimas();


 function getDoctors($kiekis = 999999) {
     $manoSQL = " SELECT * FROM doctors LIMIT $kiekis";
     $rezultataiMySqlObj = mysqli_query(getPrisijungimas(), $manoSQL);
     // testas

     return $rezultataiMySqlObj;
 }

 // $visiGydytojai = getDoctors();
 // visu gydytoju isvedimas
 // $gyd = mysqli_fetch_assoc($visiGydytojai); // is visu paimame pirma
 //
 // while ($gyd) {
 //     echo $gyd['Name'] . "<br>";
 //      // echo "$gyd[Name] <br>";
 //     $gyd = mysqli_fetch_assoc($visiGydytojai);
 // }

 // print_r(getDoctors(3));
// grazina konkretaus gydytojo duomenis
// return -grazina masyva
// $nr - norimo gydytojo id is duomenu bazes

function getDoctor($nr) {
    $manoSQL = " SELECT * FROM doctors WHERE ID = '$nr' ";
    $rezultataiMySqlObj = mysqli_query(getPrisijungimas(), $manoSQL);
    // testas
    // print_r($rezultaitaiArray);
    $rezultaitaiArray = mysqli_fetch_assoc($rezultataiMySqlObj);
    return $rezultaitaiArray;
}

// Teastavimas
//  ------------
// $gydytojas1 = getDoctor(1);
// $gydytojas2 = getDoctor(2);
// $gydytojas3 = getDoctor(3);
//
// print_r($gydytojas1);
// echo "<hr>";
// print_r($gydytojas2);
// echo "<hr>";
// print_r($gydytojas3);
// echo "<hr>";

function createDoctor($vard, $pavard) {
    $vard = htmlspecialchars($vard, ENT_QUOTES);
    $pavard = htmlspecialchars($pavard, ENT_QUOTES);
    $kurtiNaujaGydytoja = "INSERT INTO doctors VALUES (NULL, '$vard', '$pavard')";
    $arPavyko = mysqli_query(getPrisijungimas(), $kurtiNaujaGydytoja);
    if (!$arPavyko && DEBUG_MODE > 0 ) {
        echo "ERROR: nepavyko sukurti naujo gydytojo!!! <br>";
        // echo mysqli_error(getPrisijungimas()); nebeveikianti funcija
}
}

// createDoctor('Petras', 'Petrovicius');
// createDoctor('Antanas', 'Kalkinas');

function deleteDoctor($nr) {
    $trintiGydytoja = "DELETE FROM doctors WHERE ID = '$nr' ";
    $rezultataiMySqlObj = mysqli_query(getPrisijungimas(), $trintiGydytoja);

    if (!$rezultataiMySqlObj && DEBUG_MODE > 0 ) {
        echo "ERROR: nepavyko istrinti gydytojo!!! <br>";
        // echo mysqli_error(getPrisijungimas()); nebeveikianti funcija
}
}

// deleteDoctor(7);
// deleteDoctor(8);
// deleteDoctor(9);

function updateDoctor($nr, $vard, $pavard) {
    $keistiGydytoja = "UPDATE doctors SET Name = '$vard', LastName = '$pavard' WHERE ID = '$nr' LIMIT 1";
    $rezultataiMySqlObj = mysqli_query(getPrisijungimas(), $keistiGydytoja);

    if (!$rezultataiMySqlObj && DEBUG_MODE > 0 ) {
        echo "ERROR: nepavyko pakeisti gydytojo!!! <br>";
        // echo mysqli_error(getPrisijungimas()); nebeveikianti funcija
}
}

// updateDoctor(5, 'Jonas', 'Joniukas');
