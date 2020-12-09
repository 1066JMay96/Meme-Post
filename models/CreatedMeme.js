const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const createdMemeSchema = new Schema({
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
    }
});


const CreatedMeme = mongoose.model("CreatedMeme", createdMemeSchema);

module.exports = CreatedMeme;