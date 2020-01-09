<?php

    //  testuojam ar turim duomenis is formos
    print_r($_GET);
    print_r($_POST);

    echo "<br> Sveiki, " . $_GET['vardas'] . "<br>";

    echo "Uzsiregistravote sekmingai.<br>
        vardas: $_GET[vardas] <br>
        pavarde: $_GET[pavarde] <br>
        telefonas: $_GET[telefonas] <br>
    ";
 ?>
