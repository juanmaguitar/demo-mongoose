const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schemaCat = new Schema({
  name: String
})

module.exports = mongoose.model('Cat', schemaCat)