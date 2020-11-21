const mongoose = require("mongoose");

const createdMemeSchema = mongoose.Schema({
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
        type: Text
    },
    bottomText: {
        type: Text
    }
});

const CreatedMeme = mongoose.model("CreatedMeme", createdMemeSchema);

module.exports = CreatedMeme;