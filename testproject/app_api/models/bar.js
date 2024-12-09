const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  author: String,
  rating: {
    type: Number,
    required: true,
    min: 0,
    max: 5,
  },
  reviewText: String,
  createdOn: {
    type: Date,
    default: Date.now,
  },
});

const barSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
    unique: true,
  },
  address: String,
  rating: {
    type: Number,
    default: 0,
    min: 0,
    max: 5,
  },
  facilities: [String],
  coords: {
    type: [Number], // [Longitude, Latitude]
    index: "2dsphere",
  },
  openingTimes: [String],
  reviews: [reviewSchema],
});

// Register the model with the singular name 'Bar'
mongoose.model("Bar", barSchema);

console.log("Bar model registered");
