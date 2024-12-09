const request = require("request");
const apiOptions = {
  server: "http://localhost:3000",
};

if (process.env.NODE_ENV === "production") {
  apiOptions.server = "https://drinkprojectwf.onrender.com";
}

const orderList = function (req, res) {
  const path = "/api/orders";
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
      res.render("orders-list", {
        title: "Drink Order - View Your Orders",
        pageHeader: {
          title: "Drink Order",
          strapline:
            "Order drinks from local bars and have them delivered to your home!",
        },
        sidebar:
          "Looking to order drinks from local bars? Our service delivers them right to your doorstep. View your past orders here!",
        orders: body, // Use the API response body
      });
    } else {
      res.render("error", { message: "API error", error: response.body });
    }
  });
};

/* GET 'Order details' page */
const orderDetails = function (req, res) {
  res.render("order-info", { title: "Order Details" });
};

module.exports = {
  orderList,
  orderDetails,
};
