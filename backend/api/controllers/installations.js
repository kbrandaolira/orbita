const Installation = require("../models/installation");
const mongoose = require("mongoose");
const InstallationsByMonthDTO = require("../dto/InstallationsByMonthDTO");

exports.installations_count = (req, res, next) => {
  Installation.find()
    .count()
    .exec()
    .then(result => {
      res.status(200).json({
        count: result
      });
    })
    .catch(err => {
      res.status(500).json(err);
    });
};

exports.installations_higher_cost = (req, res, next) => {
  Installation.find()
    .select("cost zipCode")
    .sort({ cost: -1 })
    .limit(1)
    .exec()
    .then(docs => {
      res.status(200).json({
        installation: docs[0]
      });
    })
    .catch(err => {
      res.status(500).json(err);
    });
};

exports.installations_by_month = (req, res, next) => {
  Installation.find()
    .exec()
    .then(docs => {
      january = new InstallationsByMonthDTO("january", 0);
      february = new InstallationsByMonthDTO("february", 0);
      march = new InstallationsByMonthDTO("march", 0);
      april = new InstallationsByMonthDTO("april", 0);
      may = new InstallationsByMonthDTO("may", 0);
      june = new InstallationsByMonthDTO("june", 0);
      july = new InstallationsByMonthDTO("july", 0);
      august = new InstallationsByMonthDTO("august", 0);
      september = new InstallationsByMonthDTO("september", 0);
      october = new InstallationsByMonthDTO("october", 0);
      november = new InstallationsByMonthDTO("november", 0);
      december = new InstallationsByMonthDTO("december", 0);

      for (i = 0; i < docs.length; i++) {
        let arr = docs[i].installationDate.split("/");

        if (arr[0] == 1) {
          january.add();
        } else if (arr[0] == 2) {
          february.add();
        } else if (arr[0] == 3) {
          march.add();
        } else if (arr[0] == 4) {
          april.add();
        } else if (arr[0] == 5) {
          may.add();
        } else if (arr[0] == 6) {
          june.add();
        } else if (arr[0] == 7) {
          july.add();
        } else if (arr[0] == 8) {
          august.add();
        } else if (arr[0] == 9) {
          september.add();
        } else if (arr[0] == 10) {
          october.add();
        } else if (arr[0] == 11) {
          november.add();
        } else if (arr[0] == 12) {
          december.add();
        }
      }

      months = [
        january,
        february,
        march,
        april,
        may,
        june,
        july,
        august,
        september,
        october,
        november,
        december
      ];

      res.status(200).json({
        months: months
      });
    })
    .catch(err => {
      res.status(500).json(err);
    });
};
