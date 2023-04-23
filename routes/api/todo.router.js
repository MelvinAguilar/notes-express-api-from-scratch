var express = require("express");
var router = express.Router();

const todoController = require("../../controllers/todo.controller");

const todoValidators = require("../../validators/todo.validators");
const runValidations = require("../../validators/index.middleware");

router.post(
  "/",
  todoValidators.createTodoValidationRules,
  runValidations,
  todoController.createTodo
);

router.get("/", todoController.getTodos);

router.get(
  "/:id",
  todoValidators.idValidation,
  runValidations,
  todoController.getTodo
);

router.patch(
  "/:id",
  todoValidators.idValidation,
  todoValidators.createTodoValidationRules,
  runValidations,
  todoController.updateTodo
);

router.delete(
  "/:id",
  todoValidators.idValidation,
  runValidations,
  todoController.deleteTodo
);

// router.get("/", (req, res, next) => {
//   res.send("This is the API route!");
// });

module.exports = router;
