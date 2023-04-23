const tutorials = require("../controllers/tutorial.controller");
module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

 

  // Create a new Tutorial
  app.post("/", tutorials.create);

  // Retrieve all Tutorials
  app.get("/", tutorials.findAll);

  // Retrieve all published Tutorials
  app.get("/published", tutorials.findAllPublished);

  // Retrieve a single Tutorial with id
  app.get("/:id", tutorials.findOne);

  // Update a Tutorial with id
  app.put("/:id", tutorials.update);

  // Delete a Tutorial with id
  app.delete("/:id", tutorials.delete);

  // Delete all Tutorials
  app.delete("/", tutorials.deleteAll);

};
