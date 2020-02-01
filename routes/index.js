const express = require('express');
const router = express.Router();
// const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');

// Welcome Page
// router.get('/', (req, res) => res.send('welcome'));
// router.get('/', forwardAuthenticated, (req, res) => res.render('welcome'));

// Dashboard
// router.get('/user-profile', (req, res) => res.send('profile'));
// router.get('/user-profile', ensureAuthenticated, (req, res) =>
//   res.render('dashboard', {
//     user: req.user
//   })
// );

module.exports = router;
