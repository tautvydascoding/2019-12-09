<?php


// !!! If statement blocks do not have their own scope.
$bool = true;
if ($bool) {
    $new_var = 'Hi there!';
}
echo $new_var;




$a = 99; /* global scope    */
// A variable declared outside a function has a GLOBAL SCOPE and can only be accessed outside a function

function test()
{

    echo $a; // error
    /* reference to local scope variable */

    // A variable declared within a function has a LOCAL SCOPE and can only be accessed within that function
    // You can have local variables with the same name in different functions, because local variables are only recognized by the function in which they are declared.
}

test();

//-----------


 $a = 1;
$b = 2;

function Sum()
{
    global $a, $b;
    // The global keyword is used to access a global
    // variable from within a function.

    $b = $a + $b;
    echo "$a, $b <br>";
}

Sum();
echo $b;

//-------ARBA------

$a = 1;
$b = 2;

function Sum()
{
    $GLOBALS['z'] = $GLOBALS['a'] + $GLOBALS['b']; // 3
    //PHP also stores all global variables in an array called $GLOBALS[index]. The index holds the name of the variable. This array is also accessible from within functions and can be used to update global variables directly.
}

Sum();
echo $z;

// The $GLOBALS array is an associative array with the name of the global variable being the key and the contents of that variable being the value of the array element. Notice how $GLOBALS exists in any scope, this is because $GLOBALS is a superglobal


//---------------------------------
//Normally, when a function is completed/executed,
// all of its variables are deleted.
// However, sometimes we want a local variable NOT to be deleted.
// We need it for a further job.

To do this, use the static keyword when you first declare the variable

function myTest() {
    static $x = 0;
    echo $x;
    $x++;
}

myTest();
myTest();
myTest();


//===========classes

$foo = 'foo';

class Bar {

    public function baz() {
        // no access to $foo
        $baz = 'baz';
    }

}

// no access to $baz

//===============(anonymous) functions inside functions

function foo() {
    $f = 'bar';

    $bar = function () {
        // no access to $f
        echo $f;
        $b = 'b';
    };

    // no access to $b
    echo $b;
}

//=========
$b = 10;
function foo($bar) {
    $bar = 99;
    echo $bar;
}
foo($b);
//======

//=========
$a = 10;
function foo(&$bar) {
    $bar = 99; // pakinta a reiksme
    echo $bar;
}
foo($a);
//======

// Extending the scope of variables into anonymous functions

$foo = 'bar';

$baz = function () use ($foo) {
    echo $foo;
};

$baz();
