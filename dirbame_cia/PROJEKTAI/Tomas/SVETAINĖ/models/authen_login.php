<?php
 require('prisijungimas-db.php');
 session_start(); //paleidzia sesija

if (isset($_POST['admin_id']) and isset($_POST['admin_pass'])){  //funkcija isset patikrina ar kintamiesiems yra priskirtos reiksmes

// Assigning POST values to variables.
$adminName = $_POST['admin_id'];
$password = $_POST['admin_pass'];

// CHECK FOR THE RECORD FROM TABLE
$query = "SELECT * FROM admin_login WHERE adminName='$adminName' and password='$password'";

$result = mysqli_query($prisijungimas, $query) or die(mysqli_error($prisijungimas));
$count = mysqli_num_rows($result);

$_SESSION['success'] = true; ///////////

if ($count == 1){
  header("Location: ../page-admin-controls.php"); //nurodo i kuri puslapi nukelti jei suvedu teisingus prisijungimo duomenis

//echo "Login verified";
echo "<script type='text/javascript'>alert('Login verified')</script>";

}else{
echo "<script type='text/javascript'>alert('Incorect adminName or password')</script>";
//echo "Incorect username or password";
}
}
?>
