// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {
  app.get("/users", function(req, res) {
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Product
    db.User.findAll({
      //include: [db.Product]
    }).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  // New User route for saving a new user
  app.post("/users", function(req, res) {
    db.User.create(req.body).then(function(dbUsers) {
      res.json(dbUsers);
    });
  });
};
