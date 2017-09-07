var express = require('express');
var router = express.Router();
var controllerLocations = require('../controllers/locations');
var controllerReviews = require('../controllers/reviews');

router.get('/locations', controllerLocations.locationsListByDistance);
router.post('/locations', controllerLocations.locationsCreate);
router.get('/locations/:locationid', controllerLocations.locationsReadOne);
router.put('/locations/:locationid', controllerLocations.locationsUpdateOne);
router.delete('/locations/:locationid', controllerLocations.locationsDeleteOne);

// reviews
router.post('/locations/:locationid/reviews', controllerReviews.reviewsCreate);
router.get('/locations/:locationid/reviews/:reviewid', controllerReviews.reviewsReadOne);
router.put('/locations/:locationid/reviews/:reviewid', controllerReviews.reviewsUpdateOne);
router.delete('/locations/:locationid/reviews/:reviewid', controllerReviews.reviewsDeleteOne);

module.exports = router;
