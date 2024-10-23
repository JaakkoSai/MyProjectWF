const orderList = function (req, res) {
  res.render("orders-list", {
    title: "Drink Order - View Your Orders",
    pageHeader: {
      title: "Drink Order",
      strapline:
        "Order drinks from local bars and have them delivered to your home!",
    },
    sidebar:
      "Looking to order drinks from local bars? Our service delivers them right to your doorstep. View your past orders here!",
    orders: [
      {
        bar: "The Green Tavern",
        slug: "the-green-tavern", // Ensure slug is passed here
        drinks: ["Whiskey Sour", "Martini"],
        total: "€25",
        date: "12 Oct 2024",
      },
      {
        bar: "The Red Lion",
        slug: "the-red-lion", // Ensure slug is passed here
        drinks: ["Beer", "Wine"],
        total: "€15",
        date: "10 Oct 2024",
      },
    ],
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
