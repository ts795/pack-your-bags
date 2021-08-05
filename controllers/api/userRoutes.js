const router = require('express').Router();
const { User } = require('../../models');

// CREATE new user
router.post('/', async (req, res) => {
    // TODO: Fill in
    res.send(200).json({ message: "Successful login" });
});
// ========= LOGIN =========== //

router.post('/login', async (req, res) => {
    try {
        const userData = await User.findOne({
            where: {
                username: req.body.username
            },
        });

        if (!userData) {
            res.status(400).json({ message: "Incorrect username or password.  Please try again!" });
            return;
        };

        const validPassword = await userData.checkPassword(req.body.password);

        if (!validPassword) {
            res.status(400).json({ message: "Incorrect username or password. Please try again!" });
            return;
        };

        req.session.save(() => {
            req.session.loggedIn = true;
            req.session.username = req.body.username;
            console.log(userData);
            req.session.user_id = userData.dataValues.id;
            console.log(req.session);
            res.status(200).json({ user: userData, message: "You are now logged in!" })
        });

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
})

// ========= SIGNUP =========== //

router.post('/', async (req, res) => {
    try {
        const dbUserData = await User.create({
            username: req.body.username,
            password: req.body.password,
        });

        req.session.save(() => {
            req.session.loggedIn = true;

            res.status(200).json(dbUserData);
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// ========= LOGOUT =========== //

router.post('/logout', (req, res) => {
    console.log(req.session)
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(405).end();
    }
});


module.exports = router;