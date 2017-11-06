const Cat = require('../models/Cat')

function getCats( catName ) {
  return Cat.find()
}

module.exports = getCats