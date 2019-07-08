-- DROP DATABASE IF EXISTS
DROP DATABASE IF EXISTS pro2master_db;

-- Creates the database --
CREATE DATABASE pro2master_db;

USE pro2master_db;
 
-- Create warehouse1 Table
-- Table Columns Names- ProductId, ProductName, ProductDetails(Gender, Color, Materials,Shape, Features etc), Brands, & Units.
CREATE TABLE warehouse1 (
	ProductId INTEGER(11) NOT NULL AUTO_INCREMENT,
	ProductName VARCHAR(25) NOT NULL,
    ProductDetails VARCHAR(250) NOT NULL,
	Brand VARCHAR(25) NOT NULL,
	Units INTEGER (25) NOT NULL,
    PRIMARY KEY (ProductId)
);

-- table name-warehouse1 
SELECT * FROM warehouse1;

CREATE TABLE orders(
	orderId INTEGER(11) AUTO_INCREMENT NOT NULL,
	store VARCHAR(100) NOT NULL,
	createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
	orderTotal DECIMAL(10,2) NOT NULL,
	orderStatus VARCHAR(11) NOT NULL,
	closedAt TIMESTAMP NOT NULL,
	PRIMARY KEY (orderId)
);
