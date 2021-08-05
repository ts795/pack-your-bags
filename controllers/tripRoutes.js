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

module.exports = router;