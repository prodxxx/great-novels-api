const Sequelize = require('sequelize')
const authorsModel = require('./authors')
const genresModel = require('./genres')
const novelsModel = require('./novels')
const novelGenresModel = require('./novelGenres')

const connection = new Sequelize('novels', 'novels', 'Gr34tN0v3l$', {
  host: 'localhost', dialect: 'mysql',
})

const authors = authorsModel(connection, Sequelize)
const novels = novelsModel(connection, Sequelize, authors)
const genres = genresModel(connection, Sequelize)
const novelGenres = novelGenresModel(connection, Sequelize, genres, novels)

authors.hasMany(novels)
novels.belongsTo(authors)

novels.belongsToMany(genres, { through: novelGenres })
genres.belongsToMany(novels, { through: novelGenres })

module.exports = { authors, genres, novels, novelGenres }
