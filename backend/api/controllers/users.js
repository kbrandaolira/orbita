const User = require("../models/user")
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

exports.users_get_all = (req,res,next) => {
    User.find()
    .select("_id name password email")
    .exec()
    .then(docs => {
        res.status(200).json({
            count: docs.length,
            users: docs
        });
    })
    .catch(err =>{
        res.status(500).json(err);
    });
}

exports.user_create = (req,res,next) => {
    bcrypt.hash(req.body.password, 10, (err, hash)=>{
        if(err){
            return res.status(500).json({
                error: err
            })
        } else {
            // save in database 
            const newUser = new User({
                _id: new mongoose.Types.ObjectId(),
                name: req.body.name,
                password: hash,
                email: req.body.email,
                state: req.body.state
            });
            newUser.save()
            .then(result=>{
                console.log(result);
                res.status(201).json({
                    message: "User created",
                    userCreated: user
                })
            }) 
            .catch(err =>{
                res.status(500).json({
                    error: err
                })
            });
        }
    });
}

exports.user_delete = (req,res,next) => {
    User.remove({_id: req.params.userId})
        .exec()
        .then(result => {
            res.status(200).json(result);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({error: err});
        });
}