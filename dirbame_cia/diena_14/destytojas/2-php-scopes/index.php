<?php

$a = 1;
$b = 2;

function Sum()
{
    $GLOBALS['z'] = $GLOBALS['a'] + $GLOBALS['b']; // 3
    //PHP also stores all global variables in an array called $GLOBALS[index]. The index holds the name of the variable. This array is also accessible from within functions and can be used to update global variables directly.
}

Sum();
echo $z;
// arba
echo $GLOBALS['z'];

print_r( $_POST );
print_r( $_COOKIE );
// print_r( $GLOBALS );
