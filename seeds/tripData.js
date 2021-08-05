const { Trip } = require('../models');

const tripData = [
  {
    location: 'Hawaii',
    date_start: 'August 2, 2021',
    date_end: 'August 6, 2021',
    user_id: 1,
  },
  {
    location: 'New York',
    date_start: 'Dec 10, 2021',
    date_end: 'Dec 16, 2021',
    user_id: 2,
  },
];

const seedTrip = () => Trip.bulkCreate(tripData);

module.exports = seedTrip;
