const { StatusCodes } = require('http-status-codes');

const getAllShows = (req, res, next) => {
  res.status(StatusCodes.OK).send('Shows list');
};

module.exports = { getAllShows };
