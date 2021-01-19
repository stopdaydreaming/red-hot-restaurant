var path = require("path");

module.exports = function(app) {
  //HTML ROUTES
  //ROUTE FOR TABLES
  app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "./public/tables.html"));
  });
  //ROUTES FOR RESERVE
  app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "./public/reserve.html"));
  });
  //If not matching route is found default to home
  //ROUTE FOR HOME
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "./public/home.html"));
  });
};
