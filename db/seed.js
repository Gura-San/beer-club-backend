const User = require('./schema').User
const Cart = require('./schema').Cart
const SeedDataUser = require('./seedsUser.json')
const SeedDataCart = require('./seedsCart.json')

User.remove({})
  .then(() => {
    return User.collection.insert(SeedDataUser)
  })
  .then((err) => {
    console.log(err)
  })
  .then(() => {
    console.log('seeded User')
  })
  .then(() => {
    Cart.remove({})
  .then(() => {
    return Cart.collection.insert(SeedDataCart)
  })
  .then((err) => {
    console.log(err)
  })
  .then(() => {
    console.log('seeded Cart')
  })
  .then(() => {
    process.exit()
  })
  })
