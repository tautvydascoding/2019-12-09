<?php

function mazejaZ(){
  static $z = 0;
  echo $z . "<br />";
  $z--;
}
mazejaZ();
mazejaZ();
mazejaZ();
mazejaZ();
mazejaZ();
mazejaZ();



//rekursija - save issaukianti funkcija:

//sukurti f-ja, kuri iskviecia save 5 kartus.

function manoRekursija(){
static $i = 0;
$i++;
if ($i<5) {
  echo "$i <br />";
  manoRekursija();
}
}

manoRekursija();
