const express = require('express');
const router = express.Router();
const { body, check, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const http = require('http');

const User = require('../models/User');

// Register
router.post(
  '/register',
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
      .withMessage('Password can contain max 20 characters'),
    body('password2').custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error('Password confirmation does not match password');
      }
      // Indicates the success of this synchronous custom validator
      return true;
    }),
    check('phone', 'Phone number is required')
      .notEmpty()
      .isLength({ min: 10, max: 15 })
      .withMessage('Phone number must contain 10-15 characters')
      .isMobilePhone()
      .withMessage('Must provide a valid phone number')
  ],
  async (req, res, next) => {
    const { email, password, password2, phone } = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    } else {
      let user = await User.findOne({ email });

      if (user) {
        return res
          .status(400)
          .json({ success: false, msg: 'User already exists' });
      }

      let newUser = new User({
        email,
        password,
        phone
      });

      User.addUser(newUser, (err, user) => {
        if (err) {
          res.json({ success: false, msg: 'Failed to register user' });
        } else {
          res.json({ success: true, msg: 'User registered' });
        }
      });
    }
  }
);

// Login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  let user = await User.findOne({ email });

  if (user == null) {
    return res.status(400).send('Cannot find user');
  }
  try {
    if (await bcrypt.compare(password, user.password)) {
      res.redirect(303, 'http://localhost:5000/user-profile');
      // res.setHeader('Location', 'http://localhost:5000/user-profile');
    } else {
      res.send('Not Allowed');
    }
  } catch {
    res.status(500).send();
  }
});

// Logout
// router.post('/logout', async (req, res) => {
//   console.log("You've logged out");
//   res.status(200).send(req.body);
// });

module.exports = router;
