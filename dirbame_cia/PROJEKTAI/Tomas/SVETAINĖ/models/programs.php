<?php
include("prisijungimas-db.php");

//========GET PROGRAM==========================

// Si funkcija grazina konkrečius quetions duomenis is DB
// $nr    -  $nr tai yra norimo question 'id' is duomenu bazes

function getProgram($nr) {  // 1 -  reikia susikurti funkcija ir argumenta

    // ! visada patestuoti SQL terminale !!
     $manoSQL = "SELECT * FROM programs WHERE id = '$nr'  "; // 2 - norime is DB paimti kazkuria programa
     //$rezultataiMysqlObjeki = mysqli_query($link - reiskia reikia ideti prisijungima, $query - uzklausa, ji turi butinai buti atlikta SQL kalba, todel dedame $manoSQL);
     $rezultataiMysqlObjek = mysqli_query(getPrisijungimas(), $manoSQL);  //
     //test
     //print_r($rezultataiMysqlObjek);

     // is mysqli objekto paimame viena eilute ir paverciam i masyva
     $rezultataiArray = mysqli_fetch_assoc($rezultataiMysqlObjek); //mysqli_fetch_assoc - jis pavercia mysql objekta i asociatyvu masyva. Siuo atveju bus isimta viena eilute ir paversta i asoc masyva.

     //test
     //print_r($rezultataiArray);
     return $rezultataiArray; // return - grazina array
}
//testuoju ar veikia kodas
//getProgram(1);
//$program1 = getProgram(1);

//print_r($program1);
//echo "<hr>";

// ========CREATE_PROGRAM===============================

function createProgram($program_name, $price, $img) {
  $manoSQL = "INSERT INTO programs
              VALUES(NULL, '$program_name', '$price', '$img')
             "; //auksine taisykle: testuojame konsoleje
 $arPavyko = mysqli_query(getPrisijungimas(), $manoSQL); //susikuriame kintamaji $arPavyko, bet nebutina kurtis, kuriames del to kad testinsime
 // if ($arPavyko == false &&  DEBUG_MODE > 0) { //turi buti klaida ir turime leisti rodyma
 //         echo "ERROR: nepavyko sukurti naujo klausimo: $question, $answer1, $answer2, $answer3, $answer4, $answer5 DB-je !!!! <br>";
}
//test
//createProgram('greicio vystymas', '100', 'img');



// ========DELETE_PROGRAM==============================

// $nr    -  $nr tai yra norimo question 'id' is duomenu bazes
function deleteProgram($nr) {
  $manoSQL = "DELETE FROM programs WHERE id = '$nr' LIMIT 1 "; //auksine taisykle: testuojame konsoleje
 $arPavyko = mysqli_query(getPrisijungimas(), $manoSQL); //susikuriame kintamaji $arPavyko, bet nebutina kurtis, kuriames del to kad testinsime
 // if ($arPavyko == false &&  DEBUG_MODE > 0) { //turi buti klaida ir turime leisti rodyma
 //         echo "ERROR: nepavyko ISTRINTI naujo klausimo: $question, $answer1, $answer2, $answer3, $answer4, $answer5 DB-je !!!! <br>";
}
//test
//deleteProgram(6); //triname pagal id

// ========UPDATE_PROGRAM==============================

// $nr    -  $nr tai yra norimo question 'id' is duomenu bazes
function updateProgram($nr, $program_name, $price, $img) { //updat'ui reikia ir numerio ir t.t., nes updeitinam visa eilute;
  $manoSQL = "UPDATE programs
                    SET
                      program_name = '$program_name',
                      price = '$price',
                      img = '$img'
                    WHERE id = '$nr'
                    LIMIT 1
             "; //auksine taisykle: testuojame konsoleje
 $arPavyko = mysqli_query(getPrisijungimas(), $manoSQL); //susikuriame kintamaji $arPavyko, bet nebutina kurtis, kuriames del to kad testinsime
 // if ($arPavyko == false &&  DEBUG_MODE > 0) { //turi buti klaida ir turime leisti rodyma
 //        echo "ERROR: nepavyko REDAGUOTI naujo klausimo: $question, $answer1, $answer2, $answer3, $answer4, $answer5 DB-je !!!! <br>";

}
//test
//updateProgram(5, 'begiojimas', '75', 'img.begimas');


// ========GET ALL_PROGRAMS==============================
// grazina konkretu klausimo duomenis is DB
// $kiekis    - kiek klausimu paimit? jei nieko nerasysite, tai visus paimsisme
// return - grazina Mysql Objekta
function getPrograms($kiekis = 9999999) {
    // ! visada patestuoti SQL terminale !!
     $manoSQL = "SELECT * FROM programs LIMIT $kiekis ";
     $rezultataiMysqlObjek = mysqli_query(getPrisijungimas(), $manoSQL);

     return $rezultataiMysqlObjek;
}
// test
//$visosProgramos = getPrograms(); // MYSQL objektas
// // print_r( $visosProgramos ) ;
//
// visu programu isvedimas
// $programa = mysqli_fetch_assoc($visosProgramos); // is visu paimame viena
// while ($programa) {  // false, 0, NULL, ''
//     echo "{$programa['program_name']}  $programa['price']} $programa['img']} <br>";
//     echo "$programa[program_name]  $programa[price]  $programa[img] <br>";
//     echo $programa['program_name'] . " " . $programa['price'] ." " . $programa['img'] . "<br>";
//     // is visu paimame sekancia programa
//     $programa = mysqli_fetch_assoc($visosProgramos);
// }





//
