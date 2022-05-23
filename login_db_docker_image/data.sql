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
VALUES (1,'hi@me.com','$2a$12$7O.O9Giq9VPJmCI6bKAw0u7ATMgv2sHGAsh33XmBVmS9eLogxC/yC');