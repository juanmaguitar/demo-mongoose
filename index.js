const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test', { useMongoClient: true });
mongoose.Promise = global.Promise;

const Cat = require('./models/Cat')

const kitty = new Cat({ name: 'Lynda' });

kitty.save()
  .then( () => console.log('meow') )
  .catch( err => console.log(err) )
