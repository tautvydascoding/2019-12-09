
  <?php
    include('doctor-functions.php');
    $id = $_GET['x'];
    deleteDoctor($id);
    header("location: index.php"); //redirectas
