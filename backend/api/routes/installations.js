const express = require("express");
const router = express.Router();
const checkAuth = require("../middleware/check-auth");
const InstallationController = require("../controllers/installations");

router.get("/count/:userId", checkAuth, InstallationController.installations_count);

router.get("/higher-cost/:userId", checkAuth, InstallationController.installations_higher_cost);

router.get("/by-month/:userId", checkAuth, InstallationController.installations_by_month);

module.exports = router;
