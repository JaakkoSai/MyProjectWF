const mongoose = require("mongoose");
const Bar = mongoose.model("Bar");

const barInfo = async function (req, res) {
  try {
    console.log(`Searching for bar with slug: ${req.params.slug}`); // Debug slug
    const bar = await Bar.findOne({ slug: req.params.slug }).exec();
    if (!bar) {
      console.log("Bar not found!"); // Log if the bar is not found
      return res
        .status(404)
        .render("error", { message: "Bar not found", error: { status: 404 } });
    }
    console.log(`Found bar: ${bar.name}`); // Log if the bar is found
    res.render("bar-info", { title: bar.name, bar });
  } catch (err) {
    console.error(`Error while fetching bar: ${err}`); // Log any errors
    res
      .status(500)
      .render("error", {
        message: "An error occurred",
        error: { status: 500, stack: err.stack },
      });
  }
};

module.exports = {
  barInfo,
};
