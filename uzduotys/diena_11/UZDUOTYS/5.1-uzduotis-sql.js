// uzduotis 1: istrinti gydytoja "Koris"
// uzduotis 2:  Pakeisti Paciento "Co" varda i "Karolis"
// uzduotis 3.1: visu pacientu, kuriu vardas yra "Tom" -  varda pakeisti i "Tomas"
// uzduotis 3.2: visu pacientu, kuriu vardas prasideda "T" -  docotor_id pakeisti i "4"
// uzduotis 4: gauti paciento "Mark" daktaro pavarde


DELETE FROM doctors WHERE name = "Koris"

SELECT * FROM doctors, patients
    WHERE doctors.lname Like "L%"    -- isveda

//