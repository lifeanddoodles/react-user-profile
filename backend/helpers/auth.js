const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');

dotenv.config();

module.exports = function(req, res, next) {
  const token = req.header('auth-token');
  if (!token) return res.status(401).json({ msg: 'Access Denied' });

  try {
    const verified = jwt.verify(token, process.env.TOKEN_SECRET);
    req.user = verified;
    return next();
    // if (req.isAuthenticated()) {
    //   return next();
    // }
    // res.redirect('/dashboard');
  } catch (error) {
    return res
      .status(400)
      .json({ msg: 'Invalid Token' })
      .redirect('/');
    // req.flash('error_msg', 'Please log in to view that resource');
    // res.redirect('/users/login');
  }
};
