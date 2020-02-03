const jwt = require('jsonwebtoken');

module.exports = function(req, res, next) {
  const token = req.header('auth-token');
  if (!token) return res.status(401).send('Access Denied');

  try {
    const verified = jwt.verify(token, process.env.TOKEN_SECRET);
    req.user = verified.user;
    // console.log(token);
    // console.log(process.env.TOKEN_SECRET);
    return next();
    // if (req.isAuthenticated()) {
    //   return next();
    // }
    // res.redirect('/dashboard');
  } catch (error) {
    return res.status(400).send('Invalid Token');
    // req.flash('error_msg', 'Please log in to view that resource');
    // res.redirect('/users/login');
  }
};
