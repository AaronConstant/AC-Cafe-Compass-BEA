const { db, pgp } = require('../db/dbConfig')

const displayAllCafes = async () => {
    try {
        const getCafes = await db.any("SELECT*FROM cafes");
        return getCafes;
    } catch (error) {
        return error
    }
};


const displayOneCafe = async (id)=> {
    try {
        const oneReview = await db.one("SELECT*FROM cafes WHERE id=$1", id);
        return oneReview;
    } catch (error) {
        return error;
    }
}

const addNewCafe = async (newCafe) => {
    try {
        const newCafeEntry = await db.one(
            "INSERT INTO cafes (name, opening_hours, closing_hours, average_rating, wifi_available, outdoor_seating, lgbtqia_friendly, established, customer_id, pastry_id, coffee_id, tea_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) RETURNING *",
            [
                newCafe.name,
                newCafe.opening_hours,
                newCafe.closing_hours,
                newCafe.average_rating,
                newCafe.wifi_available,
                newCafe.outdoor_seating,
                newCafe.lgbtqia_friendly,
                newCafe.established,
                newCafe.customer_id,
                newCafe.pastry_id,
                newCafe.coffee_id,
                newCafe.tea_id
            ]
        );
        return newCafeEntry;
    } catch (error) {
        console.error("Error adding new cafe:", error);
        return { error: "Unable to add new cafe" };
    }
};

module.exports= { displayAllCafes ,displayOneCafe , addNewCafe }