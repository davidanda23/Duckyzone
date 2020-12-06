-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 27-11-2020 a las 10:00:12
-- Versión del servidor: 10.4.14-MariaDB
-- Versión de PHP: 7.4.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `duckyzone`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cliente`
--

CREATE TABLE `cliente` (
  `id` int(11) NOT NULL,
  `num_interno` int(11) DEFAULT NULL,
  `num_externo` int(11) DEFAULT NULL,
  `cod_postal` int(11) DEFAULT NULL,
  `premium` char(1) DEFAULT NULL,
  `calle` varchar(100) DEFAULT NULL,
  `colonia` varchar(50) DEFAULT NULL,
  `ciudad` varchar(50) DEFAULT NULL,
  `pais` varchar(50) DEFAULT NULL,
  `id_usuario` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `compras`
--

CREATE TABLE `compras` (
  `id_compra` int(11) NOT NULL,
  `fecha` date DEFAULT NULL,
  `total` float DEFAULT NULL,
  `producto` varchar(255) DEFAULT NULL,
  `cantidad` int(11) DEFAULT NULL,
  `ID_proveedor` int(11) DEFAULT NULL,
  `ID_departamento` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `departamentos`
--

CREATE TABLE `departamentos` (
  `id` int(11) NOT NULL,
  `nombre` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `departamentos`
--

INSERT INTO `departamentos` (`id`, `nombre`) VALUES
(1, 'Deportes'),
(2, 'Moda'),
(3, 'Electronicos'),
(4, 'Musica'),
(5, 'Belleza'),
(6, 'Hogar'),
(7, 'Niños'),
(8, 'Comida'),
(9, 'Libros'),
(10, 'Videojuegos');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `departamento_interno`
--

CREATE TABLE `departamento_interno` (
  `id` int(11) NOT NULL,
  `nombre` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `empleado`
--

CREATE TABLE `empleado` (
  `id` int(11) NOT NULL,
  `salario` double DEFAULT NULL,
  `puesto` varchar(30) DEFAULT NULL,
  `id_departamento` int(11) DEFAULT NULL,
  `id_usuario` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `envios`
--

CREATE TABLE `envios` (
  `id_envio` int(11) NOT NULL,
  `estado_entrega` int(11) DEFAULT NULL,
  `id_venta` int(11) DEFAULT NULL,
  `ClienteID` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `observacionesenvios`
--

CREATE TABLE `observacionesenvios` (
  `Observacion` varchar(255) DEFAULT NULL,
  `id_envio` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `codigo` int(11) NOT NULL,
  `nombre` varchar(256) DEFAULT NULL,
  `descr` varchar(250) DEFAULT NULL,
  `precio_unidad` float DEFAULT NULL,
  `existencias` int(11) DEFAULT NULL,
  `imgen` varchar(255) DEFAULT NULL,
  `departamento` int(11) DEFAULT NULL,
  `proveedor` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`codigo`, `nombre`, `descr`, `precio_unidad`, `existencias`, `imgen`, `departamento`, `proveedor`) VALUES
(1, 'Balon de futbol', 'Balon de futbol profesional', 200, 99, './../../../../assets/balonfutbol.jpg', 1, NULL),
(2, 'Pesas de 30kg', 'Pesas para entrenamiento profecional de 30kg', 320, 99, './../../../../assets/30kg.jpg', 1, NULL),
(3, 'Raquetas de Tenis', 'Paquete de dos raquetas de tenis, viene incluido con dos pelotas', 125, 99, './../../../../assets/raqueta.jpg', 1, NULL),
(4, 'Casco de futbol americano', 'Casco de futbol americano con logotipo de equipo', 400, 99, './../../../../assets/casco.jpg', 1, NULL),
(5, 'Palos de Hockey', 'Paquete que contiene seis palos de Hockey', 1000, 99, './../../../../assets/palos.jpg', 1, NULL),
(6, 'Bolso para mujer', 'Bolso rosa para mujer de ultima temporada', 1500, 99, './../../../../assets/bolso.jpg', 2, NULL),
(7, 'Abrigo de piel', 'Chamarra de piel genuina para Hombre', 2400, 99, './../../../../assets/abrigopiel.jpg', 2, NULL),
(8, 'Zapatos de tacon', 'Zapatos de tacon de diseñador', 4000, 99, './../../../../assets/tacon.jpg', 2, NULL),
(9, 'Chamarra de piel', 'Chamarra de piel genuina para hombres', 5000, 99, './../../../../assets/piel.jpg', 2, NULL),
(10, 'Aretes de diamante', 'Par de aretes de diamente para mujeres', 10000, 99, './../../../../assets/diamante.jpg', 2, NULL),
(11, 'Audifonos', 'Par de audifonos para escuchar musica', 1500, 99, './../../../../assets/audifonos.jpg', 3, NULL),
(12, 'Microfono', 'Microfono USB para grabar', 1000, 99, './../../../../assets/microfono.jpg', 3, NULL),
(13, 'Mouse + Teclado', 'Paquete que contiene un mouse y un teclado para computadora, ambos usan coneccion USB', 600, 99, './../../../../assets/mouse.jpg', 3, NULL),
(14, 'Television con pantalla LSD 55\'\'', 'Pantalla LSD inteligente de 55\'\'', 3500, 99, './../../../../assets/lsd.jpg', 3, NULL),
(15, 'Gaming laptop', 'Laptop para gaming con AMD T1800, 2TB SSD', 9500, 99, './../../../../assets/gaming.jpg', 3, NULL),
(16, 'Guitarra cuerdas de nylon', 'Guitarra con cuerdas de nylon, tambien conocida como guitarra española o clasica', 700, 99, './../../../../assets/nylon.jpg', 4, NULL),
(17, 'Guitarra electrica', 'Guitarra electrica', 1400, 99, './../../../../assets/electrica.jpg', 4, NULL),
(18, 'Bajo electrico', 'Bajo electrico', 1300, 99, './../../../../assets/bajo.jpg', 4, NULL),
(19, 'Bateria', 'Bateria basica con las baquetas incluidas, un platillo, un tom de piso, toms 1 y 2, un bombo, 1 caja y 1 hi hat', 3200, 99, './../../../../assets/bateria.png', 4, NULL),
(20, 'Viloin de 4/4', 'Violin de 4/4, paitititi incluido', 800, 99, './../../../../assets/violin.jpg', 4, NULL),
(21, 'Lapiz labial', 'Lapiz labial para mujer rojo carmesi de diseñador', 850, 99, './../../../../assets/lapiz.png', 5, NULL),
(22, 'Rimel', 'Rimel para los ojos para mujer de diseñador', 760, 99, './../../../../assets/rimel.jpg', 5, NULL),
(23, 'Pintura para uñas', 'Pintura para uñas para mujer de diseñador', 680, 99, './../../../../assets/unas.jpg', 5, NULL),
(24, 'Blush', 'Polvo para belleza tipo blush', 740, 99, './../../../../assets/blush.jpg', 5, NULL),
(25, 'Kit de pestañas postisas', 'Contiene hasta quince pares de pestañas postizas faciles de poner y sacar para maxima belleza', 200, 99, './../../../../assets/pestanas.jpg', 5, NULL),
(26, 'Sala de estar', 'Sala completa con tres sofas y pieza central', 250000, 99, './../../../../assets/sala.png', 6, NULL),
(27, 'Aspiradora robot', 'Aspiradora robot de ultima generacion IA avanzado', 800, 99, './../../../../assets/aspiradora.jpg', 6, NULL),
(28, 'Refrigerador', 'Refrigerador con panel inteligente con coneccion de internet', 7000, 99, './../../../../assets/refri.jpg', 6, NULL),
(29, 'Estufa electrica', 'Estufa electrica pequeña facil de mover', 650, 99, './../../../../assets/estufae.jpg', 6, NULL),
(30, 'Estufa de gas', 'Estufa de gas para cocinar', 3700, 99, './../../../../assets/estufag.jpg', 6, NULL),
(31, 'Sable de luz Jedi', 'Juguete de sable de luz jedi verde', 420, 99, './../../../../assets/jedi.jpg', 7, NULL),
(32, 'Sable de luz Sith', 'Juguete de sable de luz sith rojo', 420, 99, './../../../../assets/sith.jpg', 7, NULL),
(33, 'Desatornillador sonico de Doctor Who', 'Desatornillador sonico de la serie Doctor Who', 2500, 99, './../../../../assets/sonic.jpg', 7, NULL),
(34, 'Set de lego Jurasic Park', 'Set de ladrillos lego basado en las peliculas de Jurasic Park', 970, 99, './../../../../assets/lego.jpg', 7, NULL),
(35, 'Peluche de Bob Esponja', 'Muñeco de Bob Esponja para niños', 760, 99, './../../../../assets/bob.jpg', 7, NULL),
(36, 'Salsa valentina 1L', 'Bote de vidrio salsa valentina con: 1L', 50, 99, './../../../../assets/valentina.jpg', 8, NULL),
(37, '10kg de Tomates', 'Bolsa de tomates frescos directo para tu casa con: 1kg', 600, 99, './../../../../assets/tomates.jpg', 8, NULL),
(38, 'Bote de helado de vainilla 3L', 'Bote de helado de 3L sabor vainilla', 320, 99, './../../../../assets/vainilla.jpg', 8, NULL),
(39, 'Caja de zucaritas 760g', 'Caja de cereal marca zucaritas 780g', 60, 99, './../../../../assets/zucaritas.jpg', 8, NULL),
(40, 'pay de queso', 'Delicioso pai de queso directo hasta tu casa, 1 pieza', 250, 99, './../../../../assets/pay.jpg', 8, NULL),
(41, 'Trilogia de Los Juegos del Hambre', 'Tres libros best sellers que inspiraron las peliculas del mismo nombre', 800, 99, './../../../../assets/hambre.jpg', 9, NULL),
(42, 'Saga completa de Harry Potter', 'Los libros de fantasia mas famosos de la historia en una sola coleccion', 1200, 99, './../../../../assets/harry.jpg', 9, NULL),
(43, 'El Resplandor', 'El clasico del horror de Stephen King que dio vida a la famosa pelicula', 400, 99, './../../../../assets/resplando.jpg', 9, NULL),
(44, 'Coleccion de historias cortas de Edgar Allen Poe', 'El cuervo, El corazon delator, La mascara de la muerte roja y otros inolvidables cuentos de terror del legendario escritor', 620, 99, './../../../../assets/poe.jpg', 9, NULL),
(45, 'La obra completa de H. P. Lovecraft', 'Coleccion imperdible del autor del horror cosmico', 1200, 99, './../../../../assets/lovecraft.jpg', 9, NULL),
(46, 'Play Station 5', 'Lo mas nuevo en entretenimiento interactivo de Sony', 11500, 99, './../../../../assets/ps5.jpg', 10, NULL),
(47, 'Xbox Serie S', 'Lo mas nuevo en entretenimiento interactivo de Microsoft', 11500, 99, './../../../../assets/xbox.jpg', 10, NULL),
(48, 'Nintendo Switch', 'Juega con tus amigos en donde sea, cuando sea con lo mas nuevo de nintendo', 8000, 99, './../../../../assets/switch.jpg', 10, NULL),
(49, 'The Legend of Zelda Breath of the Wild', 'Explora un mundo entero cuando y donde quieras, solo para Nintendo Switch', 1500, 99, './../../../../assets/breath.jpg', 10, NULL),
(50, 'Spiderman Miles Morales', 'Explora y salva Nueva York como un nuevo hombre araña', 1500, 99, './../../../../assets/miles.jpg', 10, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `proveedores`
--

CREATE TABLE `proveedores` (
  `ID` int(11) NOT NULL,
  `nombre` varchar(50) DEFAULT NULL,
  `tel` int(11) DEFAULT NULL,
  `calle` varchar(100) DEFAULT NULL,
  `colonia` varchar(50) DEFAULT NULL,
  `num_int` int(11) DEFAULT NULL,
  `num_ext` int(11) DEFAULT NULL,
  `cod_postal` int(11) DEFAULT NULL,
  `correo` varchar(30) DEFAULT NULL,
  `ciudad` varchar(50) DEFAULT NULL,
  `pais` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `id` int(11) NOT NULL,
  `correo` varchar(30) NOT NULL,
  `contrseña` varchar(10) DEFAULT NULL,
  `nombre` varchar(20) DEFAULT NULL,
  `tel` int(11) DEFAULT NULL,
  `apelli_pat` varchar(20) DEFAULT NULL,
  `apelli_mat` varchar(20) DEFAULT NULL,
  `nombreusuario` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ventas`
