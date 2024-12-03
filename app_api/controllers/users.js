const mongoose = require("mongoose");
const User = mongoose.model("User");

// Register a new user
const registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newUser = new User({ username, email, password });
    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    if (err.name === "ValidationError") {
      res.status(400).json({ message: "Validation error", errors: err.errors });
    } else if (err.code === 11000) {
      res.status(400).json({ message: "Email or username already exists" });
    } else {
      res.status(500).json({ message: "Error registering user", error: err });
    }
  }
};

// Log in a user
const loginUser = async (req, res) => {
  try {
    const { usernameOrEmail, password } = req.body;

    if (!usernameOrEmail || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const user = await User.findOne({
      $or: [{ username: usernameOrEmail }, { email: usernameOrEmail }],
    });

    if (!user || !(await user.validatePassword(password))) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    res.status(200).json({ message: "Login successful" });
  } catch (err) {
    res.status(500).json({ message: "Error logging in", error: err });
  }
};

module.exports = { registerUser, loginUser };
