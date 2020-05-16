
module.exports = {
  up: async (queryInterface) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    await queryInterface.bulkInsert('authors', [
      {
        nameFirst: 'Bram',
        nameLast: 'Stoker'
      }, {
        nameFirst: 'Oscar',
        nameLast: 'Wilde'
      }, {
        nameFirst: 'Alice',
        nameLast: 'Walker'
      }, {
        nameFirst: 'Leo',
        nameLast: 'Tolstoy'
      }, {
        nameFirst: 'Charles',
        nameLast: 'Dickens'
      }, {
        nameFirst: 'Arthur',
        nameLast: 'Miller'
      }, {
        nameFirst: 'Alexandre',
        nameLast: 'Dumas'
      }, {
        nameFirst: 'Arthur Conan',
        nameLast: 'Doyle'
      }, {
        nameFirst: 'Robert Louis',
        nameLast: 'Stevenson'
      }, {
        nameFirst: 'Fyodor',
        nameLast: 'Dostoyevsky'
      }, {
        nameFirst: 'Agatha',
        nameLast: 'Christie'
      }, {
        nameFirst: 'Ray',
        nameLast: 'Bradbury'
      }, {
        nameFirst: 'George',
        nameLast: 'Orwell'
      }, {
        nameFirst: 'H.G.',
        nameLast: 'Wells'
      }, {
        nameFirst: 'Chinua',
        nameLast: 'Achebe'
      }
    ])

    await queryInterface.bulkInsert('genres', [
      {
        name: 'Adventure'
      }, {
        name: 'African Literature'
      }, {
        name: 'Crime'
      }, {
        name: 'Drama'
      }, {
        name: 'Dystopia'
      }, {
        name: 'Fantasy'
      }, {
        name: 'Fiction'
      }, {
        name: 'French Literature'
      }, {
        name: 'Gothic'
      }, {
        name: 'Historical Fiction'
      }, {
        name: 'Horror'
      }, {
        name: 'Mystery'
      }, {
        name: 'Plays'
      }, {
        name: 'Russian Literature'
      }, {
        name: 'Science Fiction'
      }, {
        name: 'Thriller'
      }, {
        name: 'Time Travel'
      }, {
        name: 'War'
      }
    ])

    await queryInterface.bulkInsert('novels', [
      {
        authorId: 5,
        title: 'A Tale of Two Cities'
      }, {
        authorId: 13,
        title: 'Animal Farm'
      }, {
        authorId: 10,
        title: 'Crime and Punishment'
      }, {
        authorId: 1,
        title: 'Dracula'
      }, {
        title: 'Fahrenheit 451',
        authorId: 12
      }, {
        authorId: 11,
        title: 'Murder on the Orient Express'
      }, {
        authorId: 3,
        title: 'The Color Purple'
      }, {
        authorId: 6,
        title: 'The Crucible'
      }, {
        authorId: 8,
        title: 'The Hound of the Baskervilles'
      }, {
        authorId: 2,
        title: 'The Picture of Dorian Gray'
      }, {
        authorId: 9,
        title: 'The Strange Case of Dr. Jekyll and Mr. Hyde'
      }, {
        authorId: 7,
        title: 'The Three Musketeers'
      }, {
        authorId: 14,
        title: 'The Time Machine'
      }, {
        authorId: 15,
        title: 'Things Fall Apart'
      }, {
        authorId: 4,
        title: 'War and Peace'
      }
    ])

    return queryInterface.bulkInsert('novelGenres', [
      {
        novelID: 1,
        genreID: 7
      }, {
        novelID: 1,
        genreID: 10
      }, {
        novelID: 2,
        genreID: 7
      }, {
        novelID: 2,
        genreID: 15
      }, {
        novelID: 2,
        genreID: 5
      }, {
        novelID: 3,
        genreID: 7
      }, {
        novelID: 3,
        genreID: 14
      }, {
        novelID: 3,
        genreID: 12
      }, {
        novelID: 4,
        genreID: 7
      }, {
        novelID: 4,
        genreID: 11
      }, {
        novelID: 4,
        genreID: 6
      }, {
        novelID: 5,
        genreID: 7
      }, {
        novelID: 5,
        genreID: 15
      }, {
        novelID: 5,
        genreID: 5
      }, {
        novelID: 6,
        genreID: 7
      }, {
        novelID: 6,
        genreID: 12
      }, {
        novelID: 7,
        genreID: 7
      }, {
        novelID: 7,
        genreID: 11
      }, {
        novelID: 8,
        genreID: 7
      }, {
        novelID: 8,
        genreID: 4
      }, {
        novelID: 8,
        genreID: 10
      }, {
        novelID: 8,
        genreID: 13
      }, {
        novelID: 9,
        genreID: 7
      }, {
        novelID: 9,
        genreID: 3
      }, {
        novelID: 9,
        genreID: 12
      }, {
        novelID: 9,
        genreID: 16
      }, {
        novelID: 10,
        genreID: 7
      }, {
        novelID: 10,
        genreID: 11
      }, {
        novelID: 10,
        genreID: 9
      }, {
        novelID: 10,
        genreID: 6
      }, {
        novelID: 11,
        genreID: 7
      }, {
        novelID: 11,
        genreID: 12
      }, {
        novelID: 11,
        genreID: 15
      }, {
        novelID: 11,
        genreID: 11
      }, {
        novelID: 12,
        genreID: 7
      }, {
        novelID: 12,
        genreID: 8
      }, {
        novelID: 12,
        genreID: 10
      }, {
        novelID: 12,
        genreID: 1
      }, {
        novelID: 13,
        genreID: 7
      }, {
        novelID: 13,
        genreID: 1
      }, {
        novelID: 13,
        genreID: 17
      }, {
        novelID: 14,
        genreID: 7
      }, {
        novelID: 14,
        genreID: 2
      }, {
        novelID: 14,
        genreID: 10
      }, {
        novelID: 15,
        genreID: 7
      }, {
        novelID: 15,
        genreID: 10
      }, {
        novelID: 15,
        genreID: 18
      }, {
        novelID: 15,
        genreID: 14
      }
    ])
  },

  down: (queryInterface) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
    return queryInterface.bulkDelete('authors'),
      queryInterface.bulkDelete('genres'),
      queryInterface.bulkDelete('novels'),
      queryInterface.bulkDelete('novelGenres')
  },

}
