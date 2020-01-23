
        <?php
        include('doctor-functions.php');
        $id = $_GET['id'];
        $name = $_GET['name'];
        $lName = $_GET['lname'];
        updateDoctor($id, $name, $lName);
        header("location: index.php"); //redirectas
