const sendSuccess = (res, statusCode, message, data) => {
  return res.status(statusCode).json({
    status: "sucess",
    code: statusCode,
    message,
    data,
  });
};

const sendError = (res, statusCode, message, error) => {
  return res.status(statusCode).json({
    status: "error",
    code: statusCode,
    message,
    error,
  });
};

module.exports = {
  sendSuccess,
  sendError,
};
