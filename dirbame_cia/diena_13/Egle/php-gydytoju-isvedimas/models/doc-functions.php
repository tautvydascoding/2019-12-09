<?php

  // php konstantos:

  define("DB_PAVADINIMAS", 'hospital12');
  define("DB_TIPAS", 'localhost');
  define("MYSQL_USER_VARDAS", 'root');
  define("MYSQL_USER_PASS", 'root');
  // papildomas, bet neprivalomas patikrinimas ar veikia prisijungimas prie DB:
  define("DEBUG_MODE", '0'); //0 - isjungta, 1- rodo pagrindinius, 2- rodo visus



  // mysqli_connect($host, $user, $password, $database, $port  (jeigu 3306 nereikia nurodyt), $socket)
  // mysqli_connect(DB_TIPAS, MYSQL_USER_VARDAS, MYSQL_USER_PASS, DB_PAVADINIMAS);




//====================PRISIJUNGIMAS PRIE DB: ==========================

// susikurt kintamaji, kuris laiko prisijungimo prie serverio info
$prisijungimas = mysqli_connect(DB_TIPAS, MYSQL_USER_VARDAS, MYSQL_USER_PASS, DB_PAVADINIMAS);

//=======================================================================




//========================== LT kalbos ijungimas=========================


mysqli_set_charset($prisijungimas, "UTF8"); // UTF8 be jokio bruksnio

//=======================================================================


// patikrint ar prisijunge prie serverio sekmingai
// GET f-jos reiskia kad jos turi kazka grazint


function getPrisijungimas(){

  //prieijimas prie globalio kintamojo $prisijungimas:
    global $prisijungimas ;

  if($prisijungimas != true){

    if(DEBUG_MODE > 0){
    echo "ERROR : pisijungti prie DB nepavyko <br />";
    // kad rodytu error zinute, kodel nepavyko prisijungti:
    echo mysqli_connect_error($prisijungimas);
  }
    return NULL;
  } else{
    if(DEBUG_MODE > 1){
    echo "ERROR : pisijungti prie DB nepavyko <br />";
    // kad rodytu error zinute, kodel nepavyko prisijungti:
    echo mysqli_connect_error($prisijungimas);
  }
    // sekmes atveju: grazinti $prisijungima, kad veiktu:
    return $prisijungimas;
  }
}
// getPrisijungimas();






// kad butu galima dirbti su DB duomenimis:
  // $x = mysqli_query($prisijungimas);


  //Turi return- kuris grazina array.

  //=======Konkretaus gydytojo duomenu paemimas is DB. =================
  // $nr = yra konkretus ID is duomenu bazes

  function getDoctor($nr){
    // visada patestuot SQL terminale:
    //  mysql programoj pasirinkt DB( use "hospital12";) ivest "SELECT * FROM doctors WHERE id = 2"
    // $nr butinai det i kabutes:
    $manoSQL = "SELECT * FROM doctors WHERE id = '$nr'";


    // siust uzklausa i sql db kad paimtu duomenis visada kaip link naudoti "getPrisijungimas()":
    $rezultataiMysqlObj = mysqli_query(getPrisijungimas(), $manoSQL);

    //test ar suveike:
    // print_r($rezultataiMysqlObj);

    // vienos eilutes paemimas is mysqli objekto ir pavertimas masyvu:
    $rezultataiArray = mysqli_fetch_assoc($rezultataiMysqlObj);
    echo "<hr />";
    //test:
    // print_r($rezultataiArray);

    //grazina rezultatus is DB:
    return $rezultataiArray;
  }




//=============TESTAVIMAS=========================


  // $gydytojas1 = getDoctor(1);
  // $gydytojas2 = getDoctor(2);
  // $gydytojas3 = getDoctor(4);
  //
  // print_r($gydytojas1);
  // echo "<hr />";
  // print_r($gydytojas2);
  // echo "<hr />";
  // print_r($gydytojas3);
  // echo "<hr />";
  //
  //
//===============END OF TESTING=========================



//==================CREATE DOCTOR ============================
//Gydytojo sukurimas ir idejimas i DB:

function createDoctor($vardas, $pavarde){

  $manoSQL = "INSERT INTO doctors
                    VALUES (NULL, '$vardas', '$pavarde')
            ";

  $arPavyko= mysqli_query(getPrisijungimas(), $manoSQL);

  if ($arPavyko == false && DEBUG_MODE > 0){
    echo "ERROR : nepavyko sukurti naujo gydytojo <br />";


  }

};

// createDoctor('tratata', 'olialia');
// createDoctor('Jonas', 'Jonaitis');





// =====================DELETE doctor =================================
// $nr = yra konkretus ID is duomenu bazes


function deleteDoctor($nr){
  $manoSQL = "DELETE FROM doctors
                      WHERE id = '$nr'
                      LIMIT 1
  ";
  $arPavyko= mysqli_query(getPrisijungimas(), $manoSQL);

  if ($arPavyko == false && DEBUG_MODE > 0){
    echo "ERROR : nepavyko istrinti gydytojo <br />";


  }

};


deleteDoctor('9');

//============================= UPDATE DOCTOR ===================================

// $nr = yra konkretus ID is duomenu bazes

function updateDoctor($nr, $vardas, $pavarde){

  $manoSQL = " UPDATE doctors
                  SET name ='$vardas',
                      lname = '$pavarde'
                  WHERE id = '$nr'
                  LIMIT 1

            ";
  $arPavyko= mysqli_query(getPrisijungimas(), $manoSQL);

  if ($arPavyko == false && DEBUG_MODE > 0){
    echo "ERROR : nepavyko atnaujinti  gydytojo duomenu <br />";

  }
};


updateDoctor(2, "Will", "Smith");
