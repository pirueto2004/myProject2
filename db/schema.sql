-- DROP DATABASE IF EXISTS
DROP DATABASE IF EXISTS pro2master_db;

-- Creates the database --
CREATE DATABASE pro2master_db;

USE pro2master_db;
 
-- Create warehouse1 Table
-- Table Columns Names- ProductId, ProductName, ProductDetails(Gender, Color, Materials,Shape, Features etc), Brands, & Units.
CREATE TABLE products (
	ProductId INTEGER(11) NOT NULL AUTO_INCREMENT,
	ProductName VARCHAR(250) NOT NULL,
    ProductDetails VARCHAR(250) NOT NULL,
    Gender VARCHAR(11) NOT NULL,
    BrandName VARCHAR(25) NOT NULL,
    Units INTEGER (25) NOT NULL,
    UnitPrice DECIMAL(10,2) NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
	PRIMARY KEY (ProductId)
);

CREATE TABLE lows (
	ProductId INTEGER(11) NOT NULL AUTO_INCREMENT,
	ProductName VARCHAR(25) NOT NULL,
    ProductDetails VARCHAR(250) NOT NULL,
    Gender VARCHAR(11) NOT NULL,
    BrandName VARCHAR(25) NOT NULL,
    Units INTEGER (25) NOT NULL,
    UnitPrice DECIMAL(10,2) NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
	PRIMARY KEY(ProductId)
);

CREATE TABLE orders(
	OrderId INTEGER(11) AUTO_INCREMENT NOT NULL,
   	StoreName VARCHAR(100) NOT NULL,
    ProductId INTEGER(11) NOT NULL,
    ProductName VARCHAR(200) NOT NULL,
    ProductDetails VARCHAR(500) NOT NULL,
    BrandName VARCHAR(100) NOT NULL,
    Units INTEGER(11) NOT NULL,
    UnitPrice DECIMAL(10,2) NOT NULL,
	OrderTotal DECIMAL(10,2) NOT NULL,
	OrderStatus VARCHAR(11) NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
	updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
	PRIMARY KEY (OrderId)
);

CREATE TABLE users(
	id INTEGER(11) AUTO_INCREMENT NOT NULL,
   	email VARCHAR(100) NOT NULL,
    password VARCHAR(100) NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
	updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE brands (
BrandId INTEGER(11) NOT NULL AUTO_INCREMENT,
BrandName VARCHAR(255) NOT NULL,
createdAt TIMESTAMP NOT NULL,
PRIMARY KEY (BrandId)
);
