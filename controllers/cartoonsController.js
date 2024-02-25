const { StatusCodes } = require('http-status-codes');

const getAllCartoons = (req, res, next) => {
  res.status(StatusCodes.OK).send('Cartoons list');
};

module.exports = { getAllCartoons };
