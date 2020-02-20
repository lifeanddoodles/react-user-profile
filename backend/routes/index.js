const express = require('express');
const router = express.Router();
const verify = require('../helpers/auth');

// Welcome Page
// router.get('/', forwardAuthenticated, (req, res) => res.render('welcome'));

// User Profile
// @route   GET user-profile
// @desc    Show user's profile page
// @access  Private
// router.get('/user-profile', verify, (req, res) => res.send(req.user.email));
router.get('/user-profile', verify, (req, res) =>
  res.json({ success: true, user: { id: req.user._id } })
);

module.exports = router;
