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
            "INSERT INTO cafes (name, opening_hours, closing_hours, average_rating, wifi_available, outdoor_seating, lgbtqia_friendly, established) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *",
            [
                newCafe.name,
                newCafe.opening_hours,
                newCafe.closing_hours,
                newCafe.average_rating,
                newCafe.wifi_available,
                newCafe.outdoor_seating,
                newCafe.lgbtqia_friendly,
                newCafe.established,
            ]
        );
        return newCafeEntry;
    } catch (error) {
        console.error("Error adding new cafe:", error);
        return { error: "Unable to add new cafe" };
    }
};


const updateCafe = async (id ,cafeUpdate) => {
    try {
        const cafeUpdateEntry = await db.one(
            `UPDATE cafes 
            SET name = $1, 
                opening_hours = $2, 
                closing_hours = $3, 
                average_rating = $4, 
                wifi_available = $5, 
                outdoor_seating = $6, 
                lgbtqia_friendly = $7, 
                established = $8, 
            WHERE id = $9 
            RETURNING *`,
            [
                cafeUpdate.name,
                cafeUpdate.opening_hours,
                cafeUpdate.closing_hours,
                cafeUpdate.average_rating,
                cafeUpdate.wifi_available,
                cafeUpdate.outdoor_seating,
                cafeUpdate.lgbtqia_friendly,
                cafeUpdate.established,
                id
            ]
        );
            return   cafeUpdateEntry;
    } catch (error) {
        console.error("Error updating cafe:", error);
        return { error: "Unable to update cafe" };
    }
};

const removeCafe = async (id) => {
    try {
        const removeCafe = await db.one("DELETE FROM cafes WHERE id=$1 RETURNING *", id)
        return removeCafe
    } catch(error){
        return error
    }

}

module.exports= { displayAllCafes ,displayOneCafe , addNewCafe, updateCafe, removeCafe }