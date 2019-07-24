// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {
  app.get("/orders", function(req, res) {
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Product
    db.Order.findAll({
      //include: [db.Product]
    }).then(function(dbOrder) {
      res.json(dbOrder);
    });
  });

  app.get("/orders/:id", function(req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.Order.findOne({
      where: {
        OrderId: req.params.id
      }
      //include: [db.Product]
    }).then(function(dbOrder) {
      res.json(dbOrder);
    });
  });

  app.post("/orders", function(req, res) {
    db.Order.create(req.body).then(function(dbOrders) {
      res.json(dbOrders);
    });
  });

  app.put("/orders/:id", function(req, res) {
    db.Order.update(
      {
        OrderStatus: req.body.OrderStatus
      },
      {
        where: {
          OrderId: req.params.id
        }
      }
    ).then(function(result) {
      res.json(result);
    });
  });

  app.delete("/orders/:id", function(req, res) {
    // console.log(typeof req.params.id);
    db.Order.destroy({
      where: {
        OrderId: req.params.id
      }
    }).then(function(dbOrder) {
      res.json(dbOrder);
    });
  });
};
