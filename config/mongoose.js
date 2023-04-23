const mongoose = require("mongoose");

const dbhost = process.env.DBHOST || "localhost";
const dbport = process.env.DBPORT || "27017";
const dbname = process.env.DBNAME || "myapp";
const debug = require("debug")("myapp:server");

const dburi = process.env.DBURI || `mongodb://${dbhost}:${dbport}/${dbname}`;

const connectDB = async () => {
  try {
    await mongoose.connect(dburi, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    debug("Connected to MongoDB database!");
  } catch (err) {
    debug(`Error connecting to MongoDB: ${err}`);
  }
};

module.exports = { connectDB };
