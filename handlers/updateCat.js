const Cat = require('../models/Cat')

function updateCat( id, name ) {
  return Cat.findByIdAndUpdate(id, { name })
}

module.exports = updateCat