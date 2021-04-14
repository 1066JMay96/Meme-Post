const mongoose = require("mongoose");
const CreatedMeme = require("./CreatedMeme");
const Schema = mongoose.Schema;

const likedMemeSchema = new Schema({
    currentLoggedUser: {
        type: String
    },    
    title: {
        type: String
    },
    meme: {
        type: String
    },
    user: {
        type: String
    }   
});

const LikedMeme = mongoose.model("LikedMeme", likedMemeSchema);

module.exports = LikedMeme;
