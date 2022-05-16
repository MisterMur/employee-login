-- CREATE DATABASE IF NOT EXISTS employeeDB ; 
-- USE employeeDB;
-- DROP TABLE IF EXISTS employee;

CREATE TABLE employee (
    id SERIAL PRIMARY KEY,
    email varchar(35) not null unique,
    userId varchar(50) NOT NULL,
    firstName varchar(50) NOT NULL,
    lastName varchar(50) NOT NULL,
	address varchar(50) NOT NULL,
	state varchar(50) NOT NULL,
    city varchar(50) NOT NULL,
	zip varchar(50) NOT NULL,
	cellPhone varchar(50) NOT NULL,
    homePhone varchar(50) NOT NULL
);



INSERT INTO employee (id,email,userId,firstName, lastName, 
address, state, city, zip, cellPhone, homePhone )
VALUES ('1','test123userid','atestemail@email.com','TestFirst', 'TestLast', 
'123 Test St.', 'La', 'Baton Rouge', '70802', '1234567899', '5555555555'); 