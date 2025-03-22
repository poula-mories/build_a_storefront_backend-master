/* Replace with your SQL commands */
CREATE TABLE users (
    id SERIAL PRIMARY  KEY,
    firstName VARCHAR(20),
    lastName VARCHAR(20),
    password VARCHAR(100),
    username VARCHAR(40) unique
);