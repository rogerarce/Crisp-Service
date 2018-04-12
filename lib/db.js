const mongoose = require('mongoose')
mongoose.Promise = global.Promise
let isConnected

module.exports = connectToDatabase = () => {
  return mongoose.connect(process.env.DB)
    .then(db => db)
    .catch(err => console.error('Error on db', err))
}
