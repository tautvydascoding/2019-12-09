<?php
        require_once('models/doctor.php');

        if (isset($_POST['del_id'])) {
            if($_POST['del_id']) {

                $id = $_POST['del_id'];
                $gyd = deleteDoctor($id);
             }
        }
