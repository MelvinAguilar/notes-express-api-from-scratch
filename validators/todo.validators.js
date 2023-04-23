const { body, param } = require("express-validator");

const createTodoValidationRules = [
  body("title")
    .notEmpty()
    .withMessage("Title cannot be empty")
    .isString()
    .withMessage("Title must be a string"),
  body("description")
    .notEmpty()
    .withMessage("Description cannot be empty")
    .isString()
    .withMessage("Description must be a string"),
  body("completed")
    .optional()
    .isBoolean()
    .withMessage("Completed must be a boolean value"),
];

const idValidation = [param("id").isMongoId().withMessage("Invalid todo ID")];

module.exports = {
  createTodoValidationRules,
  idValidation,
};
