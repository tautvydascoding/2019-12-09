<?php
define('DB_PAVADINIMAS', 'hospital12');
define('DB_TIPAS', 'localhost');
define('MYSQL_USER', 'root');
define('MYSQL_PASS', 'root');
define('DEBUG_MODE', '1');

$prisijungimas = mysqli_connect( DB_TIPAS, MYSQL_USER, MYSQL_PASS, DB_PAVADINIMAS);
// kalbos pakeitimas
mysqli_set_charset($prisijungimas, "UTF8");
// prisijungimas prie DB
function getPrisijungimas() {
  global $prisijungimas;
  if ($prisijungimas == false) {
    if (DEBUG_MODE > 0) {
    echo "ERROR prisijungti prie DB nepavyko";
    echo mysqli_connect_error($prisijungimas);
    }
    return NULL;
  } else {
    if (DEBUG_MODE > 1) {
      echo "prisijungti prie DB pavyko";
    }
    return $prisijungimas;
  }
}

// paciento grazinimas
// $nr -- paciento id
function getPatient($nr) {
  $manoSQL = "SELECT * FROM patients WHERE id = '$nr' ";
  $resultsSQL = mysqli_query(getPrisijungimas(), $manoSQL);
  if ($resultsSQL == false && DEBUG_MODE > 0) {
    echo "ERROR nerastas pacientas nr: $nr";
  } else {
  $resultsArray = mysqli_fetch_assoc($resultsSQL);
  return $resultsArray;
  }
}
// $nr - paciento id kurio daktaro ieskome
function innerJoin($nr){
  $manoSQL = "SELECT doctors.name, doctors.lname, doctors.id FROM doctors
                INNER JOIN patients
                ON doctors.id = patients.doctor_id
                WHERE patients.id = '$nr' ";
  $suradimas = mysqli_query(getPrisijungimas(), $manoSQL);
  $isvedimas = mysqli_fetch_assoc($suradimas);
  return $isvedimas;
}

// paciento kurimas
// $vard ir $pavard -- naujo paciento vardas ir pavarde, $docId -- priskirto daktaro id
function createPatient($vard, $pavard, $docId) {
  $manoSQL = "INSERT INTO patients VALUES (NULL, '$vard', '$pavard', '$docId') ";
  $create = mysqli_query(getPrisijungimas(), $manoSQL);
  if ($create == false && DEBUG_MODE > 0) {
    echo "ERROR sukurti paciento $vard $pavard nepavyko";
  }
}

//paciento $trynimas
// $nr -- trinamo paciento id
function deletePatient($nr) {
  $manoSQL = "DELETE FROM patients WHERE id = '$nr' ";
  $delete = mysqli_query(getPrisijungimas(), $manoSQL);
  if ($delete == false && DEBUG_MODE > 0) {
    echo "ERROR istrinti paciento nr: $nr nepavyko";
  }
}

// paciento redagavimas
// $nr -- norimo redaguoti paciento id, $vard ur $pavard -- nauji vardas ir paavrde, $docId -- naujas priskirtas daktaras
function updatePatient($nr, $vard, $pavard, $docId) {
  $manoSQL = "UPDATE patients
                  SET name = '$vard', lname = '$pavard', doctor_id = '$docId'
                  WHERE id = '$nr'
                  LIMIT 1 ";
  $update = mysqli_query(getPrisijungimas(), $manoSQL);
  if ($update == false && DEBUG_MODE > 0) {
    echo "ERROR redaguoti paciento nr: $nr nepavyko";
  }
}
