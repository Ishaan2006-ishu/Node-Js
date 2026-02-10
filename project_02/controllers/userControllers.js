// // Import users data (acts as a mock database)
// const users = require("../data/users");

// // -------------------- CONTROLLER FUNCTIONS --------------------

// // GET /users
// // Returns all users
// const getUsers = (req, res) => {
//   res.json(users);
// };

// // GET /users/:id
// // Returns a single user by id
// const getUserById = (req, res) => {
//   const id = Number(req.params.id); // convert id from string to number

//   const user = users.find(u => u.id === id); // find matching user

//   if (!user) {
//     return res.status(404).json({ message: "user not found" });
//   }

//   res.json(user);
// };

// // POST /users
// // Creates a new user
// const createUser = (req, res) => {
//   const { id, name } = req.body; // extract data from request body

//   // Validate input
//   if (!id || !name) {
//     return res.status(400).json({ message: "id and name are required" });
//   }

//   // Add new user to data source
//   users.push({ id: Number(id), name });

//   res.status(201).json({
//     message: "user created",
//     user: { id: Number(id), name }
//   });
// };

// // PATCH /users/:id
// // Partially updates an existing user
// const updateUser = (req, res) => {
//   const id = Number(req.params.id);
//   const { name } = req.body;

//   const user = users.find(u => u.id === id);

//   if (!user) {
//     return res.status(404).json({ message: "user not found" });
//   }

//   // Update only provided fields
//   if (name) {
//     user.name = name;
//   }

//   res.json({
//     message: "user updated",
//     user
//   });
// };

// // DELETE /users/:id
// // Deletes a user by id
// const deleteUser = (req, res) => {
//   const id = Number(req.params.id);

//   const index = users.findIndex(u => u.id === id);

//   if (index === -1) {
//     return res.status(404).json({ message: "user not found" });
//   }

//   const deletedUser = users[index];
//   users.splice(index, 1); // remove user from array

//   res.json({
//     message: "user deleted",
//     user: deletedUser
//   });
// };

// // -------------------- EXPORT CONTROLLERS --------------------

// module.exports = {
//   getUsers,
//   getUserById,
//   createUser,
//   updateUser,
//   deleteUser
// };

const User = require("../models/user.js");

// GET all users
const getUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

// CREATE user
const createUser = async (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ message: "name is required" });
  }

  const user = await User.create({ name });

  res.status(201).json({
    message: "user created",
    user
  });
};

// DELETE user
const deleteUser = async (req, res) => {
  const { id } = req.params;

  const user = await User.findByIdAndDelete(id);

  if (!user) {
    return res.status(404).json({ message: "user not found" });
  }

  res.json({ message: "user deleted", user });
};

module.exports = {
  getUsers,
  createUser,
  deleteUser
};

