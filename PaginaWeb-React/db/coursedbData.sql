CREATE DATABASE  IF NOT EXISTS `coursesdb` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `coursesdb`;
-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: localhost    Database: coursesdb
-- ------------------------------------------------------
-- Server version	8.0.31

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `curso`
--

DROP TABLE IF EXISTS `curso`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `curso` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `Titulo` varchar(50) DEFAULT NULL,
  `Subtitulo` varchar(100) DEFAULT NULL,
  `Nivel` varchar(50) DEFAULT NULL,
  `Categoria` varchar(50) DEFAULT NULL,
  `Subcategoria` varchar(50) DEFAULT NULL,
  `Descripcion` varchar(250) DEFAULT NULL,
  `Estado` varchar(50) DEFAULT NULL,
  `Idioma` varchar(50) DEFAULT NULL,
  `TiempoDePublicacion` int DEFAULT NULL,
  `PrecioEnPesos` decimal(15,2) DEFAULT '1.00',
  `PrecioEnDolares` decimal(15,2) DEFAULT '1.00',
  `ImagenDePortada` varchar(100) DEFAULT NULL,
  `VideoPromocional` varchar(100) DEFAULT NULL,
  `MensajeDeBienvenida` varchar(150) DEFAULT NULL,
  `MensajeDeFelicitaciones` varchar(150) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `curso`
--

