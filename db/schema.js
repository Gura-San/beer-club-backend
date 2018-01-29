const mongoose = require('./connection')

const CartSchema = new mongoose.Schema({
  basic: { bName: String, bQt: Number, bPrice: Number, bPic: String },
  advanced: { bName: String, bQt: Number, bPrice: Number, bPic: String },
  zapoy: { bName: String, bQt: Number, bPrice: Number, bPic: String }
})

const UserSchema = new mongoose.Schema({
  name: { first_name: String, last_name: String },
  address: { street: String, city: String, state: String, zip: Number },
  phone: Number,
  creditCard: Number,
  orderHistory: {}
})
const User = mongoose.model('User', UserSchema)
const Cart = mongoose.model('User', CartSchema)

module.exports = { User, Cart }
