const db = require("../models");

//Defining methods for accountController

module.exports = {
    //Find all accounts
    findAccount: function(req, res) {
        db.Account
            .find(req.query)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.ststus(422).json(err));
    },
    //Find specific account
    findById: function(req, res) {
        db.Account
          .findById(req.params.id)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },
      //Update acccount 
      update: function(req, res) {
        db.Account
          .findOneAndUpdate({ _id: req.params.id }, req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },
      //delete an account
      remove: function(req, res) {
        db.Account
          .findById({ _id: req.params.id })
          .then(dbModel => dbModel.remove())
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      }
}