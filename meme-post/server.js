
// Requiring necessary npm packages
//const 
const express = require("express");
const routes = require("./routes");
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
const accounts = require("./routes/accounts.js");
// Setting up port and requiring models for syncing
const PORT = process.env.PORT || 3002;
var db = require("./models");
require("dotenv").config();
app.use(bodyParser.json());

 app.use(cors());
function shouldCompress (req, res) {
  if (req.headers['x-no-compression']) {
    // don't compress responses with this request header
    return false
  }
 
  // fallback to standard filter function
  return compression.filter(req, res)
}

app.use(routes);

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// Creating express app and configuring middleware needed for authentication
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Syncing our database and logging a message to the user upon success
mongoose.connect(process.env.MONGODB_CONNECTION_STRING, {
  useNewUrlParser: true, 
  useUnifiedTopology: true,
  useCreateIndex: true,
}, (err) => {
  if (err) throw err;
  console.log("MongoDB connection established");
}) ;
const connection = mongoose.connection;

connection.once('open', function() {
  console.log("MongoDB database connect established sucessfully");
})
app.listen(PORT, function() {
  console.log("Server is running on  " + PORT);
});
