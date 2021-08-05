const router = require('express').Router();
// CREATE new user
router.post('/', async (req, res) => {
    // TODO: Fill in
    res.send(200).json({ message: "Successful login" });
});

// Login
router.post('/login', async (req, res) => {
    // TODO: Fill in
    res.send(200).json({ message: "Successful login" });
});

module.exports = router;