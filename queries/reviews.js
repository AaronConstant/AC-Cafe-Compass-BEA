const blogger = require('../controllers/bloggerController');
const { db, pgp } = require('../db/dbConfig');

const displayAllReviews = async (cafe_id) => {
    try {
        const getReviews = await db.any("SELECT * FROM reviews WHERE cafe_id=$1", cafe_id);
        return getReviews;
    } catch (error) {
        return error;
    }
};

const displayReviewsForBlogger = async (blogger_id) => {
    try{
        const bloggerReviews = await db.any("SELECT*FROM reviews WHERE blogger_id=$1", blogger_id)
        return bloggerReviews
    }catch(error){
        return error;
    }

}

const displayOneReview = async (id) => {
    try {
        const oneReview = await db.one("SELECT * FROM reviews WHERE id=$1", id);
        return oneReview;
    } catch (error) {
        return error;
    }
};

const addNewReview = async (newReview) => {
    try {
        const newReviewEntry = await db.one(
            "INSERT INTO reviews (reviewer_name, content, rating, cafe_id, blogger_id) VALUES ($1, $2, $3, $4, $5) RETURNING *",
            [
                newReview.reviewer_name,
                newReview.content,
                newReview.rating,
                newReview.cafe_id,
                newReview.blogger_id
            ]
        );
        return newReviewEntry;
    } catch (error) {
        console.error("Error adding new review:", error);
        return { error: "Unable to add new review" };
    }
};

const updateReview = async (id, reviewUpdate) => {
    try {
        const reviewUpdateEntry = await db.one(
            `UPDATE reviews 
            SET reviewer_name = $1, 
                content = $2, 
                rating = $3, 
                cafe_id = $4, 
                blogger_id = $5
            WHERE id = $6 
            RETURNING *`,
            [
                reviewUpdate.reviewer_name,
                reviewUpdate.content,
                reviewUpdate.rating,
                reviewUpdate.cafe_id,
                reviewUpdate.blogger_id,
                id
            ]
        );
        return reviewUpdateEntry;
    } catch (error) {
        console.error("Error updating review:", error);
        return { error: "Unable to update review" };
    }
};

const removeReview = async (id) => {
    try {
        const removeReview = await db.one("DELETE FROM reviews WHERE id=$1 RETURNING *", [id]);
        return removeReview;
    } catch (error) {
        return error;
    }
};

module.exports = { displayAllReviews, displayOneReview, addNewReview, updateReview, removeReview, displayReviewsForBlogger };
