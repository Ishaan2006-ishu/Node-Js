// Import the express library to create a router
const express = require("express");

// Create a Router object (mini express app for routes)
// This router will handle all user-related routes
const router = express.Router();

// Import controller functions using object destructuring
// These functions contain the actual logic for each route
const {
  getUsers,        // function to get all users
       // function to get a single user by id
  createUser,      // function to create a new user
       // function to update an existing user
  deleteUser       // function to delete a user
} = require("../controllers/userControllers");

// Handle GET request for "/users"
// When GET /users is called, execute getUsers controller
router.get("/", getUsers);

// Handle GET request for "/users/:id"
// :id is a dynamic route parameter (e.g., /users/5)
// Calls getUserById controller
// router.get("/:id", getUserById);

// Handle POST request for "/users"
// Used to create a new user
// Calls createUser controller
router.post("/", createUser);

// Handle PATCH request for "/users/:id"
// Used to partially update a user (e.g., name only)
// Calls updateUser controller
// router.patch("/:id", updateUser);

// Handle DELETE request for "/users/:id"
// Used to delete a user by id
// Calls deleteUser controller
router.delete("/:id", deleteUser);

// Export the router so it can be used in app.js
// app.js will mount this router at "/users"
module.exports = router;
