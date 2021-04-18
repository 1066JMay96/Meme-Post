const mongoose = require("mongoose");
const CreatedMeme = require("./CreatedMeme");
const Schema = mongoose.Schema;

const likedMemeSchema = new Schema({
    currentLoggedUser: {
        type: String,
        required: true 
    },   
    title: {
        type: String,
        required: false,
        min: [1]
    },
    meme: {
        type: String,
        required: false
    },
    user: {
        type: String,
        required: false
    }        
});

const LikedMeme = mongoose.model("LikedMeme", likedMemeSchema);

module.exports = LikedMeme;
