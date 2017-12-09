
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burger
(
	id int AUTO_INCREMENT,
    name varchar(255) NOT NULL,
	eaten BOOLEAN DEFAULT false,
    date TIMESTAMP,
	PRIMARY KEY (id)
);
