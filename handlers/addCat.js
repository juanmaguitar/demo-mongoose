const Cat = require('../models/Cat')

function addCat( catName ) {
  const kitty = new Cat({ name: catName });
  return kitty.save()
}

module.exports = addCat