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
    topText: {
        type: String
    },
    bottomText: {
        type: String
    }
});

const LikedMeme = mongoose.model("LikedMeme", likedMemeSchema);

module.exports = LikedMeme;
