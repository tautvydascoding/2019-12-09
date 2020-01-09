show databases;
-- pasirenki DB su kuria dirbsi!
use mysql;
-- parodo kokias turime lenteles savo DB.
show tables;
-- istrinti lenteles
DROP TABLE pavadinimas;
-- paima (SELECT) visus stulpelius(*), is lenteles user.
SELECT * FROM user;
SELECT User, Password, Grant_priv FROM user;

CREATE DATABASE hospital12;

CREATE TABLE doctors (
    id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name varchar(30) NOT NULL,
    lname varchar(30) NOT NULL
);

INSERT INTO doctors VALUES (NULL, 'Tim', 'Logan');

CREATE TABLE patients (
    id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name varchar(30) NOT NULL,
    lname varchar(30) NOT NULL,
    doctor_id int NOT NULL
);
INSERT INTO patients VALUES (NULL, 'Mark', 'John', 2);

CREATE TABLE img (
    id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name varchar(30) NOT NULL,
    patient_id int NOT NULL
);
INSERT INTO img VALUES (NULL, '13.jpg', 3);

UPDATE patients
      SET lname = 'Karolis'
      WHERE id = 2
      LIMIT 1;

      -- // uzduotis 1: istrinti gydytoja "Koris"
      DELETE FROM doctors WHERE name = 'Koris';
      -- // uzduotis 2:  Pakeisti Paciento "Co" varda i "Karolis"
      UPDATE patients SET name = 'Karoliz' WHERE id = 5 LIMIT 1;
      -- // uzduotis 3.1: visu pacientu, kuriu vardas yra "Tom" -  varda pakeisti i "Tomas"
      UPDATE patients SET name = 'Tomas' WHERE name = 'Tom';
      -- // uzduotis 3.2: visu pacientu, kuriu vardas prasideda "T" -  docotor_id pakeisti i "4"
      UPDATE patients SET doctor_id = 4 WHERE name LIKE 'T%';
      -- // uzduotis 4: gauti paciento "Mark" daktaro pavarde
      SELECT doctors.name
      FROM doctors
      INNER JOIN patients
      WHERE doctors.id = patients.doctor_id AND patients.name = 'Mark';
