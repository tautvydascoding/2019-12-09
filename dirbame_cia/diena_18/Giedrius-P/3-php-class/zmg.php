<?php
// uzduotis:
// sukurti f-ja, kuri mazina 'z' kintamaji
// (z kintamaji padaryti static)
// f-ja isvesti 3 kartus

function mazejaZ () {
     static $z = 0;
     $z--;
     echo "$z <br>"
}
mazejaZ();
mazejaZ();
mazejaZ();
 ?>
