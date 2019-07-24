// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

// Routes
// =============================================================
module.exports = function(app) {
  // Each of the below routes just handles the HTML page that the user gets sent to.

  // ******************************************************************************************************
  app.get("/", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/inventory");
    }
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  app.get("/signup", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/inventory");
    }
    res.sendFile(path.join(__dirname, "../public/signup.html"));
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/inventory", isAuthenticated, function(req, res) {
    res.sendFile(path.join(__dirname, "../public/inventory.html"));
  });

  // brand route loads add_new_brand.html
  app.get("/low_inventory", isAuthenticated, function(req, res) {
    res.sendFile(path.join(__dirname, "../public/low_inventory.html"));
  });

  // brand route loads add_new_brand.html
  app.get("/manage-brand", isAuthenticated, function(req, res) {
    res.sendFile(path.join(__dirname, "../public/add_new_brand.html"));
  });

  // inventory route loads add_new_product.html
  app.get("/new", isAuthenticated, function(req, res) {
    res.sendFile(path.join(__dirname, "../public/add_new_product.html"));
  });

  //order route loads add-new-order.html
  app.get("/all", isAuthenticated, function(req, res) {
    res.sendFile(path.join(__dirname, "../public/orders.html"));
  });

  //order route loads place_orders.html
  app.get("/order", isAuthenticated, function(req, res) {
    res.sendFile(path.join(__dirname, "../public/place_orders.html"));
  });

  //order route loads view-order.html
  app.get("/order_details", isAuthenticated, function(req, res) {
    res.sendFile(path.join(__dirname, "../public/view-order.html"));
  });

  // index route loads index.html- login page
  app.get("/store1", isAuthenticated, function(req, res) {
    res.sendFile(path.join(__dirname, "../public/storeindex.html"));
  });
};
