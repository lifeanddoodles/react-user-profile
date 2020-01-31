const express = require('express');
const User = require('./models/User');
const path = require('path');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 5000;

dotenv.config();

// Connect to DB
mongoose.connect(
  process.env.DB_CONNECT,
  { useUnifiedTopology: true, useNewUrlParser: true },
  () => console.log('Connected to database')
);

// Middleware

// Routes
app.use('/', require('./routes/index.js'));

app.use(express.static(path.join(__dirname, 'dist')));

app.use((req, res) => {
  res.status(200).sendFile(path.join(__dirname, 'dist/index.html'));
});

app.listen(port, () => console.log(`Server started on port ${port}`));
