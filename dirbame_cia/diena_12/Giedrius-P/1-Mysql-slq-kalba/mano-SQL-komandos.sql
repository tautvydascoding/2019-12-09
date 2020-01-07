show databases;

-- pasrirenki DB su kuria dirbsi !
use mysql;

-- parodo kokias turime lenteles (savo DB-je)
show tables;

-- paima (*) visus stulpelius is lenteles 'user';
SELECT * FROM user;

-- paima stulpelius is lenteles user;
SELECT User, Password, Grant_priv FROM user;

CREATE database hospital12;

CREATE TABLE doctors (
  id       int AUTO_INCREMENT PRIMARY KEY,
  name     VARCHAR(40),
  lastname VARCHAR(40)
);

INSERT INTO doctors VALUES (NULL, 'Tim', 'Logan');
INSERT INTO doctors VALUES (NULL, 'Paul', 'Leo');
INSERT INTO doctors VALUES (NULL, 'Ona', 'Onute');
INSERT INTO doctors VALUES (NULL, 'Lite', 'Rene');
INSERT INTO doctors VALUES (NULL, 'Koris', 'Pitas');

CREATE TABLE patiens (
  id       int AUTO_INCREMENT PRIMARY KEY,
  name     VARCHAR(40),
  lastname VARCHAR(40),
  doctor_id int FOREIGN KEY
);

INSERT INTO patiens VALUES (NULL, 'Mark', 'John', 2);
INSERT INTO patiens VALUES (NULL, 'Tom', 'Karlos', 2);
INSERT INTO patiens VALUES (NULL, 'Anis', 'Teido', 1);
INSERT INTO patiens VALUES (NULL, 'Tom', 'Kori', 3);
INSERT INTO patiens VALUES (NULL, 'Co', 'Jo', 1);
INSERT INTO patiens VALUES (NULL, 'Tom', 'Naro', 5);
INSERT INTO patiens VALUES (NULL, 'Jili', 'Jola', 4);

Create TABLE img (
  id int AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50),
  patient_id int FOREIGN KEY
);

INSERT INTO img VALUES (NULL, '13.jpg', 3);
INSERT INTO img VALUES (NULL, 'aa.jpg', 1);
INSERT INTO img VALUES (NULL, 'zz.jpg', 1);


UPDATE patiens
  SET lastname = 'Karolis'
  WHERE id = 2
  LIMIT 1; -- nurodai kiek atlikti veiksmu.

DELETE FROM doctors
  WHERE id = 5
  LIMIT 1;

UPDATE patiens
set name = 'Karolis'
WHERE id = 5
LIMIT 1;

UPDATE patiens
  set name = 'Tomas'
  WHERE name = 'Tom';

UPDATE patiens
  set doctor_id = 4
  WHERE name LIKE 'T%';




SELECT doctors.name from doctors
  INNER JOIN patiens
  ON patiens.doctor_id = doctors.id AND patiens.name = 'Mark';
