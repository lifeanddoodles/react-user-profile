const express = require('express');
const router = express.Router();

// Welcome Page
router.get('/', (req, res) => res.send('welcome'));

// Dashboard
router.get('/user-profile', (req, res) => res.send('profile'));

module.exports = router;
