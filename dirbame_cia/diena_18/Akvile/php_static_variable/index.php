<?php

function test() {
    static $z = 0;
    echo "z: $z<br>";
    $z--;
}

test();
test();
test();


function manoRekursija() {
    static $i = 0;
    $i++;
    if ($i < 5) {
        manoRekursija();
        echo "$i <br>";
    }
}

manoRekursija();
