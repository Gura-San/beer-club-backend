const Router = require('express').Router()
const User = require('../db/schema').User
const Cart = require('../db/schema').Cart
const Beer = require('../db/schema').Beer

const BreweryDb = require('brewerydb-node')

// ================== API Variables ==================
require('dotenv').config()
var brewdb = new BreweryDb(process.env.MASHAPEKEY)
// ===================================================

// main page route

Router.get('/search/:name', (req, res) => {
  brewdb.search.beers({ p: 1, q: req.params.name }, (error, data) => {
    const cleanedData = data.map(beer => ({
      id: beer.id,
      name: beer.name,
      description: beer.description,
      abv: beer.abv,
      labels: beer.labels,
      style: {
        name: beer.style.name,
        shortName: beer.style.shortName
      }
    })
  )

    Beer.remove({}).then(() => {
      Beer.collection.insert(cleanedData)
    }).then(_ => {
      Beer.find({})
    .then((data) => {
      res.send(data)
      console.log(data)
    })
    })
  })
})

Router.post('/', (req, res) => {
  res.send('You tried to post something, soon I will post it for you ;)')
})

Router.put('/', (req, res) => {
  res.send('You tried to put something, soon I will put it for you ;)')
})

Router.delete('/', (req, res) => {
  res.send('You tried to delete something, soon I will delete it for you ;)')
})

module.exports = Router
