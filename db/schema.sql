DROP DATABASE IF EXISTS cafe_blog_dev;

CREATE DATABASE cafe_blog_dev;

\c cafe_blog_dev;

create table customer (
	id INT,
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

CREATE TABLE cafe (
	id INT,
	name VARCHAR(30) NOT NULL,
	opening_hours VARCHAR(10),
	closing_hours VARCHAR(10),
	average_rating DECIMAL(2,1),
	wifi_available BOOLEAN NOT NULL,
	outdoor_seating BOOLEAN,
	lgbtqia_friendly BOOLEAN NOT NULL,
	established DATE,
	customer_id INT,
	menu_id INT
);