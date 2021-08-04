const router = require('express').Router();

// Login
router.post('/login', async (req, res) => {
    // TODO: Fill in
    res.send(200).json({ message: "Successful login" });
});

module.exports = router;