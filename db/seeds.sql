-- Some Dummy Data to fill out database
USE pro2master_db;

-- Table Columns Names- ProductId, ProductName, ProductDetails(Gender, Color, Materials,Shape, Features etc), Brands, & Units.
INSERT INTO Products (ProductName, ProductDetails, Brand, Units, createdAt, updatedAt) VALUES ('RB Aviator Classic', 'Male,Black,Metal,Pilot,Polarized', 'Ray-Ban', 200, '2019-06-25 15:45:31', '2019-06-25 15:45:31');
INSERT INTO Products (ProductName, ProductDetails, Brand, Units, createdAt, updatedAt) VALUES ('OK Gascan', 'Male,Black,Injected,Rectangle', 'Oakley', 200, '2019-06-25 15:45:31', '2019-06-25 15:45:31');
INSERT INTO Products (ProductName, ProductDetails, Brand, Units, createdAt, updatedAt) VALUES ('PR  Rectangle', 'Female,Black,Nylon,Rectangle', 'Prada', 200, '2019-06-25 15:45:31', '2019-06-25 15:45:31');


INSERT INTO Products (ProductName, ProductDetails, Brand, Units)
VALUES ('PS 56MS Linea Rossa', 'Pilot,Metal,Gunmetal,Not Glass,Brown', 'Prada', 500),
('PS 55QS Linea Rossa', 'Pilot,Steel,Black,Not Galass,Green', 'Prada', 500),
('PS 01TS Linea Rossa', 'Rectangle,Plastic,Not Glass,Silver', 'Prada', 500),
('PS 04TS Linea Rossa', 'Pilot,Nylon,Grey,Not Glass,Silver', 'Prada', 500),
('PS 57TS Linea Rossa', 'Irregular,Metal,Black,Not Glass,Grey-Black', 'Prada', 500);

INSERT INTO Products (ProductName, ProductDetails, Brand, Units)
VALUES ('OK Gascan', 'Rectangle,Injected,Black,Not Glass,Grey-Black', 'Oakley', 500),
('OK Half Jacket XL', 'Irregular,Injected,Black,Not Glass,Grey-Black', 'Oakley', 500),
('OK Holbrook', 'Square,Injected,Black,Not Glass,Violet', 'Oakley', 500),
('OK Fuel Cell', 'Rectangle,Injected,Black,Not Glass,Grey-Black', 'Oakley', 500),
('OK Feedback', 'Pilot,Metal,Gold,Not Glass,Brown', 'Oakley', 500);

INSERT INTO Products (ProductName, ProductDetails, Brand, Units)
VALUES ('CO Blackfin', 'Rectangle,Acetate,Tortoise,Glass,Green', 'Costa', 500),
('CO Brine', 'Irregular,Acetate,Black,Glass,Grey-Black', 'Costa', 500),
('CO Saltbreak Polarized', 'Rectangle,Acetate,Black,Glass,Blue', 'Costa', 500),
('CO CDM Mag Bay', 'Rectangle,Nylon,Policarbonato', 'Costa', 500),
('CO Inlet', 'Rectangle,Nylon,Tortoise,Not Glass,Grey-Black', 'Costa', 500);

INSERT INTO Products (ProductName, ProductDetails, Brand, Units)
VALUES ('MJ Stingray', 'Rectangle,Acetate,Black Shiny,Glass,Grey-Black', 'Maui Jim', 500),
('MJ 405 MAKAHA', 'Rectangle,Acetate,Black Shiny,Not Glass,Grey-Black', 'Maui Jim', 500),
('MJ 423 LIGHTHOUSE', 'Rectangle,Acetate,Black Shiny,Not Glass,Grey-Black', 'Maui Jim', 500),
('MJ WIKI WIKI', 'Rectangle,Titanium,Gold,Glass,Copper', 'Maui Jim', 500),
('MJ 219 PUNCHBOWL', 'Rectangle,Acetate,Black,Not Glass,Grey-Black', 'Maui Jim', 500);

INSERT INTO Products (ProductName, ProductDetails, Brand, Units)
VALUES ('VE VE2140', 'Pilot,Metal,Gold,Not Glass,Grey-Black', 'Versace', 500),
('VE VE4281', 'Square,Acetate,Black,Not Glass,Brown', 'Versace', 500),
('VE VE2168', 'Phantos,Metal,Gold,Not Glass,Brown', 'Versace', 500),
('VE VE2177', 'Cat Eye,Metal,Grey,Not Glass,Grey-Black', 'Versace', 500),
('VE VE4337', 'Round,Nylon,Black,Not Glass,Grey-Black', 'Versace', 500);

INSERT INTO Products (ProductName, ProductDetails, Brand, Units)
VALUES ('GG GG0010S', 'Rectangle,Acetate,Tortoise,Not Glass,Grey-Black', 'Gucci', 500),
('GG GG0061S', 'Oval,Metal,Tortoise,Not Glass,Green', 'Gucci', 500),
('GG GG0062S', 'Pilot,Metal,Gold,Not Glass,Gold', 'Gucci', 500),
('GG GG0036S', 'Rectangle,Acetate,Tortoise,Not Glass,Brown', 'Gucci', 500),
('GG GG0076S', 'Round,Injected,Tortoise,Not Glass,Brown', 'Gucci', 500);

INSERT INTO Products (ProductName, ProductDetails, Brand, Units)
VALUES ('CD SOREAL/S', 'Round,Metal,Gold,Not Glass,Gold', 'Christian Dior', 500),
('CD REFLECTED/S', 'Pilot,Metal,Black,Not Glass,Black', 'Christian Dior', 500),
('CD DIORAMA1', 'Rectangle,Injected,Silver,Not Glass,Silver', 'Christian Dior', 500),
('CD SCULPT', 'Square,Metal,Gunmetal,Not Glass,Silver', 'Christian Dior', 500),
('CD DIORSPLIT1', 'Pilot,Metal,Rose Gold,Not Glass,Silver', 'Christian Dior', 500);

INSERT INTO Products (ProductName, ProductDetails, Brand, Units)
VALUES ('RB SOREAL/S', 'Round,Metal,Gold,Not Glass,Gold', 'Ray-Ban', 500),
('RB ORIGINAL WAYFARER CLASSIC', 'Square,Acetate,Black,Glass,Polarized', 'Ray-Ban', 500),
('RB COCKPIT', 'Pilot,Metal,Gold,Glass,Light Brown Gradient', 'Ray-Ban', 500),
('RB 4068', 'Square,Nylon,Tortoise,Glass,Polarized', 'Ray-Ban', 500),
('RB JACKIE OHH II', 'Square,Nylon,Black,Not Glass,Grey Gradient', 'Ray-Ban', 500);