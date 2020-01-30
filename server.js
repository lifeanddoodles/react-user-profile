const express = require('express');

const app = express();
const port = process.env.PORT || 5000;

// Middleware

// Routes
app.get('/user-profile', function(req, res) {
  res.send(data);
});

app.listen(port, () => console.log(`Server started on port ${port}`));
