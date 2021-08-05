const router = require('express').Router();

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
    // Client will send these fields in the body: location, startDate, endDate
    // Example formats: LA, 08/13/2021, 08/20/2021
    res.json({ id: 1 });
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

// delete a trip
router.delete('/:id', async (req, res) => {
    // TODO: fill in
    console.log("Received delete for trip ID " + req.params.id);
    res.json({ message: "Delete was successful" });
});

module.exports = router;