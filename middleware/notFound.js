const { StatusCodes } = require('http-status-codes');

const notFound = (req, res) => {
  res.status(StatusCodes.NOT_FOUND).json({
    status: 'fail',
    statusCode: StatusCodes.NOT_FOUND,
    message: 'This page could not be found.',
  });
};

module.exports = notFound;
