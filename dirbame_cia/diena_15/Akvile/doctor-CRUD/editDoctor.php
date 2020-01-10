<?php
        require_once('models/doctor.php');

        if (isset($_POST['id']) && isset($_POST['name']) && isset($_POST['lastname'])) {
                $id = $_POST['id'];
                $name = $_POST['name'];
                $lastname = $_POST['lastname'];

                updateDoctor($id, $name, $lastname);

                header("Location: allDoctors.php");

                die;
            }