LOCK TABLES `curso` WRITE;
/*!40000 ALTER TABLE `curso` DISABLE KEYS */;
INSERT INTO `curso` VALUES (1,'Curso de Arduino','Este es un curso de Arduino desde cero para principiantes','Principiante','Robótica','Arduino','En este curso aprenderás a hacer proyectos con Arduino desde cero y todo mientras realizas diferentes proyectos de robótica educativa y finalizaras el mismo con tu propio robot.','Aprobado','Español',2,2000.00,20.00,'https://tfi.francobalich.com/assets/imgs/arduinoCourse.jpg','https://tfi.francobalich.com/assets/imgs/1668394877149.mp4','¡Hola bienvenido al curso de Arduino desde cero!','¡Felicidades ya terminaste el curso de Arduino desde cero y creaste tu primer robot!'),(2,'Curso de Internet de las cosas ','Este es un curso de internet de las cosas','Intermedio','Robótica','DesarrolloWeb','En este curso aprenderás a hacer crear tus propios dispositivos IoT y como aplicarlos en tu casa para automatizar algunas tareas.','Aprobado','Español',2,10000.00,30.00,'https://tfi.francobalich.com/assets/imgs/iotCourse.jpg','https://tfi.francobalich.com/assets/imgs/1668394924170.mp4','¡Hola bienvenido al curso de Internet de las cosas!','¡Felicidades ya terminaste el curso de internet de las cosas!'),(3,'Curso impresión 3D para principiantes','Este es un curso aprenderás a imprimir en 3D.','Principante','Impresión3D','Robótica','En este curso aprenderás lo que es la impresión 3D, como configurar una impresora y poder imprimir en 3D todo lo que se te pueda ocurrir.','Aprobado','Español',2,3000.00,10.00,'https://tfi.francobalich.com/assets/imgs/print3DCourse.jpg','https://tfi.francobalich.com/assets/imgs/1668394937734.mp4','¡Hola bienvenido al curso de impresión 3D!','¡Felicidades ya terminaste el curso de impresión 3D!'),(4,'Curso Python desde Cero','Este es un curso de Python desde cero para principiantes','Principante','Programación','DesarrolloWeb','En este curso aprenderás a programar en el lenguaje de programación Python, crearas varios proyectos y te enseñare como aplicar Python a la web.','Aprobado','Español',2,4500.00,15.00,'https://tfi.francobalich.com/assets/imgs/pythonCourse.jpg','https://tfi.francobalich.com/assets/imgs/1668394953134.mp4','¡Hola bienvenido al curso de Python desde cero!','¡Felicidades ya terminaste el curso de Python desde cero!'),(5,'Curso Raspberry Pi para IoT','Este es un curso de Raspberry Pi aplicado al IoT','Avanzado','Robótica','Programación','En este curso aprenderás que es una Raspberry Pi, como instalar su sistema operativo y programarla para realizar proyectos de internet de las cosas o configurarla como un servidor','Aprobado','Español',2,15000.00,50.00,'https://tfi.francobalich.com/assets/imgs/raspberryCourse.jpg','https://tfi.francobalich.com/assets/imgs/1668394992600.mp4','¡Hola bienvenido al curso de Raspberry Pi!','¡Felicidades ya terminaste el curso de Raspberry Pi!'),(6,'Curso robótica educativa','Este es un curso de robótica educativa para docentes.','Intermedio','Robótica','Arduino','En este curso aprenderás a hacer proyectos de robótica educativa para fomentar actividades interactivas en tus clases usando la última tecnología.','Aprobado','Español',2,6000.00,20.00,'https://tfi.francobalich.com/assets/imgs/roboticaCourse.jpg','https://tfi.francobalich.com/assets/imgs/1668395132284.mp4','¡Hola bienvenido al curso de robótica para docentes!','¡Felicidades ya terminaste el curso de robótica para docentes!'),(7,'Curso desarrollo web desde cero','Este es un curso de desarrollo web con HTML, CSS y JS','Principiante','DesarrolloWeb','Programación','En este curso aprenderás a crear tus propias páginas web con las ultimas tecnologías HTML, CSS y JavaScript.','Aprobado','Español',2,9000.00,30.00,'https://tfi.francobalich.com/assets/imgs/webCourse.jpg','https://tfi.francobalich.com/assets/imgs/1668395110838.mp4','¡Hola bienvenido al curso de desarrollo web!','¡Felicidades ya terminaste el curso de desarrollo web!'),(8,'Curso Wemos D1 para principiantes en IoT','Este es un curso de Wemos D1 para principiantes en internet de las cosas.','Principiante','Robótica','Arduino','En este curso aprenderás a hacer proyectos de IoT con una placa compatible con Arduino llamada Wemos D1.','Aprobado','Español',2,6000.00,20.00,'https://tfi.francobalich.com/assets/imgs/wemosCourse.jpg','https://tfi.francobalich.com/assets/imgs/1668395122515.mp4','¡Hola bienvenido al curso de Wemos D1!','¡Felicidades ya terminaste el curso de Wemos D1!'),(17,'Curso de AWS','Curso de AWS desde cero','Principiante','Programación','DesarrolloWeb','El mejor curso de AWS que podes encontrar en internet.','Aprobado','Español',1,5000.00,15.00,'https://tfi.francobalich.com/assets/imgs/awsCourse.png','https://tfi.francobalich.com/assets/imgs/1668395056445.mp4','Bienvenido','Felicidades');
/*!40000 ALTER TABLE `curso` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cursousuario`
--

DROP TABLE IF EXISTS `cursousuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cursousuario` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `CursoID` int DEFAULT NULL,
  `NombreDeUsuario` varchar(50) DEFAULT NULL,
  `Fecha` date NOT NULL,
  PRIMARY KEY (`ID`),
  KEY `CursoID` (`CursoID`),
  KEY `cursousuario_ibfk_2` (`NombreDeUsuario`)
) ENGINE=InnoDB AUTO_INCREMENT=187 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cursousuario`
--

LOCK TABLES `cursousuario` WRITE;
/*!40000 ALTER TABLE `cursousuario` DISABLE KEYS */;
INSERT INTO `cursousuario` VALUES (85,3,'Carlos_Fer','2022-11-08'),(88,17,'Profe','2022-11-12'),(89,17,'alumno','2022-11-09'),(94,6,'juanp','2022-11-10'),(95,7,'juanp','2022-11-07'),(98,3,'Profe','2022-11-13'),(100,17,'mfernandez','2022-11-07'),(101,7,'mfernandez','2022-11-07'),(102,8,'mfernandez','2022-11-08'),(103,6,'mfernandez','2022-11-08'),(104,5,'Carlos_Fer','2022-11-09'),(105,4,'Carlos_Fer','2022-11-10'),(106,8,'Carlos_Fer','2022-11-10'),(109,3,'DiegoP','2022-11-11'),(110,4,'DiegoP','2022-11-12'),(111,6,'DiegoP','2022-11-12'),(112,17,'DiegoP','2022-11-10'),(113,8,'DiegoP','2022-11-12'),(116,5,'alumno','2022-11-08'),(117,1,'alumno','2022-11-08'),(119,3,'alumno','2022-11-11'),(121,1,'Carlos_Fer','2022-11-10'),(122,2,'Carlos_Fer','2022-11-08'),(123,7,'Carlos_Fer','2022-11-09'),(124,1,'franco','2022-11-11'),(125,2,'franco','2022-11-11'),(126,3,'franco','2022-11-11'),(127,17,'franco','2022-11-08'),(128,7,'alumno','2022-11-11'),(129,6,'alumno','2022-11-14'),(130,4,'alumno','2022-11-12'),(131,2,'alumno','2022-11-12'),(132,17,'juanp','2022-11-11'),(133,1,'juanp','2022-11-10'),(134,2,'juanp','2022-11-10'),(135,5,'juanp','2022-11-11'),(136,8,'juanp','2022-11-10'),(137,17,'JoseRod','2022-11-10'),(138,1,'JoseRod','2022-11-11'),(139,2,'JoseRod','2022-11-09'),(140,3,'JoseRod','2022-11-09'),(141,4,'JoseRod','2022-11-11'),(142,5,'JoseRod','2022-11-11'),(143,6,'JoseRod','2022-11-09'),(144,7,'JoseRod','2022-11-13'),(145,8,'JoseRod','2022-11-14'),(146,1,'mfernandez','2022-11-12'),(147,2,'mfernandez','2022-11-14'),(148,3,'mfernandez','2022-11-11'),(149,4,'mfernandez','2022-11-11'),(150,5,'mfernandez','2022-11-13'),(151,17,'mariap','2022-11-12'),(152,1,'mariap','2022-11-11'),(153,2,'mariap','2022-11-08'),(154,3,'mariap','2022-11-14'),(155,4,'mariap','2022-11-11'),(156,5,'mariap','2022-11-14'),(157,6,'mariap','2022-11-14'),(158,7,'mariap','2022-11-12'),(159,8,'mariap','2022-11-12'),(160,1,'ana','2022-11-08'),(161,2,'ana','2022-11-14'),(162,3,'ana','2022-11-07'),(163,6,'ana','2022-11-14'),(164,5,'ana','2022-11-11'),(165,4,'ana','2022-11-14'),(166,7,'ana','2022-11-13'),(167,8,'ana','2022-11-13'),(168,17,'ana','2022-11-13'),(171,2,'alicia','2022-11-14'),(172,3,'alicia','2022-11-08'),(173,4,'alicia','2022-11-14'),(174,5,'alicia','2022-11-11'),(175,6,'alicia','2022-11-14'),(176,7,'alicia','2022-11-14'),(178,6,'franco','2022-11-08'),(179,5,'franco','2022-11-08'),(180,4,'franco','2022-11-10'),(181,7,'franco','2022-11-11'),(182,8,'franco','2022-11-10'),(183,4,'Profe','2022-11-14'),(186,1,'alicia','2022-11-14');
/*!40000 ALTER TABLE `cursousuario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `permiso`
--

DROP TABLE IF EXISTS `permiso`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `permiso` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `permiso`
--

LOCK TABLES `permiso` WRITE;
/*!40000 ALTER TABLE `permiso` DISABLE KEYS */;
INSERT INTO `permiso` VALUES (1,'Acceso a ver cursos'),(2,'Ver su perfil'),(3,'Reservar cursos'),(4,'Ver analiticas'),(5,'Acceso docente'),(6,'Publicar un curso');
/*!40000 ALTER TABLE `permiso` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `permisorol`
--

DROP TABLE IF EXISTS `permisorol`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `permisorol` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `RolID` int NOT NULL,
  `PermisoID` int NOT NULL,
  PRIMARY KEY (`ID`),
  KEY `RolID` (`RolID`),
  KEY `PermisoID` (`PermisoID`),
  CONSTRAINT `permisorol_ibfk_1` FOREIGN KEY (`RolID`) REFERENCES `rol` (`ID`),
  CONSTRAINT `permisorol_ibfk_2` FOREIGN KEY (`PermisoID`) REFERENCES `permiso` (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `permisorol`
--

LOCK TABLES `permisorol` WRITE;
/*!40000 ALTER TABLE `permisorol` DISABLE KEYS */;
INSERT INTO `permisorol` VALUES (1,1,1),(2,1,2),(3,1,3),(4,2,4),(5,2,5),(6,2,6);
/*!40000 ALTER TABLE `permisorol` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rol`
--

DROP TABLE IF EXISTS `rol`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `rol` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rol`
--

LOCK TABLES `rol` WRITE;
/*!40000 ALTER TABLE `rol` DISABLE KEYS */;
INSERT INTO `rol` VALUES (1,'Usuario'),(2,'Docente');
/*!40000 ALTER TABLE `rol` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rolusuario`
--

DROP TABLE IF EXISTS `rolusuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `rolusuario` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `RolID` int NOT NULL,
  `NombreDeUsuario` varchar(50) NOT NULL,
  PRIMARY KEY (`ID`),
  KEY `RolID` (`RolID`),
  KEY `rolusuario_ibfk_2` (`NombreDeUsuario`),
  CONSTRAINT `rolusuario_ibfk_1` FOREIGN KEY (`RolID`) REFERENCES `rol` (`ID`),
  CONSTRAINT `rolusuario_ibfk_2` FOREIGN KEY (`NombreDeUsuario`) REFERENCES `usuario` (`NombreDeUsuario`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rolusuario`
--

LOCK TABLES `rolusuario` WRITE;
/*!40000 ALTER TABLE `rolusuario` DISABLE KEYS */;
INSERT INTO `rolusuario` VALUES (9,1,'alumno'),(10,2,'Profe'),(11,1,'juanp'),(12,1,'JoseRod'),(13,1,'Carlos_Fer'),(14,1,'mfernandez'),(15,1,'DiegoP'),(16,2,'franco'),(17,1,'mariap'),(18,1,'ana'),(19,1,'alicia');
/*!40000 ALTER TABLE `rolusuario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuario` (
  `NombreDeUsuario` varchar(50) NOT NULL,
  `Email` varchar(50) NOT NULL,
  `Nombre` varchar(50) DEFAULT NULL,
  `Apellido` varchar(50) DEFAULT NULL,
  `Genero` varchar(50) DEFAULT NULL,
  `Contraseña` varchar(65) DEFAULT NULL,
  `Preferencias` varchar(50) DEFAULT NULL,
  `Estado` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`NombreDeUsuario`,`Email`),
  UNIQUE KEY `NombreDeUsuario_UNIQUE` (`NombreDeUsuario`),
  UNIQUE KEY `Email_UNIQUE` (`Email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES ('alicia','alicia@gmail.com','Alicia','Perez','Femenino','sha1$7ed1fdc3$1$1a5e327d13c43b188daecd614b68c680cc72b2d6','','Sin verificar'),('alumno','alumno@gmail.com','Alumno','Alumno','Prefiero no decirlo','sha1$94352e2d$1$0599d387f48eda865f31a3a89d2d240dc2f6685e','','Sin verificar'),('ana','ana@gmail.com','Ana','Gutierrez','Femenino','sha1$7449504a$1$0e1024f8c8bdc8c3d8a9067ff2f65d3adc189f9c','','Sin verificar'),('Carlos_Fer','carlos@gmail.com','Carlos','Fernandez','Masculino','sha1$318d90ae$1$94e9cc5e4dd29b8ff3ecd1579df28ca976ea4471','','Sin verificar'),('DiegoP','diego@gmail.com','Diego','Perez','Masculino','sha1$9f909365$1$06a6da7343ae5fd350010b9af7203190ff285ab4','','Sin verificar'),('franco','franco@gmail.com','Franco','Balich','Masculino','sha1$ea4e558c$1$35698b53e67bb1e7da001ad1546fe5c7d96a96b7','','Sin verificar'),('JoseRod','jose@gmail.com','Jose','Rodriguez','Masculino','sha1$cdf7c2b8$1$f857f829a7eb8b316e05f5e8e8fce925772cbd64','','Sin verificar'),('juanp','juan@gmail.com','Juan','Perez','Masculino','sha1$b49824cc$1$a6f15fbd4ee49f2fac2df83d1eed07535da48a80','','Sin verificar'),('mariap','maria@gmail.com','Maria','Perez','Femenino','sha1$1510545c$1$61394b213859419978490236530aaef9ab5a4328','','Sin verificar'),('mfernandez','martin@gmail.com','Martin','Fernandez','Masculino','sha1$d6b55973$1$2e51874ba7aed35225be8a773e8dc6879c6656e4','','Sin verificar'),('Profe','profe@gmail.com','Profesor','Profesor','Otro','sha1$471d3321$1$b0640adece9fd3f7a6440220afe0235f92a434e0','','Sin verificar');
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-11-14 17:10:51
