const { StatusCodes } = require('http-status-codes');
const axiosRequest = require('../utils/axiosInstance');

const getAllActors = async (req, res, next) => {
  const response = await axiosRequest.get('person/popular');

  const data = response.data.results.map((actor) => ({
    id: actor.id,
    name: actor.name,
    imgPath: actor.profile_path,
  }));

  res.status(StatusCodes.OK).json({
    status: 'success',
    results: data.length,
    data,
  });
};

module.exports = { getAllActors };
