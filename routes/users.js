const express = require('express');
const router = express.Router();
const { body, check, validationResult } = require('express-validator');
// const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');
const User = require('../models/User');

// Register
router.get('/register', async (req, res) => {
  console.log('Register');
  res.status(200).send('Register');
});

// Post register form data
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
      .isLength(10)
      .withMessage('Phone number must contain 10 characters')
      .isMobilePhone()
      .withMessage('Must provide a valid phone number')
  ],
  async (req, res, next) => {
    const { email, password, password2, phone } = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    } else {
      // console.log(`Email: ${email}`);
      // console.log(`Password: ${password}`);
      // res.status(200).send('Registered');
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
// Post login form data
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  console.log(`Email: ${email}`);
  console.log(`Password: ${password}`);
  res.status(200).send('Logged in');
});

// router.post('/logout', async (req, res) => {
//   console.log("You've logged out");
//   res.status(200).send(req.body);
// });

// app.post('/login', async (req, res) => {
//   console.log("You're logged in");
//   res.status(200).send(req.body);
// });

// Logout
// app.post('/logout', async (req, res) => {
//   console.log("You've logged out");
//   res.status(200).send(req.body);
// });

module.exports = router;
