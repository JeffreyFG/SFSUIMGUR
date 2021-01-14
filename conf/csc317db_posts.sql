-- MySQL dump 10.13  Distrib 8.0.20, for Win64 (x86_64)
--
-- Host: localhost    Database: csc317db
-- ------------------------------------------------------
-- Server version	8.0.20

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
-- Table structure for table `posts`
--

DROP TABLE IF EXISTS `posts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `posts` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(128) NOT NULL,
  `description` varchar(4096) NOT NULL,
  `photopath` varchar(4096) NOT NULL,
  `thumbnail` varchar(128) NOT NULL,
  `active` int NOT NULL DEFAULT '0',
  `created` datetime DEFAULT NULL,
  `fk_userid` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `post to users_idx` (`fk_userid`),
  CONSTRAINT `post to users` FOREIGN KEY (`fk_userid`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `posts`
--

LOCK TABLES `posts` WRITE;
/*!40000 ALTER TABLE `posts` DISABLE KEYS */;
INSERT INTO `posts` VALUES (2,'is big sister watching?','heff','\\images\\uploads\\bdd1b81bff2bddc1fe96.jpeg','/images/uploads/thumbnail-bdd1b81bff2bddc1fe96.jpeg',0,'2020-05-20 18:04:25',14),(3,'is big sister asd','assd','\\images\\uploads\\8d09fdbb8a67415046f2.jpeg','/images/uploads/thumbnail-8d09fdbb8a67415046f2.jpeg',0,'2020-05-20 18:05:53',14),(4,'i love yoko','yoko love','\\images\\uploads\\4dedceee9fc6cb78728b.jpeg','/images/uploads/thumbnail-4dedceee9fc6cb78728b.jpeg',0,'2020-05-20 18:15:43',14),(5,'yup yoko','yup','\\images\\uploads\\f17e8015475811dd91f5.jpeg','public/images/uploads/thumbnail-f17e8015475811dd91f5.jpeg',0,'2020-05-20 18:17:01',14),(6,'is big sister asdasd','ad','\\images\\uploads\\2204d12c2895396df36d.jpeg','public/images/uploads/thumbnail-2204d12c2895396df36d.jpeg',0,'2020-05-20 18:18:27',14),(7,'is big sister watching12','12','\\images\\uploads\\73fa5a41c52ac176b1b7.jpeg','public/images/uploads/thumbnail-73fa5a41c52ac176b1b7.jpeg',0,'2020-05-20 18:19:01',14),(8,'yup yoko','heff','\\images\\uploads\\6d79f0d301d34dfe9960.jpeg','public/images/uploads/thumbnail-6d79f0d301d34dfe9960.jpeg',0,'2020-05-21 15:30:04',14),(9,'yup yoko','heff','\\images\\uploads\\718498610fb31bf9a04c.jpeg','public/images/uploads/thumbnail-718498610fb31bf9a04c.jpeg',0,'2020-05-21 15:34:29',14),(10,'yup yoko','heff','\\images\\uploads\\4ce7b571d11ce19fd3dc.jpeg','public/images/uploads/thumbnail-4ce7b571d11ce19fd3dc.jpeg',0,'2020-05-21 15:34:34',14),(11,'yup yoko','heff','\\images\\uploads\\53bdc807f0262c9d105c.jpeg','public/images/uploads/thumbnail-53bdc807f0262c9d105c.jpeg',0,'2020-05-21 15:35:40',14),(12,'rick','fat','\\images\\uploads\\9293277adaa98ce04d47.jpeg','public/images/uploads/thumbnail-9293277adaa98ce04d47.jpeg',0,'2020-05-21 16:32:46',14),(13,'vanhalen','is awsome','\\images\\uploads\\fd7036e17289a52ba0ac.jpeg','public/images/uploads/thumbnail-fd7036e17289a52ba0ac.jpeg',0,'2020-05-21 16:34:56',14),(14,'andrew','is awsome','public\\images\\uploads\\c840b93e29d8e24d817f.jpeg','public/images/uploads/thumbnail-c840b93e29d8e24d817f.jpeg',0,'2020-05-21 18:21:07',14),(15,'sure','lalala','public\\images\\uploads\\c1a5a2ad8b8922042bfc.jpeg','public/images/uploads/thumbnail-c1a5a2ad8b8922042bfc.jpeg',0,'2020-05-21 18:22:06',14),(16,'yup yoko','assd','public\\images\\uploads\\a95600dd861e811a2a2b.jpeg','public/images/uploads/thumbnail-a95600dd861e811a2a2b.jpeg',0,'2020-05-21 18:27:37',14),(17,'yup yoko','heff','public\\images\\uploads\\5e7e2c5abe2eec9f877a.jpeg','public/images/uploads/thumbnail-5e7e2c5abe2eec9f877a.jpeg',0,'2020-05-21 18:28:22',14);
/*!40000 ALTER TABLE `posts` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-05-21 19:27:16
