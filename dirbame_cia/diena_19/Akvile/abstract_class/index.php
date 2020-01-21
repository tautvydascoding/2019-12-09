<?php

include('Admin.php');

$user = new Admin();

echo $user->getName();

$user->changeName('Jonas');

echo $user->getName();

// uzduotis:
// 1) sukurti interface "Edit" :
//  1.1) kuri turi funkcijas: (kurios nera aprasytos (privalomos)!
    // changeName($a)
    // getName()
    // isLogin()
    //: Ar interface gali tureti kintamuosius????
// 2) sukurti (abstrakcia) klase "User" :
    // 0) abstrakti kalse - NEGALI TURETI ABSTRAKCIU KINTAMUJU (BET PAPRASTUS GALI)
    // A) sukurti kintamuosius:
        // name, password , createdDate, lastLogin
    // B) abstrakti funkcija "Loguot()"
    // C) NE abstrakti funkcija clearlastLoginTime()
// 3) sukurti klase Admin :
    // A)  kuri panaudoja Edit ir User ~klases (implementuoti ir paveldeti)
// 4)
     // A) issivesti username,
     // B) pakeisti username
     // C) issivesti username


 // : abstrakti klase - NEGALI TURETI ABSTRAKCIU KINTAMUJU (BET PAPRASTUS GALI)
