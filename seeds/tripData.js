const { Trip } = require('../models');

const tripData = [
  {
    location: 'Hawaii',
    date_start: 'Dec 1, 2021',
    date_end: 'Dec 4, 2021',
    user_id: 1,
  },
  {
    location: 'New York',
    date_start: 'May 3, 2022',
    date_end: 'May 10, 2022',
    user_id: 2,
  },
];

const seedTrip = () => Trip.bulkCreate(tripData);

module.exports = seedTrip;
