<?php
include("prisijungimas-db.php");

//========GET ANSWERS==========================

// Si funkcija grazina konkrečius quetions duomenis is DB
// $nr    -  $nr tai yra norimo question 'id' is duomenu bazes

function getAnswer($nr) {  // 1 -  reikia susikurti funkcija ir argumenta

    // ! visada patestuoti SQL terminale !!
     $manoSQL = "SELECT * FROM answers WHERE id = '$nr'  "; // 2 - norime is DB paimti kazkuri atsakyma
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
//getAnswer(1);
//$question1 = getQuestion(1);

//print_r($question1);
//echo "<hr>";

// ========CREATE_ANSWERS===============================

// $answers - norimas klausimas is answers lenteles
function createAnswer($answers) {
  $manoSQL = "INSERT INTO answers
              VALUES(NULL, 'NULL','$answers')
             ";               //auksine taisykle: testuojame konsoleje
 $arPavyko = mysqli_query(getPrisijungimas(), $manoSQL); //susikuriame kintamaji $arPavyko, bet nebutina kurtis, kuriames del to kad testinsime
 // if ($arPavyko == false &&  DEBUG_MODE > 0) { //turi buti klaida ir turime leisti rodyma
 //         echo "ERROR: nepavyko sukurti naujo klausimo: $question, $answer1, $answer2, $answer3, $answer4, $answer5 DB-je !!!! <br>";
}
//test
//createAnswer('megstu valgyti'); //kaip paduoti id is questions lenteles i answers lentele questions id stulpeli?



// ========DELETE_ANSWERS==============================

// $nr    -  $nr tai yra norimo question 'id' is duomenu bazes
function deleteAnswer($nr) {
  $manoSQL = "DELETE FROM answers WHERE id = '$nr' LIMIT 1 "; //auksine taisykle: testuojame konsoleje
 $arPavyko = mysqli_query(getPrisijungimas(), $manoSQL); //susikuriame kintamaji $arPavyko, bet nebutina kurtis, kuriames del to kad testinsime
 // if ($arPavyko == false &&  DEBUG_MODE > 0) { //turi buti klaida ir turime leisti rodyma
 //         echo "ERROR: nepavyko ISTRINTI naujo klausimo: $question, $answer1, $answer2, $answer3, $answer4, $answer5 DB-je !!!! <br>";
}
//test
//deleteAnswer(2);

// ========UPDATE_ANSWERS==============================

// $nr    -  $nr tai yra norimo question 'id' is duomenu bazes
function updateAnswer($nr, $answer) {
  $manoSQL = "UPDATE answers
                    SET
                      answers = '$answer'
                    WHERE id = '$nr'
                    LIMIT 1
             "; //auksine taisykle: testuojame konsoleje
 $arPavyko = mysqli_query(getPrisijungimas(), $manoSQL); //susikuriame kintamaji $arPavyko, bet nebutina kurtis, kuriames del to kad testinsime
 // if ($arPavyko == false &&  DEBUG_MODE > 0) { //turi buti klaida ir turime leisti rodyma
 //        echo "ERROR: nepavyko REDAGUOTI naujo klausimo: $question, $answer1, $answer2, $answer3, $answer4, $answer5 DB-je !!!! <br>";

}
//test
//updateAnswer(4, 'begioju');

// ========GET ALL_ANSWERS==============================
// grazina konkrecius atsakymo duomenis is DB
// $kiekis    - kiek atsakymu paimit? jei nieko nerasysite, tai visus paimsisme
// return - grazina Mysql Objekta
function getAnswers($kiekis = 9999999) {
    // ! visada patestuoti SQL terminale !!
     $manoSQL = "SELECT * FROM answers LIMIT $kiekis ";
     $rezultataiMysqlObjek = mysqli_query(getPrisijungimas(), $manoSQL);

     return $rezultataiMysqlObjek;
}
// test
//$visiAtsakymai = getAnswers(); // MYSQL objektas
// // print_r( $visiAtsakymai ) ;
//
// visu Atsakymu isvedimas
// $atsakymas = mysqli_fetch_assoc($visiAtsakymai); // is visu paimame viena
// while ($atsakymas) {  // false, 0, NULL, ''
//     echo "{$atsakymas['answers']} <br>";
//     echo "$atsakymas[answers] <br>";
//     echo $atsakymas['answers'] "<br>";
//     // is visu paimame sekanti atsakyma
//     $atsakymas = mysqli_fetch_assoc($visiAtsakymai);
// }





//
