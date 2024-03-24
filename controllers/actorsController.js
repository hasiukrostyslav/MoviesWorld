const { StatusCodes } = require('http-status-codes');
const axiosRequest = require('../utils/axiosInstance');
const { getMaxPage } = require('../utils/helpers');

const getAllActors = async (req, res, next) => {
  const path = 'person/popular';
  const { page } = req.query;

  const maxPage = await getMaxPage(path);

  if (page > maxPage)
    throw new Error(`Invalid page: Pages start at 1 and max at ${maxPage}.`);

  const response = await axiosRequest.get(path, {
    params: { page },
  });

  const data = response.data.results.map((actor) => ({
    id: actor.id,
    name: actor.name,
    imgPath: actor.profile_path,
  }));

  res.status(StatusCodes.OK).json({
    status: 'success',
    page: response.data.page,
    totalPages: maxPage,
    results: data.length,
    data,
  });
};

module.exports = { getAllActors };
