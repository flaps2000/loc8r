db.locations.find().forEach( function(thisDoc) {
  if(thisDoc.name === 'Two Hearted Queen') {
    db.locations.update( { "_id" : thisDoc._id 
    }, {
      $push: {
        openingTimes: [{
          "days": "Mon - Thur",
          "opening": "6:00 am",
          "closing": "7:00 pm",
          "closed": false 
        },
        {
          "days": "Fri",
          "opening": "6:00 am",
          "closing": "5:00 pm",
          "closed": false
        },
        {
          "days": "Sat",
          "opening": "7:00 am",
          "closing": "7:00 pm",
          "closed": false
        },
        {
          "days": "Sat",
          "opening": "7:00 am",
          "closing": "7:00 pm",
          "closed": false
        }]
      }
    });
  } else if (thisDoc.name === 'Daily Grind') {
    db.locations.update( { "_id" : thisDoc._id 
    }, {
      $push: {
        openingTimes: [{
          "days": "Mon - Fri",
          "opening": "6:00 am",
          "closing": "6:00 pm",
          "closed": false 
        },
        {
          "days": "Sat",
          "opening": "7:00 am",
          "closing": "6:00 pm",
          "closed": false
        },
        {
          "days": "Sat",
          "opening": "7:00 am",
          "closing": "4:00 pm",
          "closed": false
        }]
      }
    });
  } else if (thisDoc.name === 'Metropolis Coffee Company') {
    db.locations.update( { "_id" : thisDoc._id 
    }, {
      $push: {
        openingTimes: [{
          "days": "Mon - Fri",
          "opening": "6:30 am",
          "closing": "8:00 pm",
          "closed": false 
        },
        {
          "days": "Sat",
          "opening": "7:00 am",
          "closing": "8:00 pm",
          "closed": false
        },
        {
          "days": "Sat",
          "opening": "7:30 am",
          "closing": "8:00 pm",
          "closed": false
        }]
      }
    });
  }
});
