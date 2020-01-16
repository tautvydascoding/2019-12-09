 <?php
include('models/doctor-functions.php');
$visiGydytojai = getDoctors();
// print_r($visiGydytojai); // test

$gydytojas = mysqli_fetch_assoc($visiGydytojai);
while ($gydytojas == true) {
    // print_r($gydytojas); // test
    echo "<a href='doctor.php?aa=88'>   $gydytojas[name]   $gydytojas[lname]</a><br>";
    $gydytojas = mysqli_fetch_assoc($visiGydytojai);
}
 ?>
