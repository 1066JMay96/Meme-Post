
const express = require('express');
const mongoose = require("mongoose");
const cors = require("cors")
//const routes = require("./routes/index.js")
const routes = require("./routes");
require("dotenv").config();
const bodyParser = require('body-parser');
const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(bodyParser.json());
const PORT = process.env.PORT || 4001;
var db = require("./models")
app.use(routes);

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}
// Creating express app and configuring middleware needed for authentication
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

app.listen(PORT, () => console.log(`The server has started on port: ${PORT}`));