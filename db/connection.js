const mongoose = require('mongoose')
const URL = 'mongodb://localhost/DBC'

mongoose.connect(URL, {useMongoClient: true})

mongoose.Promise = Promise

module.exports = mongoose
