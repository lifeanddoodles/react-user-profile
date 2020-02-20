const express = require('express');
const compression = require('compression');
const path = require('path');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const passport = require('passport');
const cors = require('cors');
const User = require('./backend/models/User');

const app = express();
const port = process.env.PORT || 5000;

dotenv.config();

// Passport Config
// require('./config/passport')(passport);

// Connect to DB
mongoose.connect(
  process.env.DB_CONNECT,
  { useUnifiedTopology: true, useNewUrlParser: true },
  () => console.log('Connected to database')
);

// Middleware
// Support post requests with body data
app.use(express.json());

// Support CORS
app.use(cors());

// Support Gzip
app.use(compression());

// Routes
app.use('/', require('./backend/routes/index.js'));
app.use('/users', require('./backend/routes/users.js'));
app.use('/users', require('./backend/routes/auth.js'));

// Serve static assets if in production
// if (process.env.NODE_ENV === 'production') {
//   // Set static folder
//   app.use(express.static('client/build'));

//   app.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
//   });
// }
app.use(express.static(path.join(__dirname, 'dist')));

app.use((req, res) => {
  res.status(200).sendFile(path.join(__dirname, 'dist/index.html'));
});

app.listen(port, () => console.log(`Server started on port ${port}`));
