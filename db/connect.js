const mongoose = require("mongoose");
const dotenv=require('dotenv')
dotenv.config()
const connectionString = process.env.DB_URI;

 mongoose.connect(connectionString);

const db = mongoose.connection;

db.on("error", (error) => {
  console.error("Error connecting to MongoDB:", error);
});

db.once("open", () => {
  console.log("Connected to MongoDB");
});


module.exports = {
  db,
};
