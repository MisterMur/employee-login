-- CREATE DATABASE IF NOT EXISTS employeeDB ; 
-- USE employeeDB;
-- DROP TABLE IF EXISTS employee;
CREATE TABLE employee (
    id INT,
    email varchar(35) not null unique,
    user_id varchar(50) NOT NULL,
    first_name varchar(50) NOT NULL,
    last_name varchar(50) NOT NULL,
	address varchar(50) NOT NULL,
	state varchar(50) NOT NULL,
    city varchar(50) NOT NULL,
	zip varchar(50) NOT NULL,
	cell_phone varchar(50) NOT NULL,
    home_phone varchar(50) NOT NULL,
    PRIMARY KEY(id)
);



INSERT INTO employee (id,email,user_id,first_name, last_name, 
address, state, city, zip, cell_phone, home_phone )
VALUES ('0','atestemail@email.com','test123userid','TestFirst', 'TestLast', 
'123 Test St.', 'La', 'Baton Rouge', '70802', '1234567890', '1234567890'); 