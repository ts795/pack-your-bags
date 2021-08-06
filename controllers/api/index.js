const router = require('express').Router();

const userRoutes = require('./userRoutes');
const itemListRoutes = require('./itemlistRoutes');

router.use('/users', userRoutes);
router.use('/items', itemListRoutes);

module.exports = router;