<?php
//uzduotis:
//sukurti funkcija, kuri mazina "z = 0" kintamaji (z kintamaji padaryti static).
//isvesti z
//funkcija iskviesti 3 kartus

$z = 0;
function mazejaZ () {
  static $z = 0;
  $z--;
  echo "$z <br>";
}
mazejaZ ();
mazejaZ ();
mazejaZ ();

function manoRekursija() {
  static $i = 0;
  $i++; //!!!
  if ($i < 5) {
    manoRekursija();
    echo "$i <br>";
  }
}
manoRekursija(); // ats 5555, kai kompiuteris perskaito iskvietimo komanda,
//jis vykdo funkcija ir vel sutinka funkcija ir vel pradeda nuo pradzios neatlikdamas echo komandos.

//uzduotis
//sukurti recursion - funkcija, kuri iskvieia save 5 kartus;
 ?>
