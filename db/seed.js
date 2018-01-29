const User = require('./schema').User
const Cart = require('./schema').Cart
const SeedDataUser = require('./seedsUser.json')

User.remove({})
  .then(() => {
    return User.collection.insert(SeedDataUser)
  })
  .then((err) => {
    console.log(err)
  })
  .then(() => {
    process.exit()
  })

Cart.remove({})
  .then(() => {
    return User.collection.insert(SeedData)
  })
  .then((err) => {
    console.log(err)
  })
  .then(() => {
    process.exit()
  })
