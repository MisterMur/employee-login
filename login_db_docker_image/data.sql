CREATE TABLE login (
    id int AUTO_INCREMENT PRIMARY KEY,
	email Varchar(50) NOT NULL UNIQUE, 
    password Varchar(50) NOT NULL
);

-- INSERT INTO login (id, email, password)
-- VALUES (UUID(),'hi@me.com','1234');