-- CREATE DATABASE IF NOT EXISTS loginDB ; 
-- USE loginDB;
-- DROP TABLE IF EXISTS employee;
CREATE TABLE login (
    id INT,
	email Varchar(50) NOT NULL UNIQUE, 
    password Varchar(500) NOT NULL,
    PRIMARY KEY(id)
);
    -- PRIMARY KEY(id)

INSERT INTO login (id,email, password)
VALUES (1,'hi@me.com','$2a$05$KlT5ZeFLk6xALi98aJRIHuZ6DD2e6rJvuptlj3cgcZ6EsDt8kQyhO');