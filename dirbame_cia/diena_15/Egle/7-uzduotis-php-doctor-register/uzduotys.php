<?php


require_once('models/doc-functions.php');

// // 1.1 sukurti PHP faila  naujasGydytojas.php
// // 1.2. faile paleisti:
// include('db_functions.php');
// createDoctor("Juozas", "Juozaitis");
// // 1.3. Narsykleje nueiti:
//     localhost/ ... /naujasGydytojas.php
//
//
// deleteDoctor() paleidimas per narsykle
// // 2.1. sukurti PHP faila  trintiGydytoja.php
// // 2.2. faile paleisti:
// include('db_functions.php');
// deleteDoctor(4);
// // 2.3. Narsykleje nueiti:
//     localhost/ ... /trintiGydytoja.php



//==================== KITA UZDUOTIS  ==========================

//
// // createDoctor() paleidimas per narsykle per su mygtuku
//
// // 1.1 sukurti PHP faila  naujasGydytojas.php
// // 1.2. faile paleisti:
// include('db_functions.php');
// $vard = $_GET['vardas'];
// $parv = $_GET['pavarde'];
// createDoctor($vard, $parv);
// // 1.3. Narsykleje nueiti (pamatysite klaida):
//     localhost/ ... /naujasGydytojas.php
//
// // 1.4. Narsykleje nueiti:
//     localhost/ ... /naujasGydytojas.php?vardas=TOMAS&pavarde=TOMAUSKIS
//
// // 1.5 faile index.php
// // susikurti mygtuka "Naujas gydytojas" su "a" linku.
// // "a" linkas turi rodyti i :   naujasGydytojas.php?vard=TOMAS&parv=TOMAUSKIS
// // pvz:
// <a href='naujasGydytojas.php?vardas=TOMAS&pavarde=TOMAUSKIS'> Kurti Nauja</a>
//
//
//
// // ta pati padaryti su DELETE



//================== 3 UZDUOTIS=======================================


// Vartotojui paspaudus "registruotis" mygtuka - ivestus duomenis issaugoti DB.
//
// SUkurti gydytoju registracijos  forma (pvz: registracija.php )
// Vartotojui paspaudus "registruotis" mygtuka - vartotoja perkelti i registracija.php faila (HINT: action='registracija.php')
//
// registracija.php faile:
//    Duomenis paimkite is $_GET ir perduokite i   createDoctor(....) f-ja, taip jums sukurs gydytoja


//============================== 4 UDUOTIS ===================================

 // isvesti visus gydytojus panaudojant while ir getDoctors();



//=============================5 UZDUOTIS ==========================
 // PATOBULINTI 4- uzduoti:
 // 1. salia gydytoju vardu ideti "Trinti" mygtuka
 //
 // 1.2. Kai  vartotojas  paspaus mygtuka - vartotoja perkelti i "delete-doctor.php" faila
 //
 // 2.1 delete-doctor.php faile iskviesti savo pasirasyta f-ja
 //  $numeris = $_GET['nr'];
 //  deleteDoctor($numeris);
