require("dotenv").config();
const mongoose = require("mongoose");

const dbURI = process.env.MONGODB_URI;

// Connect to MongoDB
mongoose.connect(dbURI, {});

mongoose.connection.on("connected", () => {
  console.log(`Mongoose connected to ${dbURI}`);
});

mongoose.connection.on("error", (err) => {
  console.log("Mongoose connection error:", err);
});

mongoose.connection.on("disconnected", () => {
  console.log("Mongoose disconnected");
});

// Import models (make sure the paths are correct)
require("./bar"); // Ensure this is the correct path
require("./orders");
