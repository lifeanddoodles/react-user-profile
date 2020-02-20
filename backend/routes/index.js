const express = require('express');
const router = express.Router();
const verify = require('../helpers/auth');

const User = require('../models/User');

// Welcome Page
// router.get('/', forwardAuthenticated, (req, res) => res.render('welcome'));

// User Profile
// @route   GET user-profile
// @desc    Show user's profile page
// @access  Private
// router.get('/user-profile', verify, (req, res) => res.send(req.user.email));
// router.get('/user-profile', verify, (req, res) =>
//   res.json({ success: true, user: { id: req.user._id } })
// );
router.get('/user-profile', verify, async (req, res) => {
  // Check if user is already in the database
  let user = await User.findById(req.user._id).select('-password');

  if (user == null) {
    return res.status(400).json({ msg: 'Cannot find user' });
  }
  return res.json({ success: true, msg: 'User found', user: user });
});

module.exports = router;
