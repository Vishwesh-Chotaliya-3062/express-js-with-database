-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 05, 2021 at 02:15 PM
-- Server version: 10.4.18-MariaDB
-- PHP Version: 7.3.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mydatabase`
--

-- --------------------------------------------------------

--
-- Table structure for table `states`
--

CREATE TABLE `states` (
  `StateID` int(2) NOT NULL,
  `StateName` varchar(30) DEFAULT NULL,
  `DateCreated` varchar(24) DEFAULT NULL,
  `DateModified` varchar(24) DEFAULT NULL,
  `Status` varchar(4) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `states`
--

INSERT INTO `states` (`StateID`, `StateName`, `DateCreated`, `DateModified`, `Status`) VALUES
(1, 'Alabama', '2011-10-05T14:48:00.000Z', '2011-10-05T14:48:00.000Z', 'TRUE'),
(2, 'Alaska', '2011-10-05T14:48:00.000Z', '2011-10-05T14:48:00.000Z', 'TRUE'),
(3, 'American Samoa', '2011-10-05T14:48:00.000Z', '2011-10-05T14:48:00.000Z', 'TRUE'),
(4, 'Arizona', '2011-10-05T14:48:00.000Z', '2011-10-05T14:48:00.000Z', 'TRUE'),
(5, 'Arkansas', '2011-10-05T14:48:00.000Z', '2011-10-05T14:48:00.000Z', 'TRUE'),
(6, 'California', '2020-10-05T14:48:00.000Z', '2011-10-05T14:48:00.000Z', 'TRUE'),
(7, 'Colorado', '2011-10-05T14:48:00.000Z', '2011-11-05T14:48:00.000Z', 'TRUE'),
(8, 'Connecticut', '2020-10-05T14:48:00.000Z', '2011-10-05T14:48:00.000Z', 'TRUE'),
(9, 'Delaware', '2020-10-05T14:48:00.000Z', '2011-10-05T14:48:00.000Z', 'TRUE'),
(10, 'District Of Columbia', '2020-10-05T14:48:00.000Z', '2011-10-05T14:48:00.000Z', 'TRUE'),
(11, 'Federated States Of Micronesia', '2011-10-05T14:48:00.000Z', '2015-10-05T14:48:00.000Z', 'TRUE'),
(12, 'Florida', '2011-10-05T14:48:00.000Z', '2015-10-05T14:48:00.000Z', 'TRUE'),
(13, 'Georgia', '2011-10-05T14:48:00.000Z', '2015-10-05T14:48:00.000Z', 'TRUE'),
(14, 'Guam', '2011-10-05T14:48:00.000Z', '2015-10-05T14:48:00.000Z', 'TRUE'),
(15, 'Hawaii', '2011-10-05T14:48:00.000Z', '2011-10-05T14:48:00.000Z', 'TRUE'),
(16, 'Idaho', '2011-10-05T14:48:00.000Z', '2011-10-05T14:48:00.000Z', 'TRUE'),
(17, 'Illinois', '2011-10-05T14:48:00.000Z', '2011-10-05T14:48:00.000Z', 'TRUE'),
(18, 'Indiana', '2011-10-05T14:48:00.000Z', '2011-10-05T14:48:00.000Z', 'TRUE'),
(19, 'Iowa', '2011-10-05T14:48:00.000Z', '2011-10-05T14:48:00.000Z', 'TRUE'),
(20, 'Kansas', '2011-10-05T14:48:00.000Z', '2011-10-05T14:48:00.000Z', 'TRUE'),
(21, 'Kentucky', '2011-10-05T14:48:00.000Z', '2011-10-05T14:48:00.000Z', 'TRUE'),
(22, 'Louisiana', '2011-10-05T14:48:00.000Z', '2011-10-05T14:48:00.000Z', 'TRUE'),
(23, 'Maine', '2011-10-05T14:48:00.000Z', '2011-10-05T14:48:00.000Z', 'TRUE'),
(24, 'Marshall Islands', '2011-10-05T14:48:00.000Z', '2011-10-05T14:48:00.000Z', 'TRUE'),
(25, 'Massachusetts', '2011-10-05T14:48:00.000Z', '2011-10-05T14:48:00.000Z', 'TRUE'),
(26, 'Michigan', '2011-10-05T14:48:00.000Z', '2011-10-05T14:48:00.000Z', 'TRUE'),
(27, 'Minnesota', '2011-10-05T14:48:00.000Z', '2011-10-05T14:48:00.000Z', 'TRUE'),
(28, 'Mississippi', '2011-10-05T14:48:00.000Z', '2011-10-05T14:48:00.000Z', 'TRUE'),
(29, 'Missouri', '2011-10-05T14:48:00.000Z', '2011-10-05T14:48:00.000Z', 'TRUE'),
(30, 'Montana', '2011-10-05T14:48:00.000Z', '2011-10-05T14:48:00.000Z', 'TRUE'),
(31, 'Nebraska', '2011-10-05T14:48:00.000Z', '2011-10-05T14:48:00.000Z', 'TRUE'),
(32, 'Nevada', '2011-10-05T14:48:00.000Z', '2011-10-05T14:48:00.000Z', 'TRUE'),
(33, 'New Hampshire', '2011-10-05T14:48:00.000Z', '2011-10-05T14:48:00.000Z', 'TRUE'),
(34, 'New Jersey', '2011-10-05T14:48:00.000Z', '2011-10-05T14:48:00.000Z', 'TRUE'),
(35, 'New Mexico', '2011-10-05T14:48:00.000Z', '2011-10-05T14:48:00.000Z', 'TRUE'),
(36, 'New York', '2011-10-05T14:48:00.000Z', '2011-10-05T14:48:00.000Z', 'TRUE'),
(37, 'North Carolina', '2011-10-05T14:48:00.000Z', '2011-10-05T14:48:00.000Z', 'TRUE'),
(38, 'North Dakota', '2011-10-05T14:48:00.000Z', '2011-10-05T14:48:00.000Z', 'TRUE'),
(39, 'Northern Mariana Islands', '2011-10-05T14:48:00.000Z', '2011-10-05T14:48:00.000Z', 'TRUE'),
(40, 'Ohio', '2011-10-05T14:48:00.000Z', '2011-10-05T14:48:00.000Z', 'TRUE'),
(41, 'Oklahoma', '2011-10-05T14:48:00.000Z', '2011-10-05T14:48:00.000Z', 'TRUE'),
(42, 'Oregon', '2011-10-05T14:48:00.000Z', '2011-10-05T14:48:00.000Z', 'TRUE'),
(43, 'Palau', '2011-10-05T14:48:00.000Z', '2011-10-05T14:48:00.000Z', 'TRUE'),
(44, 'Pennsylvania', '2011-10-05T14:48:00.000Z', '2011-10-05T14:48:00.000Z', 'TRUE'),
(45, 'Puerto Rico', '2011-10-05T14:48:00.000Z', '2011-10-05T14:48:00.000Z', 'TRUE'),
(46, 'Rhode Island', '2011-10-05T14:48:00.000Z', '2011-10-05T14:48:00.000Z', 'TRUE'),
(47, 'South Carolina', '2011-10-05T14:48:00.000Z', '2011-10-05T14:48:00.000Z', 'TRUE'),
(48, 'South Dakota', '2011-10-05T14:48:00.000Z', '2011-10-05T14:48:00.000Z', 'TRUE'),
(49, 'Tennessee', '2011-10-05T14:48:00.000Z', '2011-10-05T14:48:00.000Z', 'TRUE'),
(50, 'Texas', '2011-10-05T14:48:00.000Z', '2011-10-05T14:48:00.000Z', 'TRUE'),
(51, 'Utah', '2011-10-05T14:48:00.000Z', '2011-10-05T14:48:00.000Z', 'TRUE'),
(52, 'Vermont', '2011-10-05T14:48:00.000Z', '2011-10-05T14:48:00.000Z', 'TRUE'),
(53, 'Virgin Islands', '2011-10-05T14:48:00.000Z', '2011-10-05T14:48:00.000Z', 'TRUE'),
(54, 'Virginia', '2011-10-05T14:48:00.000Z', '2011-10-05T14:48:00.000Z', 'TRUE'),
(55, 'Washington', '2011-10-05T14:48:00.000Z', '2011-10-05T14:48:00.000Z', 'TRUE'),
(56, 'West Virginia', '2011-10-05T14:48:00.000Z', '2011-10-05T14:48:00.000Z', 'TRUE'),
(57, 'Wisconsin', '2011-10-05T14:48:00.000Z', '2011-10-05T14:48:00.000Z', 'TRUE'),
(58, 'Wyoming', '2011-10-05T14:48:00.000Z', '2011-10-05T14:48:00.000Z', 'TRUE');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `UserID` int(2) NOT NULL,
  `UserName` varchar(50) NOT NULL,
  `Email` varchar(50) NOT NULL,
  `Password` varchar(50) NOT NULL,
  `StateID` int(2) NOT NULL,
  `Status` varchar(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`UserID`, `UserName`, `Email`, `Password`, `StateID`, `Status`) VALUES
(1, 'Vishwesh', 'hello@gmail.com', 'vish123', 6, 'True'),
(2, 'Sidhhesh', 'sid@gmail.com', 'sid123', 15, 'True'),
(3, 'Vimarsh', 'vim@gmail.com', 'vim123', 52, 'false'),
(4, 'Temp', 'temp@gmail.com', 'tmp123', 9, 'false');

-- --------------------------------------------------------

--
-- Table structure for table `vehicle`
--

CREATE TABLE `vehicle` (
  `VehicleID` int(2) NOT NULL,
  `VehicleName` varchar(20) NOT NULL,
  `VehicleType` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `vehicle`
--

INSERT INTO `vehicle` (`VehicleID`, `VehicleName`, `VehicleType`) VALUES
(1, 'i20', 'Car'),
(2, 'swift', 'Car'),
(3, 'Sp125', 'Bike'),
(4, 'Hero', 'Bicycle'),
(5, 'Activa 5G', 'Gearless Vehicle');

-- --------------------------------------------------------

--
-- Table structure for table `vehicleregistration`
--

CREATE TABLE `vehicleregistration` (
  `VehicleRegistrationID` int(2) NOT NULL,
  `UserID` int(2) NOT NULL,
  `VehicleID` int(2) NOT NULL,
  `RegistrationDate` date NOT NULL,
  `ExpiryDate` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `vehicleregistration`
--

INSERT INTO `vehicleregistration` (`VehicleRegistrationID`, `UserID`, `VehicleID`, `RegistrationDate`, `ExpiryDate`) VALUES
(1, 2, 3, '2019-02-20', '2021-08-25'),
(2, 1, 4, '2020-02-28', '2021-09-23'),
(3, 3, 2, '2021-01-15', '2023-08-31'),
(4, 4, 5, '2017-08-29', '2023-12-22');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `states`
--
ALTER TABLE `states`
  ADD PRIMARY KEY (`StateID`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`UserID`),
  ADD KEY `Test` (`StateID`);

--
-- Indexes for table `vehicle`
--
ALTER TABLE `vehicle`
  ADD PRIMARY KEY (`VehicleID`);

--
-- Indexes for table `vehicleregistration`
--
ALTER TABLE `vehicleregistration`
  ADD PRIMARY KEY (`VehicleRegistrationID`),
  ADD KEY `Test1` (`VehicleID`),
  ADD KEY `Test2` (`UserID`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `user`
--
ALTER TABLE `user`
  ADD CONSTRAINT `Test` FOREIGN KEY (`StateID`) REFERENCES `states` (`StateID`);

--
-- Constraints for table `vehicleregistration`
--
ALTER TABLE `vehicleregistration`
  ADD CONSTRAINT `Test1` FOREIGN KEY (`VehicleID`) REFERENCES `vehicle` (`VehicleID`),
  ADD CONSTRAINT `Test2` FOREIGN KEY (`UserID`) REFERENCES `user` (`UserID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
