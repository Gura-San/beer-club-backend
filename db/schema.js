const mongoose = require('./connection')

const BeerSchema = new mongoose.Schema({
  id: String,
  name: String,
  description: String,
  abv: String,
  labels: {
    large: String,
    medium: String,
    icon: String
  },
  style: {
    name: String,
    shortName: String
  }
})

const CartSchema = new mongoose.Schema({
  id: String,
  name: String,
  description: String,
  abv: String,
  labels: {
    large: String,
    medium: String,
    icon: String
  },
  style: {
    name: String,
    shortName: String
  }
})

const UserSchema = new mongoose.Schema({
  name: { first_name: String, last_name: String },
  address: { street: String, city: String, state: String, zip: Number },
  phone: Number,
  creditCard: Number,
  orderHistory: []
})
const User = mongoose.model('User', UserSchema)
const Cart = mongoose.model('Cart', CartSchema)
const Beer = mongoose.model('Beer', BeerSchema)

module.exports = { User, Cart, Beer }
