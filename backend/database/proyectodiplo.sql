-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 18-05-2023 a las 20:24:48
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `proyectodiplo`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `recipes`
--

CREATE TABLE `recipes` (
  `id` int(11) NOT NULL,
  `title` varchar(250) NOT NULL,
  `description` varchar(250) NOT NULL,
  `img_id` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `recipes`
--

INSERT INTO `recipes` (`id`, `title`, `description`, `img_id`) VALUES
(4, 'Tarta de la abuela con galletas caseras', 'La tarta de la abuela es una de esas tartas famosísimas que, por más que pasen los años, siempre triunfa. ', 'drrqpck0gv3qfskfwbwl'),
(5, 'Bizcocho de manzana paso a paso', 'Este Bizcocho de manzana sin aceite ni mantequilla es un verdadero lujo para el paladar. La manzana le da un dulzor exquisito y mucha jugosidad por lo que no necesita mantequilla.', 'bzqmytyjlj2lrqzukvzh'),
(6, 'Filetes de cerdo a la cerveza', 'La verdad es que llevamos unos meses en los que ir a hacer la compra al supermercado es andar de susto en susto, unos días más y otros días menos, pero cada vez cuesta más llenar la nevera y hay que prestar más atención para aprovechar las ofertas.', 'gw0ejjbl0tf3gpldq5tr'),
(7, 'Huevos rellenos con bechamel', '¿A quién le gustan unos huevos rellenos con bechamel? No hace falta que levantes la mano porque estos te van a enamorar. Es una receta de esas fáciles y que se preparan en un momento, pero con éxito asegurado. ', 'tdbrg9b0j9uxotwkdpsc'),
(8, 'Hamburguesas de brócoli', '¿Te gustan las hamburguesas? A quién no ¿verdad? Quédate por aquí si te apetecen unas saludables y, además, deliciosas hamburguesas de brócoli, con mucha verdura, aptas para vegetarianos y para carnívoros. ', 'bgxz3jlyyc0zsqlueci7'),
(9, 'Rosas de pan de leche', 'Los adultos también tenemos derecho a disfrutar estas rosas, tostaditas con un poco de mermelada, o untadas con un queso freso y finas hierbas… es de antojo total', 'p6jhvbnnhcbw66p1hiuf'),
(10, 'Albóndigas con tomate', 'Las albóndigas son como pequeñas bolitas de gloria ¿a que sí? Te metes una en la boca y, al primer mordisco, se notan todos los ingredientes, la mezcla de sabores y las texturas. ', 'jegblntebya9ivk4cgnq'),
(11, 'Empanada de pollo y champiñones', 'La empanada es una receta de origen gallego, y su función era proteger la comida dentro del pan para resguardarla de la humedad y el clima adverso en los desplazamientos de los pastores. ', 'r3bpdt0twziglyqjccfh'),
(13, 'Pastel de cabracho en microondas', 'Hacer el clásico pastel de pescado al horno es muy sencillo. Este pastel de cabracho es uno de esos entrantes perfectos para preparar la víspera de cualquier celebración.', 'dyyr5clitnhhlv6med75');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `usuario` varchar(250) NOT NULL,
  `password` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `usuario`, `password`) VALUES
(1, 'natalia', '81dc9bdb52d04dc20036dbd8313ed055');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `recipes`
--
ALTER TABLE `recipes`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `recipes`
--
ALTER TABLE `recipes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
