const bcrypt = require('bcryptjs');

const Users = require('../users/users-model.js');

module.exports = (req, res, next) => {
  try{
    //if this throws, please don't crash my app
    if(req && req.session && req.session.user) {
      next();
    } else {
      res.status(401).json({ messgae: "Invalid Credentials" })
    }
  } catch (error) {
    res.status(500).json({ message: 'You broke it!' })
  }
}





  

