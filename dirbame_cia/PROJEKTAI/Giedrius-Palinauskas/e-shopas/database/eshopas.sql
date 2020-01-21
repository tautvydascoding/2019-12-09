-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jan 21, 2020 at 07:07 AM
-- Server version: 5.7.24
-- PHP Version: 7.2.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `eshopas`
--

-- --------------------------------------------------------

--
-- Table structure for table `img`
--

CREATE TABLE `img` (
  `ID` int(11) NOT NULL,
  `pavadinimas` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `aprasymas` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `pozicija` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `prekes_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `img`
--

INSERT INTO `img` (`ID`, `pavadinimas`, `aprasymas`, `pozicija`, `prekes_id`) VALUES
(16, 'kaklo_gold.jpg', 'Auksinis kaklo papuošalas', '1', 4),
(17, 'kaklo_brown.jpg', 'Rudas Kaklo papuošalas', '1', 5),
(18, 'kaklo_brown2.jpg', 'Rudas Kaklo papuošalas', '2', 5),
(19, 'kaklo_brown3.jpg', 'Rudas Kaklo papuošalas', '3', 5),
(20, 'kaklo_blue.jpg', 'Kaklo papuošalas (Mėlynas)', '1', 6),
(21, 'kaklo_blue2.jpg', 'Kaklo papuošalas (Mėlynas)', '2', 6),
(23, 'raktu_black.jpg', 'Raktų pakabukas su juodu lapeliu', '1', 7),
(24, 'raktu_kitas_black.jpg', 'Raktų pakabukas su bronziniais akcentais', '1', 8),
(25, 'raktu_juodas.jpg', 'Raktų pakabukas su auksinia plunksna', '1', 9),
(26, 'raktu_white.jpg', 'Baltas Raktų pakabukas', '1', 10),
(27, 'raktu_red.jpg', 'Roznis Raktų pakabukas	', '1', 11),
(28, 'kaklo_vyr_juodas.jpg', 'Rožančius su juodu kryželius', '1', 12),
(29, 'apyranke_melyna_juoda.jpg', 'Apyranke juoda su mėlynu	', '1', 14),
(30, 'apyranke_vyr_liutas.jpg', '	Vyriška Juoda apyranke su Liuto galva', '1', 17),
(31, 'apyranke_melyna.jpg', 'Apyranke Melyna su baltu', '1', 15),
(32, 'apyranke_vyr_juoda.jpg', 'Vyriška Juoda apyranke	', '1', 16),
(33, 'automobiliu_lietuva.jpg', 'Automobilio pakabukas Lietuva', '1', 13);

-- --------------------------------------------------------

--
-- Table structure for table `prekes`
--

CREATE TABLE `prekes` (
  `ID` int(11) NOT NULL,
  `pavadinimas` varchar(40) COLLATE utf8mb4_unicode_ci NOT NULL,
  `antraste` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL,
  `nuolaida` int(11) NOT NULL,
  `data` datetime NOT NULL,
  `kiekis` int(11) NOT NULL,
  `pozicija` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `kategorija` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `lytis` varchar(40) COLLATE utf8mb4_unicode_ci NOT NULL,
  `kaina` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `prekes`
--

INSERT INTO `prekes` (`ID`, `pavadinimas`, `antraste`, `nuolaida`, `data`, `kiekis`, `pozicija`, `kategorija`, `lytis`, `kaina`) VALUES
(4, 'Kaklo papuošalas (Auksinis)', 'Iš naturaliu akmenu padarytas kaklo papuosalas, rankų darbo ', 0, '2020-01-15 18:42:21', 4, 'rodyti', 'Kaklo', 'mot', 10.99),
(5, 'Kaklo papuošalas (Rudas)', 'Iš naturaliu akmenu padarytas kaklo papuosalas, rankų darbo', 0, '2020-01-15 18:45:02', -4, 'nerodyti', 'Kaklo', 'mot', 20.99),
(6, 'Kaklo papuošalas (Mėlynas)', 'Iš naturaliu akmenu padarytas kaklo papuosalas, rankų darbo', 0, '2020-01-15 18:47:23', 4, 'rodyti', 'Kaklo', 'mot', 9.99),
(7, 'Raktų pakabukas su juodu lapeliu', 'Iš naturaliu akmenu padarytas raktu pakabukas, rankų darbo	', 0, '2020-01-15 18:50:12', 10, 'rodyti', 'Raktu', 'mot', 20.99),
(8, 'Raktų pakabukas su bronziniais akcentais', 'Iš naturaliu akmenu padarytas raktu pakabukas, rankų darbo', 0, '2020-01-15 18:52:05', 10, 'rodyti', 'Raktu', 'mot', 9.99),
(9, 'Raktų pakabukas su auksinia plunksna', 'Iš naturaliu akmenu padarytas raktu pakabukas, rankų darbo', 0, '2020-01-15 19:02:59', -2, 'rodyti', 'Raktu', 'mot', 20.99),
(10, 'Baltas Raktų pakabukas ', 'Iš naturaliu akmenu padarytas raktu pakabukas, rankų darbo	', 0, '2020-01-15 19:04:52', 10, 'rodyti', 'Raktu', 'mot', 9.99),
(11, 'Roznis Raktų pakabukas ', 'Iš naturaliu akmenu padarytas raktu pakabukas, rankų darbo	', 0, '2020-01-15 19:06:03', 10, 'rodyti', 'Raktu', 'mot', 20.99),
(12, 'Rožančius su juodu kryželius', 'Iš naturaliu akmenu padarytas raktu pakabukas, rankų darbo', 0, '2020-01-15 19:12:14', 8, 'rodyti', 'Kaklo', 'vyr', 9.99),
(13, 'Automobilio pakabukas Lietuva', 'Iš naturaliu akmenu padarytas raktu pakabukas, rankų darbo	', 0, '2020-01-15 19:13:55', 3, 'rodyti', 'Automobiliu', 'vyr_mot', 20.99),
(14, 'Apyranke juoda su mėlynu', 'Iš naturaliu akmenu padarytas raktu pakabukas, rankų darbo', 0, '2020-01-15 19:17:07', 10, 'rodyti', 'Apyrankes', 'mot', 9.99),
(15, 'Apyranke Melyna su baltu', 'Iš naturaliu akmenu padarytas raktu pakabukas, rankų darbo	', 0, '2020-01-15 19:18:21', 10, 'rodyti', 'Apyrankes', 'mot', 20.99),
(16, 'Vyriška Juoda apyranke', 'Iš naturaliu akmenu padarytas raktu pakabukas, rankų darbo', 0, '2020-01-15 19:19:42', 4, 'rodyti', 'Apyrankes', 'vyr', 9.99),
(17, 'Vyriška Juoda apyranke su Liuto galva', 'Iš naturaliu akmenu padarytas raktu pakabukas, rankų darbo	', 0, '2020-01-15 19:20:48', 6, 'rodyti', 'Apyrankes', 'vyr', 20.99);

-- --------------------------------------------------------

--
-- Table structure for table `uzsakymas`
--

CREATE TABLE `uzsakymas` (
  `ID` int(11) NOT NULL,
  `vardas` varchar(40) COLLATE utf8mb4_unicode_ci NOT NULL,
  `pavarde` varchar(40) COLLATE utf8mb4_unicode_ci NOT NULL,
  `epastas` varchar(40) COLLATE utf8mb4_unicode_ci NOT NULL,
  `adresas` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `telnr` varchar(40) COLLATE utf8mb4_unicode_ci NOT NULL,
  `atsiemimas` varchar(40) COLLATE utf8mb4_unicode_ci NOT NULL,
  `suma` float NOT NULL,
  `vartotojo_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `uzsakymas`
--

INSERT INTO `uzsakymas` (`ID`, `vardas`, `pavarde`, `epastas`, `adresas`, `telnr`, `atsiemimas`, `suma`, `vartotojo_id`) VALUES
(16, 'Giedrius', 'Palinauskas', 'giedrius@gmail.com', 'S. Žukausko g. 37 - 15, Kaunas, lt-323232, Lietuva', '+37063069742', 'Kurjeris', 24.49, 18),
(17, 'Giedrius', 'Palinauskas', 'giedrius@gmail.com', 'S. Žukausko g. 37 - 15, Kaunas, lt-323232, Lietuva', '+37063069742', 'Parduotuve', 40.97, 18),
(18, 'Giedrius', 'Palinauskas', 'giedrius.palinauskas@gmail.com', 'S. Žukausko g. 37 - 15, Kaunas, 49249, Lithuania', '+37063069742', 'Parduotuve', 51.97, 0),
(19, 'Giedrius', 'Palinauskas', 'giedrius@gmail.com', 'S. Žukausko g. 37 - 15, Kaunas, lt-323232, Lietuva', '+37063069742', 'Parduotuve', 9.99, 18);

-- --------------------------------------------------------

--
-- Table structure for table `uzsakymo_prekes`
--

CREATE TABLE `uzsakymo_prekes` (
  `ID` int(11) NOT NULL,
  `uzsakymo_id` int(11) NOT NULL,
  `prekes_id` int(11) NOT NULL,
  `kiekis` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `uzsakymo_prekes`
--

INSERT INTO `uzsakymo_prekes` (`ID`, `uzsakymo_id`, `prekes_id`, `kiekis`) VALUES
(29, 16, 13, 1),
(30, 17, 16, 1),
(31, 17, 12, 1),
(32, 17, 17, 1),
(33, 0, 12, 1),
(34, 0, 13, 1),
(35, 0, 13, 1),
(36, 0, 16, 1),
(37, 0, 13, 1),
(38, 0, 16, 1),
(39, 0, 17, 1),
(40, 0, 13, 1),
(41, 0, 16, 1),
(42, 0, 17, 1),
(43, 18, 13, 1),
(44, 18, 16, 1),
(45, 18, 17, 1),
(46, 19, 16, 1);

-- --------------------------------------------------------

--
-- Table structure for table `vartotojai`
--

CREATE TABLE `vartotojai` (
  `ID` int(11) NOT NULL,
  `vardas` varchar(40) COLLATE utf8mb4_unicode_ci NOT NULL,
  `pavarde` varchar(40) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slaptazodis` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `pastas` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `adresas` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `miestas` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `PastoKodas` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `salis` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `telNumeris` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `level` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `vartotojai`
--

INSERT INTO `vartotojai` (`ID`, `vardas`, `pavarde`, `slaptazodis`, `pastas`, `adresas`, `miestas`, `PastoKodas`, `salis`, `telNumeris`, `level`) VALUES
(18, 'Giedrius', 'Palinauskas', 'fa2bf66dca7af573face4706d23bc7cb', 'giedrius@gmail.com', 'S. Žukausko g. 37 - 15', 'Kaunas', 'lt-323232', 'Lietuva', '+37063069742', 2);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `img`
--
ALTER TABLE `img`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `prekes`
--
ALTER TABLE `prekes`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `uzsakymas`
--
ALTER TABLE `uzsakymas`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `uzsakymo_prekes`
--
ALTER TABLE `uzsakymo_prekes`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `vartotojai`
--
ALTER TABLE `vartotojai`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `img`
--
ALTER TABLE `img`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT for table `prekes`
--
ALTER TABLE `prekes`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `uzsakymas`
--
ALTER TABLE `uzsakymas`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `uzsakymo_prekes`
--
ALTER TABLE `uzsakymo_prekes`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=47;

--
-- AUTO_INCREMENT for table `vartotojai`
--
ALTER TABLE `vartotojai`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
