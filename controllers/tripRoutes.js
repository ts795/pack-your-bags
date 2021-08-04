const router = require('express').Router();

router.get('/', async (req, res) => {
    try {
        res.render('trips', {
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;