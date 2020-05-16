const models = require('../models')

const getAllNovels = async (request, response) => {
  try {
    const novels = await models.novels.findAll({
      include: [{ model: models.authors }, { model: models.genres }]
    })

    return novels ? response.send(novels) : response.status(500)
  } catch (error) {
    return response.status(500).send('Unable to retrieve novels, please try agin')
  }
}

const getNovelsByIdentifier = async (request, response) => {
  try {
    const { identifier } = request.params

    const foundNovel = await models.novels.findOne({
      where: {
        [models.Op.or]: [
          { id: identifier },
          { title: { [models.Op.like]: `%${identifier}%` } },
        ],
      },
      include: [{ model: models.authors }, { model: models.genres }]
    })

    return foundNovel
      ? response.send(foundNovel)
      : response.sendStatus(404)
  } catch (error) {
    return response.status(500).send('Unable to retrieve novels, please try agin')
  }
}

module.exports = { getAllNovels, getNovelsByIdentifier }
