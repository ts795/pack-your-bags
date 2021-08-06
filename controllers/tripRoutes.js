const router = require('express').Router();
const { Trip } = require('../models');

router.get('/', async (req, res) => {
    try {
        res.render('trips', {
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
    res.status(200).json(tripData);} catch (err) {
        res.status(400).json(err);
      }
});

router.get('/:id', async (req, res) => {
    try {
        // TODO: fill in
        res.render('trips', {
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

// ===== DELETE A TRIP ===== //

router.delete('/:id', async (req, res) => {
    try {
        let dbTripData = await Trip.findByPk(req.params.id);
        if (!dbTripData) {
            res.status(400).json({ message: 'No trip found with that id!' });
            return;
        } else if (dbTripData.get({plain: true}).user_id !== req.session.user_id) {
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