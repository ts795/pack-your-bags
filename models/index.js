const User = require('./User');
const Trip = require('./Trip');



User.hasMany(Trip, {
    foreignKey: 'user_id'
});


module.exports = { User, Trip };
