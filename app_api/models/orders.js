const mongoose = require("mongoose");

const drinkSchema = new mongoose.Schema({
  name: String,
  quantity: Number,
});

const orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  bar: {
    type: String,
    required: true,
  },
  drinks: [drinkSchema],
  total: {
    type: Number,
    required: true,
  },
  orderDate: {
    type: Date,
    default: Date.now,
  },
});

mongoose.model("Order", orderSchema);
