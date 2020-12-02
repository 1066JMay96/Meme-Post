
const mongoose = require('mongoose');


const AccountSchema = mongoose.Schema({
  email: {
    type: String, 
    required: true
  },
  password: {
    type: String, 
    required: true, 
    minlength: 6
  },
  displayName: { 
    type: String 
  }
});


const Account = mongoose.model("Account", AccountSchema);

module.exports = Account;