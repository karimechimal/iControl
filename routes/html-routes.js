var path = require("path");

module.exports = function(app) {

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

  app.get("/inventory", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/inventory.html"));
  });

  app.get("/addProducts", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/addProducts.html"));
  });


};
