<?php
        require_once('models/doctor.php');

        if (isset($_POST['id'])) {
            if($_POST['id']) {

                $id = $_POST['id'];
                $gyd = getDoctor($id);

                echo json_encode($gyd);

             }
        }
