\c cafe_blog_dev;


INSERT INTO blogger (first_name, last_name, username, password, email, gender_identity, last_login, membership_status, phone_number) VALUES 
('Donnell', 'Scoterbosh', 'dscoterbosh0', 'oQ6>wUsQw', 'dscoterbosh0@time.com', 'Male', '2012-06-10', false, '190-138-0670'),
('Nickey', 'Luckett', 'nluckett1', 'mJ9!{`co69|', 'nluckett1@soundcloud.com', 'Male', '2018-08-20', true, '349-527-1093'),
('Reba', 'Burdekin', 'rburdekin2', 'eA5%UK.jsp<#2_o', 'rburdekin2@noaa.gov', 'Female', '2010-01-06', false, '476-965-7610'),
('Billy', 'Bubbings', 'bbubbings3', 'zH5&c7Gw8', 'bbubbings3@wunderground.com', 'Male', '2005-03-08', true, '918-238-7066'),
('Tiphany', 'Tourville', 'ttourville4', 'aV5<{?sEM2d@UOJ', 'ttourville4@walmart.com', 'Bigender', '2019-09-11', true, '434-833-1561');

INSERT INTO pastry (pastry_name, price, ingredients, available_quantity, expiry_date) VALUES
('Croissant', 3.50, 'Flour, Butter, Sugar, Yeast', 20, '2024-08-05'),
('Muffin', 2.50, 'Flour, Sugar, Eggs, Milk', 15, '2024-08-05'),
('Scone', 3.00, 'Flour, Butter, Sugar, Milk', 10, '2024-08-05');

INSERT INTO coffee (coffee_type, price, roast_level, country_origin, caffeine_content) VALUES
('Espresso', 2.50, 'Dark', 'Italy', 100),
('Latte', 3.50, 'Medium', 'Colombia', 80),
('Cappuccino', 3.00, 'Medium', 'Brazil', 90);

INSERT INTO tea (tea_type, price, origin, brewing_temperature, brewing_time, caffeine_content) VALUES
('Green Tea', 1.50, 'China', '80°C', '3 minutes', 20),
('Black Tea', 2.00, 'India', '95°C', '4 minutes', 40),
('Herbal Tea', 2.50, 'Egypt', '100°C', '5 minutes', 0);

INSERT INTO cafes (name, opening_hours, closing_hours, average_rating, wifi_available, outdoor_seating, lgbtqia_friendly, established, blogger_id, pastry_id, coffee_id, tea_id ) VALUES 
('Daltfresh', '04:59', '09:06', 1.2, false, true, true, '2016-02-22', 1, 1, 1, 1),
('Konklab', '17:14', '15:41', 1.3, true, false, true, '2022-12-27', 2, 2, 2, 2),
('Zontrax', '20:03', '05:20', 1.7, true, true, true, '2019-09-06', 3, 3, 3, 3),
('Regrant', '23:33', '17:11', 2.8, false, true, true, '2019-05-22', 4, 1, 2, 3),
('Bitchip', '07:43', '04:38', 3.4, true, true, false, '2006-08-12', 5, 2, 3, 1);