const Cat = require('../models/Cat')

function getCatById( id ) {
  return Cat.findById(id)
}

module.exports = getCatById