-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: bibliobuddy
-- ------------------------------------------------------
-- Server version	8.0.30

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
-- Table structure for table `comment`
--
CREATE DATABASE bibliobuddy;

USE bibliobuddy

DROP TABLE IF EXISTS `comment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comment` (
  `fk_post_id` varchar(500) DEFAULT NULL,
  `fk_user_id` varchar(500) DEFAULT NULL,
  `comment` varchar(500) DEFAULT NULL,
  `comment_id` varchar(45) NOT NULL,
  PRIMARY KEY (`comment_id`),
  KEY `fk_post_id_comment` (`fk_post_id`),
  KEY `fk_user_id_comment` (`fk_user_id`),
  CONSTRAINT `fk_post_id_comment` FOREIGN KEY (`fk_post_id`) REFERENCES `post` (`post_id`),
  CONSTRAINT `fk_user_id_comment` FOREIGN KEY (`fk_user_id`) REFERENCES `users` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comment`
--

LOCK TABLES `comment` WRITE;
/*!40000 ALTER TABLE `comment` DISABLE KEYS */;
INSERT INTO `comment` VALUES ('eeeb2c88-8c79-46e1-bbed-4b51de754122','01410bdd-0362-47cb-aa8e-e1e1c235e7f9','Suena increible, gracias por la recomendacion','0aca4b42-095b-4c16-97f4-2c4dd8434384'),('eeeb2c88-8c79-46e1-bbed-4b51de754122','01410bdd-0362-47cb-aa8e-e1e1c235e7f9','Me encanta cuandos los libros exploran al humano','6b6f07db-221e-4c66-a0a5-ee2c2a53e375'),('aa7b064e-d097-4923-8849-e353b170d929','01410bdd-0362-47cb-aa8e-e1e1c235e7f9','que bonito esta tu trabajo','f1969ee9-abb9-40d0-9b4c-2cca9dbda0b2'),('aa7b064e-d097-4923-8849-e353b170d929','01410bdd-0362-47cb-aa8e-e1e1c235e7f9','que bonito','fb0958c0-fc40-4476-9175-20ddfce7d9d3');
/*!40000 ALTER TABLE `comment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `currently_reading_books`
--

DROP TABLE IF EXISTS `currently_reading_books`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `currently_reading_books` (
  `fk_currently_list_book_id` varchar(500) DEFAULT NULL,
  `fk_book_id` varchar(500) DEFAULT NULL,
  KEY `fk_book_id` (`fk_book_id`),
  KEY `fk_currently_list_book_id` (`fk_currently_list_book_id`),
  CONSTRAINT `currently_reading_books_ibfk_1` FOREIGN KEY (`fk_book_id`) REFERENCES `user_books` (`book_id`),
  CONSTRAINT `currently_reading_books_ibfk_2` FOREIGN KEY (`fk_currently_list_book_id`) REFERENCES `currently_reading_list_books` (`currently_book_list_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `currently_reading_books`
--

LOCK TABLES `currently_reading_books` WRITE;
/*!40000 ALTER TABLE `currently_reading_books` DISABLE KEYS */;
INSERT INTO `currently_reading_books` VALUES ('82322bf4-0578-4fa5-8181-3e9ed593efe9','4c5db065-f286-4a8a-8c19-3639175dd234'),('fcafc22c-93da-4d37-8555-ecf797988f98','0065d2d2-38ad-43b8-ab69-c08852868b73'),('fcafc22c-93da-4d37-8555-ecf797988f98','c95a7641-9972-4f5c-80e9-88dbd30fcfac'),('fcafc22c-93da-4d37-8555-ecf797988f98','c8cc2307-2fa4-4b24-9606-f26e785ff1dc'),('fcafc22c-93da-4d37-8555-ecf797988f98','35c6b469-1b04-4818-8cc0-f8d4cc7e0d77'),('fcafc22c-93da-4d37-8555-ecf797988f98','c6c894cd-77a9-4645-9bd4-fcf9b7a87e2a'),('fcafc22c-93da-4d37-8555-ecf797988f98','37af102b-5d2a-4dc6-95f0-136cb11c9fa4'),('fcafc22c-93da-4d37-8555-ecf797988f98','0fcf4c7b-6895-4153-aed0-b4ed1cd12709');
/*!40000 ALTER TABLE `currently_reading_books` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `currently_reading_list_books`
--

DROP TABLE IF EXISTS `currently_reading_list_books`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `currently_reading_list_books` (
  `currently_book_list_id` varchar(500) NOT NULL,
  `fk_user_id` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`currently_book_list_id`),
  KEY `fk_user_id` (`fk_user_id`),
  CONSTRAINT `currently_reading_list_books_ibfk_1` FOREIGN KEY (`fk_user_id`) REFERENCES `users` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `currently_reading_list_books`
--

LOCK TABLES `currently_reading_list_books` WRITE;
/*!40000 ALTER TABLE `currently_reading_list_books` DISABLE KEYS */;
INSERT INTO `currently_reading_list_books` VALUES ('774cc0c5-f2ff-48cd-9d1f-5f3f8b1ec797','b7a86341-004e-4301-a984-ac64c1447d1a'),('82322bf4-0578-4fa5-8181-3e9ed593efe9','d730d849-54d7-466f-ab84-2ef67a8c087f'),('fcafc22c-93da-4d37-8555-ecf797988f98','01410bdd-0362-47cb-aa8e-e1e1c235e7f9');
/*!40000 ALTER TABLE `currently_reading_list_books` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pending_books`
--

DROP TABLE IF EXISTS `pending_books`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pending_books` (
  `fk_pending_book_list_id` varchar(500) DEFAULT NULL,
  `fk_book_id` varchar(500) DEFAULT NULL,
  KEY `fk_book_id` (`fk_book_id`),
  KEY `fk_pending_book_list_id` (`fk_pending_book_list_id`),
  CONSTRAINT `pending_books_ibfk_1` FOREIGN KEY (`fk_book_id`) REFERENCES `user_books` (`book_id`),
  CONSTRAINT `pending_books_ibfk_2` FOREIGN KEY (`fk_pending_book_list_id`) REFERENCES `pending_books_list` (`pending_book_list_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pending_books`
--

LOCK TABLES `pending_books` WRITE;
/*!40000 ALTER TABLE `pending_books` DISABLE KEYS */;
INSERT INTO `pending_books` VALUES ('82322bf4-0578-4fa5-8181-3e9ed593efe9','edb8531f-2f86-4d20-a156-f52a593048d8'),('82322bf4-0578-4fa5-8181-3e9ed593efe9','b4dad676-49f2-45d0-b5ae-1a0701241a6a'),('fcafc22c-93da-4d37-8555-ecf797988f98','0be28f21-6227-4ddc-981f-a597456c84fb');
/*!40000 ALTER TABLE `pending_books` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pending_books_list`
--

DROP TABLE IF EXISTS `pending_books_list`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pending_books_list` (
  `pending_book_list_id` varchar(500) NOT NULL,
  `fk_user_id` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`pending_book_list_id`),
  KEY `fk_user_id` (`fk_user_id`),
  CONSTRAINT `pending_books_list_ibfk_1` FOREIGN KEY (`fk_user_id`) REFERENCES `users` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pending_books_list`
--

LOCK TABLES `pending_books_list` WRITE;
/*!40000 ALTER TABLE `pending_books_list` DISABLE KEYS */;
INSERT INTO `pending_books_list` VALUES ('774cc0c5-f2ff-48cd-9d1f-5f3f8b1ec797','b7a86341-004e-4301-a984-ac64c1447d1a'),('82322bf4-0578-4fa5-8181-3e9ed593efe9','d730d849-54d7-466f-ab84-2ef67a8c087f'),('fcafc22c-93da-4d37-8555-ecf797988f98','01410bdd-0362-47cb-aa8e-e1e1c235e7f9');
/*!40000 ALTER TABLE `pending_books_list` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `post`
--

DROP TABLE IF EXISTS `post`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `post` (
  `post_id` varchar(500) NOT NULL,
  `fk_user_id` varchar(500) DEFAULT NULL,
  `title` varchar(250) DEFAULT NULL,
  `content` varchar(10000) DEFAULT NULL,
  `publish_date` date DEFAULT NULL,
  `autor_name` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`post_id`),
  KEY `fk_user_id_post` (`fk_user_id`),
  CONSTRAINT `fk_user_id_post` FOREIGN KEY (`fk_user_id`) REFERENCES `users` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `post`
--

LOCK TABLES `post` WRITE;
/*!40000 ALTER TABLE `post` DISABLE KEYS */;
INSERT INTO `post` VALUES ('12ceab3e-fa10-4177-8573-78324c81de64','d730d849-54d7-466f-ab84-2ef67a8c087f','Una Odisea Intergaláctica','\"El Océano de Estrellas\" es una epopeya intergaláctica que transporta a los lectores a través de vastos océanos cósmicos y planetas desconocidos. Escrito por un autor visionario cuya imaginación parece no tener límites, este libro nos sumerge en un viaje emocionante a través del espacio y el tiempo.\n\nA lo largo de sus páginas, los lectores descubren civilizaciones alienígenas, tecnologías futuristas y conflictos cósmicos que desafían la comprensión humana. Desde intrépidos exploradores hasta astutos piratas espaciales, cada personaje en esta epopeya tiene un papel crucial que desempeñar en la historia.\n\n\"El Océano de Estrellas\" no es solo una novela, es una ventana a un universo de posibilidades infinitas y descubrimientos extraordinarios. Con cada página, los lectores se adentran más en este fascinante mundo, deseando explorar cada rincón de su vasta inmensidad.','2024-05-05','Daniela Garcia'),('3cb41d54-e1a3-4e0d-baec-2480a02d29a5','d730d849-54d7-466f-ab84-2ef67a8c087f','Una Odisea Onírica','\"El Portal de los Sueños\" es una obra que desafía los límites de la realidad y la imaginación. Escrito por un autor cuya mente es un laberinto de ideas y fantasías, este libro nos sumerge en un viaje a través de los reinos del subconsciente y los sueños.\n\nEn las páginas de esta novela, los lectores encontrarán mundos surreales y personajes extraordinarios, cada uno con su propia historia y destino. Desde paisajes oníricos hasta criaturas fantásticas, cada capítulo es una ventana a un universo de posibilidades infinitas.\n\n\"El Portal de los Sueños\" no es solo una novela, es un viaje introspectivo que nos invita a explorar los rincones más profundos de nuestra mente. Con cada palabra, los lectores se sumergen más en este viaje de autodescubrimiento, deseando nunca tener que despertar de este fascinante sueño literario.','2024-05-05','Daniela Garcia'),('52a59b08-d188-4c8b-a595-5ec5fe129391','01410bdd-0362-47cb-aa8e-e1e1c235e7f9','La Belleza en la Simplicidad','\"Clean Code\" es una obra maestra que destila la esencia de la programación elegante y eficiente. Escrito por Robert C. Martin, este libro es una guía indispensable para cualquier desarrollador que busque mejorar sus habilidades y producir código limpio y legible. En su corazón yace el principio fundamental de que el código bien escrito es fácil de entender, mantener y extender.\n\nA lo largo de sus páginas, Martin desglosa los principios fundamentales de la programación limpia, desde la elección de nombres significativos hasta la estructuración adecuada de funciones y clases. El autor no solo ofrece reglas y directrices, sino que también presenta ejemplos prácticos y casos de estudio que ilustran cómo aplicar estos principios en la vida real.\n\n\"Clean Code\" es más que un manual técnico; es una invitación a la excelencia profesional y a la búsqueda constante de la calidad en el arte de programar. Con cada página, los desarrolladores son desafiados a reflexionar sobre sus prácticas y a elevar el estándar de su trabajo. En última instancia, este libro inspira a los programadores a convertirse en artesanos del código, creando obras maestras que perdurarán en el tiempo.','2024-05-05','Pablo Flores'),('5a7e1f52-e6c9-4679-9d70-3f2428ed866a','d730d849-54d7-466f-ab84-2ef67a8c087f','El Enigma de la Luna','\"El Enigma de la Luna Roja\" es una novela que nos sumerge en un mundo de intriga y magia bajo el manto de la noche. Escrito por un autor cuya pluma es tan afilada como su imaginación, este libro nos lleva a través de una trama llena de giros inesperados y secretos oscuros.\n\nEn las páginas de esta obra, los lectores se encuentran con personajes enigmáticos y paisajes nocturnos que despiertan la curiosidad y el misterio. Desde callejones oscuros hasta salones llenos de conspiraciones, cada escena es una invitación a desentrañar los secretos que acechan en la oscuridad.\n\n\"El Enigma de la Luna Roja\" no es solo una novela de suspense, es un viaje a través de las sombras de la noche donde nada es lo que parece. Con cada capítulo, los lectores se sumergen más en este emocionante mundo, deseando descubrir la verdad que se esconde detrás de la luna roja.','2024-05-05','Daniela Garcia'),('88d58d0b-8ce9-49ea-8ef7-e45f75e18e68','01410bdd-0362-47cb-aa8e-e1e1c235e7f9','Fantasía Inigualable','\"El Laberinto de las Sombras\" transporta a los lectores a un universo de fantasía sin igual, donde la magia y la aventura se entrelazan en una trama cautivadora. Escrito por un autor cuya imaginación parece no tener límites, este libro te sumerge en un viaje épico a través de tierras desconocidas y peligrosas.\n\nEn las páginas de esta obra maestra de la ficción, los lectores encontrarán personajes inolvidables, desde valientes guerreros hasta sabios magos, cada uno con su propia historia y motivación. La trama teje intrincadamente elementos de misterio, acción y romance, manteniendo al lector en vilo hasta la última página.\n\n\"El Laberinto de las Sombras\" no solo es un libro, es un portal a un mundo alternativo donde los sueños se convierten en realidad y los límites de la imaginación se desdibujan. Con cada giro de la página, los lectores se adentran más en este fascinante universo, deseando nunca tener que salir de su hechizante abrazo.','2024-05-05','Pablo Flores'),('aa7b064e-d097-4923-8849-e353b170d929','01410bdd-0362-47cb-aa8e-e1e1c235e7f9','pasillos','desmotracion','2024-05-10','Pablo Axel Flores'),('cf773cdb-6b01-4433-bbd8-976676be2c01','d730d849-54d7-466f-ab84-2ef67a8c087f','Aventura Arqueológica','\"El Misterio de la Ciudad Perdida\" nos lleva a un emocionante viaje arqueológico en busca de tesoros perdidos y secretos ancestrales. Escrito por un autor cuyo conocimiento del pasado es tan vasto como su imaginación, este libro nos sumerge en una búsqueda llena de peligros y misterios.\n\nA medida que los personajes exploran ruinas antiguas y templos olvidados, descubren artefactos misteriosos y desentrañan enigmas que han desconcertado a la humanidad durante siglos. Cada paso en esta aventura es una oportunidad para desvelar los secretos de una civilización perdida en el tiempo.\n\n\"El Misterio de la Ciudad Perdida\" no es solo una novela de aventuras, es un viaje en el tiempo que nos transporta a épocas olvidadas y culturas ancestrales. Con cada página, los lectores se sumergen más en este emocionante mundo, deseando descubrir qué secretos aguardan en las sombras de la historia.','2024-05-05','Daniela Garcia'),('e1b59bfb-64bc-4118-80a9-abeec07e4aa7','01410bdd-0362-47cb-aa8e-e1e1c235e7f9',' Viaje Literario Inolvidable','El Jardín de los Sueños Perdidos\" nos transporta a un mundo de fantasía y maravilla, donde los límites entre la realidad y la imaginación se desvanecen. Escrito por un autor cuya pluma es como un pincel mágico, este libro nos sumerge en un jardín encantado donde cada flor y cada árbol tienen una historia que contar.\n\nA medida que exploramos las páginas de esta obra literaria, descubrimos personajes fascinantes que nos guían a través de intrincados senderos de aventura y descubrimiento. Desde valientes exploradores hasta criaturas misteriosas, cada encuentro en este jardín es una oportunidad para sumergirse en un mundo de sorpresas y emociones.\n\n\"El Jardín de los Sueños Perdidos\" no es solo un libro, es una puerta de entrada a un reino de posibilidades infinitas y maravillas ocultas. Con cada capítulo, los lectores se sumergen más profundamente en este mundo mágico, deseando nunca tener que abandonar sus encantos.','2024-05-05','Pablo Flores'),('eeeb2c88-8c79-46e1-bbed-4b51de754122','d730d849-54d7-466f-ab84-2ef67a8c087f','El Jardín de los Recuerdos','\"El Jardín de los Recuerdos\" es una novela que nos sumerge en un viaje emocional a través de los recuerdos y las emociones. Escrita por un autor cuya sensibilidad literaria es tan profunda como su imaginación, esta obra nos invita a explorar los rincones más íntimos de la memoria humana.\n\nA lo largo de sus páginas, los lectores se encuentran con personajes cuyas vidas están marcadas por eventos pasados que influyen en su presente y su futuro. Desde amores perdidos hasta momentos de felicidad inolvidables, cada recuerdo es una ventana a un mundo de emociones y experiencias que dan forma a la narrativa de la vida.\n\n\"El Jardín de los Recuerdos\" no es solo una novela, es un viaje íntimo a través de la mente humana, donde los recuerdos se entrelazan con la realidad de una manera única y conmovedora. Con cada página, los lectores se sumergen más en este mundo de nostalgia y esperanza, deseando descubrir qué secretos aguardan en los rincones más oscuros de la memoria.','2024-05-05','Daniela Garcia');
/*!40000 ALTER TABLE `post` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reading_history_books`
--

DROP TABLE IF EXISTS `reading_history_books`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reading_history_books` (
  `fk_reading_history_book_list_id` varchar(500) DEFAULT NULL,
  `fk_book_id` varchar(500) DEFAULT NULL,
  KEY `fk_book_id_reading_history` (`fk_book_id`),
  KEY `fk_reading_history_book_list_id` (`fk_reading_history_book_list_id`),
  CONSTRAINT `fk_book_id_reading_history` FOREIGN KEY (`fk_book_id`) REFERENCES `user_books` (`book_id`),
  CONSTRAINT `reading_history_books_ibfk_1` FOREIGN KEY (`fk_reading_history_book_list_id`) REFERENCES `reading_history_books_list` (`reading_book_list_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reading_history_books`
--

LOCK TABLES `reading_history_books` WRITE;
/*!40000 ALTER TABLE `reading_history_books` DISABLE KEYS */;
INSERT INTO `reading_history_books` VALUES ('82322bf4-0578-4fa5-8181-3e9ed593efe9','3e05e31e-2364-4393-960e-2e38739753f7'),('fcafc22c-93da-4d37-8555-ecf797988f98','756b0289-9033-4fa7-9487-7cf104eb5ceb'),('fcafc22c-93da-4d37-8555-ecf797988f98','187ec33c-bf32-41e5-a0bc-7896528d5086'),('fcafc22c-93da-4d37-8555-ecf797988f98','a764571a-27be-4d11-83a2-a859faa49220');
/*!40000 ALTER TABLE `reading_history_books` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reading_history_books_list`
--

DROP TABLE IF EXISTS `reading_history_books_list`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reading_history_books_list` (
  `reading_book_list_id` varchar(500) NOT NULL,
  `fk_user_id` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`reading_book_list_id`),
  KEY `fk_user_id` (`fk_user_id`),
  CONSTRAINT `reading_history_books_list_ibfk_1` FOREIGN KEY (`fk_user_id`) REFERENCES `users` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reading_history_books_list`
--

LOCK TABLES `reading_history_books_list` WRITE;
/*!40000 ALTER TABLE `reading_history_books_list` DISABLE KEYS */;
INSERT INTO `reading_history_books_list` VALUES ('774cc0c5-f2ff-48cd-9d1f-5f3f8b1ec797','b7a86341-004e-4301-a984-ac64c1447d1a'),('82322bf4-0578-4fa5-8181-3e9ed593efe9','d730d849-54d7-466f-ab84-2ef67a8c087f'),('fcafc22c-93da-4d37-8555-ecf797988f98','01410bdd-0362-47cb-aa8e-e1e1c235e7f9');
/*!40000 ALTER TABLE `reading_history_books_list` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_books`
--

DROP TABLE IF EXISTS `user_books`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_books` (
  `book_id` varchar(500) NOT NULL,
  `fk_user_id` varchar(500) DEFAULT NULL,
  `name` varchar(400) DEFAULT NULL,
  `author` varchar(400) DEFAULT NULL,
  `gender` varchar(200) DEFAULT NULL,
  `publication_date` date DEFAULT NULL,
  `editorial` varchar(300) DEFAULT NULL,
  `image_path` varchar(14000) DEFAULT NULL,
  PRIMARY KEY (`book_id`),
  KEY `fk_user_id` (`fk_user_id`),
  CONSTRAINT `fk_user_id` FOREIGN KEY (`fk_user_id`) REFERENCES `users` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_books`
--

LOCK TABLES `user_books` WRITE;
/*!40000 ALTER TABLE `user_books` DISABLE KEYS */;
INSERT INTO `user_books` VALUES ('0065d2d2-38ad-43b8-ab69-c08852868b73','01410bdd-0362-47cb-aa8e-e1e1c235e7f9','Clean Code 2','Pablo Axel','Programacion','2003-03-03','Warner','http://books.google.com/books/content?id=SN9xLwEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api'),('00cd4315-2ef1-4df1-82d0-487deb8d6265','d730d849-54d7-466f-ab84-2ef67a8c087f','Nuevo','Nuevo','Nuevo','2023-04-06','Nuevo','undefined'),('0be28f21-6227-4ddc-981f-a597456c84fb','01410bdd-0362-47cb-aa8e-e1e1c235e7f9','Clean Code','Pablo Axel','Programacion','2003-03-03','Warner','http://books.google.com/books/content?id=SN9xLwEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api'),('0fcf4c7b-6895-4153-aed0-b4ed1cd12709','01410bdd-0362-47cb-aa8e-e1e1c235e7f9','El Alquimista','Paulo Coelho','Alchemists','2003-03-03','Partial','http://books.google.com/books/content?id=_dHJAAAACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api'),('187ec33c-bf32-41e5-a0bc-7896528d5086','01410bdd-0362-47cb-aa8e-e1e1c235e7f9','Harry Poter','J.K. Rowling','Ficcion','2003-03-03','USA Ficcion','http://books.google.com/books/content?id=2zgRDXFWkm8C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api'),('35c6b469-1b04-4818-8cc0-f8d4cc7e0d77','01410bdd-0362-47cb-aa8e-e1e1c235e7f9','Nombre del viento','Patrick Rothfuss','Amor','2003-03-03','Warner','http://books.google.com/books/content?id=QeYF9kTMypgC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api'),('37af102b-5d2a-4dc6-95f0-136cb11c9fa4','01410bdd-0362-47cb-aa8e-e1e1c235e7f9','De animales a dioses','Yuval Noah','Social Science','2003-03-03','Warner','http://books.google.com/books/content?id=qmj7AwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api'),('3e05e31e-2364-4393-960e-2e38739753f7','d730d849-54d7-466f-ab84-2ef67a8c087f','prueba','prueba','prueba','2003-03-03','prueba','prueba'),('4c5db065-f286-4a8a-8c19-3639175dd234','d730d849-54d7-466f-ab84-2ef67a8c087f','Libro1','Pablo Axel','Terror','2003-03-03','Warner','Ninguna'),('756b0289-9033-4fa7-9487-7cf104eb5ceb','01410bdd-0362-47cb-aa8e-e1e1c235e7f9','Cien años','Pablo Axel','Ficcion','2003-03-03','Warner','http://books.google.com/books/content?id=ACX_EAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api'),('8796a0b0-7456-456a-acf6-5c910f049b7e','d730d849-54d7-466f-ab84-2ef67a8c087f','Nuevo','Nuevo','Nuevo','2023-04-06','Nuevo','undefined'),('97578818-28de-4673-a26c-614aa92e59dd','01410bdd-0362-47cb-aa8e-e1e1c235e7f9','Libro sagrado','Junco Garza','Religion','2003-03-03','ALLOWED','http://books.google.com/books/content?id=tfSyBgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api'),('a764571a-27be-4d11-83a2-a859faa49220','01410bdd-0362-47cb-aa8e-e1e1c235e7f9','Bajo la misma estrella','Kalo G. Huerta','Romance','2003-03-03','Planeta','http://books.google.com/books/content?id=uFI8Kmx3a0oC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api'),('b4dad676-49f2-45d0-b5ae-1a0701241a6a','d730d849-54d7-466f-ab84-2ef67a8c087f','Nuevo','Nuevo','Nuevo','2024-03-03','Nuevo','Nuevo'),('bdc22ee1-44ed-4f7c-8304-01f61e0ece84','d730d849-54d7-466f-ab84-2ef67a8c087f','Nuevo','Nuevo','Nuevo','2023-04-06','Nuevo','undefined'),('c6c894cd-77a9-4645-9bd4-fcf9b7a87e2a','01410bdd-0362-47cb-aa8e-e1e1c235e7f9','1984','George Owell','Ficcion','2003-03-03','Warner','http://books.google.com/books/content?id=uFI8Kmx3a0oC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api'),('c8cc2307-2fa4-4b24-9606-f26e785ff1dc','01410bdd-0362-47cb-aa8e-e1e1c235e7f9','Años de Soledad','Gabriel Garcia','Amor','2003-03-03','PartialMx','http://books.google.com/books/content?id=ACX_EAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api'),('c95a7641-9972-4f5c-80e9-88dbd30fcfac','01410bdd-0362-47cb-aa8e-e1e1c235e7f9','Laberinto','Carlos Ruiz','Ficcion','2003-03-03','Warner','http://books.google.com/books/content?id=7msZEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api'),('edb8531f-2f86-4d20-a156-f52a593048d8','d730d849-54d7-466f-ab84-2ef67a8c087f','Nuevo','Nuevo','Nuevo','2024-03-03','Nuevo','Nuevo');
/*!40000 ALTER TABLE `user_books` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_information`
--

DROP TABLE IF EXISTS `user_information`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_information` (
  `fk_user_id` varchar(500) DEFAULT NULL,
  `name` varchar(50) DEFAULT NULL,
  `lastname` varchar(50) DEFAULT NULL,
  `second_lastname` varchar(50) DEFAULT NULL,
  KEY `fk_user_id` (`fk_user_id`),
  CONSTRAINT `user_information_ibfk_1` FOREIGN KEY (`fk_user_id`) REFERENCES `users` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_information`
--

LOCK TABLES `user_information` WRITE;
/*!40000 ALTER TABLE `user_information` DISABLE KEYS */;
INSERT INTO `user_information` VALUES ('d730d849-54d7-466f-ab84-2ef67a8c087f','Daniela','Garcia','Gutierrez'),('b7a86341-004e-4301-a984-ac64c1447d1a','Josue','Jimenez','De Lucios'),('01410bdd-0362-47cb-aa8e-e1e1c235e7f9','Pablo Axel','Flores','Bautista');
/*!40000 ALTER TABLE `user_information` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `user_id` varchar(500) NOT NULL,
  `email` varchar(200) DEFAULT NULL,
  `password` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES ('01410bdd-0362-47cb-aa8e-e1e1c235e7f9','pablo@gmail.com','pablo123'),('b7a86341-004e-4301-a984-ac64c1447d1a','josue@gmail.com','josue123'),('d730d849-54d7-466f-ab84-2ef67a8c087f','danielagarcia@gmail.com','daniela123');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `wish_books`
--

DROP TABLE IF EXISTS `wish_books`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `wish_books` (
  `fk_wish_list_book_id` varchar(500) DEFAULT NULL,
  `fk_book_id` varchar(500) DEFAULT NULL,
  KEY `fk_book_id` (`fk_book_id`),
  KEY `fk_wish_list_book_id` (`fk_wish_list_book_id`),
  CONSTRAINT `fk_book_id` FOREIGN KEY (`fk_book_id`) REFERENCES `user_books` (`book_id`),
  CONSTRAINT `fk_wish_list_book_id` FOREIGN KEY (`fk_wish_list_book_id`) REFERENCES `wish_list_books` (`wish_book_list_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `wish_books`
--

LOCK TABLES `wish_books` WRITE;
/*!40000 ALTER TABLE `wish_books` DISABLE KEYS */;
INSERT INTO `wish_books` VALUES ('fcafc22c-93da-4d37-8555-ecf797988f98','97578818-28de-4673-a26c-614aa92e59dd');
/*!40000 ALTER TABLE `wish_books` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `wish_list_books`
--

DROP TABLE IF EXISTS `wish_list_books`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `wish_list_books` (
  `wish_book_list_id` varchar(500) NOT NULL,
  `fk_user_id` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`wish_book_list_id`),
  KEY `fk_user_id` (`fk_user_id`),
  CONSTRAINT `wish_list_books_ibfk_1` FOREIGN KEY (`fk_user_id`) REFERENCES `users` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `wish_list_books`
--

LOCK TABLES `wish_list_books` WRITE;
/*!40000 ALTER TABLE `wish_list_books` DISABLE KEYS */;
INSERT INTO `wish_list_books` VALUES ('774cc0c5-f2ff-48cd-9d1f-5f3f8b1ec797','b7a86341-004e-4301-a984-ac64c1447d1a'),('82322bf4-0578-4fa5-8181-3e9ed593efe9','d730d849-54d7-466f-ab84-2ef67a8c087f'),('fcafc22c-93da-4d37-8555-ecf797988f98','01410bdd-0362-47cb-aa8e-e1e1c235e7f9');
/*!40000 ALTER TABLE `wish_list_books` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-05-21 23:34:23
