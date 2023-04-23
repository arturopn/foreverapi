const db = require("../models");
const Note = db.notes;
const Op = db.Sequelize.Op;

// Create and Save a new note
exports.create = (req, res) => {
  // Validate request
  if (!req.body.number) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a note
  const note = {
    number: req.body.number,
    contact: req.body.contact,
    phase: req.body.phase,
    perceantge: req.body.perceantge,
    missingPayment: req.body.missingPayment,
    totalPayment: req.body.totalPayment,
    branch: req.body.branch,
    monthlyPayment: req.body.monthlyPayment,
    consultant: req.body.consultant,
    coupleName: req.body.coupleName,
    phone: req.body.phone,
  };

  // Save note in the database
  Note.create(note)
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while creating the note."
    });
  });
};

// Retrieve all notes from the database.
exports.findAll = (req, res) => {
  const number = req.query.number;
  var condition = number ? { number: { [Op.like]: `%${number}%` } } : null;

  Note.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving notes."
      });
    });
};

// Find a single note with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Note.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find note with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving note with id=" + id
      });
    });
};

// Update a note by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Note.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "note was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update note with id=${id}. Maybe note was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating note with id=" + id
      });
    });
};

// Delete a note with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Note.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "note was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete note with id=${id}. Maybe note was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete note with id=" + id
      });
    });
};

// Delete all notes from the database.
exports.deleteAll = (req, res) => {
  Note.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} notes were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all notes."
      });
    });
};

