-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 2020 m. Sau 20 d. 19:25
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sport_programs`
--

-- --------------------------------------------------------

--
-- Sukurta duomenų struktūra lentelei `admin_login`
--

CREATE TABLE `admin_login` (
  `id` int(11) NOT NULL,
  `adminName` varchar(255) NOT NULL,
  `password` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Sukurta duomenų kopija lentelei `admin_login`
--

INSERT INTO `admin_login` (`id`, `adminName`, `password`) VALUES
(1, 'admin', 'password');

-- --------------------------------------------------------

--
-- Sukurta duomenų struktūra lentelei `answers`
--

CREATE TABLE `answers` (
  `id` int(11) NOT NULL,
  `questions_id` int(11) DEFAULT NULL,
  `answers` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Sukurta duomenų struktūra lentelei `programs`
--

CREATE TABLE `programs` (
  `id` int(11) NOT NULL,
  `program_name` varchar(250) NOT NULL,
  `price` varchar(250) NOT NULL,
  `img` varchar(300) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Sukurta duomenų kopija lentelei `programs`
--

INSERT INTO `programs` (`id`, `program_name`, `price`, `img`) VALUES
(1, 'FAT BURN', '40', 'fatburn.jpg'),
(2, 'HEALTH AND FITTNESS', '50', 'healthandfittness.jpg'),
(3, 'HIIT', '60', 'hiit.jpg'),
(4, 'MUSCLE GAIN', '30', 'musclegain.jpg');

-- --------------------------------------------------------

--
-- Sukurta duomenų struktūra lentelei `questions`
--

CREATE TABLE `questions` (
  `id` int(11) NOT NULL,
  `question` varchar(250) NOT NULL,
  `answer1` varchar(250) NOT NULL,
  `answer2` varchar(250) NOT NULL,
  `answer3` varchar(250) NOT NULL,
  `answer4` varchar(250) NOT NULL,
  `answer5` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Sukurta duomenų kopija lentelei `questions`
--

INSERT INTO `questions` (`id`, `question`, `answer1`, `answer2`, `answer3`, `answer4`, `answer5`) VALUES
(1, 'Please specify your gender', 'Male', 'Female', '', '', ''),
(2, 'What is your primary interest in participating in sports activities?', 'Health and fitness', 'Gain muscles', 'Burn fats', 'Entertainment and recreation', 'Sport skills enhancement'),
(3, 'Physical activity', 'Almost no physical activity', 'Almost no physical activity', 'I exercise 1-2 times a week', 'I exercise 3-5 times a week', 'I exercise 5-7 times a week'),
(4, 'Describe a typical day for you', 'At the office', 'I spent the better part of the day on foot', 'Manual labor', 'I mostly stay at home', ''),
(5, 'How many times do you eat a day?', '1 time', '2 times', '3 times', '4 times', 'I eat different number of times every day'),
(6, 'Which of the following is true for you:', 'I do not get enough sleep', 'I sleep 6-7 hours and less', 'I sleep 8 and more hours', '', ''),
(7, 'I have the permission of the doctor to engage in moderate or vigorous exercise', 'Yes', 'No', '', '', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin_login`
--
ALTER TABLE `admin_login`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `adminName` (`adminName`);

--
-- Indexes for table `answers`
--
ALTER TABLE `answers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `programs`
--
ALTER TABLE `programs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `questions`
--
ALTER TABLE `questions`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin_login`
--
ALTER TABLE `admin_login`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `answers`
--
ALTER TABLE `answers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `programs`
--
ALTER TABLE `programs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `questions`
--
ALTER TABLE `questions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
