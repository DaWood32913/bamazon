DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
    item_id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(45) NULL,
    department_name VARCHAR (45) NULL,
    price DECIMAL (10,2) NULL,
    stock_quantity INT NULL,
    PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Wildberry Seltzer", "Food", 0.89, 12);
 
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Lays Potatoe Chips", "Food", 1.00, 30);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Bamazon Water Stick", "Electronics", 49.99, 11);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Bamazon Alexis", "Electronics", 89.99, 24);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Lawnmower", "Gardening", 199.99, 8);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Mulch", "Gardening", 3.00, 300);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Madden NFL 20'", "Gaming", 59.99, 117);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("NBA2K 20", "Gaming", 59.99, 122);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Royal Purple 0w-20", "Automotive", 49.99, 17);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Little Tree Air Freshner", "Automotive", 2.79, 62);

SELECT * FROM products;