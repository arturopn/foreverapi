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
  app.post("/api/notes", notes.create);

  // Retrieve all notes
  app.get("/api/notes", notes.findAll);

  // Retrieve a single note with id
  app.get("/api/notes/:id", notes.findOne);

  // Update a note with id
  app.put("/api/notes/:id", notes.update);

  // Delete a note with id
  app.delete("/api/notes/:id", notes.delete);

  // Delete all notes
  app.delete("/api/notes", notes.deleteAll);
};
