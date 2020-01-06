
-- pasirenki duomenu baze su kuria dirbsi!!!
use mysql;
-- parodo kokias turome lenteles
show tables;
-- (*) paima visus stulpelius is lenteles user
select * from user;
-- selectina pasirinktus stulpelius
select User, Grant_priv from user;





--  sukuriam duombaze
CREATE DATABASE hospital12;
-- sukuriam lentele
CREATE TABLE doctors (
  id int PRIMARY KEY AUTO_INCREMENT,
  name varchar(40) NOT NULL,
  lname varchar(40) NOT NULL
);
-- patikrinam ar susikure lentele
show tables;
-- jei nori istrinti lentele
DROP TABLE doctors;
-- ivedam duomenis i lentele
INSERT INTO doctors VALUES (NULL, 'Tim', 'Logan');
INSERT INTO doctors VALUES (NULL, 'Paul', 'Leo');
INSERT INTO doctors VALUES (NULL, 'Ona', 'Onute');
INSERT INTO doctors VALUES (NULL, 'Lite', 'Rene');
INSERT INTO doctors VALUES (NULL, 'Karis', 'Pitas');
-- patikrinam ar isikele duomenys
SELECT * FROM doctors;

CREATE TABLE patients (
  id int PRIMARY KEY AUTO_INCREMENT,
  name varchar(40) NOT NULL,
  lname varchar(40) NOT NULL,
  doctor_id int
);

INSERT INTO patients VALUES (NULL, 'Mark', 'John', 2);
INSERT INTO patients VALUES (NULL, 'Tom', 'Karlos', 2);
INSERT INTO patients VALUES (NULL, 'Aris', 'Tiedo', 1);
INSERT INTO patients VALUES (NULL, 'Tom', 'Kori', 3);
INSERT INTO patients VALUES (NULL, 'Ca', 'Jo', 1);
INSERT INTO patients VALUES (NULL, 'Tom', 'Naro', 5);
INSERT INTO patients VALUES (NULL, 'Jiti', 'Jola', 4);

CREATE TABLE img (
  id int PRIMARY KEY AUTO_INCREMENT,
  name varchar(40) NOT NULL,
  patient_id int
);
INSERT INTO img VALUES (NULL, '13.jpg', 3);
INSERT INTO img VALUES (NULL, 'aa.jpg', 1);
INSERT INTO img VALUES (NULL, 'zz.jpg', 1);

-- darbas su dviem lentelem
SELECT patients.name, patients.lname, doctors.lname FROM patients, doctors;

-- // uzduotis 1: istrinti gydytoja "Koris"
-- // uzduotis 2:  Pakeisti Paciento "Co" varda i "Karolis"
-- // uzduotis 3.1: visu pacientu, kuriu vardas yra "Tom" -  varda pakeisti i "Tomas"
-- // uzduotis 3.2: visu pacientu, kuriu vardas prasideda "T" -  docotor_id pakeisti i "4"
-- // uzduotis 4: gauti paciento "Mark" daktaro pavarde

DELETE FROM doctors WHERE name='Karis';

UPDATE patients
  SET name = 'Karolis'
  WHERE name = 'Ca';

UPDATE patients
  SET name = 'Tomas'
  WHERE name = 'Tom';

UPDATE patients
  SET doctor_id = 4
  WHERE name LIKE 'T%';

SELECT doctors.name, doctors.lname FROM doctors
  INNER JOIN patients
  ON doctors.id = patients.doctor_id
  WHERE patients.name = 'Mark';

SELECT patients.name, patients.lname FROM patients
    INNER JOIN doctors
    ON patients.doctor_id = doctors.id
    WHERE doctors.lname = 'Rene';
