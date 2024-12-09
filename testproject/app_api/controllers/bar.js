const mongoose = require("mongoose");
const Bar = mongoose.model("Bar");
const request = require("request");

const getBars = async (req, res) => {
  try {
    const bars = await Bar.find();
    res.status(200).json(bars);
  } catch (err) {
    res.status(500).json({ message: "Error fetching bars", error: err });
  }
};

const getBarBySlug = async (req, res) => {
  try {
    const bar = await Bar.findOne({ slug: req.params.slug });
    if (!bar) return res.status(404).json({ message: "Bar not found" });
    res.status(200).json(bar);
  } catch (err) {
    res.status(500).json({ message: "Error fetching bar", error: err });
  }
};

const createBar = async (req, res) => {
  try {
    const newBar = new Bar(req.body);
    await newBar.save();
    res.status(201).json(newBar);
  } catch (err) {
    res.status(400).json({ message: "Error creating bar", error: err });
  }
};

module.exports = { getBars, getBarBySlug, createBar };
