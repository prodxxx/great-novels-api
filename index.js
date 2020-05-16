const express = require('express')
const { getAllAuthors, getAuthorsByidentifier } = require('./controllers/authors')
const { getAllGenres, getGenresByidentifier } = require('./controllers/genres')
const { getAllNovels, getNovelsByIdentifier } = require('./controllers/novels')

const app = express()

app.get('/authors', getAllAuthors)

app.get('/authors/:identifier', getAuthorsByidentifier)

app.get('/genres', getAllGenres)

app.get('/genres/:identifier', getGenresByidentifier)

app.get('/novels', getAllNovels)

app.get('/novels/:identifier', getNovelsByIdentifier)

app.listen(1337, () => {
  console.log('Listening on port 1337...') // eslint-disable-line no-console
})
