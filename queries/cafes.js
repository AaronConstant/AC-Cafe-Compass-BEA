const {db, pgp} = require('../db/dbConfig')

const displayAllCafes = async () => {
    try {
        const getCafes = await db.any("SELECT*FROM cafe")
        return getCafes;
    } catch (error) {
        return error
    }
}

const displayOneCafe = async (id)=> {
    try {
        const oneReview = await db.one("SELECT * FROM cafes WHERE id=$1", id);
        return oneReview;
    } catch (error) {
        return error;
    }
}

const addNewCafe = async (newCafe) => {
    try {
        const newCafe = await db.one("INSERT INTO cafes (id, name, opening_hours, closing_hours, average_rating, wifi_available, outdoor_seating, lgbtqia_friendly, established, customer_id, menu_id) VALUES ($$$$$$$$$$)")

    } catch(error) {
        return error
    }
}