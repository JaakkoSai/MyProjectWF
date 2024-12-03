const mongoose = require("mongoose");
const Order = mongoose.model("Order");
const request = require("request");

const getOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate("user");
    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json({ message: "Error fetching orders", error: err });
  }
};

const createOrder = async (req, res) => {
  try {
    const newOrder = new Order(req.body);
    await newOrder.save();
    res.status(201).json(newOrder);
  } catch (err) {
    res.status(400).json({ message: "Error creating order", error: err });
  }
};

module.exports = { getOrders, createOrder };
