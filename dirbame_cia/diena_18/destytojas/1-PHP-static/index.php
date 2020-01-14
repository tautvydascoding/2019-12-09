<?php

// uzduotis:
// sukurti f-ja , kuri turi  'z = 0' kintamaji ir mazina 'z'
// (z kintajamji padaryti static)
// isvesti 'z'
// f-ja iskviesti 3 kartus
function mazejaZ () {
    static $z = 0;
    $z--;
    echo "$z  <br>";
}
mazejaZ();
mazejaZ();
mazejaZ();

// uzduotis:
// sukurti recursion - f-ja , kuri iskviecia save (5 kartus)
function manoRekursija() {
    static $i = 0;
    $i++;   // !!!
    if ($i < 5) {
        manoRekursija();
        echo "$i <br>";
    }
}
 manoRekursija();

 //
