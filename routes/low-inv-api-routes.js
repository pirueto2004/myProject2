// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");
const Op = require("Sequelize").Op;
// var lte = $("#lessThenEquelTo").val();
//const { lte } = require("../public/js/low.js");

// Routes
// =============================================================
module.exports = function(app) {
  // GET route for getting all of the posts
  app.get("/low/:lte", function(req, res) {
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Product
    db.Product.findAll({
      where: {
        // ProductId: 1
        //See units which are less then equal to the given number
        //Units: { [Op.lte]: [100] }
        Units: { [Op.lte]: [parseInt(req.params.lte)] }
      }
      // include: [db.Products]
    }).then(function(dbProducts) {
      res.json(dbProducts);
    });
  });
};