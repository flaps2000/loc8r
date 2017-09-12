var express = require('express');
var router = express.Router();
var jwt = require('express-jwt');
var auth = jwt({
  secret: process.env.JWT_SECRET,
  userProperty: 'payload'
});

var controllerLocations = require('../controllers/locations');
var controllerReviews = require('../controllers/reviews');
var controllerAuthentication = require('../controllers/authentication');

// locations
router.get('/locations', controllerLocations.locationsListByDistance);
router.post('/locations', controllerLocations.locationsCreate);
router.get('/locations/:locationid', controllerLocations.locationsReadOne);
router.put('/locations/:locationid', controllerLocations.locationsUpdateOne);
router.delete('/locations/:locationid', controllerLocations.locationsDeleteOne);

// reviews
router.post('/locations/:locationid/reviews', auth, controllerReviews.reviewsCreate);
router.get('/locations/:locationid/reviews/:reviewid', controllerReviews.reviewsReadOne);
router.put('/locations/:locationid/reviews/:reviewid', auth, controllerReviews.reviewsUpdateOne);
router.delete('/locations/:locationid/reviews/:reviewid', auth, controllerReviews.reviewsDeleteOne);

// authentication
router.post('/register', controllerAuthentication.register);
router.post('/login', controllerAuthentication.login);

module.exports = router;
