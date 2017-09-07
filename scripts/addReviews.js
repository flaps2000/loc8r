db.locations.find().forEach( function(thisDoc) {
  if(thisDoc.name === 'Two Hearted Queen') {
    db.locations.update( { "_id" : thisDoc._id 
    }, {
      $push: {
        reviews: [{
          id: ObjectId(),
          author: "Martyn Ex",
          ratings: 4,
          reviewText: "Great place....",
          createdOn: Date.now()
        }]
      }
    })
  }
});
