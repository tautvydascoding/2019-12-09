<?php
include("prisijungimas-db.php");

//========GET QUOSTION==========================

// Si funkcija grazina konkrečius quetions duomenis is DB
// $nr    -  $nr tai yra norimo question 'id' is duomenu bazes

function getQuestion($nr) {

    // ! visada patestuoti SQL terminale !!
     $manoSQL = "SELECT * FROM questions WHERE id = '$nr'  "; // 2 - norime is DB paimti kazkuri klausima
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
//getQuestion(1);
//$question1 = getQuestion(1);

//print_r($question1);
//echo "<hr>";

// ========CREATE_QUESTION===============================

function createQuestion($question, $answer1, $answer2, $answer3, $answer4, $answer5) {
  $manoSQL = "INSERT INTO questions
              VALUES(NULL, 'question', 'answer1', 'answer2', 'answer3', 'answer4', 'answer5')
             "; //auksine taisykle: testuojame konsoleje
 $arPavyko = mysqli_query(getPrisijungimas(), $manoSQL); //susikuriame kintamaji $arPavyko, bet nebutina kurtis, kuriames del to kad testinsime
 // if ($arPavyko == false &&  DEBUG_MODE > 0) { //turi buti klaida ir turime leisti rodyma
 //         echo "ERROR: nepavyko sukurti naujo klausimo: $question, $answer1, $answer2, $answer3, $answer4, $answer5 DB-je !!!! <br>";
}
//test
//createQuestion('kas tu?', 'vardas', 'pavarde', 'amzius', 'gimimos', 'pavyks');



// ========DELETE_QUESTION==============================

// $nr    -  $nr tai yra norimo question 'id' is duomenu bazes
function deleteQuestion($nr) {
  $manoSQL = "DELETE FROM questions WHERE id = '$nr' LIMIT 1 "; //auksine taisykle: testuojame konsoleje
 $arPavyko = mysqli_query(getPrisijungimas(), $manoSQL); //susikuriame kintamaji $arPavyko, bet nebutina kurtis, kuriames del to kad testinsime
 // if ($arPavyko == false &&  DEBUG_MODE > 0) { //turi buti klaida ir turime leisti rodyma
 //         echo "ERROR: nepavyko ISTRINTI naujo klausimo: $question, $answer1, $answer2, $answer3, $answer4, $answer5 DB-je !!!! <br>";
}
//test
//deleteQuestion(21);

// ========UPDATE_QUESTION==============================

// $nr    -  $nr tai yra norimo question 'id' is duomenu bazes
function updateQuestion($nr, $question, $answer1, $answer2, $answer3, $answer4, $answer5) { //updat'ui reikia ir numerio ir t.t., nes updeitinam visa eilute;
  $manoSQL = "UPDATE questions
                    SET
                      question = '$question',
                      answer1 = '$answer1',
                      answer2 = '$answer2',
                      answer3 = '$answer3',
                      answer4 = '$answer4',
                      answer5 = '$answer5'
                    WHERE id = '$nr'
                    LIMIT 1
             "; //auksine taisykle: testuojame konsoleje
 $arPavyko = mysqli_query(getPrisijungimas(), $manoSQL); //susikuriame kintamaji $arPavyko, bet nebutina kurtis, kuriames del to kad testinsime
 // if ($arPavyko == false &&  DEBUG_MODE > 0) { //turi buti klaida ir turime leisti rodyma
 //        echo "ERROR: nepavyko REDAGUOTI naujo klausimo: $question, $answer1, $answer2, $answer3, $answer4, $answer5 DB-je !!!! <br>";

}
//test
//updateQuestion(22, 'kas?', 'vardas', 'pavarde', 'amzius', 'gimimoD', 'pavyks');


// ========GET ALL_QUESTIONS==============================
// grazina konkretu klausimo duomenis is DB
// $kiekis    - kiek klausimu paimit? jei nieko nerasysite, tai visus paimsisme
// return - grazina Mysql Objekta
function getQuestions($kiekis = 9999999) {
    // ! visada patestuoti SQL terminale !!
     $manoSQL = "SELECT * FROM questions LIMIT $kiekis ";
     $rezultataiMysqlObjek = mysqli_query(getPrisijungimas(), $manoSQL);

     return $rezultataiMysqlObjek;
}
// test
//$visiKlausimai = getQuestions(); // MYSQL objektas
// // print_r( $visiKlausimai ) ;
//
// visu klausimu isvedimas
// $klausimas = mysqli_fetch_assoc($visiKlausimai); // is visu paimame viena
// while ($klausimas) {  // false, 0, NULL, ''
//     echo "{$klausimas['name']}  $klausimas['lname']} <br>";
//     echo "$klausimas[name]  $klausimas[lname] <br>";
//     echo $klausimas['name'] . " " . $klausimas['lname'] . "<br>";
//     // is visu paimame sekanti klausima
//     $klausimas = mysqli_fetch_assoc($visiKlausimai);
// }





//
