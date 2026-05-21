-- phpMyAdmin SQL Dump
-- version 5.2.3
-- https://www.phpmyadmin.net/
--
-- Host: mariadb
-- Generation Time: May 20, 2026 at 04:58 PM
-- Server version: 10.6.20-MariaDB-ubu2004
-- PHP Version: 8.3.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `wash_world`
--

-- --------------------------------------------------------

--
-- Table structure for table `cars`
--

CREATE TABLE `cars` (
  `car_pk` char(32) NOT NULL,
  `car_licenseplate` varchar(10) NOT NULL,
  `car_most_recent_wash` bigint(20) UNSIGNED NOT NULL,
  `car_image` varchar(255) NOT NULL,
  `car_created_at` bigint(20) UNSIGNED NOT NULL,
  `car_updated_at` bigint(20) UNSIGNED NOT NULL,
  `car_deleted_at` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `cases`
--

CREATE TABLE `cases` (
  `case_pk` char(32) NOT NULL,
  `car_fk` char(32) NOT NULL,
  `case_status_fk` char(32) NOT NULL,
  `case_number` char(32) NOT NULL,
  `case_description` varchar(1000) NOT NULL,
  `case_document` varchar(255) NOT NULL,
  `case_created_at` bigint(20) UNSIGNED NOT NULL,
  `case_updated_at` bigint(20) UNSIGNED NOT NULL,
  `case_deleted_at` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `case_status`
--

CREATE TABLE `case_status` (
  `case_status_pk` char(32) NOT NULL,
  `case_status_title` varchar(50) NOT NULL,
  `case_status_created_at` char(32) NOT NULL,
  `case_status_updated_at` char(32) NOT NULL,
  `case_status_deleted_at` char(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `facilities`
--

CREATE TABLE `facilities` (
  `facilities_pk` char(32) NOT NULL,
  `facilities_selfwash` int(11) NOT NULL,
  `facilities_carwash` int(11) NOT NULL,
  `facilities_insideclean` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `locations`
--

CREATE TABLE `locations` (
  `location_pk` char(32) NOT NULL,
  `location_title` varchar(255) NOT NULL,
  `location_latitude` decimal(8,6) NOT NULL,
  `location_longtituge` decimal(9,6) NOT NULL,
  `location_city` varchar(255) NOT NULL,
  `location_address` varchar(255) NOT NULL,
  `location_status_fk` char(32) NOT NULL,
  `location_created_at` bigint(20) UNSIGNED NOT NULL,
  `location_updated_at` bigint(20) UNSIGNED NOT NULL,
  `location_deleted_at` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `location_facilities`
--

CREATE TABLE `location_facilities` (
  `location_facilities_pk` char(32) NOT NULL,
  `facilities_fk` char(32) NOT NULL,
  `location_fk` char(32) NOT NULL,
  `location_facilities_created_at` char(32) NOT NULL,
  `location_facilities_updated_at` char(32) NOT NULL,
  `location_facilities_deleted_at` char(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `location_status`
--

CREATE TABLE `location_status` (
  `location_status_pk` char(32) NOT NULL,
  `location_status_title` varchar(50) NOT NULL,
  `location_status_created_at` char(32) NOT NULL,
  `location_status_updated_at` char(32) NOT NULL,
  `location_status_deleted_at` char(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `payment_frequency`
--

CREATE TABLE `payment_frequency` (
  `payment_frequency_pk` char(32) NOT NULL,
  `payment_frequency_title` varchar(50) NOT NULL,
  `payment_frequency_created_at` char(32) NOT NULL,
  `payment_frequency_updated_at` char(32) NOT NULL,
  `payment_frequency_deleted_at` char(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `plans`
--

CREATE TABLE `plans` (
  `plan_pk` char(32) NOT NULL,
  `payment_frequency_fk` char(32) NOT NULL,
  `plan_price` decimal(5,2) NOT NULL,
  `plans_status_fk` char(32) NOT NULL,
  `plan_title` varchar(50) NOT NULL,
  `plan_created_at` char(32) NOT NULL,
  `plan_updated_at` char(32) NOT NULL,
  `plan_deleted_at` char(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `plans_status`
--

CREATE TABLE `plans_status` (
  `plans_status_pk` char(32) NOT NULL,
  `plans_status_title` varchar(50) NOT NULL,
  `plans_status_created_at` char(32) NOT NULL,
  `plans_status_updated_at` char(32) NOT NULL,
  `plans_status_deleted_at` char(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `receipts`
--

CREATE TABLE `receipts` (
  `receipt_pk` char(32) NOT NULL,
  `car_fk` char(32) NOT NULL,
  `plans_fk` char(32) NOT NULL,
  `receipt_number` char(32) NOT NULL,
  `receipt_amount` decimal(5,2) NOT NULL,
  `receipt_status_fk` char(32) NOT NULL,
  `receipt_valid_until` bigint(20) UNSIGNED NOT NULL,
  `location_fk` char(32) NOT NULL,
  `receipt_document` varchar(255) NOT NULL,
  `receipt_created_at` bigint(20) UNSIGNED NOT NULL,
  `receipt_updated_at` bigint(20) UNSIGNED NOT NULL,
  `receipt_deleted_at` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `receipt_status`
--

CREATE TABLE `receipt_status` (
  `receipt_status_pk` char(32) NOT NULL,
  `receipt_status_title` varchar(50) NOT NULL,
  `receipt_status_created_at` char(32) NOT NULL,
  `receipt_status_updated_at` char(32) NOT NULL,
  `receipt_status_deleted_at` char(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `user_pk` char(32) NOT NULL,
  `user_fullname` varchar(255) NOT NULL,
  `user_phonenumber` varchar(16) NOT NULL,
  `user_email` varchar(100) NOT NULL,
  `user_password` varchar(255) NOT NULL,
  `user_address` varchar(255) NOT NULL,
  `user_created_at` bigint(20) UNSIGNED NOT NULL,
  `user_updated_at` bigint(20) UNSIGNED NOT NULL,
  `user_deleted_at` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `user_car`
--

CREATE TABLE `user_car` (
  `user_car_pk` char(32) NOT NULL,
  `user_fk` char(32) NOT NULL,
  `car_fk` char(32) NOT NULL,
  `user_car_created_at` char(32) NOT NULL,
  `user_car_updated_at` char(32) NOT NULL,
  `user_car_deleted_at` char(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `wash_services`
--

CREATE TABLE `wash_services` (
  `wash_services_pk` char(32) NOT NULL,
  `wash_services_title` varchar(50) NOT NULL,
  `wash_services_created_at` char(32) NOT NULL,
  `wash_services_updated_at` char(32) NOT NULL,
  `wash_services_deleted_at` char(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cars`
--
ALTER TABLE `cars`
  ADD PRIMARY KEY (`car_pk`),
  ADD UNIQUE KEY `car_licenseplate` (`car_licenseplate`);

--
-- Indexes for table `cases`
--
ALTER TABLE `cases`
  ADD PRIMARY KEY (`case_pk`),
  ADD UNIQUE KEY `case_number` (`case_number`),
  ADD KEY `case_status_fk` (`case_status_fk`),
  ADD KEY `car_fk_to_cases` (`car_fk`);

--
-- Indexes for table `case_status`
--
ALTER TABLE `case_status`
  ADD PRIMARY KEY (`case_status_pk`);

--
-- Indexes for table `facilities`
--
ALTER TABLE `facilities`
  ADD PRIMARY KEY (`facilities_pk`);

--
-- Indexes for table `locations`
--
ALTER TABLE `locations`
  ADD PRIMARY KEY (`location_pk`),
  ADD KEY `location_status_fk` (`location_status_fk`);

--
-- Indexes for table `location_facilities`
--
ALTER TABLE `location_facilities`
  ADD PRIMARY KEY (`location_facilities_pk`),
  ADD KEY `facilities_fk_to_locationfacilities` (`facilities_fk`) USING BTREE,
  ADD KEY `location_fk_to_locationfacilities` (`location_fk`);

--
-- Indexes for table `location_status`
--
ALTER TABLE `location_status`
  ADD PRIMARY KEY (`location_status_pk`);

--
-- Indexes for table `payment_frequency`
--
ALTER TABLE `payment_frequency`
  ADD PRIMARY KEY (`payment_frequency_pk`);

--
-- Indexes for table `plans`
--
ALTER TABLE `plans`
  ADD PRIMARY KEY (`plan_pk`),
  ADD KEY `payment_frequency_fk` (`payment_frequency_fk`),
  ADD KEY `plans_status_fk` (`plans_status_fk`);

--
-- Indexes for table `plans_status`
--
ALTER TABLE `plans_status`
  ADD PRIMARY KEY (`plans_status_pk`);

--
-- Indexes for table `receipts`
--
ALTER TABLE `receipts`
  ADD PRIMARY KEY (`receipt_pk`),
  ADD UNIQUE KEY `receipt_number` (`receipt_number`),
  ADD KEY `membership_fk` (`plans_fk`),
  ADD KEY `receipt_status_fk` (`receipt_status_fk`),
  ADD KEY `location_fk` (`location_fk`),
  ADD KEY `receipt_car_fk` (`car_fk`);

--
-- Indexes for table `receipt_status`
--
ALTER TABLE `receipt_status`
  ADD PRIMARY KEY (`receipt_status_pk`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_pk`),
  ADD UNIQUE KEY `user_email` (`user_email`);

--
-- Indexes for table `user_car`
--
ALTER TABLE `user_car`
  ADD PRIMARY KEY (`user_car_pk`),
  ADD KEY `user_fk` (`user_fk`),
  ADD KEY `car_fk` (`car_fk`);

--
-- Indexes for table `wash_services`
--
ALTER TABLE `wash_services`
  ADD PRIMARY KEY (`wash_services_pk`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `cases`
--
ALTER TABLE `cases`
  ADD CONSTRAINT `car_fk_to_cases` FOREIGN KEY (`car_fk`) REFERENCES `cars` (`car_pk`),
  ADD CONSTRAINT `case_status_fk` FOREIGN KEY (`case_status_fk`) REFERENCES `case_status` (`case_status_pk`);

--
-- Constraints for table `locations`
--
ALTER TABLE `locations`
  ADD CONSTRAINT `location_status_fk` FOREIGN KEY (`location_status_fk`) REFERENCES `location_status` (`location_status_pk`);

--
-- Constraints for table `location_facilities`
--
ALTER TABLE `location_facilities`
  ADD CONSTRAINT `facilities_fk` FOREIGN KEY (`facilities_fk`) REFERENCES `facilities` (`facilities_pk`),
  ADD CONSTRAINT `location_fk_to_locationfacilities` FOREIGN KEY (`location_fk`) REFERENCES `locations` (`location_pk`);

--
-- Constraints for table `plans`
--
ALTER TABLE `plans`
  ADD CONSTRAINT `payment_frequency_fk` FOREIGN KEY (`payment_frequency_fk`) REFERENCES `payment_frequency` (`payment_frequency_pk`),
  ADD CONSTRAINT `plans_status_fk` FOREIGN KEY (`plans_status_fk`) REFERENCES `plans_status` (`plans_status_pk`);

--
-- Constraints for table `receipts`
--
ALTER TABLE `receipts`
  ADD CONSTRAINT `location_fk` FOREIGN KEY (`location_fk`) REFERENCES `locations` (`location_pk`),
  ADD CONSTRAINT `membership_fk` FOREIGN KEY (`plans_fk`) REFERENCES `membership_packs` (`membership_pack_pk`),
  ADD CONSTRAINT `receipt_car_fk` FOREIGN KEY (`car_fk`) REFERENCES `cars` (`car_pk`),
  ADD CONSTRAINT `receipt_status_fk` FOREIGN KEY (`receipt_status_fk`) REFERENCES `receipt_status` (`receipt_status_pk`);

--
-- Constraints for table `user_car`
--
ALTER TABLE `user_car`
  ADD CONSTRAINT `car_fk` FOREIGN KEY (`car_fk`) REFERENCES `cars` (`car_pk`),
  ADD CONSTRAINT `user_fk` FOREIGN KEY (`user_fk`) REFERENCES `users` (`user_pk`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
