const router = require('express').Router();
const { Trip, Item } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
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

router.get('/add', withAuth, async (req, res) => {
    try {
        res.render('addTrip', {
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

// add a trip
router.post('/add', withAuth, async (req, res) => {
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

router.get('/:id', withAuth, async (req, res) => {
    try {
        // Get the trips for the current user
        const tripData = await Trip.findAll({
            where: {
                user_id: req.session.user_id
            },
            include: { model: Item }
        });
        const trips = tripData.map((trip) =>
            trip.get({ plain: true })
        );
        var tripToDisplayItems = [];
        // Convert the date to a string to display in the template
        for (var tripsIdx = 0; tripsIdx < trips.length; tripsIdx++) {
            for (var itemsIdx = 0; itemsIdx < trips[tripsIdx].items.length; itemsIdx++) {
                trips[tripsIdx].items[itemsIdx].date_needby = trips[tripsIdx].items[itemsIdx].date_needby.toLocaleDateString();
            }
            if (trips[tripsIdx].id === parseInt(req.params.id)) {
                // This is the active trip so add a property that handlebars can use to indicate that it is an active trip
                trips[tripsIdx].activelyDisplayedTrip = true;
                tripToDisplayItems = trips[tripsIdx].items;
            }
        }
        console.log(tripToDisplayItems)
        res.render('trips', {
            trips,
            tripToDisplayItems,
            displayItemInput: true,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

// ===== DELETE A TRIP ===== //

router.delete('/:id', withAuth, async (req, res) => {
    try {
        let dbTripData = await Trip.findByPk(req.params.id);
        if (!dbTripData) {
            res.status(400).json({ message: 'No trip found with that id!' });
            return;
        } else if (dbTripData.get({ plain: true }).user_id !== req.session.user_id) {
            res.status(400).json({ message: 'Trip cannot be deleted' });
        } else {
            dbTripData = await Trip.destroy(
                {
                    where: {
                        id: req.params.id,
                    },
                });
            res.status(200).json({ message: 'Delete the trip successfully!' });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;
