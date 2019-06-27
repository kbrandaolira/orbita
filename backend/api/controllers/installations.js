const Installation = require("../models/installation")
const mongoose = require("mongoose");
const InstallationsByMonthDTO = require('../dto/InstallationsByMonthDTO')

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
    .select("cost zipCode")
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

exports.installations_by_month = (req,res,next) => {
    Installation.find()
    .sort({"installationDate": 1})
    .exec()
    .then(docs => {
        console.log("a");
        january = new InstallationsByMonthDTO('january', 0); 
        february = new InstallationsByMonthDTO('february', 0); 
        march = new InstallationsByMonthDTO('march', 0); 
        april = new InstallationsByMonthDTO('april', 0); 
        may = new InstallationsByMonthDTO('may', 0); 
        june = new InstallationsByMonthDTO('june', 0); 
        july = new InstallationsByMonthDTO('july', 0); 
        august = new InstallationsByMonthDTO('august', 0); 
        september = new InstallationsByMonthDTO('september', 0); 
        october = new InstallationsByMonthDTO('october', 0); 
        november = new InstallationsByMonthDTO('november', 0); 
        december = new InstallationsByMonthDTO('december', 0);
        console.log("b");
        for( i=0; i<docs.length; i++ ){
            if( docs[i].installationDate.getMonth() == 0) {
                january.add();
            } else if( docs[i].installationDate.getMonth() == 1) {
                february.add();
            } else if( docs[i].installationDate.getMonth() == 2) {
                march.add();
            } else if( docs[i].installationDate.getMonth() == 3) {
                april.add();
            } else if( docs[i].installationDate.getMonth() == 4) {
                may.add();
            } else if( docs[i].installationDate.getMonth() == 5) {
                june.add();
            } else if( docs[i].installationDate.getMonth() == 6) {
                july.add();
            } else if( docs[i].installationDate.getMonth() == 7) {
                august.add();
            } else if( docs[i].installationDate.getMonth() == 8) {
                september.add();
            } else if( docs[i].installationDate.getMonth() == 9) {
                october.add();
            } else if( docs[i].installationDate.getMonth() == 10) {
                november.add();
            } else if( docs[i].installationDate.getMonth() == 11) {
                december.add();
            }
        }

        months = [january,february,march,april,may,june,july,august,september,october,november,december];

        res.status(200).json({
            months: months
        });
    })
    .catch(err =>{
        res.status(500).json(err);
    });
}