const mongoose = require("mongoose");
const Bar = mongoose.model("Bar");
const request = require("request");

const apiOptions = {
  server: "http://localhost:3000",
};

if (process.env.NODE_ENV === "production") {
  apiOptions.server = "https://drinkprojectwf.onrender.com";
}

const barInfo = function (req, res) {
  const path = `/api/bars/${req.params.slug}`;
  const requestOptions = {
    url: apiOptions.server + path,
    method: "GET",
    json: {},
  };

  request(requestOptions, (err, response, body) => {
    if (err) {
      console.error(err);
      res.render("error", { message: "API error", error: err });
    } else if (response.statusCode === 200) {
      // Ensure all review dates are converted to Date objects
      if (body.reviews && Array.isArray(body.reviews)) {
        body.reviews = body.reviews.map((review) => {
          return {
            ...review,
            createdOn: new Date(review.createdOn), // Convert string to Date
          };
        });
      }

      res.render("bar-info", {
        title: body.name,
        bar: body,
        googleMapsApiKey: process.env.GOOGLEMAPS_URI,
      });
    } else {
      res.render("error", { message: "API error", error: response.body });
    }
  });
};

module.exports = {
  barInfo,
};
