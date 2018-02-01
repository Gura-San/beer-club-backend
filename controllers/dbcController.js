const Router = require('express').Router()
const User = require('../db/schema').User
const Cart = require('../db/schema').Cart
const Beer = require('../db/schema').Beer

const BreweryDb = require('brewerydb-node')

// ================== API Variables ==================
require('dotenv').config()
var brewdb = new BreweryDb(process.env.MASHAPEKEY)
// ===================================================

// main search get request that queries the API and cleans the response for FE

Router.get('/search/:name', (req, res) => {
  console.log(`got a request from FE = ${req.params.name}`)
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
    .then(data => {
      res.send(data)
    })
    })
  })
})

// request for the shopping cart

Router.get('/cart', (req, res) => {
  Cart.find({}).then(data => {
    res.send(data)
  }).catch(err => { console.log(err) })
})

Router.post('/buy/:id', (req, res) => {
  Beer.findOne({id: req.params.id}).then(data => {
    console.log(`found`)
    Cart.collection.insert(data)
  }).then(_ => { res.sendStatus(200) })
})

Router.put('/', (req, res) => {
  res.send('You tried to put something, soon I will put it for you ;)')
})

Router.delete('/cart/remove/:id', (req, res) => {
  Cart.findOneAndRemove({id: req.params.id}).then(_ => {
    res.sendStatus(200)
    console.log(`${req.params.id} deleted`)
  })
})

module.exports = Router
