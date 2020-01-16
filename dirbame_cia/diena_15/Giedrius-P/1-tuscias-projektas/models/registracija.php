<?php
print_r( $_GET);
echo "<br>";
// print_r( $GLOBALS);
// echo "<hr>";
print_r( $_POST );
echo "<hr>";
echo ("Vartotojo vardas: ".$_POST['vardas']."<br>");
echo ("Vartotojo pavarde: ".$_POST['pavarde']."<br>");
echo ("Vartotojo Telefono numeris: ".$_POST['telNumeris']);
 ?>
