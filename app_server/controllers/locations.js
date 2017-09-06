/* GET home page. */
module.exports.locationList = function(req, res) {
  res.render('locations-list', { title: 'Location Listing...' });
}

/* GET 'Locations Info' page. */
module.exports.locationDetail = function(req, res) {
  res.render('location-info', { title: 'Location Detail...' });
}

/* GET Add Review' page. */
module.exports.addReview = function(req, res) {
  res.render('location-review-form', { title: 'Add a Location Review...' });
}
