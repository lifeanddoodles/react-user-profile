const express = require('express');
const router = express.Router();
// const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');

// Register
router.get('/register', async (req, res) => {
  console.log('Register');
  res.status(200).send('Register');
});

// Post register form data
router.post('/register', async (req, res) => {
  const { email, password, password2 } = req.body;
  if (!email || !password) {
    res.status(400).send('All fields required');
  }
  console.log(`Email: ${email}`);
  console.log(`Password: ${password}`);
  res.status(200).send('POST success');
});

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
