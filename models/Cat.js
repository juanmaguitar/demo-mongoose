const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schemaCat = new Schema({
  name: {
    type: String,
    required: true
  },
  race: {
    type: String
  }
})

module.exports = mongoose.model('Cat', schemaCat)