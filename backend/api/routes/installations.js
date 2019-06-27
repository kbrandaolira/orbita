const express = require("express");
const router = express.Router();
//const checkAuth = require("../middleware/check-auth");
const InstallationController = require("../controllers/installations");

// Handle incoming GET requests to /orders
//router.get("/", checkAuth, InstallationController.some_method);

router.get("/count", InstallationController.installations_count);

router.get("/higher-cost", InstallationController.installations_higher_cost);

router.get("/by-month", InstallationController.installations_by_month);

module.exports = router;