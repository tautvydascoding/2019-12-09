<?php

// Konstantos:
 DEFINE('NAME', "hospital2");
 DEFINE('PASSWORD', "tratata");  // arba root
 DEFINE('HOST', "localhost");
 DEFINE('USER', "tautvydas");  // arba root

$prisijungimas = mysqli_connect(HOST,  USER, PASSWORD, NAME );

// ar pavyko prisijungti prie DB
if ($prisijungimas) {
    // echo "Prisijungti prie DB pavyko.<BR />";
} else {
    echo "ERROR: Prisijungti prie DB nepavyko.<BR />" . mysqli_connect_error();
}
mysql_set_charset('utf8');

function getPrisijungimas() {
    global $prisijungimas;
    return $prisijungimas;
}


function getDoctor($nr){
    $manoSQL = "SELECT * FROM doctors WHERE id = $nr ";
    // mysqli_query - ivykdo komandas (SQL kalba)
    $rezultatai = mysqli_query(  getPrisijungimas(),    $manoSQL );

    // print_r( $rezultatai  );
    $rezultatai_masyvas = mysqli_fetch_assoc(  $rezultatai);
    // print_r( $rezultatai_masyvas  );
    return $rezultatai_masyvas;
}
// testuojam
// $pirmasGydytojas = getDoctor(3);
// print_r(  $pirmasGydytojas );
//
// $pirmasGydytojas = getDoctor(1);
// print_r(  $pirmasGydytojas );

// 5. createDoctor($vardas, $pavarde)
function createDoctor($vardas, $pavarde) {
    $manoSQL = "INSERT INTO doctors
                       VALUES (NULL, '$vardas', '$pavarde') "   ;
    $arPavyko = mysqli_query( getPrisijungimas(),  $manoSQL   );
    if ($arPavyko == NULL) {
        echo "ERROR. sukurti gydytojo $vardas, $pavarde NEPAVYKO. "
                . mysqli_error(  getPrisijungimas()  );
        // mysqli_error - is DB paima klaida
    }
}

// createDoctor("Gita", "Gitaitiene");
// createDoctor("Morta", "Mortaitiene");
// createDoctor("Jura", "Juriene");

// 6. deleteDoctor($nr)
function deleteDoctor($nr) {
    $manoSQL = "DELETE FROM doctors WHERE id = '$nr'   LIMIT 1 ";
    $arPavyko = mysqli_query( getPrisijungimas(),  $manoSQL   );
    if ($arPavyko == NULL) {
        echo "ERROR. istrinti gydytojo $nr NEPAVYKO. " . mysqli_error(  getPrisijungimas()  );
        // mysqli_error - is DB paima klaida
    }
}
// deleteDoctor(12);


// 7. updateDoctor($nr, $vardas, $pavarde)
function updateDoctor($nr, $vardas, $pavarde) {
    $manoSQL = "UPDATE doctors SET  name = '$vardas',
                                    lname = '$pavarde'
                               WHERE id = '$nr'
                               LIMIT 1
               ";
   $arPavyko = mysqli_query( getPrisijungimas(),  $manoSQL   );
   if ($arPavyko == NULL) {
       echo "ERROR. pakeisti gydytojo $nr NEPAVYKO. " . mysqli_error(  getPrisijungimas()  );
       // mysqli_error - is DB paima klaida
   }
}
// updateDoctor(15, "Gita", "Hounteriene");

// 8. getDoctors($kiekGydytoju=99999)
function getDoctors($kiekGydytoju = 99999){
    $manoSQL = "SELECT * FROM doctors
                         ORDER BY  id   DESC
                         LIMIT  $kiekGydytoju
                ";
    // mysqli_query - ivykdo komandas (SQL kalba)
    $rezultatai = mysqli_query(  getPrisijungimas(),    $manoSQL );

    return $rezultatai; // mysqli tipo OBJEKTAS - NE masyvas
}
// testuojam
// $visiGydytojai = getDoctors();
//             // mysqli_fetch_assoc- is visu gydytoju paimama viena eilute ir paverciama i ARRAY
// $gydytojas =  mysqli_fetch_assoc( $visiGydytojai   );
// while ( $gydytojas != NULL ) { // ar turim gydytojo duomenu
//     print_r(  $gydytojas  );
//     echo "<hr />";
//     $gydytojas =  mysqli_fetch_assoc( $visiGydytojai   ); // ima VIS SEKANTI gydytoja is objekto
// }

// neuzdarom PHP   nes    kad nebutu   tarpu simboliu
