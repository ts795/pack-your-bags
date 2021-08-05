const router = require('express').Router();
const { Trip } = require('../models');

// Get the trips for the user
router.get('/', async (req, res) => {
    try {
        // Get the trips for the current user
        const tripData = await Trip.findAll({
            where: {
                user_id: req.session.user_id
            }
        });
        const trips = tripData.map((trip) =>
            trip.get({ plain: true })
        );

        res.render('trips', {
            trips
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/add', async (req, res) => {
    try {
        res.render('addTrip', {
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

// add a trip
router.post('/add', async (req, res) => {
    // TODO: Fill in
    try {
        console.log("Add Trip" + JSON.stringify(req.session));
        const tripData = await Trip.create({
            location: req.body.location,
            date_start: req.body.startDate,
            date_end: req.body.endDate,
            user_id: req.session.user_id
        })
        // Client will send these fields in the body: location, startDate, endDate
        // Example formats: LA, 08/13/2021, 08/20/2021
        res.status(200).json(tripData);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.get('/:id', async (req, res) => {
    try {
        // Get the trips for the current user
        const tripData = await Trip.findAll({
            where: {
                user_id: req.session.user_id
            }
        });
        const trips = tripData.map((trip) =>
            trip.get({ plain: true })
        );

        res.render('trips', {
            trips
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

// delete a trip
router.delete('/:id', async (req, res) => {
    // TODO: fill in
    console.log("Received delete for trip ID " + req.params.id);
    res.json({ message: "Delete was successful" });
});

module.exports = router;