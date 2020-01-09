
<?php
// page1.php
// session_unset();
// session_destroy();
// session_abort();
  // session_write_close();

session_start([
        'use_only_cookies' => 1,
        'use_trans_sid' => 0
    ]);



echo 'Welcome to page #1';

$_SESSION['favcolor'] = 'green';
$_SESSION['animal']   = 'cat';
$_SESSION['time']     = time();

echo "<hr>";
echo "print_r SESSION: <br>";
print_r($_SESSION);

echo "<hr>";
echo "SID - sesijos ID: <br>";
echo session_id();

echo "<hr>";
// Works if session cookie was accepted
echo '<br /><a href="page2.php">page 2</a>';

// Or maybe pass along the session id, if needed
echo '<br /><a href="page2.php?' . SID . '">page 2</a>';
