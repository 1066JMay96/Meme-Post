const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        min: [3]
    },
    password: {
        type: String,
        required: true,
        min: [6]
    }
});

const Users = mongoose.model("LikUsersdMeme", UserSchema);

module.exports = Users;