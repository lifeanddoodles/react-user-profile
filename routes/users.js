const express = require('express');
const router = express.Router();
// const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');

// Register
router.get('/register', async (req, res) => {
  console.log('Register');
  res.status(200).send('Register');
});

// Post register form data
// router.post('/register', async (req, res) => {
//   console.log('Register Post');
//   res.status(200).send(req.body);
// });
router.post('/register', (req, res) => res.send('Post Register'));

// Login
// Post login form data
// router.post('/login', async (req, res) => {
//   console.log("You're logged in");
//   res.status(200).send(req.body);
// });

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
