
// Requiring necessary npm packages
const compression = require("compression");
const express = require("express");
const mongoose = require("mongoose");
const {resolve} = require("path");
const CreatedMeme = require("./models/CreatedMeme.js");
const SavedMeme = require("./models/SavedMeme.js");

const app = express();

// Setting up port and requiring models for syncing
const PORT = process.env.PORT || 8008;

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
  //console.log("route hit!!");
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
  console.log("You just made a meme!!!");
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

//Get memes from Database to likedpage depending on what memes the current user saved
app.get("/api/savedMeme", (req, res) => {
  SavedMeme.find({}).then((error, memes) => {
    if(error) {
      res.send(error)
    } else {
      res.json(memes);
    }
  });
});

//post memes into LikedMeme Database
// app.post("/api/likedMeme", (req, res) => {
//   console.log("post route hit");
//   SavedMeme.create(req.body).then((error, data) => {
//     if(error) {
//       res.send(error)
//     } else {
//       res.json(data);
//     }
//   });
// });

//Get all saved memes that the current logged in user saved
app.post("/api/savedMeme", (req, res) => {
  SavedMeme.findOneAndUpdate({currentLoggedUser: req.body.currentLoggedUser}, {$push:{memesSaved: req.body}}).then(user => {
    
    //if there is no user with that name in database then create a new user
    if(!user){
      console.log("User Not Found!");
      const newUser = new SavedMeme({
        currentLoggedUser: req.body.currentLoggedUser,
        memesSaved: [
          {
            title: req.body.title,
            meme: req.body.meme,
            user: req.body.user
          }
        ]
      });
      newUser.save()
      .then(x =>res.json(x))
      .catch(err => console.log(err));
    }
    //if there is already a person with this logged in name 
    //then just update the memesSaved array and push the new meme   
    else {
      console.log("User Found!!");
      // SavedMeme.memesSaved.push(user);
      // SavedMeme.save()
      // .then((meme) => res.json(meme))
      // .catch(err => console.log(err));
    }
  })
})

//delete liked meme from LikedMeme database
app.delete("/api/savedMeme/:id", (req, res) => {
  SavedMeme.deleteOne({_id: req.params.id}, (err, data) => {
    if(err) {
      res.send(err);
    } else {
      res.json(data);
    }
  });
});
