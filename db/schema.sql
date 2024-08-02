DROP DATABASE IF EXISTS cafe_blog_dev;

CREATE DATABASE cafe_blog_dev;

\c cafe_blog_dev;

create table customer (
	id INT SERIAL PRIMARY KEY,
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
	id INT SERIAL PRIMARY KEY,
	name VARCHAR(30) NOT NULL,
	opening_hours VARCHAR(10),
	closing_hours VARCHAR(10),
	average_rating DECIMAL(2,1),
	wifi_available BOOLEAN NOT NULL,
	outdoor_seating BOOLEAN,
	lgbtqia_friendly BOOLEAN NOT NULL,
	established DATE,
	customer_id INT REFERENCES customer(id) ON DELETE CASCADE,
	menu_id INT REFERENCES menu(id) ON DELETE CASCADE
);

CREATE TABLE menu (
	id INT SERIAL PRIMARY KEY,
	pastry_id INT REFERENCES pastry(id) ON DELETE CASCADE,
	coffee_id INT REFERENCES coffee(id) ON DELETE CASCADE,
	tea_id INT REFERENCES tea(id) ON DELETE CASCADE
);

CREATE TABLE pastry (
	id INT SERIAL PRIMARY KEY,
	pastry_name TEXT,
	price DECIMAL(4,2),
	ingredients TEXT,
	available_quantity INT,
	expiry_date DATE
);

CREATE TABLE coffee (
	id INT SERIAL PRIMARY KEY,
	coffee_type VARCHAR(30),
	price DECIMAL(4.2),
	roast_level TEXT,
	country_origin TEXT,
	caffeine_content INT
);

CREATE TABLE tea {
  id INT SERIAL PRIMARY KEY,
  tea_type TEXT,
  price DECIMAL(4,2),
  origin TEXT, 
  brewing_temperature TEXT,
  brewing_time ,
  caffeine_content INT
}