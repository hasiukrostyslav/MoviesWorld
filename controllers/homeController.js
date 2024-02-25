const { StatusCodes } = require('http-status-codes');

const getTrendingList = (req, res, next) => {
  res.status(StatusCodes.OK).send('Trending list');
};

module.exports = { getTrendingList };
