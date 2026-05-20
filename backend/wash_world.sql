-- phpMyAdmin SQL Dump
-- version 5.2.3
-- https://www.phpmyadmin.net/
--
-- Host: mariadb
-- Generation Time: May 20, 2026 at 09:43 AM
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
-- Table structure for table `locations`
--

CREATE TABLE `locations` (
  `location_pk` char(32) NOT NULL,
  `location_title` varchar(255) NOT NULL,
  `location_latitude` decimal(8,6) NOT NULL,
  `location_longtituge` decimal(9,6) NOT NULL,
  `location_city` varchar(255) NOT NULL,
  `location_address` varchar(255) NOT NULL,
  `location_carwash` int(11) NOT NULL,
  `location_selfwash` int(11) NOT NULL,
  `location_insideclean` int(11) NOT NULL,
  `location_status_fk` char(32) NOT NULL,
  `location_created_at` bigint(20) UNSIGNED NOT NULL,
  `location_updated_at` bigint(20) UNSIGNED NOT NULL,
  `location_deleted_at` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `location_status`
--

CREATE TABLE `location_status` (
  `location_status_pk` char(32) NOT NULL,
  `location_status` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `membershippack_services`
--

CREATE TABLE `membershippack_services` (
  `pack_service_pk` char(32) NOT NULL,
  `membership_pack_fk` char(32) NOT NULL,
  `service_fk` char(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `membership_packs`
--

CREATE TABLE `membership_packs` (
  `membership_pack_pk` char(32) NOT NULL,
  `payment_frequency_fk` char(32) NOT NULL,
  `service_pack_tier_title` varchar(50) NOT NULL,
  `membership_pack_price` decimal(5,2) NOT NULL,
  `product_status_fk` char(32) NOT NULL,
  `product_created_at` bigint(20) UNSIGNED NOT NULL,
  `product_updated_at` bigint(20) UNSIGNED NOT NULL,
  `product_deleted_at` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `payment_frequency`
--

CREATE TABLE `payment_frequency` (
  `payment_frequency_pk` char(32) NOT NULL,
  `payment_frequency_title` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `product_status`
--

CREATE TABLE `product_status` (
  `product_status_pk` char(32) NOT NULL,
  `product_status` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `receipts`
--

CREATE TABLE `receipts` (
  `receipt_pk` char(32) NOT NULL,
  `car_fk` char(32) NOT NULL,
  `membership_fk` char(32) NOT NULL,
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
  `receipt_status` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `services`
--

CREATE TABLE `services` (
  `service_pk` char(32) NOT NULL,
  `service_title` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tickets`
--

CREATE TABLE `tickets` (
  `ticket_pk` char(32) NOT NULL,
  `car_fk` char(32) NOT NULL,
  `ticket_number` char(32) NOT NULL,
  `ticket_status_fk` char(32) NOT NULL,
  `ticket_description` varchar(1000) NOT NULL,
  `ticket_document` varchar(255) NOT NULL,
  `ticket_created_at` bigint(20) UNSIGNED NOT NULL,
  `ticket_updated_at` bigint(20) UNSIGNED NOT NULL,
  `ticket_deleted_at` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `ticket_status`
--

CREATE TABLE `ticket_status` (
  `ticket_status_pk` char(32) NOT NULL,
  `ticket_status` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `user_pk` char(32) NOT NULL,
  `user_full_name` varchar(255) NOT NULL,
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
  `car_fk` char(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cars`
--
ALTER TABLE `cars`
  ADD PRIMARY KEY (`car_pk`);

--
-- Indexes for table `locations`
--
ALTER TABLE `locations`
  ADD PRIMARY KEY (`location_pk`),
  ADD KEY `location_status_fk` (`location_status_fk`);

--
-- Indexes for table `location_status`
--
ALTER TABLE `location_status`
  ADD PRIMARY KEY (`location_status_pk`);

--
-- Indexes for table `membershippack_services`
--
ALTER TABLE `membershippack_services`
  ADD PRIMARY KEY (`pack_service_pk`),
  ADD KEY `membership_pack_fk` (`membership_pack_fk`),
  ADD KEY `service_fk` (`service_fk`);

--
-- Indexes for table `membership_packs`
--
ALTER TABLE `membership_packs`
  ADD PRIMARY KEY (`membership_pack_pk`),
  ADD KEY `payment_frequency_fk` (`payment_frequency_fk`),
  ADD KEY `product_status_fk` (`product_status_fk`);

--
-- Indexes for table `payment_frequency`
--
ALTER TABLE `payment_frequency`
  ADD PRIMARY KEY (`payment_frequency_pk`);

--
-- Indexes for table `product_status`
--
ALTER TABLE `product_status`
  ADD PRIMARY KEY (`product_status_pk`);

--
-- Indexes for table `receipts`
--
ALTER TABLE `receipts`
  ADD PRIMARY KEY (`receipt_pk`),
  ADD UNIQUE KEY `receipt_number` (`receipt_number`),
  ADD KEY `membership_fk` (`membership_fk`),
  ADD KEY `receipt_status_fk` (`receipt_status_fk`),
  ADD KEY `location_fk` (`location_fk`),
  ADD KEY `receipt_car_fk` (`car_fk`);

--
-- Indexes for table `receipt_status`
--
ALTER TABLE `receipt_status`
  ADD PRIMARY KEY (`receipt_status_pk`);

--
-- Indexes for table `services`
--
ALTER TABLE `services`
  ADD PRIMARY KEY (`service_pk`);

--
-- Indexes for table `tickets`
--
ALTER TABLE `tickets`
  ADD PRIMARY KEY (`ticket_pk`),
  ADD UNIQUE KEY `ticket_number` (`ticket_number`),
  ADD KEY `ticket_status_fk` (`ticket_status_fk`),
  ADD KEY `tickets_car_fk` (`car_fk`);

--
-- Indexes for table `ticket_status`
--
ALTER TABLE `ticket_status`
  ADD PRIMARY KEY (`ticket_status_pk`);

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
-- Constraints for dumped tables
--

--
-- Constraints for table `locations`
--
ALTER TABLE `locations`
  ADD CONSTRAINT `location_status_fk` FOREIGN KEY (`location_status_fk`) REFERENCES `location_status` (`location_status_pk`);

--
-- Constraints for table `membershippack_services`
--
ALTER TABLE `membershippack_services`
  ADD CONSTRAINT `membership_pack_fk` FOREIGN KEY (`membership_pack_fk`) REFERENCES `membership_packs` (`membership_pack_pk`),
  ADD CONSTRAINT `service_fk` FOREIGN KEY (`service_fk`) REFERENCES `services` (`service_pk`);

--
-- Constraints for table `membership_packs`
--
ALTER TABLE `membership_packs`
  ADD CONSTRAINT `payment_frequency_fk` FOREIGN KEY (`payment_frequency_fk`) REFERENCES `payment_frequency` (`payment_frequency_pk`),
  ADD CONSTRAINT `product_status_fk` FOREIGN KEY (`product_status_fk`) REFERENCES `product_status` (`product_status_pk`);

--
-- Constraints for table `receipts`
--
ALTER TABLE `receipts`
  ADD CONSTRAINT `location_fk` FOREIGN KEY (`location_fk`) REFERENCES `locations` (`location_pk`),
  ADD CONSTRAINT `membership_fk` FOREIGN KEY (`membership_fk`) REFERENCES `membership_packs` (`membership_pack_pk`),
  ADD CONSTRAINT `receipt_car_fk` FOREIGN KEY (`car_fk`) REFERENCES `cars` (`car_pk`),
  ADD CONSTRAINT `receipt_status_fk` FOREIGN KEY (`receipt_status_fk`) REFERENCES `receipt_status` (`receipt_status_pk`);

--
-- Constraints for table `tickets`
--
ALTER TABLE `tickets`
  ADD CONSTRAINT `ticket_status_fk` FOREIGN KEY (`ticket_status_fk`) REFERENCES `ticket_status` (`ticket_status_pk`),
  ADD CONSTRAINT `tickets_car_fk` FOREIGN KEY (`car_fk`) REFERENCES `cars` (`car_pk`);

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
