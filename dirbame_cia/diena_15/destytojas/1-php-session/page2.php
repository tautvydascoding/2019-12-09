<?php
// page2.php

session_start();
print_r($_GET);
echo 'Welcome to page #2<br />';

echo $_SESSION['favcolor']; // green
echo $_SESSION['animal'];   // cat
echo date('Y m d H:i:s', $_SESSION['time']);

echo "<hr>";
echo "SID: <br>";
echo htmlspecialchars(SID);

echo "<hr>";
echo "SID: <br>";
echo session_id();
// You may want to use SID here, like we did in page1.php
echo '<br /><a href="index.php">page 1</a>';
?>
