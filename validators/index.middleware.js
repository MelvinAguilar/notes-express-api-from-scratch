const { validationResult } = require("express-validator");
const { sendError } = require("../helpers/apiResponse");

module.exports = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const errorResponse = {
      status: 400,
      message: "Validation errors",
      errors: errors.array().map((error) => ({
        field: error.param,
        message: error.msg,
      })),
    };
    return sendError(res, 400, "Validation errors", errorResponse);
  }

  next();
};
