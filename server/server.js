//___________________
// Dependencies
//___________________
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const MONGODB_URI = "mongodb://192.168.0.105:27017/midlands-packaging";
const whitelist = ["http://localhost:3000", "http://localhost:3500"];
const corsOption = {
  origin: whitelist,
};


//___________________
// Port
//___________________
const PORT = 3500;

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
});
// Executed once we establish connection with our mongodb //
mongoose.connection.once("open", () => {
  console.log("Connected to Mongoose DB");
});
// Executed when we encounter any issue connecting with mongodb //
mongoose.connection.on("error", () => {
  console.log("Error connecting to your database");
});

// Executed when we disconnected from mongodb //
mongoose.connection.on("disconnected", () => {
  console.log("Mongo DB Disconnected");
});



//___________________
// Middleware
//___________________
app.use(cors());
app.use(cors(corsOption));
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));


// Make the app listen on PORT //
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
