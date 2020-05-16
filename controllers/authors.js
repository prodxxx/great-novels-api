const models = require('../models')

const getAllAuthors = async (request, response) => {
  try {
    const authors = await models.authors.findAll({
      attributes: ['id', 'nameFirst', 'nameLast', 'createdAt', 'updatedAt']
    })

    return authors ? response.send(authors) : response.status(500)
  } catch (error) {
    return response.status(500).send('Unable to retrieve authors, please try agin')
  }
}

const getAuthorsByidentifier = async (request, response) => {
  try {
    const { identifier } = request.params

    const foundAuthor = await models.authors.findOne({
      attributes: ['id', 'nameFirst', 'nameLast', 'createdAt', 'updatedAt'],
      where: {
        [models.Op.or]: [
          { id: identifier },
          { nameFirst: { [models.Op.like]: `%${identifier}%` } },
          { nameLast: { [models.Op.like]: `%${identifier}%` } },
        ],
      },
      include: [{
        model: models.novels,
        attributes: ['id', 'title', 'authorId', 'createdAt', 'updatedAt'],
        include: [{
          model: models.genres,
          attributes: ['id', 'name', 'createdAt', 'updatedAt']
        }]
      }]
    })

    return foundAuthor
      ? response.send(foundAuthor)
      : response.sendStatus(404)
  } catch (error) {
    return response.status(500).send('Unable to retrieve author, please try agin')
  }
}

module.exports = { getAllAuthors, getAuthorsByidentifier }
