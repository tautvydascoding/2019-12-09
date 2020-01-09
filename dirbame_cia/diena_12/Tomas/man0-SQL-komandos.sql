show databases;

-- pasirenki DB su kuria dirbsi !!!
use mysql;

-- parodo kokias turime lenteles (savo DB-je)
show tables;

-- paima (*) visus stulpelius is lenteles 'user'
SELECT * FROM user;

-- paima   stulpelius is lenteles 'user'
SELECT User, Password, Grant_priv FROM user;





-- DB sukurimas
CREATE DATABASE hospital12;
-- test
show databases;
-- pasirenki DB su kuria dirbsi !!!
use hospital12;

CREATE TABLE doctors (
    id    int          PRIMARY KEY     AUTO_INCREMENT,
    name  varchar(40) NOT NULL,
    lname varchar(40) NOT NULL
);
-- test
 show tables;
 -- !!!istrinti lentele!!!!
 DROP TABLE doctors;
--                          id       name        lname
 INSERT INTO doctors VALUES ('',   'Tim',        'Logan');
 -- arba
 INSERT INTO doctors VALUES (NULL, 'Tim',        'Logan');
 -- test
 SELECT * FROM doctors;

 INSERT INTO doctors VALUES (NULL, 'Paul',        'Leo');
 INSERT INTO doctors VALUES (NULL, 'Ona',         'Onutaite');
 INSERT INTO doctors VALUES (NULL, 'Lite',        'Rene');
 INSERT INTO doctors VALUES (NULL, 'Koris',        'Pitas');
 -- test
 SELECT * FROM doctors;

 -- --------------------------------------

 CREATE TABLE patients (
     id    int          PRIMARY KEY     AUTO_INCREMENT,
     name  varchar(40) NOT NULL,
     lname varchar(40) NOT NULL,
     doctor_id int
 );
 -- test
 show tables;

 INSERT INTO patients VALUES (NULL, 'Mark',  'John', 2);
 -- test
 SELECT * FROM patients;


 INSERT INTO patients VALUES (NULL, 'Tom',  'Karlos', 2);
 INSERT INTO patients VALUES (NULL, 'Aris',  'Tiedo', 1);
 INSERT INTO patients VALUES (NULL, 'Tom',   'Kori', 3);
 INSERT INTO patients VALUES (NULL, 'Co',   'Jo', 1);
 INSERT INTO patients VALUES (NULL, 'Tom',   'Naro', 5);
 INSERT INTO patients VALUES (NULL, 'Jili',   'Jola', 4);
 -- test
 SELECT * FROM patients;

-- darbas su dviem lentelemis
 SELECT   patients.name, patients.lname, doctors.lname
        FROM patients, doctors
        ORDER BY  doctors.id DESC ;

UPDATE patients
        SET  lname = 'Karolis'
        WHERE id = '2'
        LIMIT 1;



4) sprendimas
SELECT doctors.lname     	// ko ieskome ir ka grazins
	FROM patients, doctors  // su kokiomis lentelemis dirbsime
	WHERE patients.name = 'Tom' AND patients.doctor_id = doctors.id;

// OR

SELECT doctors.lname      // ko ieskome ir ka grazins
	FROM doctors          // pagal kurios lenteles duomenis
	INNER JOIN patients ON patients.doctor_id = doctors.id
	WHERE patients.name = 'Tom';
