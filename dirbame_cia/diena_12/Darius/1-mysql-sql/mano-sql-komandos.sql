
-- pasirenki duomenų bazę su kuria dirbsi !!!
use mysql;


-- parodo kokias turime lenteles savo duomenų bazėje
show tables;

-- paima (*) visus stulpelius iš  Lentelės 'user'
select * from user;


select User, Grant_priv from user;

CREATE DATABASE hospital12;

CREATE table doctors (
  ID int Primary key auto_increment,
  name varchar(30) not null,
  lname varchar(40) not null
);

insert into doctors values (null, 'Tim', 'Logan');
insert into doctors values (null, 'Paul', 'Leo');
insert into doctors values (null, 'Ona', 'Onute');
insert into doctors values (null, 'Lite', 'Rene');
insert into doctors values (null, 'Koris', 'Pitas');

  DELETE FROM doctors WHERE id=1;

  CREATE table patients (
    ID int Primary key auto_increment,
    name varchar(30) not null,
    lname varchar(40) not null,
    doctor_id int
  );

  insert into patients values (null, 'Mark', 'John', 2);
  insert into patients values (null, 'Tom', 'Karlos', 2);
  insert into patients values (null, 'Anis', 'Tiedo', 1);
  insert into patients values (null, 'Tom', 'Kori', 3);
  insert into patients values (null, 'Co', 'Jo', 1);
  insert into patients values (null, 'Tom', 'Naro', 5);
  insert into patients values (null, 'Jili', 'Jola', 4);

    CREATE table images (
      ID int Primary key auto_increment,
      name varchar(30) not null,
      doctor_id int
    );

    insert into images values (null, 'Pirma.jpg', 3);
    insert into images values (null, 'Antra.jpg', 1);
    insert into images values (null, 'Trečia.jpg', 1);
    insert into images values (null, 'Ketvirta.jpg', 2);
    insert into images values (null, 'Penkta.jpg', 5);
    insert into images values (null, 'Šešta.jpg', 4);

      -- darbas su dviem lentelėm
      SELECT patients.name, patients.lname, doctors.lname from patients, doctors
      Order by doctors.id desc;

      update patients
        set lname = 'Karolis'
        where id =2
        limit 1;

        // uzduotis 1: istrinti gydytoja "Koris"
        // uzduotis 2:  Pakeisti Paciento "Co" varda i "Karolis"
        // uzduotis 3.1: visu pacientu, kuriu vardas yra "Tom" -  varda pakeisti i "Tomas"
        // uzduotis 3.2: visu pacientu, kuriu vardas prasideda "T" -  docotor_id pakeisti i "4"
        // uzduotis 4: gauti paciento "Mark" daktaro pavarde

        DELETE from doctors
        where name = "Koris"
        limit 1;

        update patients
          set name ="Karolis"
          where name = "Co"
          limit 1;

          update patients
            set name = "Tomas"
            where name = "Tom"
            limit 1;

update patients
  set doctor_id=4
  where name like 'T%'
  limit 1;

SELECT * FROM Customers
WHERE ContactName LIKE 'a%o';


        //
