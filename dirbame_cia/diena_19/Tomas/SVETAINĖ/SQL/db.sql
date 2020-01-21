CREATE DATABASE sport_programs;

-- ========TABLE QUESTIONS=======
CREATE TABLE questions(
        id  INT AUTO_INCREMENT PRIMARY KEY,
        question VARCHAR(250) NOT NULL,
        answer1  VARCHAR(250) NOT NULL,
        answer2  VARCHAR(250) NOT NULL,
        answer3  VARCHAR(250) NOT NULL,
        answer4  VARCHAR(250) NOT NULL,
        answer5  VARCHAR(250) NOT NULL
);

-- INSERTING QUESTIONS INTO TABLE QUESTIONS
INSERT INTO questions VALUES ("", "Please specify your gender", "Male", "Female", "", "", "");
INSERT INTO questions VALUES ("", "What is your primary interest in participating in sports activities?", "Health and fitness", "Gain muscles", "Burn fats", "Entertainment and recreation", "Sport skills enhancement");
INSERT INTO questions VALUES ("", "Physical activity", "Almost no physical activity", "Almost no physical activity", "I exercise 1-2 times a week", "I exercise 3-5 times a week", "I exercise 5-7 times a week");
INSERT INTO questions VALUES ("", "Describe a typical day for you", "At the office", "I spent the better part of the day on foot", "Manual labor", "I mostly stay at home", "");
INSERT INTO questions VALUES ("", "How many times do you eat a day?", "1 time", "2 times", "3 times", "4 times", "I eat different number of times every day");
INSERT INTO questions VALUES ("", "Which of the following is true for you:", "I do not get enough sleep", "I sleep 6-7 hours and less", "I sleep 8 and more hours", "", "");
INSERT INTO questions VALUES ("", "I have the permission of the doctor to engage in moderate or vigorous exercise", "Yes", "No", "", "", "");

-- ======== END OF THE TABLE QUESTIONS=======

-- ========TABLE ANSWERS=======
CREATE TABLE answers(
        id  INT AUTO_INCREMENT PRIMARY KEY,
        questions_id INT,
        answers  VARCHAR(250) NOT NULL
);

-- ========END OF THE TABLE ANSWERS=======

-- ========TABLE programs=======
CREATE TABLE programs(
        id INT AUTO_INCREMENT PRIMARY KEY,
        program_name VARCHAR(250) NOT NULL,
        price VARCHAR(250) NOT NULL,
        img VARCHAR(300) NOT NULL
);

INSERT INTO programs VALUES ("", "FAT BURN", 40, "fatburn.jpg" );
INSERT INTO programs VALUES ("", "HEALTH AND FITTNESS", 50, "healthandfittness.jpg" );
INSERT INTO programs VALUES ("", "HIIT", 60, "hiit.jpg" );
INSERT INTO programs VALUES ("", "MUSCLE GAIN", 30, "musclegain.jpg" );

-- ========END OF THE TABLE programs=======

-- ===========LOGIN==========

CREATE TABLE admin_login (
  id int(11) NOT NULL AUTO_INCREMENT,
  adminName varchar(255) NOT NULL,
  password varchar(100) NOT NULL,
  PRIMARY KEY (id),
  UNIQUE KEY adminName (adminName)
);

--========== username / Password========
INSERT INTO `admin_login` (`id`, `adminName`, `password`) VALUES (NULL, 'admin', 'password');
