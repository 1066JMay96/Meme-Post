
// Requiring necessary npm packages
const compression = require("compression");
const express = require("express");
const mongoose = require("mongoose");
const {resolve} = require("path");
const CreatedMeme = require("./models/CreatedMeme.js");
const LikedMeme = require("./models/LikedMeme.js");

const app = express();

// Setting up port and requiring models for syncing
const PORT = process.env.PORT || 3001;

app.use(compression({ filter: shouldCompress }))
 
function shouldCompress (req, res) {
  if (req.headers['x-no-compression']) {
    // don't compress responses with this request header
    return false
  }
 
  // fallback to standard filter function
  return compression.filter(req, res)
}


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb+srv://MuhammedEkinci:*Tbn58kpm@cluster0.e9fkz.mongodb.net/memepost_db?retryWrites=true&w=majority', 
  {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    }
  );

// Creating express app and configuring middleware needed for authentication
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Start the API server
app.listen(PORT, function() {
  console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
});

//Get memes from Database to homepage
app.get("/api/createdMeme", (req, res) => {
  console.log("route hit!!");
  CreatedMeme.find({} , (error, data) => {
    console.log(data)
    if(error) {
      res.send(error)
    } else {
      res.json(data)
    }
  });
});

//post memes into Database
app.post("/api/createdMeme", (req, res) => {
  console.log("You just saved a meme!!!");
  CreatedMeme.create(req.body).then((error, data) => {
    console.log("save meme SUCCESS!!!!" + data);
    if(error) {
      res.send(error)
    } else {
      console.log(data)
      res.json(data);
    }
  });
});

//Get memes from Database to likedpage
app.get("/api/likedMeme", (req, res) => {
  console.log("route hit!!");
  LikedMeme.find({} , (error, data) => {
    console.log(data)
    if(error) {
      res.send(error)
    } else {
      res.json(data)
    }
  });
});

//post memes into LikedMeme Database
app.post("/api/likedMeme", (req, res) => {
  console.log("You just saved a meme!!!");
  LikedMeme.create(req.body).then((error, data) => {
    console.log("save meme SUCCESS!!!!" + data);
    if(error) {
      res.send(error)
    } else {
      console.log(data)
      res.json(data);
    }
  });
});

//delete liked meme from LikedMeme database
app.delete("/api/likedMeme/:id", (req, res) => {
  LikedMeme.deleteOne({_id: req.params.id}, (err, data) => {
    if(err) {
      res.send(err);
    } else {
      console.log(data)
      res.json(data);
    }
  });
});
