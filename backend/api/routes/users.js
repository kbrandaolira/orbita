const express = require("express");
const router = express.Router();
const UserController = require("../controllers/users");

// Handle incoming GET requests to /orders
router.post("/login", UserController.users_login);

router.get("/", UserController.users_get_all);

router.post("/", UserController.user_create);

router.delete("/:userId", UserController.user_delete);

module.exports = router;
