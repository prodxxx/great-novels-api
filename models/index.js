const Sequelize = require('sequelize')
const allConfigs = require('../configs/sequelize')
const authorsModel = require('./authors')
const genresModel = require('./genres')
const novelsModel = require('./novels')
const novelGenresModel = require('./novelGenres')

const environment = process.env.NODE_ENV || 'development'
const config = allConfigs[environment]

const connection = new Sequelize(config.database, config.username, config.password, {
  host: config.host, dialect: config.dialect,
})

const authors = authorsModel(connection, Sequelize)
const novels = novelsModel(connection, Sequelize, authors)
const genres = genresModel(connection, Sequelize)
const novelGenres = novelGenresModel(connection, Sequelize, genres, novels)

authors.hasMany(novels)
novels.belongsTo(authors)

novels.belongsToMany(genres, { through: novelGenres })
genres.belongsToMany(novels, { through: novelGenres })

module.exports = {
  authors,
  genres,
  novels,
  novelGenres,
  Op: Sequelize.Op
}
