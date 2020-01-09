<?php

require_once('models/doc-functions.php');

$visiGyd = getDoctors(); // MySQL objektas

$gydytojas = mysqli_fetch_assoc($visiGyd); //is visu surastu gydytoju paimame po viena.

while ($gydytojas = mysqli_fetch_assoc($visiGyd)) {
  $nr = $gydytojas['id'];

  echo "<a href='page-item.php?id=$nr'> $gydytojas[name] $gydytojas[lname] </a><br />";
}



// while ($gyd = mysqli_fetch_assoc($visiGydytojai)) {
//
//   // ISVEDIMAS:
//
//  echo "<a href='page-item.php?id=$gyd[id]> $gyd[name] $gyd[lname] </a><br />";
// }
