-- DROP TABLE IF EXISTS employee;
CREATE TABLE employee (
    id int AUTO_INCREMENT PRIMARY KEY,
    userId int,
    firstName Varchar(50) NOT NULL,
    lastName Varchar(50) NOT NULL,
	address Varchar(50) NOT NULL,
	state Varchar(50) NOT NULL,
	zip Varchar(50) NOT NULL,
	cellPhone Varchar(50) NOT NULL,
    homePhone Varchar(50) NOT NULL, 
	email Varchar(50) NOT NULL
);
