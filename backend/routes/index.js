const express = require('express');
const router = express.Router();
const verify = require('../helpers/auth');

// Welcome Page
// router.get('/', forwardAuthenticated, (req, res) => res.render('welcome'));

// User Profile
router.get('/user-profile', verify, (req, res) => res.send(req.user.email));

module.exports = router;
