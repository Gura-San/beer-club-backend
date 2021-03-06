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
  console.log(`got a request for = ${req.params.name}`)
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
      },
      price: 7,
      qnt: 1
    })
  )

    Beer.remove({}).then(() => {
      console.log('cleaned previous collection')
      Beer.collection.insert(cleanedData)
    }).then(_ => {
      Beer.find({}).then((data) => {
        console.log('filled up with new search data')
        res.send(data)
      }).catch(err => { console.log(err) })
    })
  })
})

// place item into the shopping cart
Router.post('/buy/:id', (req, res) => {
  Beer.findOne({id: req.params.id}).then(data => {
    console.log(`placed new item in cart`)
    Cart.collection.insert(data)
  })
  .then(_ => { res.sendStatus(200) })
})

// request for the shopping cart
Router.get('/cart', (req, res) => {
  Cart.find({}).then((data) => {
    res.send(data)
  })
})

Router.put('/cart/update/:id', (req, res) => {
  console.log(req.body)
  Cart.findOneAndUpdate({id: req.params.id}, {qnt: req.body.qnt})
  .then(_ => res.sendStatus(200))
})

// Remove cart item
Router.delete('/cart/remove/:id', (req, res) => {
  console.log('remove on item from cart')
  Cart.findOneAndRemove({id: req.params.id}).then(_ => {
    res.sendStatus(200)
    console.log(`${req.params.id} deleted`)
  })
})

// Move to history and remove cart colletion
Router.post('/cart/pay', (req, res) => {
  Cart.find({}).then(data => {
    User.collection.insertOne({orderHistory: data})
  }).then(() => {
    Cart.collection.remove()
  }).then(_ => { res.sendStatus(200) })
})

module.exports = Router
