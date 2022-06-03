-- CREATE DATABASE IF NOT EXISTS loginDB ; 
-- USE loginDB;
DROP TABLE IF EXISTS login;
CREATE TABLE login (
    id INT,
	email Varchar(50) NOT NULL UNIQUE, 
    password Varchar(500) NOT NULL,
    PRIMARY KEY(id)
);
    -- PRIMARY KEY(id)

INSERT INTO login (id,email, password)
VALUES (1,'hi@me.com','$2a$12$L7WijBjdtrkNjoBnAFbCLOl4w7ddV4jd0ClcGr74YBIY/glpFR5P6');