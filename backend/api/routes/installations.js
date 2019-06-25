const express = require("express");
const router = express.Router();
const checkAuth = require("../middleware/check-auth");
const InstallationController = require("../controllers/installations");

// Handle incoming GET requests to /orders
//router.get("/", checkAuth, InstallationController.some_method);

module.exports = router;