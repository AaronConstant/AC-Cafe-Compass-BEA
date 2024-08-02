DROP DATABASE IF EXISTS cafe_blog_dev;
CREATE DATABASE cafe_blog_dev;

\c cafe_blog_dev;

CREATE TABLE cafes (
    id SERIAL PRIMARY KEY,
    name VARCHAR(30) NOT NULL,
    opening_hours VARCHAR(10),
    closing_hours VARCHAR(10),
    average_rating DECIMAL(2,1),
    wifi_available BOOLEAN NOT NULL,
    outdoor_seating BOOLEAN,
    lgbtqia_friendly BOOLEAN NOT NULL,
    established DATE
);

CREATE TABLE pastry (
    id SERIAL PRIMARY KEY,
    pastry_name TEXT,
    price DECIMAL(4,2),
    ingredients TEXT,
    available_quantity INT,
    expiry_date DATE,
    cafe_id INT REFERENCES cafes(id) ON DELETE CASCADE
);

CREATE TABLE coffee (
    id SERIAL PRIMARY KEY,
    coffee_type VARCHAR(30),
    price DECIMAL(4,2),
    roast_level TEXT,
    country_origin TEXT,
    caffeine_content INT,
    cafe_id INT REFERENCES cafes(id) ON DELETE CASCADE

);

CREATE TABLE tea (
    id SERIAL PRIMARY KEY,
    tea_type TEXT,
    price DECIMAL(4,2),
    origin TEXT, 
    brewing_temperature TEXT,
    brewing_time TEXT,
    caffeine_content INT,
    cafe_id INT REFERENCES cafes(id) ON DELETE CASCADE

);

CREATE TABLE blogger (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    username VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(50) NOT NULL,
    email VARCHAR(50),
    gender_identity TEXT,
    last_login DATE,
    membership_status BOOLEAN,
    phone_number VARCHAR(12)
);

CREATE TABLE reviews (
    id SERIAL PRIMARY KEY,
    review_name TEXT,
    rating INT CHECK (rating >= 1 AND rating <= 5),
    cafe_id INT REFERENCES cafes(id) ON DELETE CASCADE,
    blogger_id INT REFERENCES blogger(id) ON DELETE CASCADE
)



