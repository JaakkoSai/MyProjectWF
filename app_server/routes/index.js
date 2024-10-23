const express = require("express");
const router = express.Router();

const ctrlOrders = require("../controllers/orders");
const ctrlOthers = require("../controllers/others");
const ctrlUsers = require("../controllers/users");
const ctrlBars = require("../controllers/bar");

/* Orders pages */
router.get("/", ctrlOrders.orderList);
router.get("/order", ctrlOrders.orderDetails);

/* User pages */
router.get("/login", ctrlUsers.showLogin);
router.get("/register", ctrlUsers.showRegister);

/* Other pages */
router.get("/about", ctrlOthers.about);

/* Info pages */
router.get(
  "/bar/:slug",
  (req, res, next) => {
    console.log(`Received slug: ${req.params.slug}`); // Add this to debug the slug
    next();
  },
  ctrlBars.barInfo
);

module.exports = router;
