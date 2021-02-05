DROP TABLE IF EXISTS employee
CREATE TABLE employee (
    id int AUTO_INCREMENT primary key,
    userId int,
    firstName Varchar(50) NOT null,
    lastName Varchar(50) NOT null,
	address Varchar(50) NOT null,
	state Varchar(50) NOT null,
	zip Varchar(50) NOT null,
	cellPhone Varchar(50) NOT null,
    homePhone Varchar(50) NOT null, 
	email Varchar(50) NOT null
);
