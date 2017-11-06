const Cat = require('../models/Cat')

function removeCat( id ) {
  return Cat.findByIdAndRemove(id)
}

module.exports = removeCat