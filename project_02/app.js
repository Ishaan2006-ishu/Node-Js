const express = require("express"); // import express framework
const app = express(); // create express application

app.use(express.json()); // parse JSON request bodies
app.use(express.urlencoded({ extended: true })); // parse form data

const userRoutes = require("./routes/userRoutes"); // import user routes

app.use("/users", userRoutes); // mount user routes at /users
// /users  ─────► userRoutes
// | Router Code             | Actual URL   |
// | ----------------------- | ------------ |
// | `router.get("/")`       | `/users`     |
// | `router.get("/:id")`    | `/users/:id` |
// | `router.post("/")`      | `/users`     |
// | `router.delete("/:id")` | `/users/:id` |


module.exports = app; // export app for server startup
