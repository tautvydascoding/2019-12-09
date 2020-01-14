<?php


// ---- -PASIKARTOJIMAS PROGRAMAVIMO PAGRINDU TESTUI-----
// 1) sukurti masyva : 1981, 1980, 1975, 1995, 1999
// 1.1) atspausdinti masyva naudojant FOR cikla, While cikla ir FOREACH cikla
// 1.4 Atspausdinti kas antra data
// 1.4 Atspausdinti kas trecia data
// 1.5 Atspasudinti visas datas nuo 3-cios (iskaitant 3-cia)


// 2) sukurti matrica:
// Tomas, 1981, Buhalteris
// Ona 1980 Programuotoja
// Petras, 1975, Direktorius
// 2.1) atspausdinti su FOR ciklu
// 2.2) atspausdinti su FOR FOR ciklu
// 2.3) atspausdinti su FOREACH




// 1) sukurti masyva : 1981, 1980, 1975, 1995, 1999
// 1.1) atspausdinti masyva naudojant FOR cikla, While cikla ir FOREACH cikla

$masyvas1 = [1981, 1980, 1975, 1995, 1999];


// FOR ciklas:

for ($i=0; $i < count($masyvas1); $i++) {
  echo "<h4>". $masyvas1[$i] . "</h4> <br />";
};


// WHILE ciklas:

$x = count($masyvas1);
$i = 0;

while ($i < $x) {
  echo "<h2>". $masyvas1[$i] . "</h2> <br />";
  $i++;
}


//FOREACH ciklas:

foreach ($masyvas1 as $i) {
  echo "<h4>". $i . "</h4> <br />";
}


// 1.4 Atspausdinti kas antra data:

for ($i=0; $i < count($masyvas1); $i+=2) {
    echo "<h2>". $masyvas1[$i] . "</h2> <br />";
}


// 1.4 Atspausdinti kas trecia data

for ($i=0; $i < count($masyvas1); $i+=3) {
    echo "<h5>". $masyvas1[$i] . "</h5> <br />";
}


// 1.5 Atspasudinti visas datas nuo 3-cios (iskaitant 3-cia)

for ($i=2; $i < count($masyvas1); $i++) {
    echo "<h2>". $masyvas1[$i] . "</h2> <br />";
}


//=====================================================================


// 2) sukurti matrica:


$darbuotojas1=['Tomas', 1981, 'Buhalteris'];
$darbuotojas2= ['Ona', 1980, 'Programuotoja'];
$darbuotojas3= ['Petras', 1975, 'Direktorius'];

$visiDarbuotojai = [$darbuotojas1, $darbuotojas2, $darbuotojas3];

// 2.1) atspausdinti su FOR ciklu
for ($i=0; $i <count($visiDarbuotojai) ; $i++) {
  echo "<em>" . $visiDarbuotojai[$i][0] . "</em> ";
  echo "<em>" . $visiDarbuotojai[$i][1] . "</em> ";
  echo "<em>" . $visiDarbuotojai[$i][2] . "</em> <br />";
}


// 2.2) atspausdinti su FOR FOR ciklu

for ($i=0; $i <count($visiDarbuotojai) ; $i++) {
  echo "<br />";
  for ($j=0; $j < count($visiDarbuotojai[$i]) ; $j++) {
    echo $visiDarbuotojai[$i][$j];

  }
};

echo  "<br />";

// 2.3) atspausdinti su FOREACH
foreach ($visiDarbuotojai as $darbuotojas1) {
  echo "<h4>" . $darbuotojas1[0] . "</h4>";
  echo "<h4>" . $darbuotojas1[1] . "</h4>";
  echo "<h4>" . $darbuotojas1[2] . "</h4> <br />";

}