--

CREATE TABLE `ventas` (
  `id` int(11) NOT NULL,
  `fecha` date DEFAULT NULL,
  `subtotal` float DEFAULT NULL,
  `total` float DEFAULT NULL,
  `calle` varchar(100) DEFAULT NULL,
  `colonia` varchar(50) DEFAULT NULL,
  `num_interno` int(11) DEFAULT NULL,
  `num_externo` int(11) DEFAULT NULL,
  `cod_postal` int(11) DEFAULT NULL,
  `ciudad` varchar(50) DEFAULT NULL,
  `pais` varchar(50) DEFAULT NULL,
  `id_user` int(11) DEFAULT NULL,
  `usuariocorreo` varchar(30) DEFAULT NULL,
  `nombreusuario` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `venta_productos`
--

CREATE TABLE `venta_productos` (
  `ventaID` int(11) DEFAULT NULL,
  `Productoscodigo` int(11) DEFAULT NULL,
  `cantidad_prods` int(11) DEFAULT NULL,
  `precioproducto` float DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `cliente`
--
ALTER TABLE `cliente`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_usuario` (`id_usuario`);

--
-- Indices de la tabla `compras`
--
ALTER TABLE `compras`
  ADD PRIMARY KEY (`id_compra`),
  ADD KEY `ID_departamento` (`ID_departamento`),
  ADD KEY `ID_proveedor` (`ID_proveedor`);

--
-- Indices de la tabla `departamentos`
--
ALTER TABLE `departamentos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `departamento_interno`
--
ALTER TABLE `departamento_interno`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `empleado`
--
ALTER TABLE `empleado`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_departamento` (`id_departamento`),
  ADD KEY `id_usuario` (`id_usuario`);

--
-- Indices de la tabla `envios`
--
ALTER TABLE `envios`
  ADD PRIMARY KEY (`id_envio`),
  ADD KEY `id_venta` (`id_venta`),
  ADD KEY `ClienteID` (`ClienteID`);

--
-- Indices de la tabla `observacionesenvios`
--
ALTER TABLE `observacionesenvios`
  ADD KEY `id_envio` (`id_envio`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`codigo`),
  ADD KEY `departamento` (`departamento`),
  ADD KEY `proveedor` (`proveedor`);

--
-- Indices de la tabla `proveedores`
--
ALTER TABLE `proveedores`
  ADD PRIMARY KEY (`ID`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id`,`correo`,`nombreusuario`);

--
-- Indices de la tabla `ventas`
--
ALTER TABLE `ventas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_user` (`id_user`,`usuariocorreo`,`nombreusuario`);

--
-- Indices de la tabla `venta_productos`
--
ALTER TABLE `venta_productos`
  ADD KEY `ventaID` (`ventaID`),
  ADD KEY `Productoscodigo` (`Productoscodigo`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `cliente`
--
ALTER TABLE `cliente`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `compras`
--
ALTER TABLE `compras`
  MODIFY `id_compra` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `departamentos`
--
ALTER TABLE `departamentos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `departamento_interno`
--
ALTER TABLE `departamento_interno`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `empleado`
--
ALTER TABLE `empleado`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `envios`
--
ALTER TABLE `envios`
  MODIFY `id_envio` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `codigo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;

--
-- AUTO_INCREMENT de la tabla `proveedores`
--
ALTER TABLE `proveedores`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `ventas`
--
ALTER TABLE `ventas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `cliente`
--
ALTER TABLE `cliente`
  ADD CONSTRAINT `cliente_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id`);

--
-- Filtros para la tabla `compras`
--
ALTER TABLE `compras`
  ADD CONSTRAINT `compras_ibfk_1` FOREIGN KEY (`ID_departamento`) REFERENCES `departamentos` (`id`),
  ADD CONSTRAINT `compras_ibfk_2` FOREIGN KEY (`ID_proveedor`) REFERENCES `proveedores` (`ID`);

--
-- Filtros para la tabla `empleado`
--
ALTER TABLE `empleado`
  ADD CONSTRAINT `empleado_ibfk_1` FOREIGN KEY (`id_departamento`) REFERENCES `departamento_interno` (`id`),
  ADD CONSTRAINT `empleado_ibfk_2` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id`);

--
-- Filtros para la tabla `envios`
--
ALTER TABLE `envios`
  ADD CONSTRAINT `envios_ibfk_1` FOREIGN KEY (`id_venta`) REFERENCES `ventas` (`id`),
  ADD CONSTRAINT `envios_ibfk_2` FOREIGN KEY (`ClienteID`) REFERENCES `cliente` (`id`);

--
-- Filtros para la tabla `observacionesenvios`
--
ALTER TABLE `observacionesenvios`
  ADD CONSTRAINT `observacionesenvios_ibfk_1` FOREIGN KEY (`id_envio`) REFERENCES `envios` (`id_envio`);

--
-- Filtros para la tabla `productos`
--
ALTER TABLE `productos`
  ADD CONSTRAINT `productos_ibfk_1` FOREIGN KEY (`departamento`) REFERENCES `departamentos` (`id`),
  ADD CONSTRAINT `productos_ibfk_2` FOREIGN KEY (`proveedor`) REFERENCES `proveedores` (`ID`);

--
-- Filtros para la tabla `ventas`
--
ALTER TABLE `ventas`
  ADD CONSTRAINT `ventas_ibfk_1` FOREIGN KEY (`id_user`,`usuariocorreo`,`nombreusuario`) REFERENCES `usuario` (`id`, `correo`, `nombreusuario`);

--
-- Filtros para la tabla `venta_productos`
--
ALTER TABLE `venta_productos`
  ADD CONSTRAINT `venta_productos_ibfk_1` FOREIGN KEY (`ventaID`) REFERENCES `ventas` (`id`),
  ADD CONSTRAINT `venta_productos_ibfk_2` FOREIGN KEY (`Productoscodigo`) REFERENCES `productos` (`codigo`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
