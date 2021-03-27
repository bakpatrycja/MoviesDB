-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: mysql
-- Czas generowania: 26 Mar 2021, 21:31
-- Wersja serwera: 8.0.23
-- Wersja PHP: 7.4.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Baza danych: `movies`
--
CREATE DATABASE IF NOT EXISTS `movies` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci;
USE `movies`;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `movies`
--

CREATE TABLE `movies` (
  `id` int NOT NULL,
  `Genre` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `Title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `Released` date NOT NULL,
  `Director` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `createdAt` date NOT NULL,
  `updatedAt` date NOT NULL,
  `createdBy` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Zrzut danych tabeli `movies`
--

INSERT INTO `movies` (`id`, `Genre`, `Title`, `Released`, `Director`, `createdAt`, `updatedAt`, `createdBy`) VALUES
(2, 'romantic', 'Gone with the wind', '2021-03-15', 'Morgan Freeman', '2021-03-16', '2021-03-25', 'premium'),
(4, 'musical', 'Hassam Falcon', '2021-03-26', 'Jean-Luc Picard', '2021-01-04', '2021-03-31', 'basic'),
(5, 'Drama, History, Romance, War', 'Gone with the wind', '1940-01-17', 'Victor Fleming, George Cukor, Sam Wood', '2021-03-24', '2021-03-24', 'premium'),
(6, 'Action, Crime, Drama, Thriller', 'kill bill', '2003-10-10', 'Quentin Tarantino', '2021-03-24', '2021-03-24', 'premium'),
(7, 'Action, Crime, Drama, Thriller', 'kill bill', '2003-10-10', 'Quentin Tarantino', '2021-03-24', '2021-03-24', 'premium'),
(8, 'Action, Crime, Drama, Thriller', 'kill bill', '2003-10-10', 'Quentin Tarantino', '2021-03-24', '2021-03-24', 'premium'),
(9, 'Action, Drama, Fantasy, Thriller', 'matrix', '1993-03-01', 'N/A', '2021-03-24', '2021-03-24', 'premium'),
(24, 'Drama, Romance', 'Love', '2015-10-30', 'Gaspar Noé', '2021-03-24', '2021-03-24', 'premium'),
(25, 'Drama, Romance', 'Love', '2015-10-30', 'Gaspar Noé', '2021-03-24', '2021-03-24', 'premium'),
(26, 'Action, Crime, Drama, Thriller', 'Kill Bill: Volume 1', '2003-10-10', 'Quentin Tarantino', '2021-03-24', '2021-03-24', 'premium'),
(27, 'Drama, History, Romance, War', 'Gone with the Wind', '1940-01-17', 'Victor Fleming, George Cukor, Sam Wood', '2021-03-26', '2021-03-26', 'premium'),
(28, 'Drama, History, Romance, War', 'Gone with the Wind', '1940-01-17', 'Victor Fleming, George Cukor, Sam Wood', '2021-03-26', '2021-03-26', 'premium'),
(29, 'Drama, History, Romance, War', 'Gone with the Wind', '1940-01-17', 'Victor Fleming, George Cukor, Sam Wood', '2021-03-26', '2021-03-26', 'premium'),
(30, 'Drama, History, Romance, War', 'Gone with the Wind', '1940-01-17', 'Victor Fleming, George Cukor, Sam Wood', '2021-03-26', '2021-03-26', 'premium'),
(31, 'Drama, History, Romance, War', 'Gone with the Wind', '1940-01-17', 'Victor Fleming, George Cukor, Sam Wood', '2021-03-26', '2021-03-26', 'premium'),
(32, 'Drama, History, Romance, War', 'Gone with the Wind', '1940-01-17', 'Victor Fleming, George Cukor, Sam Wood', '2021-03-26', '2021-03-26', 'premium'),
(33, 'Drama, History, Romance, War', 'Gone with the Wind', '1940-01-17', 'Victor Fleming, George Cukor, Sam Wood', '2021-03-26', '2021-03-26', 'premium'),
(34, 'Drama, History, Romance, War', 'Gone with the Wind', '1940-01-17', 'Victor Fleming, George Cukor, Sam Wood', '2021-03-26', '2021-03-26', 'premium'),
(35, 'Drama, History, Romance, War', 'Gone with the Wind', '1940-01-17', 'Victor Fleming, George Cukor, Sam Wood', '2021-03-26', '2021-03-26', 'premium'),
(36, 'Drama, History, Romance, War', 'Gone with the Wind', '1940-01-17', 'Victor Fleming, George Cukor, Sam Wood', '2021-03-26', '2021-03-26', 'premium'),
(37, 'Drama, History, Romance, War', 'Gone with the Wind', '1940-01-17', 'Victor Fleming, George Cukor, Sam Wood', '2021-03-26', '2021-03-26', 'premium'),
(38, 'Drama, History, Romance, War', 'Gone with the Wind', '1940-01-17', 'Victor Fleming, George Cukor, Sam Wood', '2021-03-26', '2021-03-26', 'premium'),
(39, 'Drama, History, Romance, War', 'Gone with the Wind', '1940-01-17', 'Victor Fleming, George Cukor, Sam Wood', '2021-03-26', '2021-03-26', 'premium'),
(40, 'Drama, History, Romance, War', 'Gone with the Wind', '1940-01-17', 'Victor Fleming, George Cukor, Sam Wood', '2021-03-26', '2021-03-26', 'premium'),
(41, 'Drama, History, Romance, War', 'Gone with the Wind', '1940-01-17', 'Victor Fleming, George Cukor, Sam Wood', '2021-03-26', '2021-03-26', 'premium'),
(42, 'Drama, History, Romance, War', 'Gone with the Wind', '1940-01-17', 'Victor Fleming, George Cukor, Sam Wood', '2021-03-26', '2021-03-26', 'premium'),
(43, 'Drama, History, Romance, War', 'Gone with the Wind', '1940-01-17', 'Victor Fleming, George Cukor, Sam Wood', '2021-03-26', '2021-03-26', 'premium'),
(44, 'Drama, History, Romance, War', 'Gone with the Wind', '1940-01-17', 'Victor Fleming, George Cukor, Sam Wood', '2021-03-26', '2021-03-26', 'premium'),
(45, 'Drama, History, Romance, War', 'Gone with the Wind', '1940-01-17', 'Victor Fleming, George Cukor, Sam Wood', '2021-03-26', '2021-03-26', 'premium'),
(46, 'Drama, History, Romance, War', 'Gone with the Wind', '1940-01-17', 'Victor Fleming, George Cukor, Sam Wood', '2021-03-26', '2021-03-26', 'premium'),
(47, 'Drama, History, Romance, War', 'Gone with the Wind', '1940-01-17', 'Victor Fleming, George Cukor, Sam Wood', '2021-03-26', '2021-03-26', 'premium'),
(48, 'Drama, History, Romance, War', 'Gone with the Wind', '1940-01-17', 'Victor Fleming, George Cukor, Sam Wood', '2021-03-26', '2021-03-26', 'premium'),
(49, 'Drama, History, Romance, War', 'Gone with the Wind', '1940-01-17', 'Victor Fleming, George Cukor, Sam Wood', '2021-03-26', '2021-03-26', 'premium'),
(50, 'Drama, History, Romance, War', 'Gone with the Wind', '1940-01-17', 'Victor Fleming, George Cukor, Sam Wood', '2021-03-26', '2021-03-26', 'premium'),
(51, 'Drama, History, Romance, War', 'Gone with the Wind', '1940-01-17', 'Victor Fleming, George Cukor, Sam Wood', '2021-03-26', '2021-03-26', 'premium'),
(52, 'Drama, History, Romance, War', 'Gone with the Wind', '1940-01-17', 'Victor Fleming, George Cukor, Sam Wood', '2021-03-26', '2021-03-26', 'premium'),
(53, 'Drama, History, Romance, War', 'Gone with the Wind', '1940-01-17', 'Victor Fleming, George Cukor, Sam Wood', '2021-03-26', '2021-03-26', 'premium'),
(54, 'Drama, History, Romance, War', 'Gone with the Wind', '1940-01-17', 'Victor Fleming, George Cukor, Sam Wood', '2021-03-26', '2021-03-26', 'premium'),
(55, 'Drama, History, Romance, War', 'Gone with the Wind', '1940-01-17', 'Victor Fleming, George Cukor, Sam Wood', '2021-03-26', '2021-03-26', 'premium'),
(56, 'Drama, History, Romance, War', 'Gone with the Wind', '1940-01-17', 'Victor Fleming, George Cukor, Sam Wood', '2021-03-26', '2021-03-26', 'premium'),
(57, 'Drama, History, Romance, War', 'Gone with the Wind', '1940-01-17', 'Victor Fleming, George Cukor, Sam Wood', '2021-03-26', '2021-03-26', 'premium'),
(58, 'Drama, History, Romance, War', 'Gone with the Wind', '1940-01-17', 'Victor Fleming, George Cukor, Sam Wood', '2021-03-26', '2021-03-26', 'premium'),
(59, 'Drama, History, Romance, War', 'Gone with the Wind', '1940-01-17', 'Victor Fleming, George Cukor, Sam Wood', '2021-03-26', '2021-03-26', 'basic'),
(60, 'Drama, History, Romance, War', 'Gone with the Wind', '1940-01-17', 'Victor Fleming, George Cukor, Sam Wood', '2021-03-26', '2021-03-26', 'basic'),
(61, 'Drama, History, Romance, War', 'Gone with the Wind', '1940-01-17', 'Victor Fleming, George Cukor, Sam Wood', '2021-03-26', '2021-03-26', 'basic'),
(62, 'Drama, History, Romance, War', 'Gone with the Wind', '1940-01-17', 'Victor Fleming, George Cukor, Sam Wood', '2021-03-26', '2021-03-26', 'basic'),
(63, 'Drama, History, Romance, War', 'Gone with the Wind', '1940-01-17', 'Victor Fleming, George Cukor, Sam Wood', '2021-03-26', '2021-03-26', 'basic'),
(64, 'Drama, History, Romance, War', 'Gone with the Wind', '1940-01-17', 'Victor Fleming, George Cukor, Sam Wood', '2021-03-26', '2021-03-26', 'basic'),
(65, 'Drama, History, Romance, War', 'Gone with the Wind', '1940-01-17', 'Victor Fleming, George Cukor, Sam Wood', '2021-03-26', '2021-03-26', 'premium'),
(66, 'Drama, History, Romance, War', 'Gone with the Wind', '1940-01-17', 'Victor Fleming, George Cukor, Sam Wood', '2021-03-26', '2021-03-26', 'premium');

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `movies`
--
ALTER TABLE `movies`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT dla zrzuconych tabel
--

--
-- AUTO_INCREMENT dla tabeli `movies`
--
ALTER TABLE `movies`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=67;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
