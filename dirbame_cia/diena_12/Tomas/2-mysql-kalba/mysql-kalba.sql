show databases;

-- pasirenki duomenu baze su kuria dirbsi !!!!
use mysql;

--parodo kokias turime lenteles (savo DB-je)
show tables;

--paima (*) visus stulpelius iš lenteles "user"
SELECT * FROM user;

--paima stulpelius is lenteles user;
SELECT User, Password, Grant-priv, FROM user;

--DB sukurimas
CREATE DATABASE hospital12;

--PRIMARY KEY unikaliai identifikuoja kiekvieną lentelės įrašą.
CREATE TABLE doctors (
    id int PRIMARY KEY AUTO_INCREMENT,
    LastName varchar(30) NOT NULL,
    FirstName varchar(40) NOT NULL
);

--test
show tables;


--istrinti lentele jei kazkas negerai;
DROP TABLE doctors;
                          --id   name   lname
INSERT INTO doctors VALUES ('', 'Tim', 'Logan');
--arba
INSERT INTO doctors VALUES (NULL, 'Tim', 'Logan');
INSERT INTO doctors VALUES (NULL, 'Paul', 'Leo');
INSERT INTO doctors VALUES (NULL, 'Ona', 'Onute');
INSERT INTO doctors VALUES (NULL, 'Lite', 'Rone');
INSERT INTO doctors VALUES (NULL, 'Koris', 'Pitas');

--test
SELECT * FROM doctors;
SELECT * FROM patients;

--antra lentele kuri susieta su doctors;
CREATE TABLE patients (
    Id int PRIMARY KEY AUTO_INCREMENT,
    LastName varchar(30),
    FirstName varchar(40),
    doctors_ID int,
    FOREIGN KEY (doctors_ID) REFERENCES doctors(id)
);

--arba



INSERT INTO patients VALUES (NULL, 'Mark', 'John', 2);
INSERT INTO patients VALUES (NULL, 'Tom', 'Karlos', 2);
INSERT INTO patients VALUES (NULL, 'Aris', 'Tiedo', 1);
INSERT INTO patients VALUES (NULL, 'Tom', 'Kori', 3);
INSERT INTO patients VALUES (NULL, 'Co', 'Jo', 1);
INSERT INTO patients VALUES (NULL, 'Tom', 'Naro', 5);
INSERT INTO patients VALUES (NULL, 'Jili', 'Jola', 4);


--select

SELECT patients.FirstName, patiens.LastName, doctors.LastName
FROM doctors, patients
ORDER BY doctors.id DESC;

UPDATE patients_ID
  SET LastName = 'Karolis'
  WHERE id = '2'
  LIMIT 1;   --jei netycia parasai ne Id o LastName, tai sugadintu tik viena karta,




--uzduotis 1: istrinti gydytoja "Koris"

--DELETE FROM doctors WHERE LastName='Karis';

--UPDATE doctors
  --DELETE FROM LastName = 'Karis'
--  WHERE id = '5'
  --LIMIT 1;

  UPDATE patients_ID
    SET LastName = 'Karis'
    WHERE id = '5'
    LIMIT 1;




--uzduotis 2:  Pakeisti Paciento "Co" varda i "Karolis"
--uzduotis 3.1: visu pacientu, kuriu vardas yra "Tom" -  varda pakeisti i "Tomas"
--uzduotis 3.2: visu pacientu, kuriu vardas prasideda "T" -  docotor_id pakeisti i "4"
--uzduotis 4: gauti paciento "Mark" daktaro pavarde
