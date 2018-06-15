const User = require('../models/userModels');
const bcrypt = require('bcrypt');

const createUser = (req, res) => {
  const { username, password } = req.body;
  // create user takes in the username and password and saves a user.
  // our pre save hook should kick in here saving this user to the DB with an encrypted password.
  User.create({ username, password })
    .then(({ username }) => res.status(201).json({username}))
    .catch(err => {
      res.status(500).json({error: "error creating user", err: err.message })
    })
};

module.exports = {
  createUser
};
