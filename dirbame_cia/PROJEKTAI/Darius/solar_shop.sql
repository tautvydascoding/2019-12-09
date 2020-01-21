-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jan 21, 2020 at 07:11 AM
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
-- Database: `solar_shop`
--
CREATE DATABASE IF NOT EXISTS `solar_shop` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `solar_shop`;

-- --------------------------------------------------------

--
-- Table structure for table `about`
--

CREATE TABLE `about` (
  `id` int(11) NOT NULL,
  `Head_name` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `Position` int(11) DEFAULT NULL,
  `Show?` tinyint(1) NOT NULL,
  `Content` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `about`
--

INSERT INTO `about` (`id`, `Head_name`, `Position`, `Show?`, `Content`) VALUES
(1, 'History', 1, 1, 'GCL System Integration Technology Co. Ltd (002506 Shenzhen Stock) (GCL S.I.) is part of the GOLDEN CONCORD Group (GCL), an international energy conglomerate specializing in clean and sustainable energy.\r\nThe Group, founded in 1990, now employs 30,000 people worldwide with business footprints across 31 provinces, municipalities and autonomous regions of mainland China, Hong Kong, Taiwan, as well as Africa, North America, Southeast Asia and Europe. GCL ranked third in the world’s new energy Top500 2017.'),
(2, 'About', 2, 1, 'GCL S.I. currently has operations all over the world and has five module production bases in mainland China and one in Vietnam, with production capacity of 6GW, and an additional 2GW of high-efficiency battery capacity, making it a world-class module producer. GCL offers a wide range of high-quality products for a variety of application environments, including modules of standard 60/72-piece, dual-glass, high-efficiency polysilicon PERC, and half-cell etc. All products underwent the most rigorous quality inspection and testing. GCL S.I. is rated as a global first-tier module supplier by Bloomberg ranking among the top six globally for three consecutive years. With a vertically integrated value chain operation, GCL S.I. has proven track record of capability and expertise in delivering state-of-the-art solar package solutions incorporating DESIGN-PRODUCT-SERVICE.');

-- --------------------------------------------------------

--
-- Table structure for table `figures`
--

CREATE TABLE `figures` (
  `id` int(11) NOT NULL,
  `fig_name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `descripion` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `position` int(30) DEFAULT NULL,
  `Goods_id` int(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `figures`
--

INSERT INTO `figures` (`id`, `fig_name`, `descripion`, `position`, `Goods_id`) VALUES
(1, 'Hybridinis_inverteris.jpg', NULL, NULL, 7),
(2, 'Karšto_vandens_RS.jpg', NULL, NULL, 2),
(3, 'Mikro_inverteris.jpg', NULL, NULL, 8),
(4, 'Monokristalinis_SM.jpg', NULL, NULL, 4),
(5, 'Polikristalinis_SM.jpg', NULL, NULL, 5),
(6, 'Plokstuminis_SK.jpg', NULL, NULL, 3),
(7, 'Plonos_pl_SM.jpg', NULL, NULL, 6),
(8, 'Polikristalinis_SM.jpg', NULL, NULL, 5),
(9, 'Saulės_el_baterija.jpg', NULL, NULL, 9),
(10, 'Vakuminis_SK.jpg', NULL, NULL, 1);

-- --------------------------------------------------------

--
-- Table structure for table `goods`
--

CREATE TABLE `goods` (
  `id` int(11) NOT NULL,
  `goods_name` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `type` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `price` int(11) NOT NULL,
  `discount` int(11) DEFAULT NULL,
  `position` int(11) DEFAULT NULL,
  `amount` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `goods`
--

INSERT INTO `goods` (`id`, `goods_name`, `description`, `type`, `price`, `discount`, `position`, `amount`) VALUES
(1, 'Thin Film Flexible SP', 'Quick Details\r\nPlace of Origin:China\r\nBrand Name:PORTABLE\r\nModel Number:PETC--SE100H\r\n', 'Fotovoltinis komp.', 89, NULL, 1, 23),
(2, 'Solar battery', 'Quick Details\r\nPlace of Origin:Guangdong, China\r\nBrand Name:ESG\r\nModel Number:GFM1000\r\nWeight:60kg\r\n\r\nMaterial:ABS\r\nTerminal:Lead Alloy\r\nUsage:UPS\r\nSealed Type:Sealed\r\nMaintenance Type:Free\r\nCertification:ce, IEC', 'Baterija', 78, NULL, 2, 63),
(3, 'Thin Film Flexible SP', NULL, 'Fotovoltinis komp.', 89, 2, 3, 23),
(4, 'Solar battery', NULL, 'Baterija', 78, 6, 5, 63),
(11, 'Saule', NULL, NULL, 23, 2, 15, 2),
(12, 'Menulis', NULL, NULL, 23, 2, 20, 5);

-- --------------------------------------------------------

--
-- Table structure for table `main_meniu`
--

CREATE TABLE `main_meniu` (
  `id` int(11) NOT NULL,
  `Name` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Position` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='Main meniu elements';

--
-- Dumping data for table `main_meniu`
--

INSERT INTO `main_meniu` (`id`, `Name`, `Position`) VALUES
(1, 'Home', 1),
(2, 'Saulės elektrinės', 2),
(3, 'Parama', 3),
(4, 'Apie mus', 5),
(6, 'Paslaugos', 4),
(7, 'Kontaktai', 7);

-- --------------------------------------------------------

--
-- Table structure for table `registration_db`
--

CREATE TABLE `registration_db` (
  `id` int(11) NOT NULL,
  `name` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `l_name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `city` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `village` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `street` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `house_nr` int(11) DEFAULT NULL,
  `flat_nr` int(11) DEFAULT NULL,
  `tel_nr` varchar(20) DEFAULT NULL COMMENT '+370',
  `e_mail` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `registration_db`
--

INSERT INTO `registration_db` (`id`, `name`, `l_name`, `city`, `village`, `street`, `house_nr`, `flat_nr`, `tel_nr`, `e_mail`, `password`) VALUES
(1, 'Darius', 'Tomaitis', 'Kauno raj.', 'Vilkija', 'Kauno', 23, NULL, '+37066688896', 'ppp.lll@gmail.com', 'Pirmas'),
(2, 'Darius', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'darius@gmail.com', 'Antras'),
(3, '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `about`
--
ALTER TABLE `about`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `figures`
--
ALTER TABLE `figures`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `goods`
--
ALTER TABLE `goods`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `main_meniu`
--
ALTER TABLE `main_meniu`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `registration_db`
--
ALTER TABLE `registration_db`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `about`
--
ALTER TABLE `about`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `figures`
--
ALTER TABLE `figures`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `goods`
--
ALTER TABLE `goods`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `main_meniu`
--
ALTER TABLE `main_meniu`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `registration_db`
--
ALTER TABLE `registration_db`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
