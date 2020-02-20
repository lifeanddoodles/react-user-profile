const express = require('express');
const router = express.Router();
const { body, check, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const verify = require('../helpers/auth');

const User = require('../models/User');

// Register
// @route   POST register
// @desc    Register new user
// @access  Public
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
      // Check if user is already in the database
      let user = await User.findOne({ email });

      if (user) {
        return res
          .status(400)
          .json({ success: false, msg: 'User already exists' });
      }

      // Create a new user
      let newUser = new User({
        email,
        password,
        phone
      });

      User.addUser(newUser, (err, user) => {
        if (err) {
          res.json({ success: false, msg: 'Failed to register user' });
        } else {
          const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
          console.log(token);
          res.header('auth-token', token).send(token);
          res.json({
            success: true,
            msg: 'User registered',
            token: `Bearer ${token}`,
            user: {
              id: user._id,
              email: user.email
            }
          });
        }
      });
    }
  }
);

// Get User
// @route   GET users/user
// @desc    Get user data
// @access  Private
router.get('/user', verify, async (req, res) => {
  // Check if user is already in the database
  let user = await User.findById(req.user._id)
    .select('-password')
    .then(user => res.json(user));

  if (user == null) {
    return res.status(400).json({ msg: 'Cannot find user' });
  }
  return res.json({ success: true, msg: 'User found', user: user });
});

module.exports = router;
