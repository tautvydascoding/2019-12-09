<?php

  // php konstantos:

  define("DB_NAME", 'earthlings');
  define("DB_HOST", 'localhost');
  define("DB_USER", 'root');
  define("DB_PASS", 'root');
  // papildomas, bet neprivalomas patikrinimas ar veikia prisijungimas prie DB:
  define("DEBUG_MODE", '0'); //0 - isjungta, 1- rodo pagrindinius, 2- rodo visus



  // mysqli_connect($host, $user, $password, $database, $port  (jeigu 3306 nereikia nurodyt), $socket)
  // mysqli_connect(DB_TIPAS, MYSQL_USER_VARDAS, MYSQL_USER_PASS, DB_PAVADINIMAS);




//====================PRISIJUNGIMAS PRIE DB: ==========================

// susikurt kintamaji, kuris laiko prisijungimo prie serverio info
$connection = mysqli_connect(DB_HOST, DB_USER, DB_PASS, DB_NAME);

//=======================================================================




//========================== LT kalbos ijungimas=========================


mysqli_set_charset($connection, "UTF8"); // UTF8 be jokio bruksnio

//=======================================================================


// patikrint ar prisijunge prie serverio sekmingai
// GET f-jos reiskia kad jos turi kazka grazint


function getConnection(){

  //prieijimas prie globalio kintamojo $prisijungimas:
    global $connection ;

  if($connection != true){

    if(DEBUG_MODE > 0){
    echo "ERROR : pisijungti prie DB nepavyko <br />";
    // kad rodytu error zinute, kodel nepavyko prisijungti:
    echo mysqli_connect_error($connection);
  }
    return NULL;
  } else{
    if(DEBUG_MODE > 1){
    echo "ERROR : pisijungti prie DB nepavyko <br />";
    // kad rodytu error zinute, kodel nepavyko prisijungti:
    echo mysqli_connect_error($connection);
  }
    // sekmes atveju: grazinti $prisijungima, kad veiktu:
    // echo "prisijungti pavyko";
    return $connection;
  }
}
// getConnection();






// kad butu galima dirbti su DB duomenimis:
  // $x = mysqli_query($prisijungimas);


  //Turi return- kuris grazina array.



  //=======  KONKRETAU GYDYTOJO PAEMIMAS IS DB:  =================


  // $nr = yra konkretus ID is duomenu bazes

  function getDoctor($nr){
    // visada patestuot SQL terminale:
    //  mysql programoj pasirinkt DB( use "hospital12";) ivest "SELECT * FROM doctors WHERE id = 2"
    // $nr butinai det i kabutes:
    $manoSQL = "SELECT * FROM doctors WHERE id = '$nr'";


    // siust uzklausa i sql db kad paimtu duomenis visada kaip link naudoti "getConnection()":
    $rezultataiMysqlObj = mysqli_query(getConnection(), $manoSQL);

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



//==================CREATE ============================

function createCustomer($name, $surname, $email, $phone, $comment,  $peopleNumber, $orderDate, $productID){

  $name = htmlspecialchars($name, ENT_QUOTES);  // apsauga nuo hackinimo uzkoduoja  : ' " < zenklus. NEPAMIRST NAUDOTI!!
  $surname = htmlspecialchars($surname, ENT_QUOTES);

  $mySQL = " INSERT INTO bookingform
                    VALUES (NULL, '$name', '$surname', '$email', '$phone', '$comment',  '$peopleNumber', '$orderDate', '$productID')
          ";
    $success = mysqli_query(getConnection(), $mySQL);

    if ($success == false && DEBUG_MODE > 0){
  echo "ERROR: Booking failed <br />";
  }
};


// createCustomer('John', "Smith", "john@smith.org", "4693563963", "lorem lorem lorem", 5, "2020-03-17", 153);
// createCustomer('Will', "Smith", "john@smith.org", "4693563963", "lorem lorem lorem", 5, "2020-03-17", 153);
// createCustomer('Martin', "Smith", "john@smith.org", "4693563963", "lorem lorem lorem", 5, "2020-03-17", 153);






// =====================DELETE doctor =================================
// $nr = yra konkretus ID is duomenu bazes


function deleteDoctor($nr){

  $nr = htmlspecialchars($nr, ENT_QUOTES); //apsauga


  $manoSQL = "DELETE FROM bookingform
                      WHERE id = '$nr'
                      LIMIT 1
  ";
  $arPavyko= mysqli_query(getConnection(), $manoSQL);

  if ($arPavyko == false && DEBUG_MODE > 0){
    echo "ERROR : nepavyko istrinti gydytojo <br />";


  }

};


deleteDoctor('3');

//============================= UPDATE DOCTOR ===================================

// $nr = yra konkretus ID is duomenu bazes

function updateDoctor($nr, $vardas, $pavarde){

  $vardas = htmlspecialchars($vardas, ENT_QUOTES);  // apsauga nuo hackinimo uzkoduoja  : ' " < zenklus. NEPAMIRST NAUDOTI!!
  $pavarde = htmlspecialchars($pavarde, ENT_QUOTES);
  $nr =  htmlspecialchars($nr, ENT_QUOTES);

  $manoSQL = " UPDATE doctors
                  SET name ='$vardas',
                      lname = '$pavarde'
                  WHERE id = '$nr'
                  LIMIT 1

            ";
  $arPavyko= mysqli_query(getConnection(), $manoSQL);

  if ($arPavyko == false && DEBUG_MODE > 0){
    echo "ERROR : nepavyko atnaujinti  gydytojo duomenu <br />";

  }
};


// updateDoctor(2, "Will", "Smith");

// ==========================================================================





//==========================SELECTING ALL DOCTORS: ==========================

//$kiekis - kiek gydytoju paimti. Jei nieko nerasoma - tai isves visus.
//return grazins MysqlObj objecta
function getDoctors($kiekis = 9999999){

  $manoSQL = "SELECT * FROM doctors LIMIT $kiekis ";
  $rezultataiMysqlObj = mysqli_query(getConnection(), $manoSQL);


  // echo "<hr />";
 // butina pakeist i mysqli objekta:

  return $rezultataiMysqlObj;
}

//TESTAVIMAS:

$visiGydytojai = getDoctors();
// print_r($visiGydytojai);

//========================================================================




//==================VISU GYDYTOJU ISVEDIMAS PER WHILE CIKLA ==================

// $gyd = mysqli_fetch_assoc($visiGydytojai);  // is visu gydytoju paimamas pirmas
//
// while ($gyd) {
//  echo $gyd['name']. "<br /> ";
//
//  // is visu paimame sekanti gydytoja:
//  //(BUTINA NAUDOT KAD NEPALEIST NESIBAIGIANCIO CIKLO!!!)
//  $gyd = mysqli_fetch_assoc($visiGydytojai);
//
// }



//ARBA
//paaiskinimas: kol isvedamas sekantis gydytojas, tol veikia while ciklas ir isvedami duomenys:

// while ($gyd = mysqli_fetch_assoc($visiGydytojai)) {
//
//   // ISVEDIMAS:
//
//  echo $gyd['name'] . " " . $gyd['lname'] . "<br /> ";
//  //ARBA
//  echo "$gyd[name] $gyd[lname] <br />";
//  //ARBA
//  echo "{$gyd['name']} {$gyd['lname']} <br />";
// }
