const db = require("../models");

//Defining methods for createdMemesController

module.exports = {
    findAll: function(req, res) {
        db.CreatedMeme
            .find(req.query)
            .sort( {date: -1})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.ststus(422).json(err));
    },
    findById: function(req, res) {
        db.CreatedMeme
          .findById(req.params.id)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },
      create: function(req, res) {
        console.log(req.body);
        db.CreatedMeme
          .create(req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },
      update: function(req, res) {
        db.CreatedMeme
          .findOneAndUpdate({ _id: req.params.id }, req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },
      remove: function(req, res) {
        db.CreatedMeme
          .findById({ _id: req.params.id })
          .then(dbModel => dbModel.remove())
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      }
}