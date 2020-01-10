<!-- PATOBULINTI 4- uzduoti:
1. salia gydytoju vardu ideti "Trinti" mygtuka

1.2. Kai  vartotojas  paspaus mygtuka - vartotoja perkelti i "delete-doctor.php" faila

2.1 delete-doctor.php faile iskviesti savo pasirasyta f-ja
 $numeris = $_GET['nr'];
 deleteDoctor($numeris); -->
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>

    <?php

    include('../models/doctor-functions.php');

    getDoctors($gyd);
    while ($gyd){

    echo  $gyd['ID'] . " " . $gyd['name'] . " " . $gyd['lname'] .  "<br>";
    ?>
    <a href='../controlers/deleteGydytojas'>delete</a>;
    <?php

}
     ?>





  </body>
</html>
