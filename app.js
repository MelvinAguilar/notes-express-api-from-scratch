var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

const cors = require("cors");

// Import the mongoose configuration from the config folder
const mongoose = require("./config/mongoose");

// Require the index.router.js file that contains all the routes for the API
const indexRouter = require("./routes/api/index.router");

var app = express();

// Connect to the MongoDB database using the configuration settings
mongoose.connectDB();

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// Define the route for the API and use the indexRouter
app.use("/api", indexRouter);

module.exports = app;
