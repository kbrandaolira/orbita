const User = require("../models/user");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.users_login = (req, res, next) => {
  User.find({ email: req.body.email })
    .exec()
    .then(user => {
      if (user.length < 1) {
        return res.status(404).json({
          message: "Auth failed"
        });
      }
      bcrypt.compare(req.body.password, user[0].password, (err, match) => {
        if (err) {
          return res.status(404).json({
            message: "Auth failed"
          });
        }
        if (match) {
          var token = jwt.sign(
            {
              exp: Math.floor(Date.now() / 1000) + 60 * 60,
              userId: user[0]._id
            },
            'secret'
          );
          return res.status(200).json({
            message: "Auth successful",
            token: token,
            userId: user[0]._id
          });
        }
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });
};

exports.users_get_all = (req, res, next) => {
  User.find()
    .select("_id name password email")
    .exec()
    .then(docs => {
      res.status(200).json({
        count: docs.length,
        users: docs
      });
    })
    .catch(err => {
      res.status(500).json(err);
    });
};

exports.user_create = (req, res, next) => {
  bcrypt.hash(req.body.password, 10, (err, hash) => {
    if (err) {
      return res.status(500).json({
        error: err
      });
    } else {
      const newUser = new User({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        password: hash,
        email: req.body.email,
        state: req.body.state
      });
      newUser
        .save()
        .then(result => {
          console.log(result);
          res.status(201).json({
            message: "User created",
            userCreated: user
          });
        })
        .catch(err => {
          res.status(500).json({
            error: err
          });
        });
    }
  });
};

exports.user_delete = (req, res, next) => {
  User.remove({ _id: req.params.userId })
    .exec()
    .then(result => {
      res.status(200).json(result);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });
};
