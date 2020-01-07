<?php

  //PHP konstantos (prisijungimas prie duomenu bazes)
  define( 'DB_PAVADINIMAS',      'hospital12');
  define( 'DB_TIPAS',            'localhost');
  define( 'MYSQL_USER_VARDAS' ,   'root');
  define( 'MYSQL_USER_PASS' ,     'root');
  //0 isjungta; 1 - rodo pagrindiniai; 2 - rodo visus;
  define( 'DEBUG_MODE',           '1');

  $prisijungimas = mysqli_connect(DB_TIPAS, MYSQL_USER_VARDAS, MYSQL_USER_PASS, DB_PAVADINIMAS);

  //MySql lietuviu kalbos prisijungimas
  mysqli_set_charset(getPrisijungimas(), "UFT8"); // !!!! UFT8 be jokio '-'

  function getPrisijungimas(){
    //noriu prieti prie GLOBALIU kintamuju
    global $prisijungimas;
  if ($prisijungimas == false) {
    echo "ERROR: prisijungti nepavyko prie DB!!! <br>";
    echo mysqli_connect_error($prisijungimas);
    return NULL;
  } else {
    return $prisijungimas;
    };
  }

//getPrisijungimas();

// grazina konkretu gygdtojo duomenis is Db
//$nr - norimo gydytojo 'id' is duomenu bazes
//return - grazina masyva(array)
function getDocter($nr){
  $manoSQL = "SELECT * FROM doctors WHERE id = '$nr' ";
  $rezultataiMysqlObj = mysqli_query(getPrisijungimas(), $manoSQL);
  //testas
  $rezultataiArray = mysqli_fetch_assoc($rezultataiMysqlObj);
  return $rezultataiArray;
}

// $gydytojas1 = getDocter(2);
// $gydytojas2 = getDocter(4);
// $gydytojas3 = getDocter(3);
//
// print_r($gydytojas1);
// echo "<hr>";
// print_r($gydytojas2);
// echo "<hr>";
// print_r($gydytojas3);
// echo "<hr>";

function createDoctor($vardas, $pav) {
  $manoSQL = "INSERT INTO doctors
                  VALUES (NULL, '$vardas', '$pav')
             ";
  $arPavyko = mysqli_query(getprisijungimas(),$manoSQL);
  if($arPavyko == false && DEBUG_MODE > 0){
    echo "ERROR: prisijungti nepavyko sukurti!!! <br>";
    echo mysqli_error(getPrisijungimas());
  }
}

// createDoctor('Petras' , 'Uzupratorius');
// createDoctor('Antanas' , 'Kalkinas');


function deleteDoctor($id){
  $manoSql = "DELETE FROM doctors
              WHERE id = '$id'
             ";
  mysqli_query(getPrisijungimas(), $manoSql);
}

// deleteDoctor(5);


function updateDoctor ($id, $vardas, $pav){
  $manoSQL = "UPDATE doctors
              SET name = '$vardas', lastname = '$pav'
              WHERE id = '$id'
             ";
  mysqli_query(getPrisijungimas(), $manoSQL);
}

// updateDoctor(7, 'Antanas', 'Kalkinasas');
