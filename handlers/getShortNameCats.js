const Cat = require('../models/Cat')

function getShortNameCats( length ) {
  return Cat.findShortNames(length)
}

module.exports = getShortNameCats