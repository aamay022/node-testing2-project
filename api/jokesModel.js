const db = require('../data/dbConfig')

function find() {
      return db('jokes')
  }

  module.exports = {
    find
  };