const express = require("express");
const router = express.Router();

// Require all route modules
var todoRouter = require("./todo.router");

// Define all API routes
router.use("/todo", todoRouter);

module.exports = router;
