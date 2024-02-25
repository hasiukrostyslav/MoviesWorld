const { StatusCodes } = require('http-status-codes');

const getAllMovies = (req, res, next) => {
  res.status(StatusCodes.OK).send('Movies list');
};

module.exports = { getAllMovies };
