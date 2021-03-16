const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const likedMemeSchema = new Schema({
    title: {
        type: String,
        required: true,
        min: [1]
    },
    meme: {
        type: String,
        required: true
    },
    user: {
        type:String,
        required: true
    },
    currentUser: {
        type:String,
        required: false
    }
});

const LikedMeme = mongoose.model("LikedMeme", likedMemeSchema);

module.exports = LikedMeme;
