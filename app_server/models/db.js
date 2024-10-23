const mongoose = require("mongoose");

const dbURI =
  "mongodb+srv://jsailynoja:6de9c9Y*tur9@cluster0.llt78.mongodb.net/BarProject?retryWrites=true&w=majority&appName=Cluster0";

// Connect to MongoDB
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });

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
