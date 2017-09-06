var express = require('express');
var router = express.Router();
var controllerLocations = require('../controllers/locations')
var controllerOthers = require('../controllers/others')

/* Location Pages. */
router.get('/', controllerLocations.locationList);
router.get('/location', controllerLocations.locationDetail);
router.get('/location/review/new', controllerLocations.addReview);

/* Other Pages. */
router.get('/about', controllerOthers.about);

module.exports = router;
