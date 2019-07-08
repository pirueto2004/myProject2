var db = require("../models");

module.exports = function(app) {
  app.get("/brand", function(req, res) {
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Product
    db.Brand.findAll({
      //include: [db.Product]
    }).then(function(dbBrand) {
      res.json(dbBrand);
    });
  });

  app.get("/brand/:id", function(req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.Brand.findOne({
      where: {
        Id: req.params.id
      }
      //include: [db.Product]
    }).then(function(dbBrand) {
      res.json(dbBrand);
    });
  });

  app.post("/brand", function(req, res) {
    db.Brand.create({
      BrandName: req.body.BrandName // mySQL:jQuery
    }).then(function(dbBrand) {
      res.json(dbBrand);
    });
  });

  app.delete("/brand/:id", function(req, res) {
    // console.log(typeof req.params.id);
    db.Brand.destroy({
      where: {
        Id: req.params.id
      }
    }).then(function(dbBrand) {
      res.json(dbBrand);
    });
  });
};