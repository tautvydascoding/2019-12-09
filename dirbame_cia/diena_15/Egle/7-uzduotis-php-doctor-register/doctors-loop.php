<?php

require_once('models/doc-functions.php');



while ($gyd = mysqli_fetch_assoc($visiGydytojai)) { // assoc naudot tik karta, kad paimtu nuo pimo gydytjo. Kitaip eina vis kit ir kita!
  echo "<ul><li>" . $gyd['name'] . " " . $gyd['lname'] . " " .
  "<a href='trintiGydytoja.php?id=$gyd[id]'>
  <button type='submit' name='button'>" . "Istrinti Gydytoja" . "</button>
  </a> </li> </ul>";

}
