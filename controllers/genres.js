const models = require('../models')

const getAllGenres = async (request, response) => {
  try {
    const genres = await models.genres.findAll({ attributes: ['id', 'name', 'createdAt', 'updatedAt'] })

    return genres ? response.send(genres) : response.status(500)
  } catch (error) {
    return response.status(500).send('Unable to retrieve genres, please try agin')
  }
}

const getGenresByidentifier = async (request, response) => {
  try {
    const { identifier } = request.params

    const foundGenre = await models.genres.findOne({
      where: {
        [models.Op.or]: [
          { id: identifier },
          { name: { [models.Op.like]: `%${identifier}%` } },
        ],
      },
      include: [{
        model: models.novels,
        include: [{ model: models.authors }]
      }]
    })

    return foundGenre
      ? response.send(foundGenre)
      : response.sendStatus(404)
  } catch (error) {
    return response.status(500).send('Unable to retrieve genres, please try agin')
  }
}

module.exports = { getAllGenres, getGenresByidentifier }
