const { StatusCodes } = require('http-status-codes');

const getAllActors = (req, res, next) => {
  res.status(StatusCodes.OK).send('Actors list');
};

module.exports = { getAllActors };
