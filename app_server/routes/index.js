var express = require('express');
var router = express.Router();
var controllerLocations = require('../controllers/locations')
var controllerOthers = require('../controllers/others')

/* Location Pages. */
router.get('/', controllerOthers.angularApp);
//router.get('/location/:locationid', controllerLocations.locationDetail);
//router.get('/location/:locationid/review/new', controllerLocations.addReview);
//router.post('/location/:locationid/review/new', controllerLocations.doAddReview);

/* Other Pages. */
//router.get('/about', controllerOthers.about);

module.exports = router;
