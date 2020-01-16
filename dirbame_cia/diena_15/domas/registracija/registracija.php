<?php

    //  testuojam ar turim duomenis is formos
    print_r($_GET);
    print_r($_POST);

    echo "<br> Sveiki, " . $_GET['name'] . "<br>";

    echo "Uzsiregistravote sekmingai.<br>
        vardas: $_GET[name] <br>
        pavarde: $_GET[surname] <br>
        telefonas: $_GET[phone] <br>
    ";
 ?>
