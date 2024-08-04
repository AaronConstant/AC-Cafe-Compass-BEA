const express = require('express');
const review = express.Router({ mergeParams: true });
const { displayOneCafe } = require('../queries/cafes')
const { getOneBlogger } = require('../queries/blogger')
const { 
    displayAllReviews, 
    displayOneReview, 
    addNewReview, 
    updateReview, 
    removeReview,
    displayReviewsForBlogger
    } = require('../queries/reviews');



review.get('/', async (req, res) => {
    const { cafe_id, blogger_id } = req.params;
    const allReviewsOfCafe = await displayAllReviews(cafe_id);
    const cafeWithReviews = await displayOneCafe(cafe_id)
    const reviewsFromBlogger = await displayReviewsForBlogger(blogger_id)
    const oneBlogger = await getOneBlogger(blogger_id)
    if (cafeWithReviews) {
        res.status(200).json({...cafeWithReviews, allReviewsOfCafe});
    } else if(reviewsFromBlogger) {
        res.status(200).json({...oneBlogger, reviewsFromBlogger});
    } else {
        res.status(500).json({ error: "Unable to find Cafe" });
    }
});

review.get('/:id', async (req, res) => {
    const { cafe_id, id} = req.params;
    const oneReview = await displayOneReview(id);
    const oneCafe = await displayOneCafe(cafe_id)


    if (oneReview) {
        res.status(200).json({...oneCafe, oneReview});
    } else {
        res.status(404).json({ error: "Unable to find Review" });
    }
});

review.post('/', async (req, res) => {
    try {
        const newReviewEntry = await addNewReview(req.body);
        res.status(201).json(newReviewEntry);
    } catch (error) {
        return error;
    }
});

review.put('/:id', async (req, res) => {
    const { id } = req.params;
    const updatingReview = await updateReview(id, req.body);
    if (updatingReview.id) {
        res.status(200).json(updatingReview);
    } else {
        res.status(404).json({ error: "Update Submission Unsuccessful!" });
    }
});

review.delete('/:id', async (req, res) => {
    const { id } = req.params;
    const removingReview = await removeReview(id);

    if (removingReview.id) {
        res.status(200).json({ message: "Review Successfully Deleted!" });
    } else {
        res.status(400).json({ error: "An Error occurred when deleting Review!" });
    }
});

module.exports = review;