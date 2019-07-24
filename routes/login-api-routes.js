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

    //   app.get("/orders/:id", function(req, res) {
    //     // Here we add an "include" property to our options in our findOne query
    //     // We set the value to an array of the models we want to include in a left outer join
    //     // In this case, just db.Post
    //     db.Order.findOne({
    //       where: {
    //         OrderId: req.params.id
    //       }
    //       //include: [db.Product]
    //     }).then(function(dbOrder) {
    //       res.json(dbOrder);
    //     });
    //   });

    //   app.post("/users", function(req, res) {
    //     db.User.create({
    //       id: req.body.id // mySQL:jQuery
    //     }).then(function(dbUser) {
    //       res.json(dbUser);
    //     });
    //   });

  // New Product route for saving a new product
  app.post("/users", function(req, res) {
    db.User.create(req.body).then(function(dbUsers) {
      res.json(dbUsers);
    });
  });

  //   app.delete("/orders/:id", function(req, res) {
  //     // console.log(typeof req.params.id);
  //     db.Order.destroy({
  //       where: {
  //         OrderId: req.params.id
  //       }
  //     }).then(function(dbOrder) {
  //       res.json(dbOrder);
  //     });
  //   });
};
