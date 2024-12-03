const express = require("express");
const router = express.Router();
const ctrlBars = require("../controllers/bar");
const ctrlOrders = require("../controllers/orders");
const ctrlUsers = require("../controllers/users");

// Bar routes
router.route("/bars").get(ctrlBars.getBars).post(ctrlBars.createBar);
router.route("/bars/:slug").get(ctrlBars.getBarBySlug);

// Order routes
router.route("/orders").get(ctrlOrders.getOrders).post(ctrlOrders.createOrder);

router.route("/users/register").post(ctrlUsers.registerUser);
router.route("/users/login").post(ctrlUsers.loginUser);

module.exports = router;
