const User = require('../models/userModels');
const bcrypt = require('bcrypt');

const createUser = (req, res) => {
  const {username} = req.body
  const {user} = req;
  // there should be a user object set on req
  // use that req.user object to create a user and save it to our Mongo instance.
  const newUser = User.create({
    username,
    password: user
  })
    .then(result => {
      res.status(200).json(result);
    })
    .catch(error => {
      res.status(400).json({error:'User could not be created'});
    })
};

module.exports = {
  createUser
};
