const Router = require('express').Router()
const User = require('../db/schema').User
const Cart = require('../db/schema').Cart

const BreweryDb = require('brewerydb-node')

// ================== API Variables ==================
require('dotenv').config()
var brewdb = new BreweryDb(process.env.MASHAPEKEY)
// ===================================================

// main page route
Router.get('/search/:name', (req, res) => {
  console.log(req.params.name)
  brewdb.search.beers({ p: 1, q: req.params.name }, (error, data) => {
    res.send(data)
    console.log(error)
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
