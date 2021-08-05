const User = require('./User');
const Trip = require('./Trip');
const Item = require('./Item');


User.hasMany(Trip, {
    foreignKey: 'user_id'
});

Trip.hasMany(Item, {
    foreignKey: 'trip_id'
});


module.exports = { User, Trip, Item };
