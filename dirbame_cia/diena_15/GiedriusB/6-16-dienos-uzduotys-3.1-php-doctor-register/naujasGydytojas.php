
        <?php
        include('doctor-functions.php');
        $vard = $_GET['name'];
        $parv = $_GET['lname'];
        createDoctor($vard, $parv);
        header("location: index.php"); //redirectas
         ?>
