const mongoose = require('mongoose');
const Account = mongoose.Schema({
  email: {type: String, required: true},
  password: {type: String, required: true, minlength: 6},
  displayName: { type: String },
});


module.exports = mongoose.model("Account", Account);