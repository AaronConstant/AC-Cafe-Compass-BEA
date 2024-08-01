\c cafe_blog_dev;


INSERT INTO customer (id, first_name, last_name, username, password, email, gender_identity, last_login, membership_status, phone_number) VALUES 
(1, 'Donnell', 'Scoterbosh', 'dscoterbosh0', 'oQ6>wUsQw', 'dscoterbosh0@time.com', 'Male', '6/10/2012', false, '190-138-0670'),
(2, 'Nickey', 'Luckett', 'nluckett1', 'mJ9!{`co69|', 'nluckett1@soundcloud.com', 'Male', '8/20/2018', true, '349-527-1093'),
(3, 'Reba', 'Burdekin', 'rburdekin2', 'eA5%UK.jsp<#2_o', 'rburdekin2@noaa.gov', 'Female', '1/6/2010', false, '476-965-7610'),
(4, 'Billy', 'Bubbings', 'bbubbings3', 'zH5&c7Gw8', 'bbubbings3@wunderground.com', 'Male', '3/8/2005', true, '918-238-7066'),
(5, 'Tiphany', 'Tourville', 'ttourville4', 'aV5<{?sEM2d@UOJ', 'ttourville4@walmart.com', 'Bigender', '9/11/2019', true, '434-833-1561');


INSERT INTO cafe (id, name, opening_hours, closing_hours, average_rating, wifi_available, outdoor_seating, lgbtqia_friendly, established, customer_id, menu_id) VALUES 
(1, 'Daltfresh', '4:59 AM', '9:06 AM', 1.2, false, true, true, '2/22/2016', 1, 1),
(2, 'Konklab', '5:14 PM', '3:41 PM', 1.3, true, false, true, '12/27/2022', 2, 2),
(3, 'Zontrax', '8:03 PM', '5:20 AM', 1.7, true, true, true, '9/6/2019', 3, 3),
(4, 'Regrant', '11:33 PM', '5:11 PM', 2.8, false, true, true, '5/22/2019',  4, 4),
(5, 'Bitchip', '7:43 AM', '4:38 AM', 3.4, true, true, false, '8/12/2006', 5, 5);