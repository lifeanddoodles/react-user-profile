const express = require('express');
const router = express.Router();
const { body, check, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const http = require('http');
const verify = require('../helpers/auth');

const User = require('../models/User');

// Login
// @route   POST login
// @desc    Auth user
// @access  Public
router.post(
  '/login',
  [
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Password is required')
      .notEmpty()
      .isLength({
        min: 6
      })
      .withMessage('Password must contain at least 6 characters')
      .isLength({
        max: 20
      })
      .withMessage('Password can contain max 20 characters')
  ],
  async (req, res) => {
    const { email, password } = req.body;
    // Check if user is already in the database
    let user = await User.findOne({ email });

    if (user == null) {
      return res.status(400).send('Cannot find user');
    }
    try {
      // Check if password is correct
      if (await bcrypt.compare(password, user.password)) {
        // res.redirect(303, 'http://localhost:5000/user-profile');

        // Create and assign a token
        const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);

        return res.header('auth-token', token).send(token);
      } else {
        return res.status(400).send('Invalid password');
      }
    } catch {
      return res.status(500).send({ msg: 'There was an error' });
    }
  }
);

// Logout
// @route   POST logout
// @desc    Auth user
// @access  Public
// router.post('/logout', async (req, res) => {
//   console.log("You've logged out");
//   res.status(200).send(req.body);
// });

module.exports = router;
