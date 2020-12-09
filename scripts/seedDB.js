const mongoose = require("mongoose");

const CreatedMeme = require("../models/CreatedMeme.js")
const LikedMeme = require("../models/LikedMeme.js");

mongoose.connect( process.env.MONGODB_URI || 'mongodb+srv://MuhammedEkinci:*Tbn58kpm@cluster0.e9fkz.mongodb.net/memepost_db?retryWrites=true&w=majority', {
    useNewUrlParser: true
})

memes = [
    {
        title: "Meme1",
        meme: "https://i.imgflip.com/4pn667.jpg",
        user: "testing34@gmail.com"
    },
    {
        title: "Meme2",
        meme: "https://i.imgflip.com/4pn667.jpg",
        user: "blah@blah.com"
    },
    {
        title: "Meme3",
        meme: "https://i.imgflip.com/4pn667.jpg",
        user: "dontknow@ez.com"
    }
];

CreatedMeme.collection
    .insertMany(memes)
    .then((MemePost) => {
        console.log(MemePost);
    })
    .catch(({message}) => {
        console.log(message)
    });

// Seed Cart from models/cart.js
LikedMeme.collection
  .insertOne({})
  .then((MemePost) => {
    console.log(MemePost);
  })
  .catch(({ message }) => {
    console.log(message);
  });