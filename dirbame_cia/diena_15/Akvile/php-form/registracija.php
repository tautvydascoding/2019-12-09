<?php

$name = $_GET['name'];
$lastname = $_GET['lastname'];
$phone = $_GET['phone'];

 // print_r($name);

 echo "<h1>Sveiki prisijungę, $name!</h1>";




//
// <!-- 1. index.php faile sukurti HTML form'a naudojant metoda (GET) ir  su ivedimo laukais:
//  vardas, pavarde, telefonas, mygtukas 'registruotis'
//
// 2. kai paspaudzia 'registruotis', vartotoja perkelti i registracija.php faila (formoje action='registracija.php')
//
// 3. registracija.php faile pasinaudojant globaliu PHP masyvu $_GET atspausdinti vartotojo ivestu duomenis
// pvz.:
// print_r( $_GET);
//
// // PASIBANDYTI PAPILDOMAI
// pvz.: print_r( $GLOBALS)
//
//
//
// // UZDUOTIS
// // pasisveikinti su katik uzsiregistravusius zmogumi ir
// // graziai atspausdinti uzsiregistravusio zmoguas duomenis -->
