db.locations.save({
  name: 'Two Hearted Queen',
  address: '1201 W Roscoe Street, Chicago, IL, 60657',
  facilities: ['Hot Drinks', 'Wifi'],
  coords: [-87.65931890000002, 41.943331199999996],
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
});
db.locations.save({
  name: 'Daily Grind',
  address: '4613 N Lincoln Ave, Chicago, IL 60625',
  facilities: ['Hot Drinks', 'Food', 'Wifi'],
  coords: [-87.68609500000002, 41.96546499999999],
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
});
db.locations.save({
  name: 'Metropolis Coffee Company',
  address: '1039 West Granville Avenu, Chicago, IL 60660',
  facilities: ['Hot Drinks', 'Food', 'Wifi'],
  coords: [-87.65931890000002, 41.943331199999996],
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
});
