const router = require('express').Router();

router.get('/', async (req, res) => {
    try {
        res.render('homepage', {
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

// ========= SIGNUP =========== //
router.get('/signup', async (req, res) => {
    try {
        res.render('homepage', {
            signingUp: true
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;