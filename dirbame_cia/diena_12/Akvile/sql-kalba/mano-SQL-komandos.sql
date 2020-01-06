SHOW DATABASES;

--Pasirenkame duomenu baze
USE database_name;

CREATE DATABASE hospital12;

SHOW tables;


  CREATE TABLE doctors (
    ID int AUTO_INCREMENT NOT NULL PRIMARY KEY,
    Name varchar(30) NOT NULL,
    LastName varchar(40) NOT NULL
);

INSERT INTO doctors VALUES (NULL, 'Tim', 'Logan');
INSERT INTO doctors VALUES (NULL, 'Paul', 'Leo');
INSERT INTO doctors VALUES (NULL, 'Ona', 'Onute');
INSERT INTO doctors VALUES (NULL, 'Lite', 'Rene');
INSERT INTO doctors VALUES (NULL, 'Koris', 'Pitas');

DELETE FROM doctors WHERE ID > 5;

CREATE TABLE patients (
  ID int AUTO_INCREMENT NOT NULL PRIMARY KEY,
  Name varchar(30) NOT NULL,
  LastName varchar(40) NOT NULL,
  doctor_id int,
  FOREIGN KEY (doctor_id) REFERENCES doctors(ID) ON DELETE SET NULL
);

ALTER TABLE patients add foreign key (doctor_id) references doctors(ID) on DELETE SET NULL;

INSERT INTO patients VALUES (NULL, 'Mark', 'John', 2);
INSERT INTO patients VALUES (NULL, 'Tom', 'Karlos', 2);
INSERT INTO patients VALUES (NULL, 'Aris', 'Tiedo', 1);
INSERT INTO patients VALUES (NULL, 'Tom', 'Kori', 3);
INSERT INTO patients VALUES (NULL, 'Co', 'Jo', 1);
INSERT INTO patients VALUES (NULL, 'Tom', 'Naro', 5);
INSERT INTO patients VALUES (NULL, 'Jili', 'Jola', 4);

SELECT * FROM doctors;

ALTER TABLE patients
DROP FOREIGN KEY doctor_id;

CREATE TABLE img (
  ID int AUTO_INCREMENT NOT NULL PRIMARY KEY,
  Name varchar(30) NOT NULL,
  patient_id int,
  FOREIGN KEY (patient_id) REFERENCES patients(ID)
);

INSERT INTO img VALUES (NULL, '13.jpg', 3);
INSERT INTO img VALUES (NULL, 'aa.jpg', 1);
INSERT INTO img VALUES (NULL, 'zz.jpg', 1);

SELECT Name FROM doctors INNER JOIN patients ON doctors.id = patients.doctor_id;

-- // uzduotis 1: istrinti gydytoja "Koris"
DELETE FROM doctors WHERE Name = "Koris";
-- // uzduotis 2:  Pakeisti Paciento "Co" varda i "Karolis"
-- // uzduotis 3.1: visu pacientu, kuriu vardas yra "Tom" -  varda pakeisti i "Tomas"
-- // uzduotis 3.2: visu pacientu, kuriu vardas prasideda "T" -  docotor_id pakeisti i "4"
-- // uzduotis 4: gauti paciento "Mark" daktaro pavarde
