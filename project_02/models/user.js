// Import mongoose library to define schema and create model
const mongoose = require("mongoose");

// -------------------- USER SCHEMA --------------------
// Schema defines the structure and validation rules
// for documents stored in the MongoDB collection
const userSchema = new mongoose.Schema({
  // 'name' field for each user document
  name: {
    type: String,        // Value must be a string
    required: true       // Field is mandatory (cannot be missing)
  }
});

// -------------------- USER MODEL --------------------
// Model connects the schema to a MongoDB collection
// "User" is the model name
// MongoDB will automatically create/use the 'users' collection
// Model provides methods like: find, create, update, delete
const User = mongoose.model("User", userSchema);
// (model)User  ----> users(MDB)

// Export the model so it can be used in controllers
module.exports = User;

// Schema = structure + validation rules
// Model = applies schema + provides DB operations
// Controllers talk to model, not schema

