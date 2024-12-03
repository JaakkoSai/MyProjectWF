const showLogin = function (req, res) {
  res.render("login", { title: "Login to Drink Order" });
};

const showRegister = function (req, res) {
  res.render("register", { title: "Register for Drink Order" });
};

module.exports = { showLogin, showRegister };
