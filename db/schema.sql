DROP DATABASE IF EXISTS cafe_blog_dev;
CREATE DATABASE cafe_blog_dev;

\c cafe_blog_dev;


CREATE TABLE pastry (
    id SERIAL PRIMARY KEY,
    pastry_name TEXT,
    price DECIMAL(4,2),
    ingredients TEXT,
    available_quantity INT,
    expiry_date DATE
);

CREATE TABLE coffee (
    id SERIAL PRIMARY KEY,
    coffee_type VARCHAR(30),
    price DECIMAL(4,2),
    roast_level TEXT,
    country_origin TEXT,
    caffeine_content INT
);

CREATE TABLE tea (
    id SERIAL PRIMARY KEY,
    tea_type TEXT,
    price DECIMAL(4,2),
    origin TEXT, 
    brewing_temperature TEXT,
    brewing_time TEXT,
    caffeine_content INT
);

CREATE TABLE blogger (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    username VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(50),
    gender_identity TEXT,
    last_login DATE,
    membership_status BOOLEAN,
    phone_number VARCHAR(12)
);

CREATE TABLE cafes (
    id SERIAL PRIMARY KEY,
    name VARCHAR(30) NOT NULL,
    opening_hours VARCHAR(10),
    closing_hours VARCHAR(10),
    average_rating DECIMAL(2,1),
    wifi_available BOOLEAN NOT NULL,
    outdoor_seating BOOLEAN,
    lgbtqia_friendly BOOLEAN NOT NULL,
    established DATE,
    blogger_id INT REFERENCES blogger(id) ON DELETE CASCADE,
    pastry_id INT REFERENCES pastry(id) ON DELETE CASCADE,
    coffee_id INT REFERENCES coffee(id) ON DELETE CASCADE,
    tea_id INT REFERENCES tea(id) ON DELETE CASCADE
);


