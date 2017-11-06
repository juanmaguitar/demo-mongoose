const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test', { useMongoClient: true });
mongoose.Promise = global.Promise;

const addCat = require('./handlers/addCat')
const getCats = require('./handlers/getCats')
const getCatById = require('./handlers/getCatById')
const updateCat = require('./handlers/updateCat')
const removeCat = require('./handlers/removeCat')

const getShortNameCats = require('./handlers/getShortNameCats')

getShortNameCats(6)
  .then( result => console.log(result) )
  .catch( err => console.log(err) )


// addCat('Antonio')
//   .then( () => getCats() )
//   .then( result => console.log(result) )
//   .catch( err => console.log(err) )

// getCats()
//   .then( result => console.log(result) )
//   .catch( err => console.log(err) )

// getCatById('5a0041bf4053da811dc4926a')
//   .then( result => console.log(result) )
//   .catch( err => console.log(err) )

// updateCat('5a0041a78203e380e682c4dd', 'Stevie')
//   .then( result => console.log(result) )
//   .catch( err => console.log(err) )
