CREATE DATABASE hospital12;


CREATE TABLE doctors (
    id int  AUTO_INCREMENT   PRIMARY KEY,
    name varchar(40) NOT NULL,
    lname varchar(40)
);

--  istrinti DB:
DROP table


INSERT INTO doctors VALUES ('', "Tim", "Logan");

arba

INSERT INTO doctors VALUES (NULL, "Tim", "Logan");
INSERT INTO doctors VALUES (NULL, "Paul", "Leo");
INSERT INTO doctors VALUES (NULL, "Ona", "Onute");
INSERT INTO doctors VALUES (NULL, "Lite", "Rene");
INSERT INTO doctors VALUES (NULL, "Koris", "Pitas");

-- test:
SELECT * FROM doctors;


CREATE TABLE patients (
    id int  AUTO_INCREMENT   PRIMARY KEY,
    name varchar(40) NOT NULL,
    lname varchar(40),
    doctor_id int
);

INSERT INTO patients VALUES (NULL, "Mark", "John", 2);
INSERT INTO patients VALUES (NULL, "Tom", "Karlos", 2);
INSERT INTO patients VALUES (NULL, "Aris", "Tiedo", 1);
INSERT INTO patients VALUES (NULL, "Tom", "Kori", 3);
INSERT INTO patients VALUES (NULL, "Co", "Jo", 1);
INSERT INTO patients VALUES (NULL, "Tom", "Naro", 5);
INSERT INTO patients VALUES (NULL, "Juli", "Jola", 4);



CREATE TABLE img (
    id int  AUTO_INCREMENT   PRIMARY KEY,
    name varchar(40) NOT NULL,
    patient_id int
);


INSERT INTO img VALUES (NULL, "13.jpg", 3);
INSERT INTO img VALUES (NULL, "aa.jpg", 1);
INSERT INTO img VALUES (NULL, "zz.jpg", 1);



 -- darbas su keliom lentelem vienu metu:

SELECT patients.name, patients.lname, doctors.lname FROM patients, doctors;

SELECT patients.name, patients.lname, doctors.lname
      FROM patients, doctors
      ORDER BY doctors.id DESC;



-- // uzduotis 1: istrinti gydytoja "Koris"
DELETE FROM doctors WHERE name = 'Koris';


-- // uzduotis 2:  Pakeisti Paciento "Co" varda i "Karolis"
UPDATE patients
SET name = "Karolis"
WHERE id= 5
LIMIT 1;


-- // uzduotis 3.1: visu pacientu, kuriu vardas yra "Tom" -  varda pakeisti i "Tomas"

UPDATE patients
SET name = "Tomas"
WHERE name = "Tom";

-- // uzduotis 3.2: visu pacientu, kuriu vardas prasideda "T" -  docotor_id pakeisti i "4"

UPDATE patients
SET doctor_id = 4
WHERE name LIKE 'T%';



-- uzduotis 4: gauti paciento "Mark" daktaro pavarde

SELECT doctors.lname
FROM doctors
INNER JOIN patients ON patients.doctor_id = doctors.id
WHERE patients.name = "Mark";


SELECT lname FROM doctors
WHERE id IN (SELECT patients.doctor_id FROM patients WHERE name = "Mark");
