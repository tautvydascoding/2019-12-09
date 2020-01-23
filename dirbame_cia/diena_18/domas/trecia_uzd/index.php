<?php // ---- -PASIKARTOJIMAS PROGRAMAVIMO PAGRINDU TESTUI-----
// 1) sukurti masyva : Tomas, Jurgis, Petras, Angele, Paulius
// 1.1) atspausdinti masyva naudojant FOR cikla, While  cikla
// 1.4 Atspausdinti kas antra  (naudojant i+=2; )
// 1.4 Atspausdinti kas trecia
// 1.5 Atspasudinti viska nuo 2-cios (iskaitant 2-tra)


// 2) sukurti matrica:
// Dviratis, 199, 3vnt
// Paspirtukas, 100, 4vnt
// Riedlente, 49, 12vnt
// 2.0) atspausdinti su FOR ciklu
// 2.1) atspausdinti su FOR ciklu
// 2.2) atspausdinti su FOR FOR ciklu
// 2.3) atspausdinti su FOREACH

$zmones = array("Tomas", "Jurgis", "Petras", "Angele", "Paulius");

for ($i=0; $i<sizeof($zmones); $i++){


echo $zmones[$i]."<br>";


}

for ($i=0; $i<sizeof($zmones); $i+=2){


echo $zmones[$i]."<br>";


}

for ($i=0; $i<sizeof($zmones); $i+=3){


echo $zmones[$i]."<br>";


}
for ($i=1; $i<sizeof($zmones); $i++){


echo $zmones[$i]."<br>";


}

$prekes = array (

  array ("dviratis", "199", "3vnt"),
  array ("paspirtukas","100","4vnt"),
  array("riedlentes","49","12vnt"),
  array("riedlentes","49","12vnt")

);


//eis stulpeliu per
for($i=0; $i<sizeof($prekes);$i++){


  //echo "hi";
  // begs per eilute
  for($a=0; $a<sizeof($prekes[$i]);$a++){


  echo $prekes[$i][$a]. "<br>";


  }
  //echo "hi";


}








?>
