const notes = require("../controllers/note.controller");
module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

 

  // Create a new note
  app.post("https://foreverapi-production.up.railway.app/api/notes", notes.create);

  // Retrieve all notes
  app.get("/", notes.findAll);

  // Retrieve a single note with id
  app.get("/:id", notes.findOne);

  // Update a note with id
  app.put("/:id", notes.update);

  // Delete a note with id
  app.delete("/:id", notes.delete);

  // Delete all notes
  app.delete("/", notes.deleteAll);
};
