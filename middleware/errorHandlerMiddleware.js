const { StatusCodes } = require('http-status-codes');

const errorHandlerMiddleware = (err, req, res, next) => {
  const customError = {
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    status: err.status || 'error',
    message: err.message || 'Something went wrong, try again later.',
  };

  return res.status(customError.statusCode).json(customError);
};

module.exports = errorHandlerMiddleware;
