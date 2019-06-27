const Installation = require("../models/installation")
const mongoose = require("mongoose");

exports.installations_get_all = (req,res,next) => {
    Installation.find()
    .select("_id dataProvider systemSize installationDate zipCode state cost")
    .exec()
    .then(docs => {
        res.status(200).json({
            count: docs.length,
            installations: docs
        });
    })
    .catch(err =>{
        res.status(500).json(err);
    });
}

exports.installations_higher_cost = (req,res,next) => {
    Installation.find()
    .select("cost")
    .sort({"cost": -1})
    .limit(1)
    .exec()
    .then(docs => {
        res.status(200).json({
            installation: docs[0]
        });
    })
    .catch(err =>{
        res.status(500).json(err);
    });
}