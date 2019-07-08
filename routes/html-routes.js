// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {
  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads index.html- login page
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  // inventory route loads inventory.html
  app.get("/inventory", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/inventory.html"));
  });

  // inventory route loads add_new_product.html
  app.get("/new", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/add_new_product.html"));
  });

  // brand route loads add_new_brand.html
  app.get("/manage-brand", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/add_new_brand.html"));
  });

  // brand route loads add_new_brand.html
  app.get("/low_inventory", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/low_inventory.html"));
  });

  //order route loads add-new-order.html
  app.get("/store", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/store.html"));
  });

  //order route loads add-new-order.html
  app.get("/all", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/orders.html"));
  });

  //order route loads view-order.html
  app.get("/order", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/place_orders.html"));
  });

   
};
