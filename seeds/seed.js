
const sequelize = require('../config/connection');
const seedUsers = require('./userData');
const seedTrip = require('./tripData');
const seedItem = require('./itemData');


const seedAll = async () => {
    await sequelize.sync({ force: true });

    // Load user data for testing
    await seedUsers();
    await seedTrip();
    await seedItem();
    process.exit(0);
};

seedAll();