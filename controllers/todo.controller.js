const debug = require("debug")("myapp:todo-controller");
const Todo = require("../models/todo.model");
const { sendSuccess, sendError } = require("../helpers/apiResponse");

const createTodo = async (req, res) => {
  try {
    const todo = await Todo.create(req.body);
    sendSuccess(res, 201, "Todo created successfully", todo);
    // Previous code:
    // res.status(201).json({success: true,message: "Todo created successfully",data: todo,});
  } catch (err) {
    debug(err);
    sendError(res, 500, error.message, err);
    // Previous code:
    // res.status(500).json({success: false,message: "Failed to save todo",error: err.message,});
  }
};

const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    sendSuccess(res, 200, "Todos fetched successfully", todos);
  } catch (err) {
    debug(err);
    sendError(res, 500, error.message, err);
  }
};

const getTodo = async (req, res) => {
  try {
    const { id } = req.params;

    const todo = await Todo.findById(id);
    if (!todo) {
      sendError(res, 404, "Todo not found");
    } else {
      sendSuccess(res, 200, "Todo fetched successfully", todo);
    }
  } catch (err) {
    debug(err);
    sendError(res, 500, error.message, err);
  }
};

const updateTodo = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedTodo = await Todo.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!updatedTodo) {
      sendError(res, 404, "Todo not found");
    } else {
      sendSuccess(res, 200, "Todo updated successfully", updatedTodo);
    }
  } catch (err) {
    debug(err);
    sendError(res, 500, error.message, err);
  }
};

const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedTodo = await Todo.findByIdAndDelete(id);

    if (!deletedTodo) {
      sendError(res, 404, "Todo not found");
    } else {
      sendSuccess(res, 200, "Todo deleted successfully", deletedTodo);
    }
  } catch (err) {
    debug(err);
    sendError(res, 500, error.message, err);
  }
};

module.exports = { createTodo, getTodos, getTodo, updateTodo, deleteTodo };
