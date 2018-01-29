const Router = require('express').Router()
const User = require('../db/schema').User
const Cart = require('../db/schema').Cart

// ================== API Variables ==================
require('dotenv').config()
// ===================================================

// main page route
Router.get('/', (req, res) => {
  res.send('You tried to get something, soon I will get it for you ;)')
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
